"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const Router = useRouter();
  return (
    <div>
      <h1>
        This is the user app where user can view courses on /courses, view jobs
        on /jobs
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          Router.push("/authpage");
        }}
      >
        {" "}
        Login / Signup
      </button>
    </div>
  );
}
