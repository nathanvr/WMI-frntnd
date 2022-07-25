import React from "react";
import { useState } from "react";
import { Modal, TextInput, PasswordInput, Alert } from "@mantine/core";
import { login } from "../store/reducers/user.reducer";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const { error } = useSelector((state) => state.userReducer);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(login(user));
  };

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
        <form className="form-register" onSubmit={handleSubmit}>
          <div className="box-register">
            <TextInput
              placeholder="example@example.com"
              label="Correo Electrónico"
              name="email"
              required
              value={user.email}
              onChange={handleChange}
              error={error !== null && true}
            />
          </div>

          <div className="box-register">
            <PasswordInput
              placeholder="Contraseña"
              label="Contraseña"
              name="password"
              required
              value={user.password}
              onChange={handleChange}
              error={error !== null && true}
            />
          </div>
          {error !== null && (
            <Alert title="Error!" color="red">
              Usuario o contraseña incorrectos
            </Alert>
          )}

          <div className="form__button__continue">
            <button
              className="form__button--continue"
              type="submit"
              //   onClick={() => setVisible((v) => !v)}
            >
              Ingresa
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default Login;
