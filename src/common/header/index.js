import React, { Component } from 'react'
import {
    HeaderWrapper, 
    Logo,
    Nav,
    NavItem,
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
          <NavItem className='right'>Aa</NavItem>
          <NavSearch></NavSearch>
          <Addition>
            <Button className='writting'>Post</Button>
            <Button className='reg'>Register</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
   
    )
  }
}
