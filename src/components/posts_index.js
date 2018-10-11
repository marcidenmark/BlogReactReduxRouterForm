import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				Posts Index TKTK
			</div>
		);
	}
}

// es6 =>
export default connect(null, { fetchPosts })(PostsIndex);
// no es6 => export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);
//above the null is because there is NO map state to props.

//the wiring on line 17-- the action creator instead of using mapDispatchToProps--
// the second part { fetchPosts } is doing the same as a mapDispatchToProps
// you can use this abreviated syntax when you don't need to do some computing in the action creator.
