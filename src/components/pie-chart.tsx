"use client";
import Chart from "chart.js/auto";
import React, { useRef, useEffect } from "react";

interface PieChartProps {
  labels: string[];
  data: number[];
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({ labels, data, title }) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvas.current;

    if (ctx) {
      const existingChart = Chart.getChart("myChart");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: title,
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              position: "bottom",
              display: true,
              text: title,
            },
          },
        },
      });
    }
    return () => {
      const existingChart = Chart.getChart("myChart");
      if (existingChart) {
        existingChart.destroy();
      }
    };
  }, [labels, data, title]);

  return <canvas id="myChart" ref={canvas}></canvas>;
};

export default PieChart;
