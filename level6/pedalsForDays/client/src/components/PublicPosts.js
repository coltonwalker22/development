import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'

import { UserContext } from '../context/UserProvider.js'

export default  function PublicPost(props) {

    const { author, imgUrl, title, description, datePosted, _id } = props

    const { user, userAxios, getUserPosts, allUsers } = useContext(UserContext)

    // const [postComments, setPostComments] = useState([])

    // const [showComments, setShowComments] = useState(false)

    // const initInputs = { comment: ""}

    // const [inputs, setInputs] = useState({initInputs})

    // function newGetComments(postId) {
    //     userAxios.get(`api/pedalpost/comments/${postId}/comments`)
    //         .then(res => setPostComments(res.data))
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    // function addComment(postId, newComment){
    //     userAxios.post(`api/pedalpost/comments/${postId}/comments`, newComment)
    //         .then(res => setPostComments(prevState => [...prevState, res.data]))
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    // function onChange(e) {
    //     const {name, value} = e.target
    //     setInputs(prevState => ({...prevState, [name]: value}))
    //   }

    // function submitComment(e){
    //     e.preventDefault();
    //     addComment(_id, inputs);
    //     setInputs({ comment: ""});
    // }


    useEffect(() => {
        // newGetComments(_id)
        getUserPosts(_id)
    }, [])

    // console.log("allusers", allUsers)
    // console.log("postComments", postComments)

    console.log("allUsers", allUsers)
    console.log("_id", _id)
    console.log("user", user)

    
    return(
            <div className="publicPost">
            <h1 className="title">{title}</h1>
            <p> posted by: {allUsers.find(u => u._id === author).username}</p>
            <div><img className="public-post-img" src={imgUrl}></img></div>
            <p className="description">{description}</p>
            <h3> posted on {new Date(datePosted).toLocaleDateString()}</h3>
            <Link to={`/postpage/:${_id}`}>
            Go To Page</Link>
            {/* {!showComments ? 
            <div className="comment-button" onClick={() => setShowComments(!showComments)}>show comments</div>:
            <div className="comment-button" onClick={() => setShowComments(!showComments)}>hide comments</div>}
            {showComments ? <div>
                {postComments.map(comment => {
                    return <div key={comment._id} className="public-comment">
                        <small className='public-comment-user'>{allUsers.find(u => u._id ===  comment.user).username}</small>
                        <p>{comment.comment}</p>
                        <h4> commented on {new Date(datePosted).toLocaleDateString()}</h4>
                        <span className="delete-button"onClick={()=> {
                            if(user._id === comment.user){
                                    userAxios.delete(`api/pedalpost/comments/${_id}/comments/${comment._id}`)
                                    .then(res => {
                                        newGetComments(_id)
                                        alert(`Successfully deleted the comment`)
                                    })
                                    .catch(err => console.log(err))
                            } else {
                                alert("you can't delete this comment")
                            }
                        }}>Delete Comment</span>
                        </div>
                })}
            <form onSubmit={submitComment}>
                <input
                type="text"
                name="comment"
                onChange={onChange}
                value={inputs.comment}
                placeholder="add Comment"
                className="add-comment"
                />
                <button>send</button>
            </form>
            </div>: null} */}
            </div>

    )
}