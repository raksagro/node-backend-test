import User from "../src/models/user"
import { GetUser } from "../src/services/getUser"
import { SingUpService } from "../src/services/signUp"


const makeUserData = (): any => ({
  body: {
    name: 'any_name',
    dob: 'any_dob',                    
    address: 'any_address',                
    description: 'any_description', 
  }           
})

describe('Get User Service', () => {
  test('Should return 400 if no id is provided ', async () => {
    const sut = new GetUser()

    const response = await sut.handle(makeUserData())

    expect(response.statusCode).toBe(400)
  })
  test('Should return 200 and data user is valid id is provided',async () => {
    const sut = new GetUser()
    const singUpService = new SingUpService()

    const  httpResponse = await singUpService.handle(makeUserData())

    const httpRequest = {
      body: {
        id: httpResponse.body.id
      }
    }

    const responseGetUser = await sut.handle(httpRequest)

    

    expect(responseGetUser.statusCode).toBe(200)
    expect(responseGetUser.body.name).toBe(httpResponse.body.name)
    expect(responseGetUser.body.address).toBe(httpResponse.body.address)
    expect(responseGetUser.body.description).toBe(httpResponse.body.description)

  })
  test('Should return 500 if sequelize return throws',async () => {
    const sut = new GetUser()
    const singUpService = new SingUpService()

    const  httpResponse = await singUpService.handle(makeUserData())

    const httpRequest = {
      body: {
        id: httpResponse.body.id
      }
    }
    jest.spyOn(User, 'findByPk').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const response = await sut.handle(httpRequest)

    expect(response.statusCode).toBe(500)
  })
})