/**
 * Response data structure
 */
interface ResponseData {
  status: {code: number, message: string};
  data?: any;
  message: string;
}

export type {
  ResponseData
};