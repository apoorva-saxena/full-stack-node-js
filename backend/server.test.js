const request = require('supertest');
const app = require('./server');

describe('API Endpoints', () => {
  it('GET /commitments should return a list of commitments', async () => {
    const res = await request(app).get('/commitments');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /investors should return a list of investors', async () => {
    const res = await request(app).get('/investors');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /investors with pagination should return correct page and limit', async () => {
    const res = await request(app).get('/investors?page=2&limit=5');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('page', 2);
    expect(res.body).toHaveProperty('limit', 5);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeLessThanOrEqual(5);
  });

  it('GET non-existent route should return 404', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.statusCode).toBe(404);
  });

  it('GET /commitments with asset class filter should return filtered results', async () => {
    const res = await request(app).get('/commitments?assetClass=pe');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /commitments/asset-class-sum should return asset class totals', async () => {
    const res = await request(app).get('/commitments/asset-class-sum');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('asset_class');
      expect(res.body[0]).toHaveProperty('total_amount');
    }
  });

  it('GET / should return API status', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('API is running');
  });

  it('GET /investors with high limit should still work', async () => {
    const res = await request(app).get('/investors?limit=1000');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body).toHaveProperty('limit', 1000);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /commitments with pagination should have correct structure', async () => {
    const res = await request(app).get('/commitments?page=1&limit=10');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('page');
    expect(res.body).toHaveProperty('limit');
    expect(res.body).toHaveProperty('data');
    expect(typeof res.body.page).toBe('number');
    expect(typeof res.body.limit).toBe('number');
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
