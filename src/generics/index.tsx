import React from 'react'
import List from './List'

const App = () => {
  return (
    <div>
      <List items={['Batman', 'Superman', 'Wonder woman']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      {/* <List
        items={[
          {
            superhero: 'Batman',
            alterEgo: 'Bruce Wayne',
          },
          {
            superhero: 'Superman',
            alterEgo: 'Clark Kent',
          },
          {
            superhero: 'Wonder Woman',
            alterEgo: 'Diana Prince',
          },
        ]}
        onClick={(item) => console.log(item)} */}
      />
    </div>
  )
}
