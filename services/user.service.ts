import Validator, {ValidationErrors} from 'validatorjs';
import type { RegisterFormData } from '@/types/user';
import axios, {AxiosResponse} from "axios";

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
        message: validationResponse.message as string
      };
    }

    const formData = data as RegisterFormData;
    const apiResponse = await this.requestRegistration(formData);
    return { success: true, message: 'Done.' };
  }

  /**
   * Checks if the form data is valid.
   * @param {any} data
   * @returns {success: boolean, message?: string}
   */
  validateFormData(data: any): {success: boolean, message: string|null} {
    const validationRules = {
      name: 'required|string',
      email: 'required|email',
      password: 'required|string',
      retypePassword: 'required|same:password'
    };

    const validationMessages = {
      'required.name': 'Missing name.',
      'string.name': 'Invalid name.',
      'required.email': 'Missing email.',
      'email.email': 'Invalid email.',
      'required.password': 'Missing password.',
      'string.password': 'Invalid password.',
      'required.retypePassword': 'Missing retype password.',
      'same.retypePassword': 'Retype password not equal.',
    };

    const validation = new Validator(data, validationRules, validationMessages);
    if (validation.passes()) {
      return {
        success: true,
        message: null,
      };
    }

    return {
      success: false,
      message: this.getFirstErrorMessage(validation.errors.all())
    }
  }

  /**
   * Gets the first error message in the error messages object
   * @param {ValidationErrors} errors
   * @returns {string}
   */
  getFirstErrorMessage(errors: ValidationErrors): string {
    const firstKey = Object.keys(errors)[0];
    const firstEntry = errors[firstKey];
    return firstEntry[0];
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