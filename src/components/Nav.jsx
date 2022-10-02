import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}
const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/livability' style={linkStyle}>
        Cities
      </Link>
      |
      <Link to='/data_flow' style={linkStyle}>
        Data Flow
      </Link>
      |
      <Link to='/next_steps' style={linkStyle}>
        Next Steps
      </Link>
    </div>
  )
}
export default Nav
