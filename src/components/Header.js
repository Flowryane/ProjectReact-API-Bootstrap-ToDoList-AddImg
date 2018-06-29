import React from 'react';
import "./css/Header.css"

const Header = () => {
  return (
    <div>
    <ul className="nav bg-dark">
<li className="nav-item">
  <a className="nav-link active" href="#">Active</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item">
  <a className="nav-link disabled" href="#">Disabled</a>
</li>
</ul>
    </div>
  )
}

export default Header;
