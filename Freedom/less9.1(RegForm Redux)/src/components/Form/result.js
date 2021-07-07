import React, { Component } from 'react'
import { connect } from 'react-redux';


class Result extends Component {


   render() {
      const { text, email, password, secname, birth, telephone,   } = this.props
      return (
         <>
            <p>{text}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{secname}</p>
            <p>{birth}</p>
            <p>{telephone}</p>
         </>
      )
   }
}

const mapStateToProps = ({ form }) => ({
   text: form.names,
   email: form.email,
   password: form.password,
   secname: form.secname,
   birth: form.birth,
   telephone: form.telephone,
});



export default connect(mapStateToProps)(Result);
