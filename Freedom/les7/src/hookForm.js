import React from 'react'

export const hookForm = Component => {
   return class extends React.Component {
      state = {
         data: {
            names: null,
            email: null
         }
      }
   
   render() {
      const { data } = this.state;
      console.log(data)
      return data && <Component data={data} {...this.props} />
      }
   } 
}

export default hookForm