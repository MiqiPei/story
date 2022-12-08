import React, { Component } from 'react'
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


export default class Header extends Component {
  render() {
    return (

      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>Homepage</NavItem>
          <NavItem className='left'>Downloa App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe614;</i>
          </SearchWrapper>
        </Nav>
          <Addition>
            <Button className='writting'><i className="iconfont">&#xe615;</i>Post</Button>
            <Button className='reg'>Register</Button>
          </Addition>
        
      </HeaderWrapper>
   
    )
  }
}
