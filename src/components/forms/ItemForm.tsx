import React, { ReactElement, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Formik } from "formik";
import item from "../../lib/item";
import categoriesDB from "../../lib/category";
import { itemSchema } from "./validationForms";
import { ItemValues, ResponseDB } from "../../interfaces";

export default function ItemForm ({initialValues}: {initialValues : ItemValues}): ReactElement {
  //----------------------------
  const fetchCategories = async () => {
    const result:ResponseDB = await categoriesDB.findAll();
    setCategories(result.body);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  let [categories, setCategories] = useState<[ItemValues]>([{ title: "", description:"", img:"", price:0, discount:0, tags:[] }]);
  //---------------------------------
  let [responseDB, setResponseDB] = useState<ResponseDB>();
  let handleItemSubmit = async (values: ItemValues) => {
    let response:ResponseDB;
    if (values._id) {
      response = await item.update({
        _id: values._id,
        title: values.title,
        description: values.description,
        price: values.price,
        discount: values.discount,
        img: values.img,
        tags: values.tags,
      });
    } else {
      response = await item.create({
        title: values.title,
        description: values.description,
        price: values.price,
        discount: values.discount,
        img: values.img,
        tags: values.tags,
      });
    }
    if(response.success){
      setResponseDB({success:true, body: values._id?'Item updated correctly':'Item added correctly'})
    }else{
      setResponseDB(response);
    }
  };
  return (
    <Formik
      validationSchema={itemSchema}
      onSubmit={(values: ItemValues) => {
        handleItemSubmit(values);
      }}
      initialValues={initialValues}
      enableReinitialize={true}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <>
          <h2>Item creator</h2>
          {responseDB && <p>{responseDB.body}</p>}
          {console.log(values, "values")}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  isValid={touched.title && !errors.title}
                  isInvalid={!!errors.title}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isValid={touched.description && !errors.description}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Image Path</Form.Label>
                <Form.Control
                  type="text"
                  name="img"
                  value={values.img}
                  onChange={handleChange}
                  isValid={touched.img && !errors.img}
                  isInvalid={!!errors.img}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.img}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  isValid={touched.price && !errors.price}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type="number"
                  name="discount"
                  value={values.discount}
                  onChange={handleChange}
                  isValid={touched.discount && !errors.discount}
                  isInvalid={!!errors.discount}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.discount}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Categories</Form.Label>
                {categories.map((category) => {
                  if (category.title) {
                    return (
                      <Form.Check
                        type="checkbox"
                        name="tags"
                        checked={
                          values.tags && values.tags.includes(category.title)
                            ? true
                            : false
                        }
                        value={category.title}
                        label={category.title}
                        onChange={handleChange}
                      />
                    );
                  } else {
                    return <p>There are no categories</p>;
                  }
                })}
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </>
      )}
    </Formik>
  );
}
