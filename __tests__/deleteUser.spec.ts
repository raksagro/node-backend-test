import User from "../src/models/user";
import { DeleteUser } from "../src/services/deleteUser";
import { SingUpService } from "../src/services/signUp"


const makeUserData = (): any => ({
  body: {
    name: 'any_name',
    dob: 'any_dob',                    
    address: 'any_address',                
    description: 'any_description', 
  }           
})

describe('Delete User Service', () => {
  test('Should return 400 if no id is provided ', async () => {
    const sut = new DeleteUser()

    const response = await sut.handle(makeUserData())

    expect(response.statusCode).toBe(400)
  })
  test('Should return 200 valid data is provided',async () => {
    const sut = new DeleteUser()
    const singUpService = new SingUpService()

    const  httpResponse = await singUpService.handle(makeUserData())

    const httpRequest = {
      body: {
        id: httpResponse.body.id
      }
    }

    const response = await sut.handle(httpRequest)

    expect(response.statusCode).toBe(200)
  })
  test('Should return 500 if sequelize return throws',async () => {
    const sut = new DeleteUser()
    const singUpService = new SingUpService()

    const  httpResponse = await singUpService.handle(makeUserData())

    const httpRequest = {
      body: {
        id: httpResponse.body.id
      }
    }
    jest.spyOn(User, 'destroy').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const response = await sut.handle(httpRequest)

    expect(response.statusCode).toBe(500)
  })
})