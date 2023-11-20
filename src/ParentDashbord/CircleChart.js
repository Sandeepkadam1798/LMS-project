import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function CircleChart() {
  return (
    <PieChart sx={{mt:"40px",ml:"10px"}}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Absent A' },
            { id: 1, value: 40, label: 'Present P' },
            
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
