import React from "react";
import { useState } from "react";
import {
  Modal,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Text,
} from "@mantine/core";
import { register } from "../store/reducers/user.reducer";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  let passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  let nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g;
  let lastnameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g;
  let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const { error } = useSelector((state) => state.userReducer);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const [errorvalidate, setErrorValidate] = useState({
    name: null,
    lastname: null,
    email: null,
    birthday: null,
    password: null,
  });

  const body = {
    name: name,
    lastname: lastname,
    email: email,
    password: password,
  };

  const validatePassword = () => {
    if (passwordregex.test(password)) {
      return true;
    } else {
      setErrorValidate({
        password: "La contraseña no cumple con los criterios de seguridad",
      });
    }
  };
  const validateEmail = () => {
    if (emailregex.test(email)) {
      return true;
    } else {
      setErrorValidate({ email: "Correo inválido" });
    }
  };
  const validateName = () => {
    if (nameregex.test(name)) {
      return true;
    } else {
      setErrorValidate({ name: "El nombre debe tener más caracteres" });
    }
  };
  const validateLastname = () => {
    if (lastnameregex.test(lastname)) {
      return true;
    } else {
      setErrorValidate({ lastname: "El apellido debe tener más caracteres" });
    }
  };

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      validateName() &&
      validateLastname() &&
      validateEmail() &&
      validatePassword()
    ) {
      dispatch(register(body));
    }
  };

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
        <form className="form-register" onSubmit={handleSubmit}>
          <div className="box-register">
            <TextInput
              placeholder="Tu nombre"
              label="Nombre"
              name="name"
              required
              value={name}
              onChange={(event) => (
                setName(event.currentTarget.value),
                setErrorValidate({ name: null })
              )}
            />
            {errorvalidate.name !== null && (
              <Text color="red">{errorvalidate.name}</Text>
            )}
          </div>
          <div className="box-register">
            <TextInput
              placeholder="Tu apellido"
              label="Apellido"
              name="lastName"
              required
              value={lastname}
              onChange={(event) => (
                setLastName(event.currentTarget.value),
                setErrorValidate({ lastname: null })
              )}
            />
            {errorvalidate.lastname !== null && (
              <Text color="red">{errorvalidate.lastname}</Text>
            )}
          </div>
          <div className="box-register">
            <TextInput
              placeholder="user@example.com"
              label="Correo Electrónico"
              name="email"
              required
              value={email}
              onChange={(event) => (
                setEmail(event.currentTarget.value),
                setErrorValidate({ email: null })
              )}
            />
            {errorvalidate.email !== null && (
              <Text color="red">{errorvalidate.email}</Text>
            )}
            {error === "email already exist" && (
              <Text color="red">
                Ya existe una cuenta con el correo ingresado
              </Text>
            )}
          </div>

          <div className="box-register">
            <PasswordInput
              placeholder="Contraseña"
              label="Contraseña"
              name="password"
              required
              value={password}
              description="La contraseña debe tener mínimo 8 caracteres, una miniscula, una mayuscula, un numero o un caracter especial"
              onChange={(event) => (
                setPassword(event.currentTarget.value),
                setErrorValidate({ password: null })
              )}
            />
            {errorvalidate.password !== null && (
              <Text color="red">{errorvalidate.password}</Text>
            )}
          </div>
          <div className="form__button__continue">
            <button
              className="form__button--continue"
              type="submit"
              // onClick={() => setVisible((v) => !v)}
            >
              Registrarse
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default Register;
