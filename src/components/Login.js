import React from "react";
import { useState } from "react";
import { Modal } from "@mantine/core";
import LoginForm from "./LoginForm";

const Login = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a onClick={() => setOpen(true)}>Ingresa</a>
      <Modal
        opened={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <p>Hola mundo desde el modal de Login</p>
        <LoginForm />
      </Modal>
    </div>
  );
};
export default Login;
