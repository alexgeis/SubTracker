import '../SingleSub/singleSub.css'
import { Container, Card, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl}  from "react-bootstrap";

function SingleSub() {
    return (
    
        <div class="container-fluid">     
<h1>Subscription Name</h1>
        

<div className="container">
       <h1>Netflix</h1>

<div>
<p>Next Due Date</p>
<p>Date</p>


</div>
<div>
<p>Next Due Date</p>
<p>Date</p>


</div>
<div>
<p>Next Due Date</p>
<p>Date</p>


</div>
<div>
<p>Next Due Date</p>
<p>Date</p>


</div>
<div>
<p>Next Due Date</p>
<p>Date</p>


</div>
<div>
<p>Next Due Date</p>
<p>Date</p>


</div>
<div>
<p>Next Due Date</p>
<p>Date</p>


</div>
<div>
<p>Next Due Date</p>
<p>Date</p>



<InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
</InputGroup>
    <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
</InputGroup>


    <InputGroup>
    <InputGroup.Text>Description</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
</InputGroup>

    <div className="mb-2">
        <Button variant="primary" size="lg">
            Edit
        </Button>{" "}
        <Button variant="danger" size="lg">
            Delete
        </Button>
        </div>
    </div>
    </div>
    </div>
);
}

export default SingleSub;