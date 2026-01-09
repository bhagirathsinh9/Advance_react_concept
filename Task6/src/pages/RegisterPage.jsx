import React, { useState } from 'react'
import { useFormik } from 'formik'
import validationSchemas from '../utils/validationSchemas'
import StepIndicator from '../componets/FormStepper/StepIndicator'
import StepOne from '../views/Register/StepOne'
import StepTwo from '../views/Register/StepTwo'
import StepThree from '../views/Register/StepThree'

const RegisterPage = () => {
  const [step, setStep] = useState(0)

  const handleSubmit = (values, { resetForm }) => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      console.log('Final Submit:', values)
      alert('Form Submitted! Check console.')
      resetForm()
      setStep(0)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      city: '',
      country: '',
      password: '',
    },
    validationSchema: validationSchemas[step],
    onSubmit: handleSubmit,
  })

  return (
    <div>
      {/* Title */}
      <div className='mx-auto w-full text-center my-5'>
        <h1 className='font-bold text-2xl'>MultiStep Form Using Formik:-</h1>
      </div>

      <div className='max-w-md mx-auto my-5 shadow-lg border border-gray-200 rounded'>
        <form onSubmit={formik.handleSubmit} className='p-3 rounded'>
          <StepIndicator step={step} />

          {/* Steps */}
          {step === 0 && <StepOne formik={formik} />}
          {step === 1 && <StepTwo formik={formik} />}
          {step === 2 && <StepThree formik={formik} />}

          <div className='mt-5 flex justify-around items-center my-3'>
            {step > 0 && (
              <button
                type='button'
                className='bg-gray-400 text-black text-md rounded-xl px-4 py-2'
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}

            <button
              type='submit'
              className='bg-blue-400 text-black text-md rounded-xl px-4 py-2'
            >
              {step === 2 ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
