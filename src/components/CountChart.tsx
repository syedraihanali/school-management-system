"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Girls',
    count: 46,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 54,
    fill: '#C3EBFA',
  },
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  }
  
];


const CountChart = () => {
  return (
    <div className='bg-white rounded-1xl p-4 w-full h-full'>
        {/* title */}
        <div className="flex items-center justify-between">
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* chart */}
        <div className=" w-full h-[75%] relative">
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar  background dataKey="count"/>
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </div>
        {/* bottom */}
        <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-1">
                <div className='w-5 h-5 bg-tSky rounded-full'/>
                <h1 className='font-bold'>321</h1>
                <h2 className='text-xs text-gray-300'>Boys (54%)</h2>
            </div>
            <div className="flex flex-col gap-1">
                <div className='w-5 h-5 bg-tYellow rounded-full'/>
                <h1 className='font-bold'>321</h1>
                <h2 className='text-xs text-gray-300'>Girls (46%)</h2>
            </div>
        </div>
    </div>
  )
}

export default CountChart