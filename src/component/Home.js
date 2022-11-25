import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row my-3">
          <div className="col-lg-8">
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
                  src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=740&t=st=1669102070~exp=1669102670~hmac=2a1354aff672311daf0774b33b20a8151abc50f4f77ec2497268011da4264d49"
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
          </div>
          {/* end */}
          <div className="col-lg-4 bg-light ">
            <h1 className="text-danger mt-5">Welcome To My Home</h1>
            <p className="mt-t p-3" style={{ textAlign: "justify" }}>
              Some dummy content writing here, just for fun.What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type spy.
            </p>
            <div className="d-flex gap-5 p-1">
              <Link className="text-decoration-none text-white" to="/about">
                <button type="button" className="btn btn-dark">
                  Image-search
                </button>
              </Link>
              <Link className="text-decoration-none text-white" to="/service">
                <button type="button" className="btn btn-dark">
                  Crup-App
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
