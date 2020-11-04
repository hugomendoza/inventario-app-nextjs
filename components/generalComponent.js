import { Container, Row, Col, Form, Button, Input, InputGroupAddon, InputGroupText, InputGroup, Table } from 'reactstrap';
import { Search, X, Minus, Plus } from 'react-feather';
import FilterResults from 'react-filter-search';

import data from "../products";


class GeneralComponent extends React.Component {
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
    this.removeProduct = this.removeProduct.bind(this);
    this.filterList = this.filterList.bind(this);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let data = [...this.state.data];

    data.push(
      {
        id: this.state.id++,
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        quantity: this.state.quantity
      }
    );

    this.setState({
      data,
      id: this.state.id++,
      name: "",
      description: "",
      price: "",
      quantity: ""
    });
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

  removeProduct = (id) => {
    this.setState(prevState => ({
      data: prevState.data.filter(item => item != id )
    }));
  }

  filterList(e){

    let updateList = this.state.data;

    if(e.target.value){
      updateList = updateList.filter(item => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      this.setState({
        data: updateList,
      });
    }
    else {
      this.setState({
        data: data,
      });
    }
  }

  render() {
    const items = this.state.data;
    return(
      <Container className="p-4">
        <h1 className="text-center text-2xl uppercase">Inventario App</h1>
        <Row>
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
                  name="description"
                  placeholder="Descripción"
                  value={ this.state.description }
                  onChange={ this.handleInputChange }
                />
                <Button color="primary" className="w-1/5 ml-2">Agregar</Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg="7" className="px-8 py-2">
            <h4 className="text-base uppercase border-b pb-1">Listado de Productos</h4>
            <InputGroup className="pb-2">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Search size={16} />
                </InputGroupText>
              </InputGroupAddon>
              <Input 
                placeholder="Filtrar" 
                onChange={this.filterList}
              />
            </InputGroup>
            <Table className="table table-striped table-borderless table-responsive">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Cant.</th>
                  <th>Borrar</th>
                </tr>
              </thead>
              <tbody className="text-left">
                {
                  items.map((item, key) => {
                    return (
                      <tr key={key}>
                        <th className="font-bold leading-loose">{item.name}</th>
                        <th className="font-normal clamp-1 leading-loose">{item.description}</th>
                        <th className="font-normal leading-loose">${item.price}</th>
                        <th className="font-normal leading-loose">{item.quantity}</th>
                        <th>
                          <Button
                            onClick={this.removeProduct.bind(this, item)}
                            color="danger">
                            <X size={16} />
                          </Button>
                        </th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
          <Col lg="5" className="px-8 py-2">
            <h4 className="text-base uppercase border-b pb-1">Detalle</h4>
            <h5 className="font-bold text-xl border-b py-2 m-0">Leche</h5>
            <Row>
              <Col lg="8" className="py-4 lg:border-r">
                <p className="bg-indigo-800 text-white p-1 rounded-lg text-base text-center w-20">$2.500</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iusto officiis aspernatur ullam, excepturi dicta laudantium sit minima velit illum vitae quo quos numquam! Provident vero quae distinctio obcaecati voluptates.</p>
              </Col>
              <Col lg="4" className="py-4">
                <div className="flex justify-center items-center h-16 w-16 bg-primary rounded-full mx-auto">
                  <p className="text-white">100</p>
                </div>
                <div className="flex justify-center items-center mt-3">
                  <Button color="secondary">
                    <Minus size={18} />
                  </Button>
                  <Button color="primary" className="ml-2">
                    <Plus size={18} />
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default GeneralComponent


