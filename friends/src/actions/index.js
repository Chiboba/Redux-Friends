import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FREINDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchFriends = () => dispatch => {
dispatch({type: FETCHING_FRIENDS});
axios
.get('http://localhost:5000/api/friends')
.then(response => {
    console.log(response);
    dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: response.data})
}) 
.catch(error => {
    dispatch({type: FETCHING_FRIENDS_FAILURE, payload: error})
})
}

export const POSTING_FRIEND = 'POSTING_FRIEND';
export const POSTING_FRIEND_SUCCESS = 'POSTING_FRIEND_SUCCESS';
export const POSTING_FRIEND_FAILURE = 'POSTING_FRIEND_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const postFriend = (fname, fage, femail) => dispatch => {
dispatch({type: POSTING_FRIEND});
axios
.post('http://localhost:5000/api/friends', {
    name: fname,
    age: fage,
    email: femail
})
.then(response => {
    console.log(response);
    dispatch({type: POSTING_FRIEND_SUCCESS, payload: response.data})
}) 
.catch(error => {
    dispatch({type: POSTING_FRIEND_FAILURE, payload: error})
})
}

export const DELETING_FRIEND = 'DELETE_FRIEND';
export const DELETING_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETING_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const deleteFriend = (id) => dispatch => {
    dispatch({type: DELETING_FRIEND});
    axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
        dispatch({type: DELETING_FRIEND_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: DELETING_FRIEND_FAILURE, payload: error})
    })
}

export const FRIEND_UPDATE = 'FRIEND_UPDATE';

export const friendUpdate = (id) => {
    return {
      type: FRIEND_UPDATE,
      payload: id
    }
  };


export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATING_FRIEND_SUCCESS = 'UPDATING_FRIEND_SUCCESS';
export const UPDATING_FRIEND_FAILURE = 'UPDATING_FRIEND_FAILURE';

export const updateFriend = (id, name, age, email) => dispatch => {
    dispatch({type: UPDATING_FRIEND});
    axios
    .put(`http://localhost:5000/api/friends/${id}`, {
        name: name,
        age: age,
        email: email
    })
    .then(response => {
        dispatch({type: UPDATING_FRIEND_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: UPDATING_FRIEND_FAILURE, payload: error})
    })
}