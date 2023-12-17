import { PageHeader } from '../../../components';
import { getDateTime } from '../../../utilities';
import { Container, FlexBox } from './styles';
import { Boy, Classroom, Money, MoneyBag } from '../../../assets/images';
import { Pallet, PalletList, ProgressBar, TableContainer, CustomPieChart, BarChart } from '../../../ui';
import { Select } from 'antd';
import { Approutes, studentTableColumns } from '../../../constants';
import { useAuth } from '../../../hooks';

const LecturerDashboard = () => {
	// const [barData, setBarData] = useState('Revenue');
	const { user } = useAuth();

	// const handleGetYearBarData = (year) => {
	// 	console.log(year);
	// };
	// const handleGetYearPieData = (year) => {
	// 	console.log(year);
	// };

	return (
		<Container>
			<PageHeader>
				<div className="page--header">
					<h4>Welcome back, {user?.first_name} 🌞</h4>
					<p>
						This is your stats today - <span>{getDateTime(new Date(), 'mm dd yyyy')}</span>
					</p>
				</div>
			</PageHeader>

			<PalletList>
				{palletItems.map(({ title, body, color, image }) => (
					<Pallet key={title} title={title} body={body} color={color} image={image} />
				))}
			</PalletList>

			<FlexBox>
				<section className="statistics--con">
					<header className="statistics--header">
						<div>
							<h6>Attendance Rate</h6>
							{/* <div className="category">
								<span onClick={() => setBarData('Revenue')} className={barData === 'Revenue' ? 'active' : ''}>
									Revenue
								</span>
								<span onClick={() => setBarData('Student')} className={barData === 'Student' ? 'active' : ''}>
									Student
								</span>
							</div> */}
						</div>

						<div className="right--section">
							<Select
								defaultValue="last_week"
								style={{
									width: 120,
								}}
								onChange={(value) => {
									console.log(`selected ${value}`);
								}}
								options={[
									{
										value: 'last_week',
										label: 'Last Week',
									},
									{
										value: 'last_month',
										label: 'Last Month',
									},
									{
										value: 'last_year',
										label: 'Last Year',
									},
								]}
							/>
						</div>
					</header>

					<div>
						<BarChart
							title={'Attendance Rate'}
							subTitle={'Last 7 days'}
							barData={[
								{
									name: 'Revenue',
									data: [
										{
											x: 'Jan',
											y: 8000,
											name: 'january',
										},
										{
											x: 'Sep',
											y: 40000,
											// fillColor: '#126DA9',
											name: 'september',
										},
										{
											x: 'Dec',
											y: 0,
											fillColor: '#a5a5a5',
											name: 'december',
										},
									],
								},
							]}
						/>
					</div>
				</section>

				<section className="student--con">
					<header>
						<h6>Gender Distribution</h6>
					</header>
					<div>
						<CustomPieChart
							data={[
								{ label: 'Male', value: 30 },
								{ label: 'Female', value: 10 },
							]}
						/>
					</div>
				</section>
			</FlexBox>

			<FlexBox>
				<section className="table--con">
					<TableContainer
						columns={studentTableColumns}
						options={{ all_link: Approutes.student.overview }}
						dataSource={studentData}
						title={'Latest Students'}
					/>
				</section>

				<section className="slots--con">
					<header>
						<h6>Attendance Rate</h6>
					</header>
					<div className="slots--items--con">
						{slots.map((item) => (
							<div key={item.title} className="slots--item">
								<p>{item.title}</p>
								<div className="fraction">
									<div>
										<ProgressBar fraction={item.attendance / item.total} />
									</div>
									<p>{`${item.open} / ${item.total}`}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</FlexBox>
		</Container>
	);
};
export default LecturerDashboard;

const palletItems = [
	{ title: 'Total revenue', body: '₦ 240,000', color: 'primary700', image: MoneyBag },
	{ title: 'Pending payments', body: '₦ 20,000', color: 'secondary500', image: Money },
	{ title: 'Active cohort', body: '12', color: 'accent600', image: Classroom },
	{ title: 'Total students onboard ', body: '340', color: 'primary800', image: Boy },
];
const slots = [
	{ title: 'CSC 400', total: 10, attendance: 2 },
	{ title: 'CSC 401', total: 10, attendance: 5 },
	{ title: 'CSC 402', total: 10, attendance: 9 },
	{ title: 'CSC 403', total: 10, attendance: 5 },
	{ title: 'CSC 404', total: 10, attendance: 4 },
	{ title: 'CSC 405', total: 10, attendance: 7 },
	{ title: 'CSC 406', total: 10, attendance: 4 },
];
const studentData = [
	{
		key: '1',
		name: 'Adebisi Konga',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '₦ 240,000',
		plan: 'Full',
	},
	{
		key: '2',
		name: 'Jim Green',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Two - times',
	},
	{
		key: '3',
		name: 'Joe Black',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Three - times',
	},
	{
		key: '4',
		name: 'Joe Black',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Three - times',
	},
	{
		key: '5',
		name: 'Joe Black',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Full',
	},
	{
		key: '6',
		name: 'Joe Black',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Full',
	},
	{
		key: '7',
		name: 'Joe Black',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Full',
	},
	{
		key: '8',
		name: 'Joe Black',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Two - times',
	},
	{
		key: '9',
		name: 'Joe Black',
		matric_no: '190591000',
		date_joined: 'Sept 11, 2022',
		price: '#240,000',
		plan: 'Full',
	},
];
