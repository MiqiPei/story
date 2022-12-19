import { fromJS } from 'immutable';
const defaultState = fromJS({
    topicList: [{
        id:1,
        title: "Health",
        imgUrl: "http://www.designerspics.com/wp-content/uploads/2015/06/Country-Fig-bread-and-dry-fuits_free_photo.jpg"
    },{
        id:2,
        title: "Travel",
        imgUrl: "http://www.designerspics.com/wp-content/uploads/2014/07/fallen_leaves_free_photo.jpg"
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
    
}