import axios from 'axios';

describe('REST API Login', () => {

  // 200 response check for 'https://api.restful-api.dev/objects' 
    it('should return 200 for GET request to /objects', async () => {
        const response = await axios.get('https://api.restful-api.dev/objects');
        expect(response.status).toBe(200);
        console.log('Response data:', response.data);
        expect(response.data[0].id).toBeDefined();
    });
    
});
