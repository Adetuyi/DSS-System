// import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
// import { toMoney } from '../../utilities';
import Container from './styles';

const BarChart = ({ barData }) => {
	const options1 = {
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
				// formatter: function (val) {
				// 	return '₦ ' + toMoney(val, true);
				// },
			},
		},
		yaxis: {
			labels: {
				// formatter: function (val) {
				// 	return '₦ ' + toMoney(val, true);
				// },
			},
		},
	};
	const options2 = {
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

	// get barData base on which stats
	const getData = () => {
		if (barData === 'Revenue') {
			return [
				{
					name: 'Revenue',
					data: [
						{
							x: 'Jan',
							y: 8000,
							name: 'january',
						},
						{
							x: 'Feb',
							y: 22000,
							name: 'febuary',
						},
						{
							x: 'Mar',
							y: 40000,
							name: 'march',
						},
						{
							x: 'Apr',
							y: 70000,
							name: 'april',
						},
						{
							x: 'May',
							y: 40000,
							name: 'may',
						},
						{
							x: 'Jun',
							y: 50000,
							name: 'june',
						},
						{
							x: 'Jul',
							y: 20000,
							name: 'july',
						},
						{
							name: 'august',
							x: 'Aug',
							y: 22000,
						},
						{
							x: 'Sep',
							y: 40000,
							// fillColor: '#126DA9',
							name: 'september',
						},
						{
							x: 'Oct',
							y: 0,
							name: 'october',
						},
						{
							x: 'Nov',
							y: 0,
							name: 'november',
						},
						{
							x: 'Dec',
							y: 0,
							name: 'december',
						},
					],
				},
			];
		} else if (barData === 'Student') {
			return [
				{
					name: 'Student',
					data: [
						{
							x: 'Jan',
							y: 80,
						},
						{
							x: 'Feb',
							y: 22,
						},
						{
							x: 'Mar',
							y: 40,
						},
						{
							x: 'Apr',
							y: 70,
						},
						{
							x: 'May',
							y: 40,
						},
						{
							x: 'Jun',
							y: 50,
						},
						{
							x: 'Jul',
							y: 20,
						},
						{
							name: 'august',
							x: 'Aug',
							y: 22,
						},
						{
							x: 'Sep',
							y: 6,
							// fillColor: '#126DA9',
							name: 'september',
						},
						{
							x: 'Oct',
							y: 0,
						},
						{
							x: 'Nov',
							y: 0,
						},
						{
							x: 'Dec',
							y: 0,
						},
					],
				},
			];
		}
	};
	let data = getData();

	// function to return a specific style when condition is met
	let newArray = data[0].data.map((item) => {
		if (item.name === 'september') {
			return { ...item, fillColor: '#126DA9' };
		} else {
			return { ...item };
		}
	});
	data[0].data = newArray;

	// get total revenue or students
	let total = 0;
	data[0].data.map((item) => {
		total += item.y;
		return total;
	});

	return (
		<Container>
			<div className="bar--title">
				<span>{barData === 'Revenue' ? `Total balance` : 'Total students'}</span>
				<h1>{barData === 'Revenue' ? `₦${total}` : total}</h1>
			</div>
			<Chart options={barData === 'Revenue' ? options1 : options2} series={data} type="bar" height={320} />
		</Container>
	);
};

export default BarChart;
