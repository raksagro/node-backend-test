import { HttpResponse } from "../protocols/HttpResponse-protocol";
import {Request, Response} from 'express'
import { SingUpService } from "../services/signUp";
import { GetUser } from "../services/getUser";
import { UpdateUser } from "../services/updateUser";
import { DeleteUser } from "../services/deleteUser";

export class UserController {
  
  async get (req: Request, res: Response): Promise<void> {
    const {id} = req.params

    const getUser = new GetUser()

    const httpRequest = {
      body: {
        id: id
      }
    }
    const response = await getUser.handle(httpRequest)


    res.status(response.statusCode).json(response.body)
  }
  async create (req: Request, res: Response): Promise<void> {
    const {name, address, dob, description} = req.body

    const signUpService = new SingUpService()

    const httpRequest = {
      body: {
        name,
        address,
        dob,
        description
      }
    }
    const response = await signUpService.handle(httpRequest)


    res.status(response.statusCode).json(response.body)
  }
  async update (req: Request, res: Response): Promise<void> {
    const {id, name, address, dob, description} = req.body

    const updateUser = new UpdateUser()

    const httpRequest = {
      body: {
        id,
        name,
        address,
        dob,
        description
      }
    }
    const response = await updateUser.handle(httpRequest)


    res.status(response.statusCode).json(response.body)
  }
  async delete (req: Request, res: Response): Promise<void> {
    const {id} = req.params

    const deleteUser = new DeleteUser()

    const httpRequest = {
      body: {
        id: id
      }
    }
    const response = await deleteUser.handle(httpRequest)


    res.status(response.statusCode).json(response.body)
  }
}