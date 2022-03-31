import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

export default function Example(modalOpen, setModalOPen) {
    const [state, setState] = useState(modalOpen)
    if(state){
        console.log('hi')
    }
  return (
    <div> 

{() => {
          if(state == true){
            <h2>hi</h2>
          }
        }}
    </div>
  )
}