import type { RegisterFormData } from '@/types/user';
import type { ErrorResponseData, SuccessResponseData } from '@/types';
import axios, {AxiosResponse, HttpStatusCode} from 'axios';
import Joi from 'joi';

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
    const PASSWORD_PATTERN = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    const schema = Joi.object({
      name: Joi
        .string()
        .required()
        .min(1)
        .max(100)
        .messages({
          'any.required': 'Name is required.',
          'string.base': 'Name must be a text.',
          'string.min': 'Name must have a minimum of 1 character.',
          'string.max': 'Name must not have more than 100 characters.',
        }),
      email: Joi
        .string()
        .email({ tlds: { allow: false } })
        .required()
        .max(100)
        .messages({
          'any.required': 'Email is required.',
          'string.base': 'Email must be a valid email address.',
          'string.email': 'Email must be a valid email address.',
          'string.max': 'Email must not have more than 100 characters.',
        }),
      password: Joi
        .string()
        .required()
        .pattern(PASSWORD_PATTERN)
        .messages({
          'any.required': 'Password is required.',
          'string.base': 'Password must be a text.',
          'string.pattern.base': 'Password must have at least an uppercase letter, a lowercase letter, a number, and a symbol.',
        }),
    });

    const result = schema.validate(data);
    if (result.error !== undefined) {
      return {
        success: false,
        message: result.error.message
      }
    }

    if (data.password !== data.retypePassword) {
      return {
        success: false,
        message: 'Passwords do not match.',
      };
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