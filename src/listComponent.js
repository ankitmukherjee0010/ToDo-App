import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, editItem } from './reduxActions';
import './index.css';

function List() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleEdit = (index) => {
    const updatedItem = prompt('Edit task:', JSON.stringify(items[index]));
    if (updatedItem) {
      dispatch(editItem(index, JSON.parse(updatedItem)));
    }
  };

  const handleDelete = (index) => {
    if (window.confirm('Delete this item?')) {
      dispatch(deleteItem(index));
    }
  };

  return (
    <div className="table-container">
      <h3>List Table View</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
