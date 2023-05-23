import RegisterForm from '@/components/auth/RegisterForm';

/**
 * RegisterPage component
 * @author Kenneth Sumang
 * @since  2023.05.21
 */
export default function Register() {
  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col h-full w-full justify-center">
        <RegisterForm />
      </div>
    </main>
  );
}