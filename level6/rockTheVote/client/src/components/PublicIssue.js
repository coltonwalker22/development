import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/UserProvider2.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'

// const userAxios = axios.create()

export default function PublicIssue(props) {
    const {author, title, description, datePosted, _id, upVotes, downVotes} = props

    
    const { userAxios, getUserIssues, user, allUsers } = useContext(UserContext)
    
    const [issueComments, setIssueComments] = useState([])
    
    const [showComments, setShowComments] = useState(false)
    
    const initInputs = {comment: ""}
    
    const [inputs, setInputs] = useState({initInputs})

    const [ upVoteCount, setUpVoteCount] = useState(upVotes)

    const [ downVoteCount, setDownVoteCount] = useState(downVotes)

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

    function handleVote(action){
        if(upVoteCount.includes(user._id) && action === "upvote"){
            userAxios.put(`api/issue/${_id}/remove`)
                .then(res => {
                    setUpVoteCount(res.data.upVotes)
                    setDownVoteCount(res.data.downVotes)            
                })
            .catch(err => console.log(err))

        } else if(downVoteCount.includes(user._id) && action === "downvote"){
            userAxios.put(`api/issue/${_id}/remove`)
                .then(res => {
                    setUpVoteCount(res.data.upVotes)
                    setDownVoteCount(res.data.downVotes)            
                })
            .catch(err => console.log(err))
        } else {
            userAxios.put(`api/issue/${_id}/${action}`)
                .then(res => {
                    setUpVoteCount(res.data.upVotes)
                    setDownVoteCount(res.data.downVotes)            
                })
              .catch(err => console.log(err))
        }
    }


    // function handleUpVote(){
    //     if(upVotes.includes(user)) return // contains will not compile
    //     userAxios.put(`api/issue/${_id}/upvote`)
    //       .then(res => {
    //         setUpVoteCount(res.data.upVotes.length)
    //         setDownVoteCount(res.data.downVotes.length)            
    //       })
    //       .catch(err => console.log(err))
    //   }
    
    // function handleDownVote(){
    //     if(downVotes.includes(user))  return      
    //       userAxios.put(`api/issue/${_id}/downvote`)
    //         .then(res => {
    //             setDownVoteCount(res.data.downVotes.length)            
    //             setUpVoteCount(res.data.upVotes.length)
    //         })
    //         .catch(err => console.log(err))
        
    // }

    // function handleRemoveVote(e){
    //     e.preventDefault()
    //         userAxios.put(`api/issue/${_id}/remove`)
    //             .then(res => {
    //                 setDownVoteCount(res.data.downVotes.length)            
    //                 setUpVoteCount(res.data.upVotes.length)
    //             })
    //             .catch(err => console.log(err))
    // }
    

    useEffect(()=> {
        
        newGetComments(_id)
        getUserIssues(_id)
        // eslint-disable-next-line
    }, [])

    // console.log("issueComments:", issueComments)
    // console.log("setInputs", inputs)
    // console.log("user:", user, "username:", username)
    return(
    <div className="issue-container">
        <div className="vote-container">

            
            {/* <FontAwesomeIcon icon={faSpinner} size="6x" spin /> */}
            <h1 className="upvote-container" onClick={() => handleVote("upvote")}><FontAwesomeIcon className="upvote-icon" icon={faThumbsUp} size="lg"/>{`${upVoteCount.length}`}</h1>
           <h1 className="downvote-container" onClick={() => handleVote("downvote")}><FontAwesomeIcon className="downvote-icon" icon={faThumbsDown} size="lf"/>{`${downVoteCount.length}`}</h1>
        </div>
        <div className="publicIssue">
            <h1>{title}</h1>
            <p> posted by: {allUsers.find(u => u._id === author).username}</p>
            <h2>{description}</h2>
            <h3> posted on {new Date(datePosted).toLocaleDateString()}</h3>
            {!showComments ? 
            <h4 className="comment-button" onClick={() => setShowComments(!showComments)}>show comments</h4>:
            <h4 className="comment-button" onClick={() => setShowComments(!showComments)}>hide comments</h4>}
            {showComments ? <div>
                {issueComments.map(comment => {
                    return <div key={comment._id} className="public-comment">
                        <small className='public-comment-user'>{allUsers.find(u => u._id === comment.user).username}</small>
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