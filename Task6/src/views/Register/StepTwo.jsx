import React from 'react'

const StepTwo = ({ formik }) => {
  return (
    <>
      <div className=' w-full h-full flex justify-between items-center my-2'>
        <label htmlFor='city' className='font-bold'>
          City:
        </label>
        <input
          type='text'
          name='city'
          placeholder='City'
          onChange={formik.handleChange}
          value={formik.values.city}
          className='w-[90%] ml-10 mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1'
        />
      </div>
      {formik.touched.city && formik.errors.city && (
        <p className='text-red-500 text-center'>{formik.errors.city}</p>
      )}

      <div className=' w-full h-full flex justify-between items-center my-2'>
        <label htmlFor='country' className='font-bold'>
          Country:
        </label>
        <input
          type='text'
          name='country'
          placeholder='Country'
          onChange={formik.handleChange}
          value={formik.values.country}
          className='w-[90%] mx-2 focus:outline-none border border-gray-300 rounded px-2 py-1'
        />
      </div>
      {formik.touched.country && formik.errors.country && (
        <p className='text-red-500 text-center'>{formik.errors.country}</p>
      )}
    </>
  )
}

export default StepTwo
