import { useRouter } from 'next/router';

/**
 * RegisterForm component
 * @author Kenneth Sumang
 * @since  2023.05.16
 */
export default function RegisterForm() {
  const router = useRouter();

  /**
   * Handles back button click
   */
  async function handleBackButtonClick() {
    await router.push('/');
  }

  return (
    <div className="w-full px-5">
      <div className="mb-6">
        <h1 className="text-3xl font-bold"> Register </h1>
        <p> Start managing your money effectively. </p>
      </div>

      <form>
        <div className="mb-6">
          <label
            htmlFor="register__name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your name
          </label>

          <input
            type="text"
            id="register__name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="register__email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>

          <input
            type="email"
            id="register__email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="johndoe@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="register__password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>

          <input
            type="password"
            id="register__password"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="register__retype_password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Retype your password
          </label>

          <input
            type="password"
            id="register__retype_password"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="flex flex-row">
          <button
            className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mr-5"
            onClick={handleBackButtonClick}
          >
            Back
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}