import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { setNameThunk,setVisibleThunk } from '../../redux/AppReducer';


class HeaderContainer extends  React.Component {
  componentDidMount(){
   
  }
  render(){
    return (
      <div>
          <Header {...this.props} />
      </div>
    );
  }
 
}
let mapStateToProps=(state)=>{
    return{
         name:state.app.name,
         lang:state.app.lang,
         visible:state.app.visible,
         title:state.app.title
    }
}

export default compose(
  connect(mapStateToProps,{setNameThunk,setVisibleThunk})
)(HeaderContainer);
