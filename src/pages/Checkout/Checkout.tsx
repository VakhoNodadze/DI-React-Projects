import React, { useState, useMemo, ChangeEvent } from 'react'
import { Typography, TextField, InputLabel, Button, Grid } from '@mui/material';
import { useStore } from '../../store/StoreContext';
import CheckoutDialog from '../../components/CheckoutDIalog';


export type TUserInfo = {
    firstName: { value: string, error: boolean };
    lastName: { value: string, error: boolean };
    country: { value: string, error: boolean };
    city: { value: string, error: boolean };
    street: { value: string, error: boolean };
}

const Checkout = () => {
    const { cartItems } = useStore();

    const [userInfo, setUserInfo] = useState<TUserInfo>({
        firstName: {
            value: '', error: false
        },
        lastName: {
            value: '', error: false
        },
        country: {
            value: '', error: false
        },
        city: {
            value: '', error: false
        },
        street: {
            value: '', error: false
        }
    })
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo(prev => {
            return {
                ...prev,
                [e.target.name]:  {value: e.target}
            }
        })
    }

    const handleProcced = () => {
        let isValidated = true
        // Object.keys(userInfo).map(item => {
        //     console.log(item)
        // })
        for (const [key, value] of Object.entries(userInfo)) {
            console.log('here', value.value.length)
            if(value.value.length === 0) {
                setUserInfo(prev => {
                    return {
                        ...prev,
                        [key]: {...value, error: true }
                    }
                })
                isValidated = false
            }
          }
          
        if(isValidated) setIsDialogOpen(true)
    }
    const handleDialogClose = () => setIsDialogOpen(false)

    const totalAmount = useMemo( () => cartItems.reduce(
        (accumulator, currentValue) => accumulator + (Number(currentValue.price) * currentValue.quantity),
        0
      ), [] );

    return (
        <>
        <Typography variant='h1'>Total amount is: {totalAmount}USD </Typography>
        <Typography variant='h2'>Please Enter your information</Typography>
        <Grid container spacing={2} sx={{maxWidth: '1280px', margin: 'auto'}}>
            <Grid item xs={6}>
                <InputLabel>Enter First Name</InputLabel>
                <TextField fullWidth placeholder='John' name='firstName' onChange={handleChange} error={userInfo.firstName.error} />
            </Grid>
            <Grid item xs={6}>
                <InputLabel>Enter Last Name</InputLabel>
                <TextField fullWidth placeholder='Doe' name='lastName' onChange={handleChange} error={userInfo.lastName.error}/>
            </Grid>
            <Grid item xs={6}>
                <InputLabel>Enter Country</InputLabel>
                <TextField fullWidth placeholder='Georgia' name='country' onChange={handleChange} error={userInfo.country.error} />
            </Grid>
            <Grid item xs={6}>
                <InputLabel>Enter City</InputLabel>
                <TextField fullWidth placeholder='Tbilisi' name='city' onChange={handleChange} error={userInfo.city.error}/>
            </Grid>
            <Grid item xs={12}>
                <InputLabel>Enter address</InputLabel>
                <TextField fullWidth placeholder='Baker Str' name='street' onChange={handleChange} error={userInfo.street.error}/>
            </Grid>
        </Grid>
        <Button variant='outlined' color='primary' onClick={handleProcced}>Procced</Button>
        {
            isDialogOpen && <CheckoutDialog isOpen={isDialogOpen} information={userInfo} handleClose={handleDialogClose}  price={totalAmount} />
        }
        </>
    )
}

export default Checkout