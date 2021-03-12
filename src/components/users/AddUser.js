import React from 'react'

const AddUser = () => {
    return (
        <div className = "container">
           <div className = "w-75 mx-auto shadow p-5">
              <h2 className = "text-center mb-4">Add A User</h2>
             <form>
                 <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name = "name"
                    />
                 </div>
                 <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control form-control-lg"
                        placeholder="Enter Your Username"
                        name = "username"
                    />
                 </div>
                 <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control form-control-lg"
                        placeholder="Enter Your E-mail Address"
                        name = "email"
                    />
                 </div> 
                 <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name = "phone"
                    />
                 </div>
                 <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control form-control-lg"
                        placeholder="Enter Your Website Name"
                        name = "website"
                    />
                 </div>
                 <button className = "btn btn-primary btn-block">Add User</button>
              </form>
           </div>   
        </div>
    )
}

export default AddUser;
