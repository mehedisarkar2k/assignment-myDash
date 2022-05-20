const makeChart = (d3, data) => {
    const xScale = d3
        .scaleBand()
        .domain(data.map((dataPoint) => dataPoint.name))
        .rangeRound([0, 500])
        .padding(0.1);

    const yScale = d3.scaleLinear().domain([0, 50]).range([400, 0]);

    const container = d3.select("svg").classed("container", true);
    // clear container
    container.selectAll("*").remove();

    container
        // .append("g")
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .classed("bar", true)
        // add transition
        .transition()
        .duration(100)
        .text((data) => data.name)
        .attr("width", xScale.bandwidth())
        .attr("height", (data) => 400 - yScale(data.value))
        .attr("x", (data) => xScale(data.name))
        .attr("y", (data) => yScale(data.value));
};

export default makeChart;
