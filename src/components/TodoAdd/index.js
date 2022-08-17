import React from 'react';

const Index = ({addHandler, todo, setTodo}) => {
  
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.name || !todo.desc) {
      alert('Please fill in all fields');
      return;
    } else {
      addHandler(todo);
    }
    setTodo({
      id: '',
      name: '',
      desc: ''
    });
  };

  return (
    <form className='form-container' onSubmit={e => handleSubmit(e)}>
      <div className='form-field'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          placeholder='What your plan?'
          onChange={e => setTodo({ ...todo, name: e.target.value })}
        />
      </div>
      <div className='form-field'>
        <label>Description</label>
        <input
          type='text'
          name='description'
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