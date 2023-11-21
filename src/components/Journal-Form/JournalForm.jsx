import { useState } from 'react';

import Button from '../Button/Button';

import './JournalForm.css';

const JournalForm = () => {
  const [inputData, setInputData] = useState('');

  const inputChange = (event) => {
    setInputData(event.target.value);
  };

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(
      '🚀 ~ file: JournalForm.jsx:17 ~ addJournalItem ~ formProps:',
      formProps
    );
  };

  return (
    <form className='journal-form' onSubmit={addJournalItem}>
      <input type='text' name='title' />
      <input type='date' name='date' />
      <input type='text' name='tag' value={inputData} onChange={inputChange} />
      <textarea name='post' id='' cols='30' rows='10'></textarea>
      <Button text='Save' />
    </form>
  );
};
export default JournalForm;
