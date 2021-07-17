import React from 'react'
import Text from './Text'
import  DataContext from '../Context/DataContext'

function SubHeader() {
   return (
      <DataContext.Consumer>
         {( {body} ) => (
         <div>
            <h4>Some Text in Subheader </h4>
            <p>{body}</p>
            <hr></hr>
            <Text />
         </div>
         )}
      </DataContext.Consumer>
   )
}

export default SubHeader

