// import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
// import { toMoney } from '../../utilities';
import Container from './styles';

const BarChart = ({ title, subTitle, barData }) => {
	const options = {
		dataLabels: {
			enabled: false,
		},
		fill: {
			colors: ['#E7EAEE'],
			opacity: 1,
		},
		states: {
			hover: {
				filter: {
					type: 'none',
				},
			},
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: undefined,
				color: '#051A26',
			},
			y: {
				formatter: function (val) {
					return val;
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (val) {
					return val;
				},
			},
		},
	};

	return (
		<Container>
			<div className="bar--title">
				<span>{title}</span>
				<h1>{subTitle}</h1>
			</div>
			<Chart options={options} series={barData} type="bar" height={320} />
		</Container>
	);
};

export default BarChart;
