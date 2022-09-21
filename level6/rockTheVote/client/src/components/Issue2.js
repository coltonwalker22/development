import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider2.js'

export default function Issue(props) {
  const { user, title, description, datePosted, _id, username } = props

  const { userAxios, getUserIssues } = useContext(UserContext)


  const [showComments, setShowComments] = useState(false)
  const [inputs, setInputs] = useState({ comment: "" })
  const [issueComments, setIssueComments] = useState([])


  function newGetComments(issueId) {
    userAxios.get(`api/issue/comments/${issueId}/comments`)
      .then(res => setIssueComments(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addIssueComment(issueId, newComment) {
    userAxios.post(`api/issue/comments/${issueId}/comments`, newComment)
      .then(res => setIssueComments(prevState => [...prevState, res.data]))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function editIssue(issueId, inputs){
    let update = {
      comment: inputs.comment
    }
    userAxios.put(`api/issue/comments/${issueId}/comments`, update)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data.errMsg))
      setIssueComments(prevIssue => prevIssue.map(issue => (issue._id === issueId ?
        {...issue, comment: inputs.comment} : issue)))
    
  }

  // function handleDelete(){
  //   userAxios.delete(`/api/ingredients/${_id}`, {userId: user._id})
  //   .then(res =>{
  //       set(prevIngredients => prevIngredients.filter(ingredient => ingredient._id !== _id? ingredient:res.data))
  //   })
  //   .catch(err => console.log(err))
// }

  useEffect(() => {
    newGetComments(_id)
    getUserIssues(_id)
    // eslint-disable-next-line
  }, [])

  function onChange(e) {
    const { name, value } = e.target
    setInputs(prevState => ({ ...prevState, [name]: value }))

  }

  function submission(e) {
    e.preventDefault()
    addIssueComment(_id, inputs)
  }


  console.log(issueComments)

  return (
    <div className="issue">
      <p>{username}</p>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{datePosted}</h3>
      <div>
        {issueComments.map(comment => <div>{comment.comment}</div>)}
      </div>
      <form onSubmit={submission}>
        <input 
          onChange={onChange}
          name="comment"
          type="text"
          value={inputs.comment}
          placeholder="Enter comment here..."/>
          <button>Submit</button>
      </form>
    </div>
  )
}
