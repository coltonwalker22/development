import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/UserProvider2.js'
import upvoteimage from '../images/upvote.png'
import downvoteimage from '../images/downvote.png'
// import axios from 'axios'

// const userAxios = axios.create()

export default function PublicIssue(props) {
    const {user, title, description, datePosted, _id, upVotes, downVotes} = props

    
    const { user: { username }, userAxios, getUserIssues} = useContext(UserContext)
    
    const [issueComments, setIssueComments] = useState([])
    
    const [showComments, setShowComments] = useState(false)
    
    const initInputs = {comment: ""}
    
    const [inputs, setInputs] = useState({initInputs})

    function newGetComments(issueId){
        userAxios.get(`api/issue/comments/${issueId}/comments`)
            .then(res => setIssueComments(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(issueId, newComment){
        userAxios.post(`api/issue/comments/${issueId}/comments`, newComment)
            .then(res => setIssueComments(prevState => [...prevState, res.data]))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function onChange(e) {
        const {name, value} = e.target
        setInputs(prevState => ({...prevState, [name]: value}))
      }

    function submitComment(e){
        e.preventDefault();
        addComment(_id, inputs);
        setInputs({ comment: ""});
    }

    function handleUpVote(e){
        e.preventDefault()
        // if(upVotes.includes(user._id)){
        //     handleRemoveVote(_id)
        // } else{
        const vote = _id
        console.log("it worked!")
        userAxios.put(`api/issue/${vote}/upvote`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
        // }
      }
    
    function handleDownVote(e){
        e.preventDefault()
        const vote = _id
        if(downVotes.includes(user._id)){
            console.log("user",user)
            handleRemoveVote(_id)
        } else{
          console.log("user",user)
          userAxios.put(`api/issue/${vote}/downvote`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
    }

    function handleRemoveVote(e){
        e.preventDefault()
        console.log("clicked")
            const vote = _id
            userAxios.put(`api/issue/${vote}/remove`)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
    }
    
    // function getUsername(){
    //     const person = user
    //     if()
    // }

    useEffect(()=> {
        
        newGetComments(_id)
        getUserIssues(_id)
        // eslint-disable-next-line
    }, [])

    console.log("issueComments:", issueComments)
    console.log("setInputs", inputs)
    console.log("user:", user, "username:", username)
    return(
    <div className="issue-container">
        <div className="vote-container">
            <h1 onClick={handleUpVote}><img src={upvoteimage} alt=""/>{`likes: ${upVotes.length}`}</h1>
           <h1 onClick={handleDownVote}><img src={downvoteimage} alt=""/>{`dislikes: ${downVotes.length}`}</h1>
           <button onClick={handleRemoveVote}> remove vote</button>
        </div>
        <div className="publicIssue">
            <p>{user}</p>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{new Date(datePosted).toLocaleDateString()}</h3>
            {!showComments ? 
            <h4 className="comment-button" onClick={() => setShowComments(!showComments)}>show comments</h4>:
            <h4 className="comment-button" onClick={() => setShowComments(!showComments)}>hide comments</h4>}
            {showComments ? <div>
                {issueComments.map(comment => {
                    return <div key={comment._id} className="public-comment">
                        <small className='public-comment-user'>{comment.user}</small>
                        <p>{comment.comment}</p><span className="delete-button"onClick={()=> {
                            if(user._id === comment.user){
                                    userAxios.delete(`api/issue/comments/${_id}/comments/${comment._id}`)
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
                placeholder=" add Comment"
                className="add-comment"
                />
                <button>send</button>
            </form>
            </div>: null}
        </div>
     
    </div>
    )
}