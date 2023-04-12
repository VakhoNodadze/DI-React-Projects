import useLocalStorage from '../helpers/customHooks/useLocalStorage'

export default function App() {
  const [name, setName] = useLocalStorage('name', {})

  return <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
}
