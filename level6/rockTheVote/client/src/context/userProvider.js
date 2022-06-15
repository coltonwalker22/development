import React, {useState} from 'react'

export const UserContext = React.createContext()

export default function UserProvider(){
    const initState = { 
        user: {}, 
        token: "", 
        issue: [] 
    }

    const [userState, setUserState] = useState(initState)


    return(
        <UserContext.Provider
        value={{
            ...userState
        }}
        >
            { props.children}
        </UserContext.Provider>
    )
}