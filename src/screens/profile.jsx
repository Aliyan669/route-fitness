import React from 'react'
 import { useParams } from 'react-router-dom'
export default function Profile() {
    const params = useParams()
    // console.log(params)
  return (
    <div><h1>Welcome  {params.username}</h1></div>
  )
}
