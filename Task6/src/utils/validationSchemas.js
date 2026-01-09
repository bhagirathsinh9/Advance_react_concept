import * as Yup from 'yup'

const validationSchemas = [
  Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  }),

  Yup.object({
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
  }),

  Yup.object({
    password: Yup.string().min(6, 'Min 6 chars').required('Password required'),
  }),
]

export default validationSchemas
