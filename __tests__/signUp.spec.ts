import { SingUpService } from "../src/services/signUp";

describe('SignUp Service', () => {
  test('Should return 400 if no name is provided ', async () => {
    const sut = new SingUpService()

    const userData = {
      body: {
        dob: 'any_dob',                    
        address: 'any_address',                
        description: 'any_description', 
      }           
    }

    const response = await sut.handle(userData)

    expect(response.statusCode).toBe(400)
  })
  test('Should return 200 valid data is provided',async () => {
    const sut = new SingUpService()

    const userData = {
      body: {
        name: 'any_name',
        dob: 'any_dob',                    
        address: 'any_address',                
        description: 'any_description', 
      }           
    }

    const response = await sut.handle(userData)

    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBeTruthy()
  })
})