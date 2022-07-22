import React from "react";
import { TextInput, PasswordInput } from "@mantine/core";

const LoginForm = () => {
  return (
    <form className="form-register">
      {/* {loading === true && ( */}
      {/* <div className="loading" style={{ width: 400, zIndex: 1000 }}> */}
      {/* <LoadingOverlay visible={visible} /> */}
      {/* ...other content */}
      {/* </div> */}
      {/* )} */}
      <div className="box-register">
        <TextInput
          placeholder="Tu nombre"
          label="Nombre"
          name="name"
          required
          //   value={name}
        />
        {/* {errorvalidate.name !== null && (
          <Text color="red">{errorvalidate.name}</Text>
        )} */}
      </div>
      <div className="box-register">
        <TextInput
          placeholder="Tu apellido"
          label="Apellido"
          name="lastName"
          required
          //   value={lastname}
        />
        {/* {errorvalidate.lastname !== null && (
          <Text color="red">{errorvalidate.lastname}</Text>
        )} */}
      </div>
      <div className="box-register">
        <TextInput
          placeholder="example@example.com"
          label="Correo Electrónico"
          name="email"
          required
          //   value={email}
        />
        {/* {errorvalidate.email !== null && (
          <Text color="red">{errorvalidate.email}</Text>
        )} */}
        {/* {error === "email already exist" && (
          <Text color="red">Ya existe una cuenta con el correo ingresado</Text>
        )} */}
      </div>

      <div className="box-register">
        <PasswordInput
          placeholder="Contraseña"
          label="Contraseña"
          name="password"
          required
          //   value={password}
          description="La contraseña debe tener mínimo 8 caracteres, una miniscula, una mayuscula, un numero o un caracter especial"
          //   onChange={(event) => (
          //     setPassword(event.currentTarget.value),
          //     setErrorValidate({ password: null })
          //   )}
        />
        {/* {errorvalidate.password !== null && (
          <Text color="red">{errorvalidate.password}</Text>
        )} */}
      </div>
      <div className="form__button__continue">
        <button
          className="form__button--continue"
          type="submit"
          //   onClick={() => setVisible((v) => !v)}
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
