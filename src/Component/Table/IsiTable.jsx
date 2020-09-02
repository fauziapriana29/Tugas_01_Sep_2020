import React from 'react'
import data from '../../Data/db.json'
import DeleteList from './DeleteTable.jsx'

const Isi = () => {
  
    return(
        data.list.map((list, id) => {
            return (
                <tr key={list.id} className="colList">
              <th scope="row">{id + 1}</th>
              <td>{list.Date}</td>
              <td>{list.Time}</td>
              <td className="isiList">{list.List}</td>
              <td>
                <button
                  className="btn btn-danger"
                    title="delete list"
                    onClick={() => DeleteList(id)}
                >
                  <i className="far fa-trash-alt fa-lg"></i>
                </button>
                &nbsp;
                <button className="btn btn-secondary" title="edit list">
                  <i className="fas fa-pencil-alt fa-lg"></i>
                </button>
              </td>
            </tr>
            )
        })
    )
}
export default Isi