import React from 'react'
import Button from '../button/Button'
import Form from '../form/Form'
import Input from '../input/Input'
import { createTodo } from '@/actions'

const AddTodo  =() => {
  return (
    <div>
      <Form action={createTodo}>
        <div className='flex gap-2 '>
          <Input name='input' type='text' placeholder='idhar add karo'/>
          <Button type='submit' text = 'Add' bgColor='bg-yellow-600' />
        </div>
      </Form>
    </div>
  )
}

export default AddTodo
