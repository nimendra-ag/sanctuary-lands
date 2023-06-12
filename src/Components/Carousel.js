import Carousel from 'react-bootstrap/Carousel';
import  Button  from 'react-bootstrap/Button';

const carousel_details = [
  {
    imageSource: "../../img/car-image1.jpg",
    imageHeading: "THE SANCTUARY OF HOME",
    imageDescription: "Family breathes life into the walls of a home, turning it into a sanctuary of love and belonging."
},
{
  imageSource: "../../img/car-image1.jpg",
  imageHeading: "BUILDING DREAMS TOGETHER",
  imageDescription: "Within housing lands, family finds not just a physical space but a sanctuary to nurture their dreams."
},
{
  imageSource: "../../img/car-image1.jpg",
  imageHeading: "A FOUNDATION FOR TOMORROW",
  imageDescription: "Home becomes the canvas on which man paints his future, shaping his destiny with purpose."
},
{
  imageSource: "../../img/car-image1.jpg",
  imageHeading: "THE TRANQUIL UNION",
  imageDescription: "Family, Sunset, and the Sanctuary of Home."
},
{
  imageSource: "../../img/car-image1.jpg",
  imageHeading: "FEEL THE BEACH VIBE",
  imageDescription: "In the tranquil embrace of the coast, family finds harmony and solace in nature's masterpiece."
}
]

function CarouselItem(props){
  return (
    <Carousel.Item interval={2000} className='custom-carousel-item'>
        <img
          className="d-block w-100"
          src={props.source}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h5>{props.heading}</h5>
          <p>{props.description}</p>
          <Button>Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
  )
}

function createCarouselItems(){
  return(
    carousel_details.map((carousel_item) => {
      return(
        <CarouselItem
          source={carousel_item.imageSource}
          heading={carousel_item.imageHeading}
          description={carousel_item.imageDescription}
        />
      )
    })
  )
}

function Pagecarousel() {
  return (
    <Carousel className='custom-carousel-inner'>
      {createCarouselItems()}
   
      {/* <Carousel.Item interval={2000} className='custom-carousel-item'>
        <img
          className="d-block w-100"
          src={props.source}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h5>{props.heading}</h5>
          <p>{props.description}</p>
          <Button>Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item> */}

      {/* <Carousel.Item interval={2000} className='custom-carousel-item'>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400"
          alt="Second slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item> */}

      {/* <Carousel.Item interval={2000} className='custom-carousel-item'>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400"
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button>Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item> */}

    </Carousel>
  );
}

export default Pagecarousel;