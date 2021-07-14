const request = require("supertest")
const app = require("../../src/app")

describe("Update user", () => {
    it("should update a user successfully", async () => {      
        const res = await request(app)
        .put("/user1")
        .send({
            name: 'Princess Diana',
            dob: '2004-07-30',
            address: 'Justice League Tower',
            description: 'Wonder Woman',
        })

        //console.log(res.user);
        
        expect(res.status).toBe(200);    
        expect(res.body.user.name).toBe("Princess Diana");
        expect(res.body.user.dob).toBe("2004-07-30");
        expect(res.body.user.address).toBe("Justice League Tower");
        expect(res.body.user.description).toBe("Wonder Woman");
    });

    it("should return 400 if incorrect id is provided", async () => {      
        const res = await request(app)
        .put("/user9999")
        .send({
            name: 'Joker',
            dob: '2004-07-30',
            address: 'Gotham',
            description: 'Enemy of Batman',
        })

        expect(res.status).toBe(400);    
    });

    it("should return 400 if any data is incorrect", async () => {      
        const res = await request(app)
        .put("/user9999")
        .send({
            name: '',
            dob: '2004-07-30',
            address: 'Gotham',
            description: 'Bruce Wayne',
        })

        expect(res.status).toBe(400);    
    });
});