import './CheckOutForm.css'
import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';

const CheckOutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email
    };

    onConfirm(userData);
  };

  return (
    <div className='Container'>
      <form onSubmit={handleConfirm} className='form'>
        <FloatingLabel controlId="floatingInput" label="Nombre y Apellido">
          <Form.Control className='label'
          type='text'
          value={name}
          onChange={({ target }) => setName(target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Telefono">
          <Form.Control className='label'
          type='text'
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Correo Electrónico">
          <Form.Control className='label'
          type='text'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          />
        </FloatingLabel>
        <div className='FormButton'>
          <Button type='submit' variant='success'>Crear Orden</Button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
