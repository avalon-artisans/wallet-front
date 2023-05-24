import {DefaultSession, DefaultUser} from 'next-auth';

/**
 * Response data structure
 */
interface ResponseData {
  status: {code: number, message: string};
  data?: any;
  message: string;
}

/**
 * CustomUserProfile interface from DefaultUser
 */
interface CustomUserProfile extends DefaultUser {
  id: string;
  name: string;
  email: string;
  access_token: string;
}

/**
 * CustomSession interface from DefaultSession
 */
interface CustomSession extends DefaultSession {
  user: CustomUserProfile;
}

export type {
  ResponseData,
  CustomUserProfile,
  CustomSession
};