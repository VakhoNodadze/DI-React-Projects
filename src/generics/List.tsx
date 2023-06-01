import { FC } from 'react'

type ListProps = {
  items: string[] | number[]
  onClick: (item: string | number) => void
}

const List = ({ items, onClick }: ListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick(item)}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// type ListPropsGenerics<T> = {
//   items: T[]
//   onClick: (item: T) => void
// }

// const List = <T extends string | number>({ items, onClick }: ListPropsGenerics<T>) => {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index} onClick={() => onClick(item)}>
//           <span>{item.toString()}</span>
//         </li>
//       ))}
//     </ul>
//   )
// }

export default List
