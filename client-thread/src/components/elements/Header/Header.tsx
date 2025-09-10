// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { PAGES } from '../../../shared/config/Pages.config'

const Header = () => {
	return (
		<header className='w-full bg-gray-950/80 rounded-xl mt-5 backdrop-filter backdrop-blur fixed top-0 left-0 z-50'>
			<div className='container'>
				<div className='flex items-center justify-between p-3 rounded-md'>
					<Link
						to={{ pathname: PAGES.SIGN_IN }}
						className='p-1 px-4 bg-blue-700 hover:bg-blue-700/90 text-sm text-white rounded-lg cursor-pointer'
					>
						Login
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
