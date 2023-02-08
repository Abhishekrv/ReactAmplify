import "./chart.css"
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        { name: 'Critical', value: 450 },
        { name: 'Medium', value: 300 },
        { name: 'Low', value: 300 },
        { name: 'Remediated', value: 200 },
      ];
      
      const COLORS = ['#FF0000', '#FFBB28','#FF8042', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

  return (
    <div className="chart">
      <h3 className="chartTitle">Total Vulnerabilities</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <PieChart>
            <Legend layout="horizontal" horizontalAlign="bottom" align="center"/>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
                        {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )}