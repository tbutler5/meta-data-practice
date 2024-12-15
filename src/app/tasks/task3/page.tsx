'use client'

import { UsageData } from '@/types';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Task3Page() {
    const [usageData, setUsageData] = useState<UsageData[]>([]);
    
    useEffect(() => {
        const getBillingPlans = async () => {
            try {
                const response = await fetch('/data/usage-data.json');
                const jsonData = await response.json();
                setUsageData(jsonData.usageRecords);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getBillingPlans()
    }, [])

    if(usageData?.length < 1) {
        return (
            <>
                <p>...Loading</p>
            </>
        )
    }

    const labels = usageData?.map((point) => new Date(point.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    const usageValues = usageData?.map((point) => (point.usage !== null && point.usage !== null ? point.usage : null));

    const chartData = {
        labels,
        datasets: [
          {
            label: "Usage",
            data: usageValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
            spanGaps: true, // Automatically connect valid points, skipping gaps
          },
        ],
      };
    
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top" as const,
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const value = context.raw;
                return value !== null ? `Usage: ${value}` : "Data Unavailable";
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Usage",
            },
          },
          x: {
            title: {
              display: true,
              text: "Time",
            },
          },
        },
      };

    return (
        <>
            <Link href="/" >
                <div className="p-6 space-y-4">
                    <p className="text-blue-500 hover:underline">Home</p>
                </div>
            </Link>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Task 2: Customer Invoice Display</h1>
                <p>Implement logic to read, iterate, and display customer invoice data here.</p>
            </div>
            <div className="overflow-x-auto p-4 bg-gray-800 rounded-lg shadow">
                <div className="max-w-4xl mx-auto p-4 bg-gray-800 rounded-md">
                    <h2 className="text-xl font-semibold text-white mb-4">Usage Data Over Time</h2>
                    <Line data={chartData} options={chartOptions} />
                    <p className="text-gray-400 text-sm mt-4">Last updated: {new Date().toLocaleString()}</p>
                </div>
            </div>
        </>
    )
}