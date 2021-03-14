import User from "../models/user";
import { HttpRequest } from "../protocols/HttpRequest-protocol";
import { HttpResponse } from "../protocols/HttpResponse-protocol";

export class DeleteUser{
  
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
    const userId = httpRequest.body.id
    if (!userId) return {
      statusCode: 400,
      body: new Error('Missing param error: id')
    }

    await User.destroy({
      where: {
        id: userId
      }
    })

    return {
      statusCode: 200,
      body: null
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err
    }
  }
  } 
}