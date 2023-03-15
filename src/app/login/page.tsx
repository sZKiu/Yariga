"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/common/CustomInput";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  user_email: Yup.string()
    .required("The user or email is required")
    .test(
      "user_email",
      ({ value }) => {
        if (value.includes("@")) {
          return "Invalid email";
          if (value.length > 100) return "The email is too long";
        }

        if (value.length > 16) return "The user is too long";
        if (6 > value.length) return "The user is too short";
      },
      (value: any) => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (value.includes("@")) {
          if (!regexEmail.test(value)) return false;
        } else {
          if (!value.length) return false;

          if (value.length > 22) return false;

          if (value.length < 4) return false;
        }

        return true;
      }
    ),
  password: Yup.string()
    .required("The password is required")
    .min(8, "Password must be more than 8 letters")
    .test(
      "password",
      ({ value }) => {
        if (/\d/.test(value) && /[a-z]/.test(value))
          return "Password must have at least one upper";

        if (/[A-Z]/.test(value) && /[a-z]/.test(value))
          return "Password must have at least one number";

        if (/[A-Z]/.test(value) && /\d/.test(value))
          return "Password must have at least one lower";

        if (/[A-Z]/.test(value))
          return "Password must have at least one lower and number";

        if (/[a-z]/.test(value))
          return "Password must have at least one upper and number";

        if (/\d/.test(value))
          return "Password must have at least one lower and upper";

        return "Invalid password";
      },
      (value: any) => {
        const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!regex.test(value)) return false;

        return true;
      }
    ),
});

function Login() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<any>();
  const [showMessa, setShowMessa] = useState(false);

  const onSubmit = async ({
    user_email,
    password,
  }: {
    user_email: string;
    password: string;
  }) => {
    const fetchDataJson = await fetch(
      `https://apiexpressuser-2-k8787246.deta.app/api/v1/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          user_email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const fetchData = await fetchDataJson.json();

    if (fetchDataJson.ok) {
      setShowMessa(true);

      setTimeout(() => {
        setShowMessa(false);
        document.getElementById("achor-to-home")?.click();
      }, 2000);
    } else {
      setError({
        data: { error: fetchData.error },
        status: fetchDataJson.status,
      });

      setShowMessa(true);

      setTimeout(() => {
        setShowMessa(false);

        setError(undefined);
      }, 2000);
    }
  };

  const initialValues = {
    user_email: "",
    password: "",
  };

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#5d56d7] flex flex-col items-center justify-center gap-2 z-[1050]">
        <h1 className="font-bold text-xl text-white">Login</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => {
            return (
              <Form className="grid gap-4 bg-white py-8 px-6 rounded-lg w-[20rem]">
                <div>
                  <Field
                    name="user_email"
                    label="Write your username or email"
                    component={CustomInput}
                    variant="standard"
                  />

                  <ErrorMessage
                    name="user_email"
                    component="p"
                    className="text-sm text-red-600"
                  />
                </div>

                <div>
                  <div className="relative">
                    <Field
                      name="password"
                      type={showPass ? "text" : "password"}
                      label="Write your password"
                      component={CustomInput}
                      variant="standard"
                      className="pr-8"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute top-[50%] right-2 -translate-y-[50%]"
                    >
                      {showPass ? (
                        <AiFillEye className="text-[#5d56d7] text-xl" />
                      ) : (
                        <AiFillEyeInvisible className="text-[#5d56d7] text-xl" />
                      )}
                    </button>
                  </div>

                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm text-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#5d56d7] text-white font-semibold py-1"
                >
                  Login
                </button>

                <p className="text-zinc-900">
                  Dont you have an account?{" "}
                  <Link className="text-[#5d56d7] underline" href="/register">
                    Register
                  </Link>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>

      {showMessa ? (
        <div
          className={`fixed top-[10%] left-[50%] -translate-x-[50%] rounded-xl py-2 px-4 z-[1050] ${
            error
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          <p className="font-medium">
            {error
              ? `Status code: ${error.status}, Error: ${
                  !error?.data ? error?.error : error.data.error
                }`
              : "You have succesfully logged!"}
          </p>
        </div>
      ) : null}

      <a href="/" id="achor-to-home" className="hidden" />
    </>
  );
}

export default Login;
