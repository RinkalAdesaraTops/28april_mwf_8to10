import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Stack } from 'react-bootstrap';
const BootstrapExample = () => {
  return (
    <>
    <div>
      <button className='btn btn-primary'>Add</button>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
        </Stack>
    </div>
    </>
  )
}

export default BootstrapExample
