import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/astronomy.json'>Astronomy</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
