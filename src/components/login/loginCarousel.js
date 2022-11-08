import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../assets/img/banner-01.png';
import Banner2 from '../../assets/img/banner-02.png';

function LoginCarousel() {
  return (
    <Carousel className=' d-sm-none d-md-block'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
        <p className="text-start mb-0 fw-lighter">Bienvenido al nuevo</p><h3 class="text-start fw-regular text-uppercase">PORTAL DE Notas</h3> 
                        
        <p className="text-start mb-0 fw-lighter description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <p className="text-start mb-0 fw-lighter">Bienvenido al nuevo</p><h3 class="text-start fw-regular text-uppercase">PORTAL DE Notas</h3> 
                        
        <p className="text-start mb-0 fw-lighter description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p className="text-start mb-0 fw-lighter">Bienvenido al nuevo</p><h3 class="text-start fw-regular text-uppercase">PORTAL DE Notas</h3> 
                        
         <p className="text-start mb-0 fw-lighter description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LoginCarousel;