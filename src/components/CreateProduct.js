import React from "react";
import { useState } from "react";
import {
  Modal,
  TextInput,
  PasswordInput,
  Alert,
  Select,
  NumberInput,
} from "@mantine/core";

const CreateProduct = () => {
  const [open, setOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [priceUnit, setPriceUnit] = useState(0);
  const [maxQty, setMaxQty] = useState(0);
  const [available, setAvailable] = useState(true);

  const categoryOptions = [
    { value: "vegetarian", label: "Vegetariana" },
    { value: "vegan", label: "Vegana" },
    { value: "fastfood", label: "Comida Rapida" },
    { value: "fitness", label: "Fitness" },
    { value: "italian", label: "Italiana" },
    { value: "seafood", label: "Mariscos" },
    { value: "regional", label: "Tipica" },
  ];

  return (
    <div>
      <button onClick={() => setOpen(true)}>Nuevo Producto</button>
      <Modal
        opened={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <h3>Nuevo Producto</h3>
        <form className="form__createProduct" onSubmit={handleSubmit}>
          <div className="form__createProduct__title">
            <TextInput
              placeholder="Titulo del producto"
              label="Titulo"
              name="name"
              required
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />
          </div>

          <div className="form__createProduct__description">
            <TextInput
              placeholder="Descripcion del producto"
              label="Descripcion"
              name="description"
              required
              value={description}
              onChange={(event) => setDescription(event.currentTarget.value)}
            />
          </div>

          <div className="form__createProduct__category">
            <Select
              placeholder="Categoria del producto"
              label="Categoria"
              name="category"
              required
              value={category}
              onChange={setCategory}
              data={categoryOptions}
            />
          </div>
          <div className="form__createProduct__price">
            <NumberInput
              //   placeholder="Precio del producto"
              hideControls
              value={priceUnit}
              label="Precio"
              name="priceUnit"
              required
              onChange={setPriceUnit}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : "$ "
              }
            />
          </div>
          <div className="form__createProduct__maxQty">
            <NumberInput
              //   placeholder="Precio del producto"
              hideControls
              value={maxQty}
              label="Cantidad maxima"
              name="maxQty"
              required
              onChange={setMaxQty}
              min={1}
            />
          </div>

          <button>Crear</button>
        </form>
      </Modal>
    </div>
  );
};
export default CreateProduct;
