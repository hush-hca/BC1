import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Identity', A: 120, fullMark: 150 },
  { subject: 'Trust', A: 98, fullMark: 150 },
  { subject: 'Proof', A: 86, fullMark: 150 },
  { subject: 'Earn', A: 99, fullMark: 150 },
  { subject: 'Social', A: 85, fullMark: 150 },
  { subject: 'Skill', A: 110, fullMark: 150 },
];

export const TokenomicsChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.2)" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name="My BaseCard Stats"
            dataKey="A"
            stroke="#0052FF"
            strokeWidth={3}
            fill="#0052FF"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
            itemStyle={{ color: '#0052FF' }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-gray-500">
        Live onchain metrics
      </div>
    </div>
  );
};