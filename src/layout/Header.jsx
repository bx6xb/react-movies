function Header() {
  return (
    <nav className="orange darken-2">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
