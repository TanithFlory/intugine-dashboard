"use client";
import Loader from "@/app/utils/Loader";
import TextInput from "@/app/utils/TextInput";
import { setCookie } from "cookies-next";
import { ChangeEvent, useState } from "react";
// import { cookies } from "next/headers";

export default function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    setError("");
    setLoginDetails((prev) => ({ ...prev, [target.name]: target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { username, password } = loginDetails;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify({
            client_id: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID as string,
            username,
            password,
            grant_type: "password",
          }),
        }
      );
      const data = await response.json();
      if (response.status !== 200) {
        return setError(data.message);
      }

      window.location.href = process.env.NEXT_PUBLIC_BASE_URL as string;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="w-[320px]" onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="mb-4">
          <label className="text-fs-12 font-bold mb-2">Username</label>
          <TextInput
            placeholder="username"
            required
            type="text"
            name="username"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-2">
          <label className="text-fs-12 font-bold mb-2">Password</label>
          <TextInput
            placeholder="password"
            required
            type="password"
            name="password"
            onChange={onChangeHandler}
          />
        </div>
        {error ? (
          <div className="text-fs-12 text-red-500 mb-2">{error}</div>
        ) : null}
      </div>

      <div className="text-fs-12 text-buttonColor mb-4">Forgot Password?</div>

      <button
        className="w-[280px] bg-buttonColor rounded-[4px] text-fs-12 text-white h-[35px] flex items-center justify-center"
        disabled={loading}
      >
        {loading ? <Loader /> : "LOGIN"}
      </button>
    </form>
  );
}
