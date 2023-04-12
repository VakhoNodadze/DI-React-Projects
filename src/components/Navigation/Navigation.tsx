import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import i18next from 'i18next'
import './Navigation.scss'
import { useStore } from '../../store/StoreContext'
import useDebounce from '../../helpers/customHooks/useDebounce'
import { changeTheme } from '../../store/actions'
import { searchForProduct } from '../../helpers/services/products'

const Navigation = () => {
  const { productQuantity: cartSize, dispatch } = useStore()
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue)

  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  useEffect(() => {
    if (debouncedValue.length < 3) return
    searchForProduct(debouncedValue)
  }, [debouncedValue])

  return (
    <header className='container'>
      <nav className='subcontainer'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cart'>Cart {cartSize}</Link>
          </li>
          <li>
            <Link to='/todo'>Todo</Link>
          </li>
          <li>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          </li>
          <button onClick={() => i18next.changeLanguage('en')}>English</button>
          <button onClick={() => i18next.changeLanguage('ge')}>Georgian</button>
        </ul>
        <Button variant='contained' color='error' onClick={handleLogOut}>
          Log out
        </Button>
        <Typography variant='subtitle1' color='white' onClick={() => dispatch(changeTheme())}>
          Change Theme
        </Typography>
      </nav>
    </header>
  )
}

export default Navigation
