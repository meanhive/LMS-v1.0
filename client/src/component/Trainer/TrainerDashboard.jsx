import React, { useEffect, useContext } from 'react'
import { DataContext } from '../../GlobalContext';

function TrainerDashboard() {
  const context = useContext(DataContext)
  const [currentUser] = context.data.authApi.currentUser
  
  useEffect(() => {
    document.title = `Welcome,${currentUser.name},CMS-v1.0`;
  },[])

  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3">Trainer Dashboard</h3>
        </div>
    </div>
   </div>
  )
}

export default TrainerDashboard