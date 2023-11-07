import { Bar } from './styles';

const ProgressBar = ({ color = 'accent800', fraction }) => {
	return <Bar color={color} fraction={fraction} />;
};

export default ProgressBar;
