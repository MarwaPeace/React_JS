import Carousel from 'react-bootstrap/Carousel';
import CarouImgc from '../Assets/1.jpg';
import CarouImgv from '../Assets/2.jpg';
import CarouImgb from '../Assets/3.jpg';
function TopHeaderr() {
  return (
    <>
   
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouImgc}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Votre marque </h3>
          <p>Adiddas, confortable, sport, élegance pour toujour.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouImgv}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Votre solitude</h3>
          <p>Adidas, marque de la force.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouImgb}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bonne aptitude</h3>
          <p>
           Adidas, l'aptitude pour toujour.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
export default TopHeaderr;
