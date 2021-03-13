interface HttpRequest {
  body?: any
}
interface HttpResponse{
  statusCode: number
  body: any
}

export class SingUpService{
  
  handle (httpRequest: HttpRequest): HttpResponse {
    return {
      statusCode: 400,
      body: null
    }
  } 
}