import React from 'react'

const StepOne = ({ formik }) => {
  return (
    <>
      <div className=' w-full h-full flex justify-between items-center my-2'>
        <label htmlFor='name' className='font-bold'>
          Name:
        </label>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={formik.handleChange}
          value={formik.values.name}
          className='w-[90%] mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1'
        />
      </div>
      {formik.touched.name && formik.errors.name && (
        <p className='text-red-500 text-center'>{formik.errors.name}</p>
      )}
      <div className=' w-full h-full flex justify-between items-center my-2'>
        <label htmlFor='email' className='font-bold'>
          Email:
        </label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
          className='w-[90%]  mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1'
        />
      </div>

      {formik.touched.email && formik.errors.email && (
        <p className='text-red-500 text-center'>{formik.errors.email}</p>
      )}
    </>
  )
}

export default StepOne
