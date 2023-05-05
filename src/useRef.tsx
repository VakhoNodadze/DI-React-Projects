import React, { useState, useEffect, useRef } from 'react';

const UseRef = () => {
  const [name, setName] = useState<string>('');
  const [renderCount, setRenderCount] = useState<number>(1);

  const prevName = useRef('');
  const refRenderCount = useRef<number>(1);

  const inputRef = useRef<HTMLInputElement>(null);

  function focus() {
    inputRef.current?.focus();
  }

  useEffect(() => {
    prevName.current = name;
    focus();
  }, [name]);

  useEffect(() => {
    // setRenderCount((prevRenderCount) => prevRenderCount + 1);

    refRenderCount.current = refRenderCount.current + 1;
  });

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div> I rendered {renderCount} times </div>

      <div>
        {' '}
        My name now is {name}, but my previous name was {prevName.current}{' '}
      </div>
    </>
  );
};

export default UseRef;
