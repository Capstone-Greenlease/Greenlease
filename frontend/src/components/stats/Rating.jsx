import Chart from "react-apexcharts";

function Rating({ percentage }) {
	const series = [percentage];

	const color = () => {
		if (percentage < 30) {
			return ["#e86666"];
		}
		if (percentage < 70) {
			return ["#FCDB87"];
		}

		return ["#8EC27B"];
	};

	const options = {
		colors: color(),
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 50,
					size: "60%",
				},

				dataLabels: {
					showOn: "always",
					name: {
						offsetY: 10,
						show: true,
						color: "black",
						fontSize: "30px",
					},
					value: {
						color: "#111",
						fontSize: "30px",
						show: false,
					},
				},
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				type: "vertical",
				gradientToColors: color(),
				stops: [0, 100],
			},
		},
		stroke: {
			lineCap: "round",
		},
		labels: [`${percentage}%`],
	};

	return (
		<Chart options={options} series={series} type="radialBar" width="300" />
	);
}

export default Rating;
