import { HttpResponse } from '../protocols/http.protocol';

export class BaseController {
  protected ok<T>(obj: T, message?: string): HttpResponse {
    return {
      statusCode: 200,
      body: obj,
      message,
    };
  }

  protected badRequest(message?: string): HttpResponse {
    return {
      statusCode: 400,
      message,
    };
  }

  protected serverError<T>(obj: T, message?: string): HttpResponse {
    return {
      statusCode: 500,
      body: obj,
      message,
    };
  }
}
