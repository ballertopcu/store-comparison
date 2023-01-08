import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../Button";
import usePrevious from "../../Utils/usePrevious";

export const Carousel = ({ rowData, setRowData, sliceLength, initialVal }) => {
  const sliceListLength = Math.ceil(rowData.length / sliceLength);
  const arr = new Array(sliceListLength).fill();

  const [selectedVal, setSelectedVal] = useState(initialVal);
  const prevVal = usePrevious(selectedVal);

  const sliceRowData = useCallback(
    (val) => {
      const space = sliceLength * val;
      const startedValue = space - sliceLength;
      setRowData(rowData.slice(startedValue, space));
    },
    [rowData, setRowData, sliceLength]
  );

  useEffect(() => {
    if (selectedVal !== prevVal) sliceRowData(selectedVal);
  }, [selectedVal, sliceRowData, prevVal]);

  const onArrowBtnClick = type => {
    const isPlus = type === 'plus'
    let newValue = isPlus ? selectedVal + 1 : selectedVal - 1

    if (newValue < 1 || newValue > sliceListLength)
      newValue = isPlus ? 1 : sliceListLength
    
    setSelectedVal(newValue)
  }

  return (
    <div style={{ display: "flex" }}>
      <Button
        style={{ height: "15px", padding: "0 2px" }}
        icon="left-arrow"
        iconSize={15}
        onClick={() => onArrowBtnClick('minus')}
      />
      {arr.map((item, index) => {
        const btnVal = index + 1;
        return (
          <Button
            onClick={() => setSelectedVal(btnVal)}
            key={index}
            style={{
              height: "15px",
              padding: "0 2px",
              fontSize: "13px",
              color: selectedVal === btnVal ? "#0284c7" : "#334155",
            }}
          >
            {btnVal}
          </Button>
        );
      })}
      <Button
        style={{ height: "15px", padding: "0 2px" }}
        icon="right-arrow"
        iconSize={15}
        onClick={() => onArrowBtnClick('plus')}
      />
    </div>
  );
};
