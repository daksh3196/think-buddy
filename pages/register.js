import React, { useState, useEffect } from "react";
import { firebaseAuth } from "@/firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { useAuth } from "../firebase/auth";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import Link from "next/link";

const provider = new GoogleAuthProvider();

const RegisterForm = () => {
  const router = useRouter();
  const [formName, setFormName] = useState(null);
  const [formEmail, setFormEmail] = useState(null);
  const [formPass, setFormPass] = useState(null);
  const [authError, setAuthError] = useState(null);
  const { authUser, isLoading, setAuthUser } = useAuth();

  const getCurrentUser = () => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is signed in
        // Do something with the user information
        console.log("User ID: ", user);
      } else {
        // No user is signed in
        console.log("No user is currently signed in.");
      }
    });

    // Unsubscribe from the listener when no longer needed
    unsubscribe();
  };

  function handleInputChange(e, inputType) {
    if (inputType === "name") {
      setFormName(e.target.value);
    } else if (inputType === "email") {
      setFormEmail(e.target.value);
    } else if (inputType === "password") {
      setFormPass(e.target.value);
    } else {
      return;
    }
    return;
  }

  //email-password login
  const onFormSubmit = async () => {
    console.log(formName, formEmail, formPass);
    if (!formName) {
      setAuthError("Please enter a valid Name");
      return;
    }
    if (!formEmail || !formPass) return;
    else {
      setAuthError(null);
      try {
        const { user } = await createUserWithEmailAndPassword(
          firebaseAuth,
          formEmail,
          formPass
        );
        await updateProfile(firebaseAuth.currentUser, {
          displayName: formName,
        });
        // setAuthUser({
        //   uid: user.uid,
        //   email: user.email,
        //   formName,
        // });
        console.log(user);
      } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (
          errorCode === "auth/weak-password" ||
          errorCode === "auth/email-already-in-use" ||
          errorCode === "auth/operation-not-allowed" ||
          errorCode === "auth/invalid-email"
        ) {
          setAuthError(errorMessage);
        }
        console.log(error);
        console.error("logging sign up console error", error);
      }
    }
    // e.preventDefault();
  };

  //google-login
  const signInWithGoogle = async () => {
    const user = await signInWithPopup(firebaseAuth, provider);
    console.log("sign in with google", user, getCurrentUser());
  };

  return (
    //   return isLoading || (!isLoading && !!authUser) ? (
    //     <Loader />
    //   ) :
    //   (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-6xl font-semibold">Sign Up</h1>
          <p className="mt-6 ml-1">
            Already have an account ?{" "}
            <span className="underline hover:text-blue-400 cursor-pointer">
              <Link href="login">Login</Link>
            </span>
          </p>

          <div
            onClick={signInWithGoogle}
            className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
          >
            <FcGoogle size={22} />
            <span className="font-medium text-black group-hover:text-white hover:text-white">
              Login with Google
            </span>
          </div>
          {authError && <div className="text-red">{authError}</div>}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Name</label>
              <input
                type="text"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                required
                onChange={(e) => handleInputChange(e, "name")}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="text"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => handleInputChange(e, "email")}
                required
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => handleInputChange(e, "password")}
                required
              />
            </div>
            <button
              onClick={(e) => onFormSubmit()}
              className="bg-white border-[2px] border-black text-black w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] hover:text-white active:scale-90"
            >
              Sign Up
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

export default RegisterForm;
