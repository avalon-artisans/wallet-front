import CredentialsProvider from 'next-auth/providers/credentials';
import { CustomUserProfile } from '@/types';
import axios from 'axios';

/**
 * InternalCredentialsProvider object
 *
 * @author Kenneth Sumang
 * @since  2023.05.23
 */
export default CredentialsProvider({
  id: "",
  name: "internal",
  type: "credentials",
  async authorize(credentials, req): Promise<CustomUserProfile|null>  {
    if (!credentials) {
      return null;
    }
    const loginResponse = await sendLoginRequest(credentials);
    if (!loginResponse.success) {
      return null;
    }

    return loginResponse.data;
  },
  credentials: {
    email: { label: 'email', type: 'email'},
    password: { label: 'password', type: 'password' },
  }
});

/**
 * Sends login request
 * @param   credentials
 * @returns Promise<{success: boolean, message?: string, data?: any}>
 */
async function sendLoginRequest(credentials: {email: string, password: string}) {
  const responseData = await axios({
    method: 'POST',
    data: credentials,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (responseData.status !== 200) {
    return {
      success: false,
      message: responseData.data.message
    };
  }

  return {
    success: true,
    data: responseData.data.data
  };
}