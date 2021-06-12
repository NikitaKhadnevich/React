import React from 'react';
import CatRender from './CatRender'

class CatItem extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         someCat: null,
      }
   }

   get catList() {
      const { someCat } = this.state;
      const { cat } = this.props;
      return someCat ? cat.reverse() : cat;
   }

   handleClick = () => this.setState(reverState => ({
         someCat: reverState.someCat === 'asc' ? 'desc' : 'asc'
      }))
   
   
   render() {
      const { cat } = this.props; // Забираю пропсами из  Accum результат фетча  CaTask
      
      console.log('cat from CatItem', cat)
      return Boolean(cat) && (
         <>  
            <button onClick={this.handleClick}>Click</button> 
            <h3> About cats </h3>
            <div className='myCats'>
               {this.catList.map(item => <CatRender key={item.id} {...item} />)} 
            </div> 
         </>   // Мы мапаем массив массив с cat и передаем  через провайдер уже элементы в блок отрисовки
      )
   }
}

export default CatItem