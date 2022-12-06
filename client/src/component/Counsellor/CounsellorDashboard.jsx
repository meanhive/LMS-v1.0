import React, { useContext } from 'react'
import { DataContext } from '../../GlobalContext'

function CounsellorDashboard() {
  const context = useContext(DataContext)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3">Counsellor dashboard</h3>
        </div>
      </div>
    </div>
  )
}

export default CounsellorDashboard