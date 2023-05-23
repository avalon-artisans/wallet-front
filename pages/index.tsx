import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

/**
 * Index page component
 * @author Kenneth Sumang
 * @since  2023.05.17
 */
export default function Index() {
  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col h-full w-full items-center">
        <div className="flex flex-col h-full w-full items-center lg:justify-center">
          <div className="flex flex-col h-full lg:h-auto w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <div className="flex flex-row h-full w-full items-center">
              <LoginForm />
            </div>
          </div>
          <div className="flex flex-col pb-5 lg:pt-5 items-center w-screen">
            <div>
              { "Don't have an account?" }
              &nbsp;
              <Link
                href="/register"
                className="underline text-blue-500 hover:text-blue-800 visited:text-purple-600"
              >
                {  "Sign up." }
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
