"use client";

import { useState } from "react";

import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import SubmitButton from "../buttons/SubmitButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <h1>ورود به MELKIST</h1>

      <EmailField
        value={email}
        onChange={setEmail}
      />

      <PasswordField
        value={password}
        onChange={setPassword}
      />

      <SubmitButton
        title="ورود"
      />

    </form>
  );
}