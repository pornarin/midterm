import React from 'react'
import Nav from './Nav'
function Home() {
  const user = {

}
  return (
    <>
    <Nav/>
    <div>
      <h3>Welcome To My Profile</h3>
      <img src={user.imgPic} width="500px" height="900px" alt=""/>
    </div>
    </>
  )
}

export default Home