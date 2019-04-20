import React, {useState} from 'react';
import Char from './Char';

export default function Paragraph(props) {
  const [selection, setSelection] = useState({ start: null, end: null });

  function startSelection(idx) {
    setSelection({
      start: idx,
      end: null
    });
  }

  function endSelection(idx) {
    setSelection({
      start: Math.min(selection.start, idx),
      end: Math.max(selection.start, idx)
    });
  }

  return (
    <p>
      {props.content.map((char, idx) => {
        const selected = selection.start && idx >= selection.start && idx <= selection.end;
        return (
          <Char
            key={idx}
            position={idx}
            content={char}
            startSelection={startSelection}
            endSelection={endSelection}
            selected={selected}
          />
        )
      })}
    </p>
  );
}
