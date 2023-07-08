import React from 'react'
import Bilgiler from './Bilgiler'



const TodoList = ({ tasks,dele,duzenle}) => {
  return (
    <div className='task-list'>
          {
              tasks.map((bilgi,index) => {
                return <Bilgiler key={index} bilgi={bilgi} silme={dele} duzenlenenIcerik={duzenle}></Bilgiler>
              })
             }
    </div>
  )
}

export default TodoList
