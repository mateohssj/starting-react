import React from 'react';
import Button from 'react-bootstrap/Button';

function handleClick() {
    alert('Cacorro');
}

function ButtonBootstrap() {
  return (
    <div>
        <Button variant='primary' onClick={handleClick}>Click here!</Button>
    </div>
  )
}

export default ButtonBootstrap