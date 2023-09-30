
import { topDealUsers } from "../data/data";
import { Link } from "react-router-dom";
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  ResponsiveContainer, Tooltip,
  Area, AreaChart, XAxis, YAxis
} from 'recharts';

export const TopBox = () => {
  return <div className="topBox">
    <h1 className="mb-[20px]">Top Deals</h1>
    <div className="list">
      {
        topDealUsers.map(user => {
          return <div className="listItem flex items-center justify-between mb-[30px]" key={user.id}>
            <div className="user flex items-center gap-[20px]">
              <img className="w-[40px] h-[40px] rounded-full object-cover" src={user.img} alt="image" />
              <div className="userTexts flex flex-col text-[14px] font-medium">
                <span className="username">{user.username}</span>
                <span className="email text-[12px]">{user.email}</span>
              </div>
            </div>
            <span className="amount font-medium">${user.amount}</ span>
          </div>
        })
      }
    </div>

  </div >
};

type PropsChart = {
  color: string,
  icon: string,
  title: string,
  dataKey: string,
  number: number | string,
  percentage: number,
  chartData: object[]
}

export const ChartBox = (props: PropsChart) => {
  return <div className="chartBox flex h-[100%] w-[100%] gap-[10px]">
    <div className="boxInfo flex flex-col justify-between flex-3">
      <div className="title flex items-center gap-[10px]">
        <img src={props.icon} alt="image" />
        <span>{props.title}</span>
      </div>
      <h1 className="text-3xl font-bold">{props.number}</h1>
      <Link style={{ color: props.color }} className="text-[14px]" to="/">View all</Link>
    </div>
    <div className="chartInfo flex-2 flex flex-col justify-between flex-grow">
      <div className="chart h-[100%] w-[99%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={props.chartData}>
            <Tooltip contentStyle={{ backgroundColor: "transparent", border: 'none' }}
              labelStyle={{ display: 'none' }}
              position={{ x: 10, y: 60 }} />
            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="texts flex flex-col text-right text-[10px]">
        <span className="percentage font-bold text-[18px]"
          style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}>
          {props.percentage}%
        </span>
        <span className="duration">this month</span>
      </div>
    </div>
  </div>
}

type PropsBar = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

export const BarChartBox = (props: PropsBar) => {
  return (
    <div className="barChartBox w-[100%] h-[100%]">
      <h1 className="text-[20px] mb-[20px]">{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


const dataPie = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

export const PieChartBox = () => {
  return (
    <div className="pieChartBox w-[100%] h-[100%] flex flex-col justify-between">
      <h1>Leads by Source</h1>
      <div className="chart flex items-center justify-center">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={dataPie}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {dataPie.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options flex items-center justify-between gap-[10px]">
        {dataPie.map((item) => (
          <div className="option flex flex-col items-center gap-[10px]" key={item.name}>
            <div className="title flex gap-[5px] items-center">
              <div className="dot w-[10px] h-[10px] rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const dataAreaChart = [
  {
    name: "Sun",
    books: 4000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    books: 3000,
    clothes: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    books: 2000,
    clothes: 9800,
    electronic: 2290,
  },
  {
    name: "Wed",
    books: 2780,
    clothes: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    books: 1890,
    clothes: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    books: 2390,
    clothes: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    books: 3490,
    clothes: 4300,
    electronic: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox w-[100%] h-[100%] flex flex-col justify-between">
      <h1>Revenue Analytics</h1>
      <div className="chart  w-[100%] h-[100%]">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={dataAreaChart}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;