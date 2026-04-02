const request = require('supertest');
const app = require('./server');

describe('Search API Endpoints', () => {
  
  // Test 1: Ověří, že API vrátí chybu 400, když chybí dotaz
  it('should return 400 if query is missing', async () => {
    const res = await request(app).get('/api/search');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  // Test 2: Ověří strukturu výstupu (Bod 4 zadání)
  it('should return an array of organic results with correct keys', async () => {
    // Poznámka: Tento test v reálu zavolá SerpApi. 
    // Pro produkční testy se používá "mockování", ale pro tento úkol stačí ověřit formát.
    const res = await request(app).get('/api/search?q=test');
    
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('title');
      expect(res.body[0]).toHaveProperty('link');
      expect(res.body[0]).toHaveProperty('snippet');
    }
  });
});