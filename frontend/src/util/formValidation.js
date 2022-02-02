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
 * @property {string} business_name - The name of the business being registered
 * @property {string} full_name - The name of the business owner
 * @property {string} email - The email address of the user
 * @property {string} password - The password of the user
 * @property {string} password_confirm - An additional field to ensure that the user entered the correct password
 */
export const registrationSchema = yup.object().shape({
  business_name: yup.string().required("The name of your business is required"),
  full_name: yup.string().required("Your full name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Your email address is required"),
  description: yup
    .string()
    .required("Please give a brief description of your business"),
  password: yup.string().required("Your password is required"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
