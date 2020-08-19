import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import sum from "lodash.sum";
import round from "lodash.round";

const average = (data) => {
  return round(sum(data) / data.length);
};

const Chart = ({ data, color, units }) => {
  return (
    <>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {units}
      </div>
    </>
  );
};

export default Chart;
