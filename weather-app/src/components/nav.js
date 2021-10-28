import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/astronomy.json'>Astronomy</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav
