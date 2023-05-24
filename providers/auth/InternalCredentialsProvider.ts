import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * InternalCredentialsProvider object
 *
 * @author Kenneth Sumang
 * @since  2023.05.23
 */
export default CredentialsProvider({
  id: "",
  name: "",
  type: "credentials",
  async authorize(credentials, req)  {
    return {
      id: 1,
      email: 'admin@example.com',
      name: 'Admin'
    };
  },
  credentials: {
    email: { label: 'email', type: 'email'},
    password: { label: 'password', type: 'password' },
  }
});