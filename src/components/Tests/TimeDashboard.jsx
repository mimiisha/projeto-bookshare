// components/TimeDashboard.jsx
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TimeDashboard = () => {
  const [timeData, setTimeData] = useState({
    instagram: 1,
    tiktok: 2,
    youtube: 1.5,
    other: 0.5
  });
  const [chartData, setChartData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTimeData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const generateChart = (e) => {
    e.preventDefault();
    
    const data = [
      timeData.instagram,
      timeData.tiktok,
      timeData.youtube,
      timeData.other
    ];
    
    const totalHours = data.reduce((sum, time) => sum + time, 0);
    const totalYearHours = totalHours * 365;
    const totalYearDays = (totalYearHours / 24).toFixed(1);
    
    setChartData({
      labels: ['Instagram', 'TikTok', 'YouTube', 'Outros'],
      datasets: [
        {
          data,
          backgroundColor: [
            '#4A7C59',
            '#F4C49A',
            '#5A7E7B',
            '#D9C1A9'
          ],
          hoverOffset: 4
        }
      ],
      totalYearHours,
      totalYearDays
    });
  };

  return (
    <section id="time-dashboard" className="bg-white p-8 rounded-xl shadow-md mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Seu Tempo Digital (Simulação)</h2>
      <p className="mb-6">Estime o tempo que você passa em cada app e veja o impacto real.</p>
      
      <form id="time-form" onSubmit={generateChart} className="max-w-md mx-auto text-left">
        <div className="form-group mb-4">
          <label htmlFor="instagram-time" className="block mb-2">Instagram (horas/dia):</label>
          <input
            type="number"
            id="instagram-time"
            name="instagram"
            min="0"
            step="0.5"
            value={timeData.instagram}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="tiktok-time" className="block mb-2">TikTok (horas/dia):</label>
          <input
            type="number"
            id="tiktok-time"
            name="tiktok"
            min="0"
            step="0.5"
            value={timeData.tiktok}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="youtube-time" className="block mb-2">YouTube (horas/dia):</label>
          <input
            type="number"
            id="youtube-time"
            name="youtube"
            min="0"
            step="0.5"
            value={timeData.youtube}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="form-group mb-6">
          <label htmlFor="other-time" className="block mb-2">Outros (horas/dia):</label>
          <input
            type="number"
            id="other-time"
            name="other"
            min="0"
            step="0.5"
            value={timeData.other}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        
        <button
          type="submit"
          className="bg-[#5A7E7B] text-white px-6 py-3 rounded-full font-bold transition-transform hover:translate-y-[-2px] active:translate-y-0"
        >
          Gerar Gráfico
        </button>
      </form>
      
      {chartData && (
        <div className="chart-container mt-8 max-w-md mx-auto">
          <Doughnut
            data={chartData}
            options={{
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      const value = context.parsed;
                      const total = context.dataset.data.reduce((a, b) => a + b, 0);
                      const percentage = ((value / total) * 100).toFixed(1);
                      return `${context.label}: ${value}h/dia (${percentage}%)`;
                    }
                  }
                }
              }
            }}
          />
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="font-medium">
              Você gastou {chartData.totalYearHours.toLocaleString()} horas nestes apps este ano.
              Isso equivale a {chartData.totalYearDays} dias inteiros!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TimeDashboard;