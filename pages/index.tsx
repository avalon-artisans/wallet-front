import LoginForm from '@/components/auth/LoginForm';

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
        </div>
      </div>
    </main>
  )
}
