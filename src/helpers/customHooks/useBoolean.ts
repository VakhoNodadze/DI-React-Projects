import { useState } from 'react'

export const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  const toggle = () => setValue((value) => !value)

  return { value, setTrue, setFalse, toggle }
}

export default useBoolean
