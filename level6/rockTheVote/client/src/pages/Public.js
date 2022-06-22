import React, {useContext, useEffect} from 'react'
import {UserContext} from '../context/UserProvider2.js'
import PublicIssue from '../components/PublicIssue.js'




export default function Public() {


  const { user: { username }, getAllIssues, allIssues} = useContext(UserContext)


    const issueDisplay = allIssues.map(issue => {
        return <PublicIssue key={issue._id} {...issue}/>
    })

    useEffect(() => {
        getAllIssues();
        // eslint-disable-next-line
    }, [allIssues.length])

  return (
    <div>
      {issueDisplay}
    </div>
  )
}
