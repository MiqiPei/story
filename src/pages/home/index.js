import React, {Component} from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-image' alt='' src="http://www.designerspics.com/wp-content/uploads/2014/12/books_apple_free_photo.jpg"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
       this.props.changeHomeData();
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
        
    }
});
export default connect(null, mapDispatch)(Home);