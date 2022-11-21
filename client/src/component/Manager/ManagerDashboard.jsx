import React, { useContext } from 'react'
import { DataContext } from '../../GlobalContext'

function ManagerDashboard() {
  const context = useContext(DataContext)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3">Manager dashboard</h3>
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard