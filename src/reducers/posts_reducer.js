import _ from 'lodash';

import { FETCH_POSTS } from '../actions';

export default funtion (state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}
// pull of the key of every incoming post
//
//	___________________________
//
//
