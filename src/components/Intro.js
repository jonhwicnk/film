import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">NONTON FILM</div>
            <div className="title">TANPA BAYAR</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">Liat Semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Intro