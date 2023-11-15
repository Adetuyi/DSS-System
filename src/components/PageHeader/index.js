import { useState } from 'react';
import { CaretDownFill, Logout, Menu } from '../../assets/svgs';
import { MobileNav } from '../../layout';
import { Header, MobileHeader } from './styles';
import { Icon } from '../../assets/images';

const PageHeader = ({ title, children }) => {
	const [nav, setNav] = useState(false);

	return (
		<Header>
			<MobileNav setNav={setNav} nav={nav} />
			<MobileHeader>
				<div>
					<div className="icon-con">
						<img src={Icon} alt="" />
						Eduguide
					</div>
					{children}
				</div>
				<Menu onClick={() => setNav(!nav)} />
			</MobileHeader>

			{title && <h3>{title}</h3>}
			<div className="welcome">{children}</div>

			<div className="profile">
				<div className="dropdown--con" tabIndex={0}>
					<div className="initials">ft</div>

					<div>
						<div className="name">Frontend Team</div>
						<div className="role">Admin</div>
					</div>
					<CaretDownFill />

					<ul className="dropdown">
						<li>
							<Logout /> Logout
						</li>
					</ul>
				</div>
			</div>
		</Header>
	);
};

export default PageHeader;
