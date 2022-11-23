import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149620.jpg?w=740&t=st=1669102033~exp=1669102633~hmac=798ac2819c82450c283bba93e12d4f47773f7d7b884359562a3ecedca966bd2e"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=740&t=st=1669102070~exp=1669102670~hmac=2a1354aff672311daf0774b33b20a8151abc50f4f77ec2497268011da4264d49"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/waistup-portrait-cute-beautiful-asian-woman-orange-hoodie-introduce-produce-banner-pointing-blank-white-space-holding-product-smiling-recommend-advertisement-white-background_176420-51222.jpg?w=740&t=st=1669102106~exp=1669102706~hmac=8ab7df55720218b5e1471a685f50784bd0b70e7d2f1f3e921643e10638f8a99a"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
