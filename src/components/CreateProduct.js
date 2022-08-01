import React from "react";
import { useState } from "react";
import {
  Modal,
  TextInput,
  PasswordInput,
  Alert,
  Select,
  NumberInput,
  Image,
  Radio,
  RadioGroup,
  Button,
} from "@mantine/core";
import ImageUploading from "react-images-uploading";
import axios from "axios";

const CreateProduct = () => {
  const [open, setOpen] = useState(false);

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [priceUnit, setPriceUnit] = useState(0);
  const [maxQty, setMaxQty] = useState(0);
  const [available, setAvailable] = useState(true);
  const [file, setFile] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("category", category);
    data.append("priceUnit", priceUnit);
    data.append("maxQty", maxQty);
    data.append("available", available);
    data.append("image", file);

    // if (images) {
    //   for (let i = 0; i < images.length; i++) {
    //     data.append(`image_${i}`, images[i], images[i].name);
    //   }
    // }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:8080/product/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //   console.log("res de la peticion", res);
    } catch (error) {
      //   console.log(error);
    }
  }

  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
    // imageList.map((item) => {
    setFile(imageList[0].file);
    // });
  };
  //   console.log("estos son los filess", file);
  //   console.log("estos son los images", images);

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
    <div className="modal__product">
      <button
        className="modal__product__openmodal"
        onClick={() => setOpen(true)}
      >
        Nuevo Producto
      </button>
      <Modal
        opened={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <h2>Nuevo Producto</h2>
        <form className="form__createProduct" onSubmit={handleSubmit}>
          <div className="form__createProduct__img">
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <Image src={image.data_url} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>

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

          <div className="form__createProduct__available">
            <RadioGroup
              value={available}
              onChange={setAvailable}
              label="Disponible?"
              description="Selecciona si el plato esta disponible a la venta"
              required
            >
              <Radio value="true" label="Si" />
              <Radio value="false" label="No" />
            </RadioGroup>
          </div>

          <Button color="orange" type="submit" onClick={() => setOpen(false)}>
            Crear
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default CreateProduct;
