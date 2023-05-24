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
      // session.user = token.access_token;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.user = account;
      }
      return token;
    }
  }
};
export default NextAuth(authOptions)