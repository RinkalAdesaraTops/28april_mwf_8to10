import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Stack,Form } from 'react-bootstrap';
const BootstrapExample = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className="row">
            <div className="col-6 bg-primary">fghgh</div>
            <div className="col-6 bg-warning">gfdhfgh</div>
        </div>
    </div>
    {/* <div>
      <button className='btn btn-primary'>Add</button>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
        </Stack>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div> */}
    </>
  )
}

export default BootstrapExample
