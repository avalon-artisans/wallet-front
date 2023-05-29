import RegisterForm from '@/components/auth/RegisterForm';

/**
 * RegisterPage component
 * @author Kenneth Sumang
 * @since  2023.05.21
 */
export default function Register() {
  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col h-full w-full items-center">
        <div className="flex flex-col h-full w-full items-center lg:justify-center">
          <div className="flex flex-row h-full lg:h-auto w-full md:w-3/4 lg:w-1/2 xl:w-1/3 items-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}