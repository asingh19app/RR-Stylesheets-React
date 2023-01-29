import React from 'react'

//css via object(key values and pairs)
const styledText = {
    fontSize: "25px",
    textAlign: "center",
    margin: "40px",
    border: "1px solid green"
  };
  
  export default function Example1() {
    return (
      <div style={styledText}>
        <p>Example1</p>
      </div>
    );
    }
  
