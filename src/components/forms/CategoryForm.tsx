import React, { ReactElement, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Formik } from "formik";
import category from "../../lib/category";
import { CategoryValues, ResponseDB } from "../../interfaces";
import { categorySchema } from "./validationForms";

export default function CategoryForm(
  {initialValues}: {initialValues : CategoryValues}
): ReactElement {
  let [responseDB, setResponseDB] = useState<ResponseDB>();
  let handleCategorySubmit = async (values: CategoryValues) => {
      let response:ResponseDB;
      if(values._id){
        console.log('valuesId', values)
        response = await category.update({
          _id: values._id,
          title: values.title,
          description: values.description,
          discount: values.discount,
        });
      } else{
        response = await category.create({
        title: values.title,
        description: values.description,
        discount: values.discount,
      });
    }
    if(response.success){
      setResponseDB({success:true, body:values._id?'Category updated correctly':'Category added correctly'})
    }else{
      setResponseDB(response);
    }
  };
  return (
    <Formik
      validationSchema={categorySchema}
      onSubmit={(values: CategoryValues) => {
        handleCategorySubmit(values);
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
          <h2>Category</h2>
          {responseDB && <p>{responseDB.body}</p>}
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
                <Form.Label>discount</Form.Label>
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
            <Button type="submit">Submit form</Button>
          </Form>
        </>
      )}
    </Formik>
  );
}
