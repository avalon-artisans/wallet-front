/**
 * Response data structure
 */
interface ResponseData {
  data?: any;
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
  errors: ErrorData;
}

/**
 * ErrorData type
 */
interface ErrorData {
  title: string;
  detail: string;
}


export type {
  ResponseData,
  SuccessResponseData,
  ErrorResponseData
};