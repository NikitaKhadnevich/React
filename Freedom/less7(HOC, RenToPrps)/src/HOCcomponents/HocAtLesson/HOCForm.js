import React from 'react'

export const HOCForm = (Component) => {
   return class extends React.Component {
      state = {
         data: {
            names: null,
            email: null,
         }
      }
   
   render() {
      const { data } = this.state;
      console.log(data)
      return data && 
         <div>
            <p>Ghbdn</p>
            <Component data={data} {...this.props} />
         </div>
      }
   } 
}

export default HOCForm