import type { NextApiRequest, NextApiResponse } from 'next';
import type { ErrorResponseData, SuccessResponseData } from '@/types';
import { HttpStatusCode } from 'axios';

/**
 * Register API route
 */
export default function handler(request: NextApiRequest, response: NextApiResponse<SuccessResponseData|ErrorResponseData>) {
  const requestBody = request.body;
  const requestMethod = request.method;

  if (!isRequestMethodValid(requestMethod)) {
    response
      .status(HttpStatusCode.NotFound)
      .json({
        errors: {
          title: 'Invalid Request',
          detail: 'HTTP method not supported.',
        },
      });
    return;
  }

  response
    .status(HttpStatusCode.Ok)
    .json({
      data: [
        {
          id: 1,
          title: 'Hello, World!',
          description: 'Hello!',
          due: '2023-06-28T02:17:34+00:00',
          isDone: false,
        },
        {
          id: 2,
          title: 'Hello, World! (1)',
          description: 'Hello!',
          due: '2023-06-28T02:17:34+00:00',
          isDone: false,
        },
        {
          id: 3,
          title: 'Lorem ipsum',
          description: 'Hello!',
          due: '2023-06-29T02:17:34+00:00',
          isDone: false,
        },
        {
          id: 4,
          title: 'Do nothing',
          description: 'Nothing!!',
          due: '2023-06-30T02:17:34+00:00',
          isDone: false,
        }
      ]
    });
}

/**
 * Checks if the request method is valid for this request
 * @param {string} requestMethod
 * @returns {boolean}
 */
function isRequestMethodValid(requestMethod: string|undefined): boolean {
  return requestMethod === 'GET';
}