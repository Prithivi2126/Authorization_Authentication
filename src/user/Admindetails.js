import React from 'react'

const Admindetails = () => {
//`http://localhost:8080//api/user/getUser/${username}`

  return (
    <div>
    <div className='list'> 
     <h3 className='mt-3 fw-bold'>User Details</h3>
           <div className="table_change">
           <table className="table mt-4 container  border-1">
             <thead>
               <tr>
                 <th scope="col">SI.NO</th>
                 <th scope="col">Username</th>
                 <th scope="col">Email</th>
                 <th scope="col">mobileNo</th>
                 <th scope="col">Password</th>
                 <th scope="col">confirmPassword</th>
                 <th scope="col">UserRole</th>        
               </tr>
             </thead>
             <tbody>
               
             </tbody>
             </table>
         </div>
       </div>
           
       </div>
  )
}

export default Admindetails