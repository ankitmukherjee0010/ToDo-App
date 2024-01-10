export const addItem = (item) => {
    return {
      type: 'ADD_ITEM',
      payload: item,
    };
  };
  
  export const editItem = (index, item) => {
    return {
      type: 'EDIT_ITEM',
      payload: { index, item },
    };
  };
  
  export const deleteItem = (index) => {
    return {
      type: 'DELETE_ITEM',
      payload: index,
    };
  };
  