import React from 'react';
import PreChild from './PreChild/PreChild'


class Child extends React.Component {

   render() {
      return (
         <>            
            <h1>
               {this.props.children}
            </h1>
            <PreChild>
               Этот блок преРебенка
            </PreChild>
         </>
      )
   }
}

export default Child