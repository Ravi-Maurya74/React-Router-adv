import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const params = useParams();
    console.log(params);
  return (
    <>
    <h1>Events Detail Page</h1>
    <p>The id is: {params.id}</p>
    </>
  )
}

export default EventDetailPage