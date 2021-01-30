import Menu from './Menu/menu'
import Logo from './Logo/logo'
import './styleHeader.css';


const Header = () => {

   return (
      <div className='header'>
         <Logo className='logoHeader'
         links='#'
         imgLink='https://images.squarespace-cdn.com/content/563d1473e4b0a2c7d9edc755/1450118280542-ILWKWQ5SFSSMD72OJXCU/MBlogo.jpg?format=1500w&content-type=image%2Fjpeg' />
         <div className='headerMenu'>
            <Menu name='Price' className={`price`}/>
            <Menu name='Our Team' className={`team`}/>
            <Menu name='About US' className={`about`}/>
         </div>   
      </div>
   )
}
export default Header