import NextAuth, {AuthOptions} from 'next-auth';

/**
 * Auth options for NextAuth
 */
export const authOptions: AuthOptions = {
  providers: [
    // todo
  ],
  callbacks: {
    session({ session, token, user }) {
      return session;
    }
  }
};
export default NextAuth(authOptions)