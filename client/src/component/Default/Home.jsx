import React, { useEffect } from 'react'

function Home() {

  useEffect(() => {
    document.title = `LMS-v1.0 Home`
  })

  return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3">Welcome to LMS-v1.0</h1>
            </div>
          </div>
        </div>
  )
}

export default Home