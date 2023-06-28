import {TodoItem} from '@/types/todo';
import axios, {AxiosResponse, HttpStatusCode} from 'axios';
import {ErrorResponseData, SuccessResponseData} from '@/types';

/**
 * TodoService class
 * @author Kenneth Sumang
 */
export default class TodoService {
  /**
   * Fetches todos
   * @returns {Promise<TodoItem[]>}
   */
  async fetchTodos(): Promise<{ success: boolean; data: TodoItem[]; message: string }> {
    const response = await this.requestFetchTodos();
    if (response.status !== HttpStatusCode.Ok) {
      const errorResponse = response as AxiosResponse<ErrorResponseData>;
      return {
        success: false,
        message: errorResponse.data.errors.detail,
        data: [],
      };
    }

    const successResponse = response as AxiosResponse<SuccessResponseData>;
    return {
      success: true,
      message: 'Login successful.',
      data: successResponse.data.data,
    };
  }

  async requestFetchTodos(): Promise<AxiosResponse<SuccessResponseData|ErrorResponseData>> {
    return axios({
      method: 'GET',
      url: '/api/todo/fetch',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

}