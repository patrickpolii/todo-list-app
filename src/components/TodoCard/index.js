import React from 'react';

const Index = props => {
  console.log('props from card', props);
  const { name, desc, id } = props;
  return (
    <div className='card-container'>
      <div className='card-header'>
        <h1>Todo Card</h1>
      </div>
      <div className='card-content'>
        <div className='card-field'> <b> Name: </b> </div>
        <div className='card-answer'>{name} </div>
        <div className='card-field'> <b> Description: </b> </div>
        <div className='card-answer'>{desc} </div>
      </div>
      <button className='card-update' onClick={() => props.updateTodoHandler(id)}>
        Update
      </button>
      <button className='card-delete' onClick={() => props.deleteHandler(id)}>
        Delete
      </button>
    </div>
  );
};

export default Index;