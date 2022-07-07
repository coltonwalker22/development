import React, {useEffect, useState, useContext} from 'react'
import { UserContext } from '../context/UserProvider.js'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const userAxios = axios.create()

export default function PostPage(props) {

    let params = useParams();
    let post_id = useParams();
    let {id} = useParams();
    let postId = id.slice(1)

    const { userAxios, getUserPosts, user, posts} = useContext(UserContext)

    const foundPost = posts.find(p => p._id === params.postId)
    
    const [allUsers, setAllUsers] = useState([])

    const [post, setPost] = useState([])

    const [ postComments, setPostComments] = useState([])


    const initInputs = { comment: ""}

    const [inputs, setInputs] = useState({initInputs})

    function getAllUsers(){
        userAxios.get('/api/user')
        .then(res => setAllUsers(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }



    function newGetComments() {
        userAxios.get(`/api/pedalpost/comments/${postId}/comments`)
            .then(res => setPostComments(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(postId, newComment){
        userAxios.post(`/api/pedalpost/comments/${postId}/comments`, newComment)
            .then(res => setPostComments(prevState => [...prevState, res.data]))
            .catch(err => console.log(err.response.data.errMsg))
    }
    
    function getPost(){
        userAxios.get(`/api/pedalpost/${postId}`)
        .then((res) => setPost(res.data))     
        .catch(err => console.log(err.response.data.errMsg))
    }

    function onChange(e) {
        const {name, value} = e.target
        setInputs(prevState => ({...prevState, [name]: value}))
    }
    
    function submitComment(e){
        e.preventDefault();
        addComment(post._id, inputs);
        setInputs({ comment: ""});
    }


    
    // console.log("psotId", post.id)
    // console.log("postId", postId)
    // console.log("Post", post)
    // console.log("comments", postComments)

    useEffect(() =>{
     getPost()
     newGetComments(postId)
     getAllUsers()
     getUserPosts(postId)
    },[])

console.log("allUsers", allUsers)
console.log("post.user", post.user)
// console.log("getUserposts", getUserPosts)
console.log("post", post)
console.log("posts", posts)

  return (
    <div className="postpage-background">
        <div className="postpage-container">
            <h1 className="postpage-title">{post.title}</h1>
            <p> posted by: {post.user?.username}</p>
            <h3 className="postpage-date"> posted on {new Date(post.datePosted).toLocaleDateString()}</h3>
            <div><img className="postpage-img" src={post.imgUrl}></img></div>
            <p className="postpage-description">{post.description}</p>
                {postComments.map(comment => {
                    return <div key={comment._id} className="postpage-comment">
                        <small className='postpage-comment-user'>{allUsers.find(u => u._id === comment.user)?.username}</small>
                        <p>{comment.comment}</p>
                        <h4 className="comment-date"> commented on {new Date(post.datePosted).toLocaleDateString()}</h4>
                        <span className="delete-button"onClick={()=> {
                            if(user._id === comment.user){
                                    userAxios.delete(`/api/pedalpost/comments/${post._id}/comments/${comment._id}`)
                                    .then(res => {
                                        newGetComments(post._id)
                                        alert(`Successfully deleted the comment`)
                                    })
                                    .catch(err => console.log(err))
                            } else {
                                alert("you can't delete this comment")
                            }
                        }}>Delete Comment</span>
                        </div>
                })}
            <div className="postpage-form-section">
                <form onSubmit={submitComment}>
                    <textarea
                    type="text"
                    name="comment"
                    onChange={onChange}
                    value={inputs.comment}
                    placeholder="add Comment"
                    className="postpage-add-comment"
                    />
                    <button>send</button>
                </form>
            </div>
        </div>
    </div>

  )
}
