const request = require("supertest")
const app = require("../../src/app")
const truncate = require("../utils/truncate")

describe("Create user", () => {    
    beforeAll(async () => {
        await truncate();
    });
    
    it("should create a user successfully", async () => {        
        const res = await request(app)
                    .post("/user")
                    .send({
                        id: 1,
                        name: 'Wonder Woman',
                        dob: '2004-07-30',
                        address: 'Justice League Tower',
                        description: 'Princess Diana of Themyscira',
                        createdAt: new Date().toISOString().substring(0,19).replace('T',' '),
                        updatedAt:new Date().toISOString().substring(0,19).replace('T',' ')
                    })
        expect(res.status).toBe(200);             
    });

    it("should return 500 if any data is incorrect", async () => {        
        const res = await request(app)
                    .post("/user")
                    .send({
                        id: 2,
                        name: 'Hawkwoman',
                        dob: '',
                        address: 'Justice League Tower',
                        description: 'Thanagariana',
                        createdAt: new Date().toISOString().substring(0,19).replace('T',' '),
                        updatedAt:new Date().toISOString().substring(0,19).replace('T',' ')
                    })
                    
        expect(res.status).toBe(500);             
    });

    it("should return 500 if any string is too long", async () => {        
        const res = await request(app)
                    .post("/user")
                    .send({
                        id: 3,
                        name: 'Justice League, also known as the Justice League of America',
                        dob: '',
                        address: 'Justice League Tower',
                        description: 'DC Comics Super Heroes',
                        createdAt: new Date().toISOString().substring(0,19).replace('T',' '),
                        updatedAt:new Date().toISOString().substring(0,19).replace('T',' ')
                    })
                    
        expect(res.status).toBe(500);             
    });
});