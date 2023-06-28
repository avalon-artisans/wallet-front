import type { NextApiRequest, NextApiResponse } from 'next';
import type { ErrorResponseData, ResponseData } from '@/types';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/providers/auth/iron-session-config.provider';

/**
 * User login structure
 */
interface UserLoginData {
  user_id: string;
  name: string;
  email: string;
  access_token: string;
}

/**
 * LoginResponseData structure
 */
interface LoginResponseData extends ResponseData {
  data?: UserLoginData
}

/**
 * IronSessionApiRoute
 */
export default withIronSessionApiRoute(
  handler,
  sessionOptions
)

/**
 * Handler for logging in to internal authentication
 * @param request
 * @param response
 */
async function handler(request: NextApiRequest, response: NextApiResponse<LoginResponseData|ErrorResponseData>) {
  const requestBody = request.body;
  const requestMethod = request.method;

  if (!isValidPostRequest(requestMethod)) {
    response
      .status(404)
      .json({
        errors: {
          title: 'Invalid Request',
          detail: 'HTTP method not supported.',
        },
      });
    return;
  }

  if (!isValidRequestBody(requestBody)) {
    response
      .status(400)
      .json({
        errors: {
          title: 'Invalid Request',
          detail: 'Data is invalid.',
        },
      });
    return;
  }

  // todo: implement this
  const responseData: LoginResponseData = {
    data: {
      user_id: 'abc',
      name: 'John Doe',
      email: 'email@example.com',
      access_token: 'abc123',
    }
  };
  request.session.user = responseData.data;
  await request.session.save();
  response.status(200).json(responseData);
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