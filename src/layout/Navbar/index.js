import { Link, NavLink, useLocation } from 'react-router-dom';
import { Aside } from './styles';
import { Approutes } from '../../constants';
import { CaretDown, Dashboard, DashboardActive, Logo, Logout, Setting, SettingActive, Students, Trainers } from '../../assets/svgs';

const Navbar = () => {
	const { pathname } = useLocation();

	return (
		<Aside>
			<div className="logo">
				<Logo />
			</div>

			<nav>
				<ul>
					{navList.map((list) =>
						list.menu ? (
							<li className={`isDrop ${pathname.includes(list.link) ? 'hasActiveChild' : ''}`} key={list.name}>
								<div tabIndex={0}>
									<span>{list.svg.default}</span> {list.name} <CaretDown className="caret" />
								</div>

								<ul>
									{list.menu.map((child) => (
										<NavLink key={child.name} to={child.link} end>
											<li>{child.name}</li>
										</NavLink>
									))}
								</ul>
							</li>
						) : (
							<NavLink key={list.name} to={list.link} end>
								<li>
									<span className="active">{list.svg.active}</span> <span>{list.svg.default}</span> {list.name}
								</li>
							</NavLink>
						)
					)}
				</ul>

				<ul>
					<Link to={Approutes.auth.login}>
						<li>
							<Logout /> Logout
						</li>
					</Link>
				</ul>
			</nav>
		</Aside>
	);
};

export default Navbar;

const navList = [
	{
		name: 'Dashboard',
		link: Approutes.dashboard.index,
		svg: {
			default: <Dashboard />,
			active: <DashboardActive />,
		},
	},
	{
		name: 'Students',
		link: Approutes.students.initial,
		svg: {
			default: <Students />,
		},
		menu: [
			{ name: 'Active', link: Approutes.students.initial },
			{ name: 'Potential', link: Approutes.students.initial },
		],
	},
	{
		name: 'Trainers',
		link: Approutes.students.initial,
		svg: {
			default: <Trainers />,
		},
		menu: [
			{ name: 'Instructor', link: Approutes.students.initial },
			{ name: 'Mentor', link: Approutes.students.initial },
		],
	},
	{
		name: 'Settings',
		link: Approutes.settings.initial,
		svg: {
			default: <Setting />,
			active: <SettingActive />,
		},
	},
];
