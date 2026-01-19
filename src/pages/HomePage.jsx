import BackgroundCard from "../components/Home/BackgroundCard"
import SaleCard from '../components/Home/SaleCard'
import BlockCard from '../components/Home/BlockCard'
import ElectronicsCard from '../components/Home/ElectronicsCard'
import InquiryCard from '../components/Home/InquiryCard'
import ProductItems from '../components/Home/ProductItems'
import Navbar from "../components/Navbar"
import MenuNavbar from "../components/MenuNavbar"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MenuNavbar />
      <BackgroundCard />
      <SaleCard />
      <BlockCard />
      <ElectronicsCard />
      <InquiryCard />
      <ProductItems />
      <img src="/extraservice.png" className="w-[1180px] h-[256px] m-auto my-6 hidden md:block" />
      <img src="/supplier.png" className="w-[1177px] h-[138px] m-auto my-16 hidden md:block"/>
      <img src="/newsletter.png" className="w-full my-3 hidden md:block" />
      <img src="/footer.png" className="w-full hidden md:block" />
    </>
  )
}

export default HomePage