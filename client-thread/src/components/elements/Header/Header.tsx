// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Header = () => {
	return (
		<header>
			<div className='container'>
				<div>
					<h2>PingPals</h2>
					<div>
						<img src='https://ui-avatars.com/api/?name=John+Doe' alt='' />
						<MdOutlineKeyboardArrowDown size={20} color='white' />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
