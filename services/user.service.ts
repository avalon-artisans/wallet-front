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
    return { success: true, message: 'Done.' };
  }
}