import './style/index.css';
import { useState } from 'react';
import StarRating from './components/StarRating';
import DialogBox from './components/DialogBox';

function App() {
  const ratingWords = ['Bad', 'Fair', 'Good', 'Very Good', 'Excellent'];
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const openDialog = () => {
    setOpen(true);
  }

  return (
    <div className="app">
      <StarRating ratingWords={ratingWords} />
      <DialogBox open={open} handleClose={handleClose}></DialogBox>
      <button className='open-dialog' onClick={openDialog}>OPEN DIALOG</button>
    </div>
  );
}

export default App;
