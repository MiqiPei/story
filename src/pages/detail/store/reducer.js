import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: 'What is "teamwork" to you?',
    content: '<img src="http://www.designerspics.com/wp-content/uploads/2014/10/paper_people_free_photo1.jpg"/><p><b>Teamwork is generally understood as the willingness of a group of people to work together to achieve a common aim. For example we often use the phrase:” he or she is a good team player”. This means someone has the interests of the team at heart, working for the good of the team.</b></p><p>Teamwork is generally understood as the willingness of a group of people to work together to achieve a common aim. For example we often use the phrase:” he or she is a good team player”. This means someone has the interests of the team at heart, working for the good of the team.</p><p>Teamwork is generally understood as the willingness of a group of people to work together to achieve a common aim. For example we often use the phrase:” he or she is a good team player”. This means someone has the interests of the team at heart, working for the good of the team.</p><p>Teamwork is generally understood as the willingness of a group of people to work together to achieve a common aim. For example we often use the phrase:” he or she is a good team player”. This means someone has the interests of the team at heart, working for the good of the team.</p>'
});
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        
                
        default:
            return state;
    }
    
}