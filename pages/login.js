import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth } from "@/firebase/firebase";
import { useAuth } from "../firebase/auth";
import {
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import Link from "next/link";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import ClickAwayListener from "@/components/ClickAwayListener";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const provider = new GoogleAuthProvider();

const LoginForm = () => {
  const router = useRouter();
  const { authUser, isLoading } = useAuth();
  const [formEmail, setFormEmail] = useState(null);
  const [formPass, setFormPass] = useState(null);
  const [formErr, setFormErr] = useState(null);
  const [isForgotModalTrue, setIsForgotModalTrue] = useState(false);

  useEffect(() => {
    if (!isLoading && authUser) {
      router.push("/");
    }
  }, [authUser, isLoading]);

  const handleSignIn = async () => {
    if (!formEmail || !formPass) {
      setFormErr("Please enter valid email and password for authentication.");
      return;
    } else {
      setFormErr(null);
      await signInWithEmailAndPassword(firebaseAuth, formEmail, formPass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErr(error.message);
        });
    }
  };

  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(firebaseAuth, provider);
    } catch (e) {}
  };

  function handleInputChange(e, inputType) {
    if (inputType === "password") {
      setFormPass(e.target.value);
    } else if (inputType === "email") {
      setFormEmail(e.target.value);
    } else {
      return;
    }
    return;
  }

  function onForgotPassword() {
    setIsForgotModalTrue(true);
  }

  function handleClickAwayEvent(_event) {
    setIsForgotModalTrue(false);
  }

  return isLoading || (!isLoading && !!authUser) ? (
    <Loader />
  ) : (
    <main className="flex lg:h-[100vh]">
      <ClickAwayListener>
        <ForgotPasswordModal
          show={isForgotModalTrue}
          onClickAway={handleClickAwayEvent}
          handleClose={(e) => setIsForgotModalTrue(false)}
        />
      </ClickAwayListener>
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-6xl font-semibold">Login</h1>
          <p className="mt-6 ml-1">
            Don't have an account ?{" "}
            <span className="underline hover:text-blue-400 cursor-pointer">
              <Link href="/register">Sign Up</Link>
            </span>
          </p>

          <div
            onClick={signInWithGoogle}
            className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
          >
            <FcGoogle size={22} />
            <span className="font-medium text-black group-hover:text-white">
              Login with Google
            </span>
          </div>
          {formErr && <div className="text-red mt-4 ml-1">{formErr}</div>}
          <form onClick={(e) => e.preventDefault()}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="text"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => handleInputChange(e, "email")}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => handleInputChange(e, "password")}
              />
            </div>
            <div
              className="right-5 mt-6 flex justify-end"
              onClick={onForgotPassword}
            >
              <span className="underline hover:text-blue-400 cursor-pointer">
                Forgot Password?
              </span>
            </div>
            <button
              onClick={handleSignIn}
              className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
        style={{
          backgroundImage: "url('/login-banner.jpg')",
        }}
      ></div>
    </main>
  );
};

export default LoginForm;
