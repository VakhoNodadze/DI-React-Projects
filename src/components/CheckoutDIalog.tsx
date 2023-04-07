import { FC } from 'react'
import Dialog from '@mui/material/Dialog';
import { Typography, DialogTitle } from '@mui/material'
import { TUserInfo } from '../pages/Checkout/Checkout'


type CheckoutDialogProps = {
    isOpen: boolean;
    handleClose: () => void;
    information: TUserInfo;
    price: number;
}

const CheckoutDialog: FC <CheckoutDialogProps> = ({isOpen, handleClose, information, price}) => {
    return (

    <Dialog onClose={handleClose} open={isOpen}>
    <DialogTitle variant='h2'>Your order has been sent {information.firstName.value } {information.lastName.value}  !</DialogTitle>
    
    <Typography variant='h4'>Total amount {price} USD </Typography>
    <Typography variant='subtitle1'>
        Your chosen address:
    </Typography>
        <Typography variant='subtitle1' color='primary'>Country: {information.country.value} </Typography>
        <Typography variant='subtitle1' color='primary'>City: {information.city.value} </Typography>
        <Typography variant='subtitle1' color='primary'>Street: {information.street.value} </Typography>
    </Dialog>
    )
}

export default CheckoutDialog