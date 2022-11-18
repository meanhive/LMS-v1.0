import React, { useEffect } from 'react'

function Home() {

  useEffect(() => {
    document.title = `LMS-v1.0 Home`
  })

  return (
    <div>Home</div>
  )
}

export default Home