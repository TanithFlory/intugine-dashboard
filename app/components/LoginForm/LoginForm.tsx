"use client";
import TextInput from "@/app/utils/TextInput";
import { ChangeEvent, useState } from "react";

export default function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target;

    setLoginDetails((prev) => ({ ...prev, [target.name]: target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { username, password } = loginDetails;
    try {
      const response = await fetch(
        `http://localhost:8080/realms/intugine/protocol/openid-connect/token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            client_id: "2bCqZI7f8Z48as3RzLttBqZcRHJTrkYc",
            username,
            password,
            grant_type: "password",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return setError(data.error_description);
      }

      localStorage.setItem("accessToken", data.access_token);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
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

      <button className="w-[280px] bg-buttonColor rounded-[4px] text-fs-12 text-white h-[35px]">
        LOGIN
      </button>
    </form>
  );
}
