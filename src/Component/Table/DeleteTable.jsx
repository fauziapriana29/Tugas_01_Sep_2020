import React from 'react'
import Data from '../../Data/db.json'

const DeleteList = () => {
    Data.list.map((list, id) => {
        alert(id)
   })
};

export default DeleteList