import React, { FC, useState, useCallback, memo } from 'react';

type ListProps = {
  getItems: () => number[];
};

const List: FC<ListProps> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);

  React.useEffect(() => {
    setItems(getItems());
    console.log('Updating Items');
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [count + 1, count + 2, count + 3];
  }, [count]);

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };

  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <List getItems={() => getItems()} />
      </div>
    </>
  );
};

export default UseCallback;
