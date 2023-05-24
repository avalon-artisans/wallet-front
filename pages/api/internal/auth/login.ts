import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData } from '@/types';

/**
 * LoginResponseData structure
 */
interface LoginResponseData extends ResponseData {
  data?: {user_id: number, name: string, email: string, access_token: string}
}

/**
 * Handler for logging in to internal authentication
 * @param request
 * @param response
 */
export default async function handler(request: NextApiRequest, response: NextApiResponse<LoginResponseData>) {
  const requestBody = request.body;
  const requestMethod = request.method;

  if (!isValidPostRequest(requestMethod)) {
    response
      .status(404)
      .json({
        status: {
          code: 404,
          message: 'Not Found.'
        },
        message: 'There was an error in the request. Please check and try again.'
      });
    return;
  }

  if (!isValidRequestBody(requestBody)) {
    response
      .status(400)
      .json({
        status: {
          code: 400,
          message: 'Bad Request.'
        },
        message: 'The data is invalid.'
      });
    return;
  }

  // todo: implement this
  response
    .status(200)
    .json({
      status: {
        code: 200,
        message: 'OK'
      },
      data: {
        user_id: 1,
        name: 'John Doe',
        email: 'email@example.com',
        access_token: 'abc123'
      },
      message: 'Logged in successfully!'
    });
}

/**
 * Checks if method request is POST
 * @param requestMethod
 */
function isValidPostRequest(requestMethod: string|undefined): boolean {
  if (!requestMethod) {
    return false;
  }

  return requestMethod.toUpperCase() === 'POST';
}

/**
 * Checks if the request body is valid
 * @param requestBody
 */
function isValidRequestBody(requestBody: any): boolean {
  return !(!requestBody.email || !requestBody.password);
}