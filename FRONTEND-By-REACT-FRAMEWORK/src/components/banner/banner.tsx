import banner from '../.././assets/images/RentalHome.png';
import './banner.css';

function Banner(){
  return (
    <div className='banner'>
      <div className='left-title'>

        <div className='qoute q-1'><div>Find Your Dream Home Today:</div> Rent with Bete Rental Home and Live Your Best Life!</div>
        <div className='qoute q-2'><div>Rent with Confidence: </div> Bete Rental Home Offers Quality, Free Rentals in Every City in Ethiopia.</div>
        <div className='qoute q-3'><div>Live Where You Love:</div> Bete Rental Home Offers Free Rentals in Your Favorite Cities Across Ethiopia.</div>



      </div>

     <div className='image'> <img className='image-Banner' src={banner} alt="" /></div>



     <div className='right-title'>

        
        <div className='qoute q-2'><div>Rent for Free:</div> Experience Comfortable Living in Every City Across Ethiopia with Bete Rental Home</div>
        <div className='qoute q-3'><div>Live in Style:</div> Discover High-Quality, Free Rental Homes in Every Corner of Ethiopia with Bete Rental Home</div>
        <div className='qoute q-1'><div>Experience More: </div>Rent for Free with Bete Rental Home and Discover the Best Rental Homes in Ethiopia</div>



      </div>
    </div>
  )
}
export default Banner;