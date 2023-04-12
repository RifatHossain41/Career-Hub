import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const Statistics = () => {

  const data01 = [
    { name: 'Assignment-1', value: 50 },
    { name: 'Assignment-2', value: 60 },
    { name: 'Assignment-3', value: 56 },
    { name: 'Assignment-4', value: 60 },
    { name: 'Assignment-5', value: 51 },
    { name: 'Assignment-6', value: 60 },
    { name: 'Assignment-7', value: 59 },
    { name: 'Assignment-8', value: 60 }, 
  ];

  return (
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
  );
};

export default Statistics;
