import {useLocation} from 'react-router-dom'
import {Home2} from 'iconsax-react'
import Menu from '../component/Menu'

const Home = () => {
    const path = useLocation().pathname
    console.log(path)
  return (
    <>
    <Menu label='text button' link='/' children={<Home2/>}/>
    </>
  )
}

export default Home