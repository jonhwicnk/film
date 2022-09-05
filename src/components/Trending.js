import { Card, Container, Row, Col, Image } from "react-bootstrap"
import archerImage from "../assets/image/Trending/archer.jpg"
import jokerImage from "../assets/image/Trending/joker.jpg"
import tombraiderImage from "../assets/image/Trending/tomb-raider.jpg"


const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image 
              src={archerImage} className="image"
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
              src={jokerImage} className="image"
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
              src={tombraiderImage} className="image"
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


export default Trending