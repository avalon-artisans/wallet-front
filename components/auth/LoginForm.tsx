/**
 * LoginForm component
 * @author Kenneth Sumang
 * @since  2023.05.16
 */
export default function LoginForm() {
  return (
    <div className="w-full px-5">
      <div className="mb-6">
        <h1 className="text-3xl font-bold"> Login </h1>
        <p> Please sign in to continue. </p>
      </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>

          <input
            type="email"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>

          <input
            type="password"
            id="password"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="flex flex-row-reverse">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}