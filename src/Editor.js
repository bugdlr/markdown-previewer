import React from 'react';

 const Editor = (props) => {
    return (
      <div className="editor-container">
        <h2>Write your markdown here:</h2>
        <textarea onChange={(e) => {props.handleChange(e.target.value)} } id="editor" placeholder={props.input}></textarea>

      </div>
    )
};

export default Editor;
