import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterOne, FilterTwo } from '../../assets/svgs';
import { Button, InputGroup } from '..';
import { Container } from './styles';
import { Approutes } from '../../constants';

const TableContainer = ({ columns, dataSource, title, options, selection, onRow, setCreateModal, createModal }) => {
	const [tableData, setTableData] = useState(dataSource || []);
	const [searchVal, setSearchVal] = useState('');
	const [status, setStatus] = useState('all');

	useEffect(() => {
		if (searchVal === '' && status === 'all') {
			setTableData(dataSource);
		}
	}, [searchVal, status, dataSource]);

	// search filter
	useEffect(() => {
		if (searchVal) {
			const searchedResult = [];
			dataSource.map((item) => {
				let hasMached = false;

				return Object.entries(item).forEach((data) => {
					if (data[1] && typeof data[1] === 'string' && data[1].toLowerCase().includes(searchVal.toLowerCase()) && !hasMached) {
						hasMached = true;
						searchedResult.push(item);
					}
				});
			});

			setTableData(searchedResult);
			return;
		}
	}, [dataSource, searchVal]);

	// filter status
	useEffect(() => {
		if (status !== 'all') {
			const filteredResult = [];
			dataSource.map((item) => {
				let hasMached = false;

				return Object.entries(item).forEach((data) => {
					if (data[1] && typeof data[1] === 'string' && data[1].toLowerCase() === status && !hasMached) {
						hasMached = true;
						filteredResult.push(item);
					}
				});
			});

			setTableData(filteredResult);
			return;
		}
	}, [status, dataSource]);

	return (
		<Container>
			<header className="table--header">
				<h6>{title}</h6>
				{options ? (
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
						className="form"
					>
						{options.placeholder && (
							<InputGroup
								value={searchVal}
								onChange={({ target: { value } }) => setSearchVal(value)}
								placeholder={options.placeholder}
								isSearching
							/>
						)}

						<div className="button--group">
							{options.filter && (
								<div className="dropdown--con">
									<Button variant="secondary">
										<FilterOne />
										{options.filter.placeholder}
									</Button>

									<ul className="dropdown" tabIndex={0}>
										{options.filter.filterBy.map((item) => (
											<li key={item.key} onClick={() => setStatus(item.key)}>
												{item.option}
											</li>
										))}
									</ul>
								</div>
							)}
							{options.button && <Button onClick={() => setCreateModal(!createModal)}>{options.button}</Button>}
						</div>

						{options.filter && (
							<div className="filter-btn">
								<div className="mobile_dropdown--con">
									<div>
										<FilterTwo tabIndex={0} />
									</div>
									<ul className="mobile--dropdown" tabIndex={0}>
										{options.filter.filterBy.map((item) => (
											<li key={item.key} onClick={() => setStatus(item.key)}>
												{item.option}
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</form>
				) : (
					<Link to={Approutes.students.active}>
						<span>See All</span>
					</Link>
				)}
			</header>

			<Table columns={columns} dataSource={tableData} rowSelection={selection} onRow={onRow} scroll={{ x: true }} />
		</Container>
	);
};

export default TableContainer;
