import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://redxublog.herokuapp.com/api';
const API_KEY = '?key=marciBlog2';

export function fetchPosts () {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}
//ALL requests require a key parameter, eg
//`reduxblog.herokuapp.com/api/posts?key=123`
//
// GET	http://reduxblog.herokuapp.com/api/posts   (A)
// POST	http://reduxblog.herokuapp.com/api/posts   (B)
// GET	http://reduxblog.herokuapp.com/api/posts/5  (C)

//
// ENDPOINT    		METHOD 		EXAPMLE
// /api/posts			GET			http://reduxblog.herokuapp.com/api/posts
// /api/posts			POST			http://reduxblog.herokuapp.com/api/posts
// /api/posts/:id		GET		http://reduxblog.herokuapp.com/api/posts/5
// /api/posts/:id		DELETE	http://reduxblog.herokuapp.com/api/posts/5
