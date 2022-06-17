import React, {useContext, useEffect} from 'react'
import {UserContext} from '../context/UserProvider2.js'
import PublicIssue from '../components/PublicIssue.js'




export default function Public() {


  const {getAllIssues, allIssues} = useContext(UserContext)

  console.log("allIssues:", allIssues)

    const issueDisplay = allIssues.map(issue => {
        return <PublicIssue key={issue._id} {...issue}/>
    })

    useEffect(() => {
        getAllIssues();
    }, [])

  return (
    <div>
      {issueDisplay}
    </div>
  )
}
