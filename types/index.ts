import {DefaultSession, DefaultUser} from 'next-auth';

/**
 * Response data structure
 */
interface ResponseData {
  status: {code: number, message: string};
  data?: any;
  message: string;
}

/**
 * SuccessResponseData structure
 */
interface SuccessResponseData {
  data: any;
}

/**
 * ErrorResponseData structure
 */
interface ErrorResponseData {
  errors: ErrorData[];
}

/**
 * ErrorData type
 */
interface ErrorData {
  source: any;
  title: string;
  detail: string;
}


export type {
  ResponseData,
  SuccessResponseData,
  ErrorResponseData
};