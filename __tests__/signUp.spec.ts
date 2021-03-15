import User from "../src/models/user"
import { SingUpService } from "../src/services/signUp"


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
  test('Should return 500 if sequelize throws',async () => {
    const sut = new SingUpService()
    
    jest.spyOn(User, 'create').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))


    const userData = {
      body: {
        name: 'any_name',
        dob: 'any_dob',                    
        address: 'any_address',                
        description: 'any_description', 
      }           
    }

    const response = await sut.handle(userData)

    expect(response.statusCode).toBe(500)
  })
})