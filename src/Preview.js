import React from 'react';

const Preview = (props) => {
    return (
      <div className="preview-container">
        <h2>Preview:</h2>
        <div id="preview" dangerouslySetInnerHTML={{
          __html: props.markdown
        }}></div>
      </div>
    )
}

export default Preview;
