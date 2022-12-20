import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const{ focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length){
      for (let i = (page-1)*5; i < page*5; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }

    }
    
    if (focused || mouseIn) {
      return(
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>HOT!!!
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              Shuffle
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render(){
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return(
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>Homepage</NavItem>
          <NavItem className='left'>Downloa App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zon' : 'iconfont zoom'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
      </Nav><Addition>
          <Button className='writting'><i className="iconfont">&#xe615;</i>Post</Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    );   

  }
}



const mapStateToProps = (state) => {
  return{
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispathToProps = (dispatch) =>{
  return{
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if (originAngle) {
        originAngle = parseInt(originAngle,10);
      } else{
        originAngle =0;
      }
      spin.style.transform = 'rotate(' + (originAngle+360) + 'deg)';

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
      
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);
