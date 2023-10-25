import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/epsom_banner-1.png"
import banner2 from '../assets/LED-Catalogue_innerPage.p0021-1.jpg'
import banner3 from '../assets/banner4-2.jpg'
import banner4 from '../assets/banner3-2.jpg'
import banner5 from "../assets/banner2-2.jpg"
import banner6 from "../assets/banner8.jpg"
import banner7 from "../assets/banner1-1.jpg"


function Carous() {
  return (
    <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner3}
          alt="Third slide"
        />
         <Carousel.Caption style={{left:"0px"}} >
        <div>
          <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 courserone text-mdd-8' >Coffee table book launch function</div>
          </div>
          <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 coursertwo text-mdd-8' >Jaya Bachchan addressing the audience</div>
          </div>
          <div className="text-start my-md-3 my-0">
          <div className='text-start p-md-2 p-1 courserthree text-mdd-5' >New Delhi</div>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 courserone text-mdd-8'>Tempting! isn't it?</div>
        </div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 coursertwo text-mdd-8' >CMYK along with Abrasive & Emboss UV, and Matt Lamination on 220 Matt Art Card</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 courserone text-mdd-8' >Glossy finishing at its best</div>
        </div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 coursertwo text-mdd-8' >Glossy colours appealing to your senses</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner7}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 courserone text-mdd-8'>Designs packed with innovation</div>
        </div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 coursertwo text-mdd-8'>Delivering quality, harnessing latest technology.</div>
        </div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start p-2 courserthree text-mdd-5' >Offering printing solutions, not just printed materials.</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner6}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 courserone text-mdd-8'>Exhibiting our latest work</div>
        </div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start my-md-1 p-md-2 p-1 coursertwo text-mdd-8'>Pragati Maidan, New Delhi</div>
        </div>
        <div className="text-start my-md-3 my-0">
          <div className='text-start p-2 courserthree text-mdd-5' >3rd- 6th August, 2017</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner5}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
          <div className="text-start my-md-3 my-0" >
          <div className='text-start my-md-1 p-md-2 p-1 courserone text-mdd-8'>CMYK</div>
          </div>
          <div className="text-start my-md-3 my-0" >
          <div className='text-start my-md-1 p-md-2 p-1 coursertwo text-mdd-8' >Innovation is our passion</div>
          </div>
          <div className="text-start my-md-3 my-0" >
          <div className='text-start p-2 courserthree text-mdd-5' >White on Matt Silver MetPET, CMYK</div>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner4}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
          <div className='text-start my-md-3 my-0'>
          <div className='text-start my-md-1 p-md-2 p-1 courserone text-mdd-8' >Enhancing experience with alluring designs</div>
          </div>
          <div className='text-start my-md-3 my-0'>
          <div className='text-start my-md-1 p-md-2 p-1 coursertwo text-mdd-8' >125 Micron NTR Media,CMYK</div>

          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carous;