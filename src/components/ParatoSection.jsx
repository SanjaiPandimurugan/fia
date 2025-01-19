import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const data = [
  { name: 'Core', complaints: 700, pareto: 90, status: 'Completed' },
  { name: 'Thread', complaints: 300, pareto: 70, status: 'On Work' },
  { name: 'Core Plug', complaints: 200, pareto: 60, status: 'Pending' },
  { name: 'No Gauge', complaints: 100, pareto: 10, status: 'Completed' },
  { name: 'N', complaints: 50, pareto: 20, status: 'On Work' },
];

const ParatoSection = () => {

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return '#22c55e';
      case 'On Work': return '#E97451';
      case 'Pending': return '#dc2626';
      default: return '#gray-500';
    }
  };

  return (
    <>
      {/* Chart Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <div className="border-b border-[#8B4513] py-3 px-4 flex items-center justify-between bg-gradient-to-r from-white to-orange-50">
          <span className="text-[#8B4513] text-sm font-medium">COMPLAINTS ANALYSIS</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#E97451]"></div>
              <span className="text-xs text-gray-500">Complaints</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
              <span className="text-xs text-gray-500">Cumulative %</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#666', fontSize: 12 }}
                axisLine={{ stroke: '#8B4513' }}
              />
              <YAxis 
                yAxisId="left" 
                tick={{ fill: '#666', fontSize: 12 }}
                axisLine={{ stroke: '#8B4513' }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: '#666', fontSize: 12 }}
                axisLine={{ stroke: '#8B4513' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #E97451',
                  borderRadius: '4px'
                }}
              />
              <Bar 
                yAxisId="left" 
                dataKey="complaints" 
                fill="#E97451" 
                radius={[4, 4, 0, 0]}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="pareto" 
                stroke="#8B4513"
                strokeWidth={2}
                dot={{ fill: '#8B4513', stroke: '#8B4513' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <div className="border-b border-[#8B4513] py-3 px-4 flex items-center justify-between bg-gradient-to-r from-white to-orange-50">
          <span className="text-[#8B4513] text-sm font-medium">PARATO ANALYSIS</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#E97451]"></div>
              <span className="text-xs text-gray-500">Complaints</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
              <span className="text-xs text-gray-500">Cumulative %</span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-[#8B4513] to-[#E97451] text-white">
                  <th className="px-4 py-3 text-center text-xs font-medium">COMMENTS</th>
                  <th className="px-4 py-3 text-center text-xs font-medium">PARATO</th>
                  <th className="px-4 py-3 text-center text-xs font-medium">PERCENTAGE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((item, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-orange-50 transition-colors duration-150 border-b border-gray-200"
                  >
                    <td className="px-4 py-3 text-sm text-gray-900 capitalize border-r border-gray-200">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200 text-center">{item.complaints}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">{item.pareto}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParatoSection; 