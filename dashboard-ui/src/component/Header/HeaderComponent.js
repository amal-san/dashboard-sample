import AddUser from '../add/AddUserComponent';
import './HeaderComponent.scss'
const Header = ( { name } ) => {

    return (
        <div className="header">
            <div className='h-container'>
                <h1>Dashboard</h1>
                <AddUser/>
            </div>
        </div>
    )
}

export default Header;