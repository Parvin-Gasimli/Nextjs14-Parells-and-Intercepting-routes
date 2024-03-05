export default function Login() {
  return (
    <div>
      <div className="auth-form">
        <form className="w-[500px] p-5 bg-slate-200 shadow-lg rounded-md">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 rounded-md w-full p-2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border border-gray-300 rounded-md w-full p-2"
            />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-md w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
