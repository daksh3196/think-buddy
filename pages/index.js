import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import Link from "next/link";
import { useAuth } from "@/firebase/auth";
import { useEffect, useState } from "react";
import Alert from "@/components/alert";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
const arr = [1, 2];

export default function Home() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const { authUser, isLoading, signOut } = useAuth();

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, isLoading]);
  useEffect(() => {
    if (authUser) {
      setShowAlert(true);
      setTimeout(function () {
        setShowAlert(false);
      }, 1000);
    }
  }, []);
  return !authUser ? (
    <Loader />
  ) : (
    <main className="">
      {/* {showAlert && <Alert message="Logged In!" />} */}
      <div
        onClick={signOut}
        className="order-darkGray bg-black text-white w-44 py-4  rounded-lg transition-transform hover:bg-darkGray/[0.8] active:scale-90 flex items-center justify-center gap-2 font-medium shadow-md fixed bottom-5 right-5 cursor-pointer"
      >
        <GoSignOut size={18} />
        <span>
          {/* <Link href="/register">Logout</Link> */}
          Logout
        </span>
      </div>
      <div className="max-w-3xl mx-auto mt-10 p-8">
        <div className="bg-white -m-6 p-3 sticky top-0">
          {/* <div className="flex justify-center flex-col items-center">
            <span className="text-7xl mb-10">📝</span>
            <h1 className="text-5xl md:text-7xl font-bold">
              {process.env.APP_NAME}
            </h1>
          </div> */}
          <div className="flex items-center gap-2 mt-10">
            <input
              placeholder={`👋 Hello name, What to do Today?`}
              type="text"
              className="font-semibold placeholder:text-gray-500 border-[2px] border-darkGray h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-yellow-400 text-lg transition-all duration-300"
              autoFocus
            />
            <button className="w-[60px] h-[60px] rounded-md bg-black flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-black/[0.8]">
              <AiOutlinePlus size={30} color="#fff" />
            </button>
          </div>
        </div>
        <div className="my-10">
          {arr.map((todo, index) => (
            <div
              key={`todo-${index}`}
              className="flex items-center justify-between mt-4"
            >
              <div className="flex items-center gap-3">
                <input
                  id={`todo-${index}`}
                  type="checkbox"
                  className="w-4 h-4 accent-green-400 rounded-lg"
                />
                <label htmlFor={`todo-${index}`} className="font-medium">
                  This is my first todo
                </label>
              </div>

              <div className="flex items-center gap-3">
                <MdDeleteForever
                  size={24}
                  className="text-red-400 hover:text-red-600 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
