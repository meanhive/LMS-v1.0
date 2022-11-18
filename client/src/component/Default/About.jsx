import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = `LMS-v1.0 About`
  })

  return (
    <div>About</div>
  )
}

export default About