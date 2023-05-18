import NextAuth, {AuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * Auth options for NextAuth
 */
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req)  {
        return {
          email: 'admin@example.com',
          name: 'Admin'
        };
      },
      credentials: {
        email: {},
        password: {},
      }
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session;
    }
  }
};
export default NextAuth(authOptions)