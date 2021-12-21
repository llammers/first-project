import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <nav className='Navbar bg-light text-center'>
            <Link to='/' className='btn'>Home</Link>
            <Link to='/About' className='btn'>About</Link>
            <Link to='/Prodocks' className='btn'>Prodocks</Link>
        </nav>

    )

}
export default Navbar;