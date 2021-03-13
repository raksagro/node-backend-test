import { HttpRequest } from "../protocols/HttpRequest-protocol";
import { HttpResponse } from "../protocols/HttpResponse-protocol";

export class SingUpService{
  
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) return {
      statusCode: 400,
      body: new Error('Missing param error: Name')
    }

    return {
      statusCode: 200,
      body: null
    }
  } 
}