import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import './Graph.css'; // Import the CSS file

// Data
const temperatureData = [
  { month: 'Jan', temperature: 28 },
  { month: 'Feb', temperature: 30 },
  { month: 'Mar', temperature: 32 },
  { month: 'Apr', temperature: 35 },
  { month: 'May', temperature: 34 },
  { month: 'June', temperature: 31 },
  { month: 'July', temperature: 29 },
];

const mortalityData = [
  { month: 'Jan', mortality: 5 },
  { month: 'Feb', mortality: 8 },
  { month: 'Mar', mortality: 12 },
  { month: 'Apr', mortality: 10 },
  { month: 'May', mortality: 7 },
  { month: 'June', mortality: 9 },
  { month: 'July', mortality: 6 },
];

const feedData = [
  { month: 'Jan', feed: 400 },
  { month: 'Feb', feed: 420 },
  { month: 'Mar', feed: 450 },
  { month: 'Apr', feed: 470 },
  { month: 'May', feed: 460 },
  { month: 'June', feed: 430 },
  { month: 'July', feed: 400 },
];

const diseasesData = [
  { name: 'Disease A', frequency: 30 },
  { name: 'Disease B', frequency: 20 },
  { name: 'Disease C', frequency: 15 },
  { name: 'Disease D', frequency: 25 },
  { name: 'Disease E', frequency: 10 },
];

const Graph = () => {
  return (
    <div className="graph-grid">
      <div className="graph-container">
        <h3 className='text-center'>Monthly Average Temperatures</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={temperatureData}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }} // Increased bottom margin
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" angle={-30} textAnchor="end" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="graph-container">
        <h3 className='text-center'>Prawn Mortality Rates Over Months</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={mortalityData}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }} // Increased bottom margin
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" angle={-30} textAnchor="end" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mortality" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="graph-container">
        <h3 className='text-center'>Monthly Feed Quantities</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={feedData}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }} // Increased bottom margin
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" angle={-30} textAnchor="end" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="feed" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="graph-container">
        <h3 className='text-center'>Frequency of Prawn Diseases</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={diseasesData} dataKey="frequency" nameKey="name" outerRadius={100} fill="#8884d8" label>
              <Cell key="1" fill="#8884d8" />
              <Cell key="2" fill="#82ca9d" />
              <Cell key="3" fill="#ff7300" />
              <Cell key="4" fill="#d1a1a1" />
              <Cell key="5" fill="#a1d1d1" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;
