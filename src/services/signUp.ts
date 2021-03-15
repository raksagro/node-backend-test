import User from "../models/user";
import { HttpRequest } from "../protocols/HttpRequest-protocol";
import { HttpResponse } from "../protocols/HttpResponse-protocol";

export class SingUpService{
  
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
    if (!httpRequest.body.name) return {
      statusCode: 400,
      body: new Error('Missing param error: Name')
    }
    
    const user = await User.create(httpRequest.body)

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