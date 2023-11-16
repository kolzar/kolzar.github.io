import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

export default class Skills extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      value,
      name,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="black">
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >
          {`${name}`} - {`${value}`}%
        </text>
      </g>
    );
  };

  render() {
    const colors = ["8884d8", "83a6ed", "8dd1e1", "82ca9d", "a4de6c", "d0ed57", "8d3ee1"]
    let title = "";
    let listaObj = [];
    if (this.props.cv) {
      const obj = this.props.cv ? this.props.cv.skills : "";
      title = obj.title ? obj.title : "";
      listaObj = obj.list;
    }

    return (
      <div id={`${title}`} className="headerCV container p-2 shadow-lg rounded">
        <div className="row">
          <div className="col">
            <h1>
              {title.toUpperCase()} <i className="fa-solid fa-chart-pie"></i>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={this.renderActiveShape}
                data={listaObj}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                fill="black"
                dataKey="value"
                onMouseEnter={this.onPieEnter}
              >
              {
                listaObj.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`#${colors[index]}`}/>
                ))
              }
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    );
  }
}
