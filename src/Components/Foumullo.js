import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Foumullo.css';
function Formullo (){
    return(
<>
<Form className='formulo'>
    <div className='name1'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Entrer votre address email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>
      <div className='btn'>
      <Button  variant="primary" type="submit">
        Envoyer
      </Button>
      </div>
    </Form>
</>
    );
}
export default Formullo;