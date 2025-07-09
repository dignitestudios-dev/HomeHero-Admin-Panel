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
      stacked: false,
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
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const createGradient = (ctx, color1, color2) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
};

export function LineGraph({ Graphdata }) {
  console.log("Graphdata:", Graphdata);

  const data = {
    labels,
    datasets: [
      {
        label: "Selected Year",
        data: Graphdata?.usersThisYear || [],
        backgroundColor: (context) =>
          createGradient(
            context.chart.ctx,
            "rgba(98, 70, 107, 0.3)",
            "rgba(98, 70, 107, 0)"
          ),
        borderColor: "rgba(98, 70, 107, 1)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "rgba(98, 70, 107, 1)",
      },
      {
        label: "Previous Year",
        data: Graphdata?.usersPreviousYear || [],
        backgroundColor: (context) =>
          createGradient(
            context.chart.ctx,
           "rgba(98, 70, 107, 0.3)",
            "rgba(98, 70, 107, 0)"
          ),
        borderColor: "rgba(98, 70, 107, 1)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "rgba(98, 70, 107, 1)",
      },
    ],
  };

  return (
    <div className="bg-gray-50 mt-4 backdrop-blur-[50px] pt-4 p-5 h-[350px] relative rounded-[15px]">
      <h3 className="font-[500] text-[15px] text-black absolute top-6">
        Users
      </h3>
      <button className="flex items-center bg-transparent absolute top-6 right-2 text-black text-[12px] font-[400]">
        {Graphdata?.year || "Year"} <MdKeyboardArrowDown size={23} color="black" />
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
                this.height += 20;
              };
            },
          },
        ]}
      />
    </div>
  );
}
