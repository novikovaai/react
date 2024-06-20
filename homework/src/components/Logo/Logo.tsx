import {Link} from "react-router-dom";

function Logo() {

	return (
		<Link to={'/'}>
			<img src="/public/bookmark.svg" alt="Логотип в виде закладки"/>
		</Link>
	);
}

export default Logo;