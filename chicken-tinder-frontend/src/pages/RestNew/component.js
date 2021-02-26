import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class RestNew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: "",
        price: "",
        location: "",
        category: "",
        image: ""
      }
    }
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  };
};