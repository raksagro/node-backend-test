const request = require("supertest")
const app = require("../../src/app");

describe("Delete user", () => {
    it("should delete a user if correct id is provided", async () => {      
        const res = await request(app).delete('/user1');
        expect(res.status).toBe(200);    
    });

    it("should return 400 if incorrect id is provided", async () => {   
        const res = await request(app).delete('/user9999')
        expect(res.status).toBe(400);        
    });

});