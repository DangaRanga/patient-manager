// This module contains the Yup Object schema for forms
import * as yup from "yup";

/**
 * Validation parameters for the login
 */
export const loginValidation = {
  email: {
    required: {
      value: true,
      message: "Please enter your email address",
    },
  },

  password: {
    required: {
      value: true,
      message: "Please enter your password",
    },
  },
};

/**
 * Validation parameters for the login form
 * @typedef {yup.ObjectSchema} LoginSchema
 * @property {string} email - The email address of the user
 * @property {string} password - The password of the user
 */
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Your email address is required"),
  password: yup.string().required("Your password is required"),
});

/**
 * Validation parameters for the registration form
 * @typedef {yup.ObjectSchema} RegistrationSchema
 * @property {string} firstName- The first name of the user
 * @property {string} lastName - The last name of the user
 * @property {string} email - The email address of the user
 * @property {string} password - The password of the user
 * @property {string} passwordConfirm - An additional field to ensure that the user entered the correct password
 */
export const registrationSchema = yup.object().shape({
  firstName: yup.string().required("Your first name is required"),
  lastName: yup.string().required("Your last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Your email address is required"),
  password: yup.string().required("Your password is required"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
