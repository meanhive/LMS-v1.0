import React, { useContext } from 'react'
import { DataContext } from '../../GlobalContext'

function HRDashboard() {
  const context = useContext(DataContext)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3">HR dashboard</h3>
        </div>
      </div>
    </div>
  )
}

export default HRDashboard