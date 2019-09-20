import React from 'react';
import s from './components/Header/Header.module.css';
import sWrapper from './App.module.css';
import HeaderContainer from '../src/components/Header/HeaderContainer'

import { connect } from 'react-redux';
import { compose } from 'redux';


class AppContainer extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className={sWrapper.appWrapper}>
        <div className={s.content}>
          <HeaderContainer />
        </div>
      </div>
    );
  }

}


export default compose(
  connect(null, null)
)(AppContainer);
