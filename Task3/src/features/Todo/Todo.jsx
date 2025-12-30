import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from './todoSlice'
import { IoIosAddCircle } from 'react-icons/io'
import { MdDeleteForever, MdEdit } from 'react-icons/md'

export default function Todo() {
  const [inputData, setInputData] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const { todos } = useSelector((store) => store.todo)
  const dispatch = useDispatch()

  const submitHandler = () => {
    if (inputData.trim() === '') return

    if (editIndex !== null) {
      dispatch(editTodo({ index: editIndex, newValue: inputData }))
      setEditIndex(null)
    } else {
      dispatch(addTodo(inputData))
    }

    setInputData('')
  }

  const deleteItem = (index) => {
    dispatch(deleteTodo(index))
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='text-center my-5 border border-gray-300 shadow-2xl w-md h-full p-3'>
        <h1 className='text-2xl mb-5 font-bold'>Task - 3 Todo</h1>

        {/* INPUT */}
        <div className='border flex justify-between items-center p-3 rounded-2xl'>
          <input
            type='text'
            placeholder='Enter List item'
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className='w-90 p-2 rounded-lg outline-none'
          />

          <button onClick={submitHandler} className='mr-1'>
            <IoIosAddCircle
              size={30}
              className={`hover:text-lime-500 ${
                editIndex !== null ? 'text-blue-600' : ''
              }`}
            />
          </button>
        </div>

        <h1 className='m-5 text-2xl font-bold'>Todo List</h1>

        {todos.length === 0 ? (
          <p className='text-red-500'>No items in the list</p>
        ) : (
          todos.map((item, index) => (
            <div
              key={index}
              className='bg-blue-100 border border-gray-500 my-2 rounded-lg flex justify-between items-center p-4'
            >
              <span>{item}</span>

              {/* 🔥 EDIT + DELETE BUTTONS */}
              <div className='flex gap-3'>
                <button
                  onClick={() => {
                    setInputData(item)
                    setEditIndex(index)
                  }}
                >
                  <MdEdit size={25} className='hover:text-blue-600' />
                </button>

                <button onClick={() => deleteItem(index)}>
                  <MdDeleteForever size={30} className='hover:text-red-500' />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
