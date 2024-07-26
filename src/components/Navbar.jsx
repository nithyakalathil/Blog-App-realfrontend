import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()

  const Logout=()=>{
    sessionStorage.clear()
    navigate("/")
  }
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BLOG APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
        <li class="nav-item">
          <Link class="nav-link" to="/c">CreatePost</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/v">ViewAllpost</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/m">ViewMyPost</Link>
        </li>
        <li class="nav-item">
          <button onClick={Logout}className="btn btn-success">Logout</button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar