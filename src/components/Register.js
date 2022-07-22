import React from "react";
import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a onClick={() => setOpen(true)}>Registrate!</a>
      <Modal
        opened={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <p>Hola mundo desde el modal de registro</p>
        <RegisterForm />
      </Modal>
    </div>
  );
};
export default Register;
