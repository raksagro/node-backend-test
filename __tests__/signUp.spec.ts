import { SingUpService } from "../src/services/signUp";

describe('SignUp Service', () => {
  test('Should return 400 if no name is provided ', () => {
    const sut = new SingUpService()

    const userData = {
      body: {
        dob: "any_dob",                    
        address: "any_address",                
        description: "any_description", 
      }           
    }

    const response = sut.handle(userData)

    expect(response.statusCode).toBe(400)
  })
});