import axios, {AxiosResponse, HttpStatusCode} from 'axios';
import type { ErrorResponseData, SuccessResponseData } from '@/types';
import type { LoginCredentials } from '@/types/auth';
import LoginValidator from '../validators/auth/login.validator';

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
    if (response.status !== HttpStatusCode.Ok) {
      const errorResponse = response as AxiosResponse<ErrorResponseData>;
      return {
        success: false,
        message: errorResponse.data.errors.detail
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
    const validator = new LoginValidator();
    return validator.validate(credentials).valid;
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