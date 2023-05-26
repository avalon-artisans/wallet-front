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
  _id: string;
  name: string;
  email: string;
}

export type {
  LoginCredentials,
  UserSession,
};