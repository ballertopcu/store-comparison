import React, { useState } from "react";
import { Toolbar } from "../Toolbar";
import { Grid } from "../Grid";
import { Search } from "../Search";
import { Carousel } from "../Grid/Carousel";
import styles from './InteractionAnalysis.module.css'

export const InteractionAnalysis = () => {
  const handlers = [
    { text: "Group By", variant: "outlined", icon: "grid", selected: true },
    { text: "Performance Index", variant: "outlined", icon: "chart-bar" },
    { text: "Store", variant: "outlined", icon: "store", selected: true },
    { text: "Product", variant: "outlined", icon: "package" },
    { text: "Device", variant: "outlined", icon: "device" },
    { text: "Session", variant: "outlined", icon: "share" },
    { text: "24.01.2022 - 31.01.2023", variant: "outlined", icon: "calendar" },
    { text: "Edit Colums", variant: "outlined", icon: "adjustments" },
    { text: "Clear All", style: { color: "#0284c7" } },
  ];

  const initialRowData = [
    {
      stores: "Compare A",
      avg_stock: "40",
      interaction: "40",
      sales: "10",
      conversion: "25%",
    },
    {
      stores: "Change",
      avg_stock: {value: "10%", type: 'increase', amount: '4'},
      interaction: {value: "0%", amount: '0'},
      sales: {value: "50%", type: 'decrease', amount: '5'},
      conversion: {value: "12%", type: 'decrease'},
    },
    {
      stores: "Compare B",
      avg_stock: "40",
      interaction: "40",
      sales: "10",
      conversion: "25%",
    },
    {
      stores: "Change",
      avg_stock: {value: "10%", type: 'increase', amount: '4'},
      interaction: {value: "0%", amount: '0'},
      sales: {value: "50%", type: 'decrease', amount: '5'},
      conversion: {value: "12%", type: 'decrease'},
    },
    {
      stores: "Compare C",
      avg_stock: "44",
      interaction: "40",
      sales: "5",
      conversion: "13%",
    },
  ];

  const initialBottomRowData = [
    {
      stores: "Ümraniye Media Markt",
      avg_stock: "25",
      interaction: "45",
      sales: "12",
      conversion: "10%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "test1",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "test2",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "test3",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "Metropol",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
    {
      stores: "last",
      avg_stock: "12",
      interaction: "60",
      sales: "10",
      conversion: "5%",
    },
  ]

  const [rowData] = useState(initialRowData);
  const [bottomRowData, setBottomRowData] = useState(initialBottomRowData)

  const columnDefs = [
    { headerName: "Stores", field: "stores", cellStyle: { textAlign: "left" } },
    { headerName: "AVG Stock", field: "avg_stock" },
    { headerName: "Interaction", field: "interaction" },
    { headerName: "Sales", field: "sales" },
    { headerName: "Conversion", field: "conversion"},
  ];

  return (
    <>
      <Toolbar handlers={handlers} />
      <div className={styles.gridContainer}>
        <Grid
          style={{ width: "100%", height: "261px" }}
          rowData={rowData}
          columnDefs={columnDefs}
          bordered={true}
        />
        <div className={styles.bottomGrid}>
          <div
            style={{
              padding: "15px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Search />
          </div>
          <Grid
            style={{ width: "100%", height: "387px" }}
            rowData={bottomRowData}
            columnDefs={columnDefs}
          />
          <div
            style={{
              padding: "15px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Carousel
              rowData={initialBottomRowData}
              setRowData={data => setBottomRowData(data)}
              sliceLength={8}
              initialVal={1}
            />
          </div>
        </div>
      </div>
    </>
  );
};
