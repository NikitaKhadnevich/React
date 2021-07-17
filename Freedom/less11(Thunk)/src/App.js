import React from 'react';
import Test from './_HOME/components/Test/index';
import SpinnerHome from './_HOME/components/SpinerHome/SpinerHome';
import RouterData from './_HOME/router/Router'
// import Data from './LESS/components/Data/index';
// import Spinner from './LESS/components/Spinner/index';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <>
      <SpinnerHome />
      <div className='App'>
        <RouterData />
        {/* <Spinner />
        <Data /> */}
      </div>
      </>
    );
  }
}

export default App;
