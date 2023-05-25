import { DefaultUser } from 'next-auth';

interface LoginCredentials {
  email: string;
  password: string;
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

export type {
  LoginCredentials,
  CustomUserProfile,
};