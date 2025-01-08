"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sat',
    present:53,
    absent: 20,
  },
  {
    name: 'Sun',
    present:10,
    absent: 40,
  },
  {
    name: 'Mon',
    present:22,
    absent: 14,
  },
  {
    name: 'Tue',
    present:32,
    absent: 21,
  },
  {
    name: 'Wed',
    present:53,
    absent: 26,
  },
  {
    name: 'Thu',
    present:30,
    absent: 10,
  },
  {
    name: 'Fri',
    present:70,
    absent: 40,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg h-full p-4'>
        <div className="flex items-center justify-between">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:'20px',paddingBottom:'40px'}}/>
          <Bar dataKey="present" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart