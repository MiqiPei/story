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
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
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
            <NavSearch 
            className={this.state.focused ? 'focused':''}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}>
            </NavSearch>
            <i className={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe614;</i>
          </SearchWrapper>
        </Nav>
          <Addition>
            <Button className='writting'><i className="iconfont">&#xe615;</i>Post</Button>
            <Button className='reg'>Register</Button>
          </Addition>
        
      </HeaderWrapper>
   
    )
  }

  handleInputFocus(){
    this.setState({
      focused: true
    })
  }
  handleInputBlur(){
    this.setState({
      focused: false
    })
  }
}
