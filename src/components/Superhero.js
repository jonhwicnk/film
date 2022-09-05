import { Card, Container, Row, Col, Image } from "react-bootstrap"
import batmanImage from "../assets/image/superhero/Batman.jpg"
import spidermanImage from "../assets/image/superhero/Spiderman.jpg"


const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image 
              src={batmanImage} className="image"
              alt="archer" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">Archer</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
              </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image 
              src={spidermanImage} className="image"
              alt="archer" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">Archer</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
              </Card>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}


export default Superhero