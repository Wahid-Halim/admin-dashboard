import { NavLink } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartBox = () => {
  return (
    <div className="flex h-full p-4">
      <div className="flex flex-col justify-between flex-[3]">
        <div className="flex items-center gap-2">
          <img src="/user.svg" />
          <span>Total users</span>
        </div>
        <span className="text-2xl font-bold">11.38</span>
        <NavLink to={"/"}>View All</NavLink>
      </div>
      <div className=" flex-[2] flex flex-col justify-between ">
        <div className="h-full w-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={data}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span className="font-bold text-[20px]">40%</span>
          <span className="text-[14px]">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
