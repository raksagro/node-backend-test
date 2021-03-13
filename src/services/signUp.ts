import { HttpRequest } from "../protocols/HttpRequest-protocol";
import { HttpResponse } from "../protocols/HttpResponse-protocol";

export class SingUpService{
  
  handle (httpRequest: HttpRequest): HttpResponse {
    return {
      statusCode: 400,
      body: null
    }
  } 
}