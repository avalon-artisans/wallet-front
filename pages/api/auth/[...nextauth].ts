import NextAuth, {AuthOptions} from 'next-auth';
import internalCredentialsProvider from '@/providers/auth/InternalCredentialsProvider';

/**
 * Auth options for NextAuth
 */
export const authOptions: AuthOptions = {
  providers: [
    internalCredentialsProvider,
  ],
  callbacks: {
    session({ session, token, user }) {
      return session;
    }
  }
};
export default NextAuth(authOptions)