import React from 'react'

const StepThree = ({ formik }) => {
  return (
    <>
      <div className=' w-full h-full flex justify-between items-center my-2'>
        <label htmlFor='password' className='font-bold'>
          Password:
        </label>

        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={formik.handleChange}
          value={formik.values.password}
          className='w-[90%] mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1'
        />
      </div>
      {formik.touched.password && formik.errors.password && (
        <p className='text-red-500 text-center'>{formik.errors.password}</p>
      )}
    </>
  )
}

export default StepThree
