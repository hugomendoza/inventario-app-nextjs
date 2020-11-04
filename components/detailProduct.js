import { Row, Col, Button } from 'reactstrap';
import { Plus, Minus } from 'react-feather';


class DetailProduct extends React.Component {
  render () {
    return (
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
    )
  }
}

export default DetailProduct
