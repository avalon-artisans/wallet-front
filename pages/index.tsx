import AuthContainer from "@/components/auth/AuthContainer";
import LoginForm from "@/components/auth/LoginForm";

/**
 * Index page component
 * @author Kenneth Sumang
 * @since  2023.05.17
 */
export default function Index() {
  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col h-full w-full md:w-3/4 md:self-center">
          <AuthContainer>
            <LoginForm />
          </AuthContainer>
        </div>
        <div className="flex flex-col pb-5 items-center w-screen">
          <div>
            { "Don't have an account?" }
            &nbsp;
            <a
              href="/register"
              className="underline text-blue-500 hover:text-blue-800 visited:text-purple-600"
            >
              {  "Sign up." }
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
