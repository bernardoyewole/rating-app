import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function DialogBox({ open, handleClose }) {
    const closeDialog = () => {
        handleClose();
    }

    return (
        <Dialog open={open} className='dialog'>
            <DialogTitle className='dialog-title'>
                {'React Dialog'}
            </DialogTitle>
            <DialogContent className='dialog-content'>
                <p>Created using the material ui library</p>
            </DialogContent>
            <DialogActions className='dialog-actions'>
                <button onClick={closeDialog} className=''>Close</button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox