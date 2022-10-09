import './Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount'
import BusinessCenter from '@mui/icons-material/BusinessCenter'
import Chat from '@mui/icons-material/Chat'
import Notifications from '@mui/icons-material/Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth';

function Header() {

    const dispatch = useDispatch()

    const logoutOfApp = async () => {
        dispatch(logout())

        await signOut(auth)

    }

    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccount} title='My Network' />
                <HeaderOption Icon={BusinessCenter} title='Jobs' />
                <HeaderOption Icon={Chat} title='Messaging' />
                <HeaderOption Icon={Notifications} title='Notifications' />
                <HeaderOption
                    avatar={true}
                    title='me'
                    onClick={logoutOfApp}
                />

            </div>

        </div>
    )
}

export default Header