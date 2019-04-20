import React from 'react';

export default function Char(props) {
  function endSelection(event) {
    event.preventDefault();
    event.stopPropagation();
    props.endSelection(props.position);
  }

  function startSelection(event) {
    event.preventDefault();
    event.stopPropagation();
    props.startSelection(props.position);
  }

  const style = {
    backgroundColor: props.selected ? 'blue' : 'inherit',
    color: props.selected ? 'white' : 'inherit'
  };

  return (
    <span style={style} onMouseDown={startSelection} onMouseUp={endSelection}>{props.content}</span>
  );
}
