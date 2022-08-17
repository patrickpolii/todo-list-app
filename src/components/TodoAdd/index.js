import React from 'react';

const Index = ({handleSubmit, todo, setTodo}) => {
  return (
    <form className='form-container' onSubmit={e => handleSubmit(e)}>
      <div className='form-field'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={todo.name}
          placeholder='What your plan?'
          onChange={e => setTodo({ ...todo, name: e.target.value })}
        />
      </div>
      <div className='form-field'>
        <label>Description</label>
        <textarea
          type='text'
          name='description'
          value={todo.desc}
          placeholder='How it will goin?'
          onChange={e => setTodo({ ...todo, desc: e.target.value })}
        />
      </div>
      <button type='submit' className='form-button'>
        Add
      </button>
    </form>
  );
};

export default Index;