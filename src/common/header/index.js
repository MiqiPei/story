import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper, 
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style.js';

const Header = (props) => {
  return(
    <HeaderWrapper>
          <><Logo href='/' />
      <Nav>
      <NavItem className='left active'>Homepage</NavItem>
      <NavItem className='left'>Downloa App</NavItem>
      <NavItem className='right'>Login</NavItem>
      <NavItem className='right'>
        <i className="iconfont">&#xe636;</i>
      </NavItem>
      <SearchWrapper>
        <CSSTransition in={props.focused} timeout={200} classNames="slide">
          <NavSearch
            className={props.focused ? 'focused' : ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}></NavSearch>
        </CSSTransition>
        <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
      </SearchWrapper>
    </Nav><Addition>
        <Button className='writting'><i className="iconfont">&#xe615;</i>Post</Button>
        <Button className='reg'>Register</Button>
      </Addition></>
    </HeaderWrapper>
  )    
}


const mapStateToProps = (state) => {
  return{
    focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch) =>{
  return{
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur(){
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }

  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);
