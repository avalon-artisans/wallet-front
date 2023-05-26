import Validator from 'validatorjs';
import axios, { AxiosResponse } from 'axios';
import * as _ from 'lodash';
import type { ErrorResponseData, SuccessResponseData } from '@/types';
import type { LoginCredentials } from '@/types/auth';

/**
 * AuthService class
 * @author Kenneth Sumang
 * @since  2023.05.25
 */
export default  class AuthService {
  /**
   * Process login
   * @param   {object} credentials
   * @returns {Promise<any>}
   */
  async processLogin(credentials: any): Promise<{ success: boolean, message: string, data?: any }> {
    if (!this.isValidCredentials(credentials)) {
      return {
        success: false,
        message: 'Invalid credentials.'
      };
    }

    const credentialsObject = credentials as LoginCredentials;
    const response = await this.requestLogin(credentialsObject);
    if (response.status !== 200) {
      const errorResponse = response as AxiosResponse<ErrorResponseData>;
      return {
        success: false,
        message: _.map(errorResponse.data.errors, 'detail').join(' ')
      };
    }

    const successResponse = response as AxiosResponse<SuccessResponseData>;
    return {
      success: true,
      message: 'Login successful.',
      data: successResponse.data.data
    };
  };

  /**
   * Checks if credentials are valid
   * @param   {any} credentials
   * @returns {boolean}
   */
  isValidCredentials(credentials: any): boolean {
    if (!credentials.email || !credentials.password) {
      return false;
    }

    const validationRules = {
      email: 'required|email',
      password: 'required'
    };

    const validation = new Validator(credentials, validationRules);
    return !!validation.passes();
  }

  /**
   * Requests login to NextJS API
   * @param   {LoginCredentials} credentials
   * @returns {Promise<any>}
   */
  async requestLogin(credentials: LoginCredentials): Promise<AxiosResponse<SuccessResponseData|ErrorResponseData>> {
    return axios({
      method: 'POST',
      url: '/api/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: credentials
    });
  }
}