import React from 'react';

const Preview = (props) => {
  return (
    <div className="preview-container">
      <h2>Preview:</h2>
      <div id="preview" dangerouslySetInnerHTML={props.createMarkup(props.input)}></div>
    </div>
  )

}

export default Preview;
