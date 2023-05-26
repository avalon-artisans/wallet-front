import type { IronSessionOptions } from 'iron-session';
import type { UserSession } from '@/types/auth';

/**
 * Session Options for Iron session
 */
export const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_COOKIE_PASSWORD as string,
  cookieName: process.env.SESSION_COOKIE_NAME as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    user?: UserSession;
  }
}