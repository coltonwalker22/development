import React from 'react'
import Issue2 from './Issue2.js'

export default function IssueList(props) {
    const { issues, username} = props
  return (
    <div className="issue-list">
        
        {issues.map(issue => <Issue2 {...issue} key={issue._id} username={username} />)}
    </div>
  )
}
