import React from 'react'
import Nav from './Nav'

function Profile() {
    const user = {
        firstName: "Pornnarin",
        lastName: "Karnasuta",
        Number: "6301083",
      }
  return (
    <>
    <Nav/>
    <div>
      <h6>My name is {user.firstName} {user.lastName} {user.Number} </h6>
    
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '115vh', margin: '0' }}>
    </div>
    </div>
    </>
  )
}

export default Profile