import Carousel from 'react-bootstrap/Carousel';

function CarouselsHome() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.torontopubliclibrary.ca/content/services/leading-to-reading/images/leading-to-reading-services-hero.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>We're so glad you're here</h5>
          <p>We are ready to make your stay the best one ever! Welcome and enjoy your time with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.inspaceschoolfurniture.com/wp-content/uploads/2022/09/Shelving-in-School-Libraries.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>we are so happy you chose us for your stay</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ibm.com/blog/wp-content/uploads/2023/07/library-5012.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsHome;