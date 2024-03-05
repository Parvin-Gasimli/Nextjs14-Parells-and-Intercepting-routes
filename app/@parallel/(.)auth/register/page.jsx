import Modal from "@/components/Modal";
import Link from "next/link";

export default function Register() {
  return (
    <Modal>
      <div className="auth-form">
        <form className="w-[550px] p-6 bg-slate-200 shadow-lg rounded-md relative">
          <Link
            href="/"
            className="absolute top-2 right-2   bg-white text-black p-2 rounded-md shadow-md  "
          >
            X
          </Link>
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
          <div className="mb-3">
            <label htmlFor="email">Confirm Password</label>
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
    </Modal>
  );
}
