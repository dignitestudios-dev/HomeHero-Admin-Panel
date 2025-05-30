import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { MdKeyboardArrowDown } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  scales: {
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const generateRandomData = (min, max, length) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const createGradient = (ctx, color1, color2) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 700);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(0.38, color2);
  return gradient;
};

export const data = {
  labels,
  datasets: [
    {
      label: "Selected Year",
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(98, 70, 107, 0.2)",
          "rgba(98, 70, 107, 0)"
        ),
      data: generateRandomData(0, 1000, labels.length),
      borderColor: "rgba(98, 70, 107, 1)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Previous Year",
      data: generateRandomData(0, 1000, labels.length),
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(98, 70, 107,  0.2)",
          "rgba(98, 70, 107, 0)"
        ),
      borderColor: "rgba(98, 70, 107, 1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export function LineGraph() {
  return (
    <div className="bg-gray-50 mt-4 backdrop-blur-[50px] pt-0 p-5 h-[350px] relative rounded-[15px] ">
      <h3 className="font-[500] text-[15px] text-black absolute top-12 ">
        Users
      </h3>
      <button className="flex items-center  bg-transparent absolute top-12 right-2 text-black text-[12px] font-[400] ">
        2024 <MdKeyboardArrowDown size={23} color="black" />{" "}
      </button>
      <Line
        options={options}
        data={data}
        plugins={[
          {
            id: "increase-legend-spacing",
            beforeInit(chart) {
              const originalFit = chart.legend.fit;
              chart.legend.fit = function () {
                originalFit.bind(chart.legend)();
                this.height += 40;
              };
            },
          },
        ]}
      />
    </div>
  );
}
