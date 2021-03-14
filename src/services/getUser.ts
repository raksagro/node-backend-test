import User from "../models/user";
import { HttpRequest } from "../protocols/HttpRequest-protocol";
import { HttpResponse } from "../protocols/HttpResponse-protocol";

export class GetUser{
  
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
    const userId = httpRequest.body.id
    if (!userId) return {
      statusCode: 400,
      body: new Error('Missing param error: id')
    }

    const user = await User.findByPk(userId, {
      plain: true
    })

    return {
      statusCode: 200,
      body: user
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err
    }
  }
  } 
}