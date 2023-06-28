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

  const validationResponse = validateRequestFormData(requestBody);
  if (!validationResponse.success) {
    response
      .status(HttpStatusCode.BadRequest)
      .json({
        errors: {
          title: 'Invalid Request.',
          detail: validationResponse.message as string
        },
      });
    return;
  }

  response
    .status(HttpStatusCode.Created)
    .json({ data: 'OK' });
}

/**
 * Checks if the request method is valid for this request
 * @param {string} requestMethod
 * @returns {boolean}
 */
function isRequestMethodValid(requestMethod: string|undefined): boolean {
  return requestMethod === 'POST';
}

/**
 * Validates if the request form data is valid
 * @param {object} formData
 * @returns {{success: boolean, message: string|null}}
 */
function validateRequestFormData(formData: object): {success: boolean, message: string|null} {
  return { success: true, message: null };
}