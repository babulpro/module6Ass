import React, { useState } from 'react';

const Content = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    const textareaValue = document.getElementById('textarea').value;
    setDisplayText(textareaValue);
  };

  return (
    <div className='w-2/3 mb-6 m-auto h-[280px] mt-4 shadow-lg p-2'>
      <form action="#">
      <textarea className='border w-full p-3' placeholder='Please write here' id="textarea" rows="4" cols="50" />
      <br />
      <button className='border bg-black text-white px-4 py-2 rounded-md hover:bg-red-950' onClick={handleButtonClick}>Display Text</button>
      <br />
      { <p>{displayText}</p>}
      </form>
    </div>
  );
};

export default Content;
