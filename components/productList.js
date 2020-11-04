import { Col, Form, Input, Button, InputGroupAddon, InputGroupText, InputGroup, Table } from 'reactstrap';
import { Search, X } from 'react-feather';
import data from "../products";

class ProductList extends React.Component {
  render() {
    return(
      <Col lg="7" className="px-8 py-2">
        <h4 className="text-base uppercase border-b pb-1">Listado de Productos</h4>
        <Form className="pb-2">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Search size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Filtrar" />
          </InputGroup>
        </Form>
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
              data.map((data, key) => {
                return (
                  <tr key={key}>
                    <th className="font-bold leading-loose">{data.name}</th>
                    <th className="font-normal clamp-1 leading-loose">{data.description}</th>
                    <th className="font-normal leading-loose">${data.price}</th>
                    <th className="font-normal leading-loose">{data.quantity}</th>
                    <th><Button color="danger"><X size={16} /></Button></th>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Col>
    )
  }
}

export default ProductList