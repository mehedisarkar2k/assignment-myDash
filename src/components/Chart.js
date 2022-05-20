import * as d3 from "d3";
import { useEffect, useState } from "react";
import getRandom from "../helper/getRandom";
import makeChart from "../helper/makeChart";
import "../scss/Chart.scss";

const Chart = () => {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const data = [
            {
                name: "A",
                value: getRandom(10, 50),
            },
            {
                name: "B",
                value: getRandom(10, 50),
            },
            {
                name: "C",
                value: getRandom(10, 50),
            },
            {
                name: "D",
                value: getRandom(10, 50),
            },
        ];

        makeChart(d3, data);
    }, [refresh]);

    return (
        <div className="chart-container">
            <svg></svg>

            <button onClick={() => setRefresh((prevValue) => !prevValue)}>
                Refresh Chart
            </button>
        </div>
    );
};

export default Chart;
