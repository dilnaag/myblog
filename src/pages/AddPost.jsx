import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { NotFound } from './NotFound'

export const AddPost = () => {
    const {user}=useContext(UserContext)

    if(!user) return <NotFound />

    return (
        <div>AddPost</div>
    )
  
}

