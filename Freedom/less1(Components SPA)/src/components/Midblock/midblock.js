import './styleMidblock.css';
import Slogan from './Slogan/slogan'
import Menu from '../Header/Menu/menu'
import DataSlogan from  './DataSlogan/dataSlogan'
import axios from 'axios'

// function letGet(baseUrl) {
//    return axios.get(baseUrl)
//    .then(res => console.log(res.data.id))
//    .catch(err => new Error('Ошибка в запросе GET'));
//  }
//  let myURL = 'https://jsonplaceholder.typicode.com/todos/1'
//  letGet(myURL)


const Midblock = () => {
   return (
   <div className ='midblock'>
      <Slogan className='slogan' message='Choose you favorit travel!'/>
      <div className='midBlockMenu'>
            <Menu name='Dreams with Sea' className={`sea`} datasea={`Sea is the emblem of strong emotions that are building in your mind and that are personalized with the detailed interpretation of various activities about sea in your dreams. To dream of listening to the soaring sound of sea but not able to view it depicts that you will lead a tedious and impassionate life.`}/>
            <Menu name='All about High Peak' className={`peak`} datapeak={`"Climb the mountains and get their good tidings. Nature’s peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop off like autumn leaves."`}/>
            <Menu name='Enjoy the Forest' className={`forest`} dataforest={`“This life is yours. Take the power to choose what you want to do and do it well. Take the power to love what you want in life and love it honestly. Take the power to walk in the forest and be a part of nature. Take the power to control your own life. No one else can do it for you. Take the power to make your life happy.”`}/>
      </div>
   </div>   
   )
}
export default Midblock