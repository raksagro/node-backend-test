import User from "../src/models/user";
import { UpdateUser } from "../src/services/updateUser";
import { SingUpService } from "../src/services/signUp"


describe('Update User Service', () => {
  test('Should return 400 if no id is provided ', async () => {
    const sut = new UpdateUser()

    const userData = {
      body: {
        name: 'any_name',
        dob: 'any_dob',                    
        address: 'any_address',                
        description: 'any_description', 
      }           
    }

    const response = await sut.handle(userData)

    expect(response.statusCode).toBe(400)
  })
  test('Should return 200 valid data is provided',async () => {
    const sut = new UpdateUser()
    const singUpService = new SingUpService()
    

    const userData = {
      body: {
        name: 'any_name',
        dob: 'any_dob',                    
        address: 'any_address',                
        description: 'any_description', 
      }           
    }
    const  httpResponse = await singUpService.handle(userData)

    const userUpdate = {
      body: {
        id: httpResponse.body.id,
        name: 'updated_name',
        dob: new Date(),                    
        address: 'updated_address',                
        description: 'updated_description'
      }
    }
    const response = await sut.handle(userUpdate)

    expect(response.statusCode).toBe(200)
  })
  
})