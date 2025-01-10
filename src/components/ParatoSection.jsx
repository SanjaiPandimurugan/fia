import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const data = [
  { name: 'core', complaints: 700, pareto: 104, status: 'Completed' },
  { name: 'thread', complaints: 300, pareto: 97, status: 'On Work' },
  { name: 'core plug', complaints: 200, pareto: 22, status: 'Pending' },
  { name: 'no gauge', complaints: 100, pareto: 8, status: 'Completed' },
  { name: 'n', complaints: 50, pareto: 6, status: 'On Work' },
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
                yAxisId="left"
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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-500">Completed</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#E97451]"></div>
              <span className="text-xs text-gray-500">On Work</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <span className="text-xs text-gray-500">Pending</span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-[#8B4513] to-[#E97451] text-white">
                  <th className="px-4 py-3 text-left text-xs font-medium">COMMENTS</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">PARATO</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((item, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-orange-50 transition-colors duration-150"
                  >
                    <td className="px-4 py-3 text-sm text-gray-900 capitalize">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.pareto}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: getStatusColor(item.status) }}
                        ></div>
                        <span style={{ color: getStatusColor(item.status) }}>
                          {item.status}
                        </span>
                      </div>
                    </td>
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