import type { RegisterFormData } from '@/types/user';
import type { ErrorResponseData, SuccessResponseData } from '@/types';
import axios, {AxiosResponse, HttpStatusCode} from 'axios';
import RegisterValidator from '../validators/user/register.validator';

/**
 * UserService class
 * @author Kenneth Sumang
 * @since  2023.05.30
 */
export default class UserService {
  /**
   * Handles processing of registration of user
   * @param {any} data
   * @returns {Promise<{ success: boolean, message: string, data?: any }>}
   */
  async processRegistration(data: any): Promise<{ success: boolean, message: string, data?: any }> {
    const validationResponse = this.validateFormData(data);
    if (!validationResponse.success) {
      return {
        success: false,
        message: validationResponse.message as string,
      };
    }

    const formData = data as RegisterFormData;
    const apiResponse = await this.requestRegistration(formData);
    if (apiResponse.status !== HttpStatusCode.Created) {
      const errorResponse = apiResponse as AxiosResponse<ErrorResponseData>;
      return {
        success: false,
        message: errorResponse.data.errors.detail,
      };
    }

    const successResponse = apiResponse as AxiosResponse<SuccessResponseData>;
    return {
      success: true,
      message: 'Successfully registered user.',
      data: successResponse.data.data,
    };
  }

  /**
   * Checks if the form data is valid.
   * @param {any} data
   * @returns {success: boolean, message?: string}
   */
  validateFormData(data: any): {success: boolean, message: string|null} {
    const validator = new RegisterValidator();

    const result = validator.validate(data);
    if (!result.valid) {
      return {
        success: false,
        message: result.message
      }
    }

    return { success: true, message: null };
  }

  /**
   * Requests user registration to NextJS API
   * @param {RegisterFormData} data
   * @returns {Promise<AxiosResponse<any>>}
   */
  async requestRegistration(data: RegisterFormData): Promise<AxiosResponse<any>> {
    return axios({
      method: 'POST',
      url: '/api/user/register',
      data: data,
    });
  }
}