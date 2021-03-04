import React from 'react'

export const HocData = (Component) => {
   return class MyHoc extends  React.Component {
      state = {
         postHoc: 'Стэйт хука',
      }
      
      render() {
         const { postArr, postHoc } = this.state;
         return (
            <div>
               <Component postArr={postArr} {...this.props} />
            </div>
         )
      }
   }
}   

export default HocData