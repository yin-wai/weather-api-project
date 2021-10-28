import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
      <ul>
      <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/astronomy.json'>Astronomy</Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link to='./forecast.json'>Forecast</Link>
=======
          <Link to='/history.json'>Historical</Link>
>>>>>>> 3db7a6f035b7fc71177c87a13d54970b89cd17b4
        </li>
     </ul>
    </nav>
    </>
  )
}

export default Nav
