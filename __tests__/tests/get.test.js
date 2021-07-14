const request = require("supertest")
const app = require("../../src/app")

describe("Get user", () => {
    it("should get a list of users", async () => {      
        const res = await request(app).get('/users');
        expect(res.status).toBe(200);    
    });

    it("should get a user if correct id is provided", async () => {      
        const res = await request(app).get('/user1');
        expect(res.status).toBe(200);    
        expect(res.body.user.name).toContain("Princess Diana");
    });

    it("should return 400 if incorrect id is provided", async () => {   
        const res = await request(app).get('/user9999');
        expect(res.status).toBe(400);        
    });

});