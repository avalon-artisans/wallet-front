/**
 * Login credentials structure
 */
interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * User session structure
 */
interface UserSession {
  user_id: string;
  name: string;
  email: string;
  access_token: string;
}

export type {
  LoginCredentials,
  UserSession,
};