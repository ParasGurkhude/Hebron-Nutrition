import './App.css'
import { Navbar } from './components/Navbar'
import Ads1 from './Images/Ads1.webp'
import Ads2 from './Images/Ads2.webp'
import Ads3 from './Images/Ads3.webp'
import Ads from './components/Ads'
import { TopBrands } from './components/TopBrands'
import { FeaturedProducts } from './components/FeaturedProducts'
import { BestSellers } from './components/BestSellers'
import { Information } from './components/Information'
import { Footer } from './components/Footer'

function App() {
  const slides = [
    {path:`${Ads1}`},
    {path:`${Ads2}`},
    {path:`${Ads3}`},
  ]

  const containerStyles = {
    width: '100%',
    height: '749px',
  }
  return (
    <>
      <Navbar/>
      <div style={containerStyles}>
        <Ads slides={slides}/>
      </div>
      <TopBrands/>
      <FeaturedProducts/>
      <BestSellers/>
      <FeaturedProducts/>
      <Information/>
      <Footer/>
    </>
  )
}

export default App
