import React from "react";
import "./Table.css";
import "../Form/Form.jsx"
import Isi from './IsiTable.jsx'

const Table = () => {
    return(
      <div className="container tabelContainer">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="noThList">
                No.
              </th>
              <th scope="col" className="dateThList">
                Date.
              </th>
              <th scope="col" className="timeThList">
                Time.
              </th>
              <th scope="col" className="listThList">
                List.
              </th>
              <th scope="col" className="actionThList">
                Action.
              </th>
            </tr>
          </thead>
          <tbody id="listData">
            <Isi/>
          </tbody>
        </table>
      </div>
    );
  }
        

export default Table;
