import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';
import {
    HeaderWrapper, 
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style.js';

class Header extends Component{
  getListArea() {
    if (this.props.focused) {
      return(
        <SearchInfo>
          <SearchInfoTitle>HOT!!!
            <SearchInfoSwitch>
              Shuffle
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render(){
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
          <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={this.props.focused ? 'focused' : ''}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}></NavSearch>
          </CSSTransition>
          <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
          {this.getListArea()}
        </SearchWrapper>
      </Nav><Addition>
          <Button className='writting'><i className="iconfont">&#xe615;</i>Post</Button>
          <Button className='reg'>Register</Button>
        </Addition></>
      </HeaderWrapper>
    );   

  }
}



const mapStateToProps = (state) => {
  return{
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispathToProps = (dispatch) =>{
  return{
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }

  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);
