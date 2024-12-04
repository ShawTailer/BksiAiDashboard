"use client";
import { useEffect, useState } from "react";
import { PieChartModel } from "../../model/PieChartModel";
import PieChart from "../components/pie-chart";

export default function IndexPage() {
  const [chartData, setChartData] = useState<PieChartModel | null>(null);
  useEffect(() => {
    const data: PieChartModel = {
      labels: ["Good", "Medium", "Bad"],
      data: [12, 15, 2],
    };
    setChartData(data);
  }, []);

  if (!chartData) {
    return (
      <div className="container flex">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container flex">
      <PieChart
        labels={chartData.labels}
        data={chartData.data}
        title="Assessment AI table"
      />
    </div>
  );
}
