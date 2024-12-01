import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
          rows="8"
        ></textarea>
      </div>
      <h2>Your Text Summary</h2>
      <p>
        {text.split(/\s+/).filter((word) => word.length !== 0).length} words,{' '}
        {text.length} characters
      </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
    </div>
  );
}
