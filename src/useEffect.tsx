import React, { useEffect } from 'react';

const obj = { name: 'posts', link: 'posts' };
const obj1 = { name: 'posts', link: 'posts' };

const UseEffect = () => {
  const [APIType, setAPIType] = React.useState({
    name: 'posts',
    link: 'posts',
  });
  const [items, setItems] = React.useState<any>([]);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  console.log('windowWidth', windowWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      console.log('interval');
    }, 2000);
    console.log('mounting');
    window.addEventListener('resize', handleResize);
    return () => {
      console.log('un mounting');
      window.removeEventListener('resize', handleResize);
      clearInterval(timeout);
    };
  }, []);

  // useEffect(() => {
  //   console.log('useEffect');
  //   fetch(`https://jsonplaceholder.typicode.com/${APIType.link}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [APIType.link, APIType.name]);

  return (
    <>
      <div>
        <button onClick={() => setAPIType({ name: 'posts', link: 'posts' })}>
          Posts
        </button>
        <button onClick={() => setAPIType({ name: 'users', link: 'users' })}>
          Users
        </button>
        <button
          onClick={() => setAPIType({ name: 'comments', link: 'comments' })}
        >
          Comments
        </button>
      </div>
      <h1>{APIType.name}</h1>
      {items.map((item: any) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
};

export default UseEffect;
