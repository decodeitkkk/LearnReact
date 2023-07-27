import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const BarChart = ({ uniqueCategory, data }) => {
    let newArr = [];
    for (let a in uniqueCategory) {
        let count = Number.parseInt(0);
        for (let b in data) {
            if (
                data[b].category.toLowerCase() ===
                uniqueCategory[a].toLowerCase()
            ) {
                count = count + Number.parseInt(data[b].rating.count);
                // console.log(`count Of ${data[b].category} : ${count}`);
            }
        }
        newArr.push(count);
    }
    // console.log(uniqueCategory);
    // console.log(newArr);
    const ChartData = {
        labels: uniqueCategory,
        datasets: [
            {
                label: "No. of products",
                data: newArr.map((d) => d),
                backgroundColor: [
                    "rgba(0, 12, 182, 0.69)",
                    "rgba(255, 207, 86, 0.66)",
                    "rgba(54, 66, 66, 0.56)",
                    "rgba(249, 86, 255, 0.54)",
                ],
                borderColor: [
                    "rgba(0, 0, 0, 0.2)",
                    // "rgba(247, 187, 36, 0.2)",
                    // "rgba(30, 61, 61, 0.2)",
                    // "rgba(242, 11, 250, 0.2)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <Pie data={ChartData} />
        </>
    );
};
