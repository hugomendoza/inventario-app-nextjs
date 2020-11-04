import { Col, Form, Input, Button } from 'reactstrap';
import data from "../products";

class NewProduct extends React.Component {
  constructor () {
    super();

    this.state = {
      id: "",
      name: "",
      description: "",
      price: "",
      quantity: "",
      data: data
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let data = [...this.state.data];

    data.push(
      {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        quantity: this.state.quantity
      }
    );

    this.setState({
      data,
      name: "",
      description: "",
      price: "",
      quantity: ""
    });
    console.log(data);
    console.log(data);
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <Col lg="7" className="px-8 py-2">
        <h4 className="text-base uppercase border-b pb-1">nuevo producto</h4>
        <Form
          onSubmit={ this.handleFormSubmit }
        >
          <div className="flex justify-between">
            <Input 
              className="border p-1 w-3/5 rounded"
              type="text"
              name="name"
              id="nameProduct"
              placeholder="Nombre" 
              value={ this.state.name }
              onChange={ this.handleInputChange }  
            />
            <Input 
              className="border p-1 w-1/5 mx-2 rounded"
              type="text" name="price"
              id="priceProduct"
              placeholder="Precio"
              value={ this.state.price }
              onChange={ this.handleInputChange }
            />
            <Input 
              className="border p-1 w-1/5 rounded"
              type="text"
              name="quantity"
              id="quatityProduct"
              placeholder="Cantidad"
              value={ this.state.quantity }
              onChange={ this.handleInputChange }
            />
          </div>
          <div className="flex justify-between mt-2 items-start">
            <Input 
              className="border w-4/5 resize-none h-24 p-1 rounded" 
              type="textarea"
              placeholder="Descripción"
              value={ this.state.description }
              onChange={ this.handleInputChange }
            />
            <Button color="primary" className="w-1/5 ml-2">Agregar</Button>
          </div>
        </Form>
      </Col>
    )
  }
}

export default NewProduct