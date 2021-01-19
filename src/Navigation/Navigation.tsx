import React from 'react';

const navigation: React.FC= () => {
  
  const hideTrophy = () => {
    let opac = document.getElementById("duc")!.style.display;
    opac === "none" ? document.getElementById("duc")!.style.display = "inline" : document.getElementById("duc")!.style.display = "none"
  }
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button onClick={() => hideTrophy()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Fish Types
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a className="dropdown-item" href="#">Bass</a></li>
                          <li><a className="dropdown-item" href="#">Sturgeon</a></li>
                          <li><a className="dropdown-item" href="#">Crappie</a></li>
                          <li><a className="dropdown-item" href="#">Halibut</a></li>
                          <li><a className="dropdown-item" href="#">Stingray</a></li>
                          <li><a className="dropdown-item" href="#">Tiger Shark</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Lure Types
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a className="dropdown-item" href="#">Drop shot</a></li>
                          <li><a className="dropdown-item" href="#">Carolina  Rig</a></li>
                          <li><a className="dropdown-item" href="#">Spinner Bait</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Fish Size
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a className="dropdown-item" href="#">0 <span>&#60;</span> 15 inches</a></li>
                          <li><a className="dropdown-item" href="#">16 <span>&#60;</span> 30 inches</a></li>
                          <li><a className="dropdown-item" href="#">31 inches<span>&#62;</span></a></li>
                        </ul>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default navigation;