import Form from './Form'
import Table from './Table'
import React from 'react';


class Parent extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         data: {
            Parentnumber: '0',
            Parentbrand: '',
            Parentmodel: '',
            Parentyear: '',
            Parentcost: '',
         },
      }
   }
   updateChild = (brand, model, year, cost) => {
      this.setState(prevState => ({
         ...prevState,
         data: {
            Parentbrand: brand,
            Parentmodel: model,
            Parentyear: year,
            Parentcost: cost,
         }
      }))
   }

   updateAll = (arg, arg2) => {
      return arg, arg2;
   }

   createClickController = () => {
      return this.updateAll()
   }

   render() {
      const { data: { Parentbrand, Parentmodel, Parentyear, Parentcost, Parentnumber} } = this.state
      return (
         <>
            <Table 
               updateAll={this.updateAll}
               number={Parentnumber}
               brand={Parentbrand}
               model={Parentmodel}
               year={Parentyear}
               cost={Parentcost}
            />
            <Form 
               updateChild={this.updateChild}
            />
            {/* <button onClick={this.createClickController}>Добавить</button> */}
            {/* передали пропс на клик */}
         </>
      )
   }
}

export default Parent