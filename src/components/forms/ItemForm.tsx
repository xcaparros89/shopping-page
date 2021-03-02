import React, { ReactElement, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik } from "formik";
import item from "../../lib/item";
import {ItemValues} from '../../interfaces';
import {itemSchema} from './validationForms';
let tags = ['cat1', 'cat2', 'cat3']
export default function ItemForm({}: any): ReactElement {
    let [error, setError] = useState({success:true, body:''})
            const initialValues: ItemValues = {
                title: "",
                description: '',
                price: 0,
                tags: ['initial'],
            };
            let handleItemSubmit = async (values: ItemValues) => {
              console.log(values);
              const newItem = await item.create({
                title: values.title,
                description: values.description,
                price: values.price,
                tags: values.tags,
              });
              setError(newItem);
            };
            return (
              <Formik
                validationSchema={itemSchema}
                onSubmit={(values: ItemValues) => {
                    handleItemSubmit(values);
                }}
                initialValues={initialValues}
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
                    {!error.success && 
                        <p>{error.body}</p>
                    }
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
                          <Form.Label>Categories</Form.Label>
                          <Form.Check
                            type="checkbox"
                            name="tags"
                            value='hi'
                            onChange={handleChange}
                            isValid={touched.title && !errors.title}
                            isInvalid={!!errors.title}
                          />
                          <Form.Check
                            type="checkbox"
                            name="tags"
                            value='hit'
                            onChange={handleChange}
                            isValid={touched.title && !errors.title}
                            isInvalid={!!errors.title}
                          />
                          <Form.Check
                            type="checkbox"
                            name="tags"
                            value='hitt'
                            onChange={handleChange}
                            isValid={touched.title && !errors.title}
                            isInvalid={!!errors.title}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Button type="submit">Submit form</Button>
                    </Form>
                  </>
                )}
              </Formik>
            );
          };