// import React, { useEffect, useState, ReactElement } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import InputGroup from "react-bootstrap/InputGroup";
// import { Formik } from "formik";
// import auth from "../lib/auth";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   surnames: yup.string().required(),
//   email: yup.string().email("Invalid email").required("Required"),
//   username: yup.string().required(),
//   address: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.number().required(),
//   password: yup.string().required("Password is required"),
//   repeatPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords don't match")
//     .required("Password confirm is required"),
//   terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
// });

// interface RegisterValues {
//   name: string;
//   surnames: string;
//   email: string;
//   username: string;
//   password: string;
//   repeatPassword: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   terms: boolean;
// }

// export const ValidationSchemaExample: React.FC<{}> = () => {
//   const initialValues: RegisterValues = {
//     name: "",
//     surnames: "",
//     email: "",
//     username: "",
//     password: "",
//     repeatPassword: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     terms: false,
//   };
//   let handleRegisterSubmit = (values: RegisterValues) => {
//     console.log(values);
//     auth.signup({
//       name: values.name,
//       surnames: values.surnames,
//       username: values.username,
//       email: values.email,
//       password: values.password,
//       address: values.address,
//       city: values.city,
//       state: values.state,
//       zip: values.zip,
//     });
//   };
//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={(values: RegisterValues) => {
//         handleRegisterSubmit(values);
//       }}
//       initialValues={initialValues}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <>
//           <h2>Register</h2>
//           <Form noValidate onSubmit={handleSubmit}>
//             <Form.Row>
//               <Form.Group as={Col} md="4" controlId="validationFormik01">
//                 <Form.Label>First name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   value={values.name}
//                   onChange={handleChange}
//                   isValid={touched.name && !errors.name}
//                   isInvalid={!!errors.name}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.name}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationFormik02">
//                 <Form.Label>Last name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="surnames"
//                   value={values.surnames}
//                   onChange={handleChange}
//                   isValid={touched.surnames && !errors.surnames}
//                   isInvalid={!!errors.surnames}
//                 />

//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.surnames}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col} md="4" controlId="validationEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="email"
//                   value={values.email}
//                   onChange={handleChange}
//                   isValid={touched.email && !errors.email}
//                   isInvalid={!!errors.email}
//                 />

//                 <Form.Control.Feedback type="valid">
//                   Looks good!
//                 </Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.email}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//                 <Form.Label>Username</Form.Label>
//                 <InputGroup hasValidation>
//                   <InputGroup.Prepend>
//                     <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                   </InputGroup.Prepend>
//                   <Form.Control
//                     type="text"
//                     placeholder="Username"
//                     aria-describedby="inputGroupPrepend"
//                     name="username"
//                     value={values.username}
//                     onChange={handleChange}
//                     isValid={touched.username && !errors.username}
//                     isInvalid={!!errors.username}
//                   />
//                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.username}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col} md="4" controlId="validationPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   isValid={touched.password && !errors.password}
//                   isInvalid={!!errors.password}
//                 />
//                 <Form.Control.Feedback type="valid">
//                   Looks good!
//                 </Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.password}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationRepPassword">
//                 <Form.Label>Repeat password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="repeatPassword"
//                   value={values.repeatPassword}
//                   onChange={handleChange}
//                   isValid={touched.repeatPassword && !errors.repeatPassword}
//                   isInvalid={!!errors.repeatPassword}
//                 />
//                 <Form.Control.Feedback type="valid">
//                   Looks good!
//                 </Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.repeatPassword}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col} md="6" controlId="validationFormik03">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Street, street number, floor, etc"
//                   name="address"
//                   value={values.address}
//                   onChange={handleChange}
//                   isValid={touched.address && !errors.address}
//                   isInvalid={!!errors.address}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.address}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col} md="6" controlId="validationFormik03">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="City"
//                   name="city"
//                   value={values.city}
//                   onChange={handleChange}
//                   isValid={touched.city && !errors.city}
//                   isInvalid={!!errors.city}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.city}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="3" controlId="validationFormik04">
//                 <Form.Label>State</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="State"
//                   name="state"
//                   value={values.state}
//                   onChange={handleChange}
//                   isValid={touched.state && !errors.state}
//                   isInvalid={!!errors.state}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.state}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="3" controlId="validationFormik05">
//                 <Form.Label>Zip</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Zip"
//                   name="zip"
//                   value={values.zip}
//                   onChange={handleChange}
//                   isValid={touched.zip && !errors.zip}
//                   isInvalid={!!errors.zip}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.zip}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Form.Row>
//             <Form.Group>
//               <Form.Check
//                 required
//                 name="terms"
//                 label="Agree to terms and conditions"
//                 onChange={handleChange}
//                 isValid={touched.terms && !errors.terms}
//                 isInvalid={!!errors.terms}
//                 feedback={errors.terms}
//                 id="validationFormik0"
//               />
//             </Form.Group>
//             <Button type="submit">Submit form</Button>
//           </Form>
//         </>
//       )}
//     </Formik>
//   );
// };
