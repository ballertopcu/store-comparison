import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import './Grid.css'
import classNames from 'classnames';
import ColorizedCellRenderer from './CellRenderer/ColorizedCellRenderer';

export const Grid = ({ style, bordered, ...props }) => {
  const classes = classNames({'ag-theme-alpine': true, 'theme-bordered': bordered})

  const getStyle = params => {
    if (typeof params.value !== 'string') {
      if (params.value.type === 'increase') 
        return {backgroundColor: '#22c55e', color: '#fff'}
      else if (params.value.type === 'decrease')
        return {backgroundColor: '#ef4444', color: '#fff'}
      else
        return {backgroundColor: '#d1d5db', color: '#fff'}
    } else
      return {textAlign: 'center'}
  }

  const defaultColDef = {
    cellStyle: params => getStyle(params),
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
    cellRendererSelector: function (params) {
      const Colorized = {
        component: 'ColorizedCellRenderer',
      };

      if (typeof params.value !== 'string') 
        return Colorized
      else
        return null
    },
  }

  return (
    <div className={classes} style={style}>
      <AgGridReact 
      defaultColDef={defaultColDef} 
      frameworkComponents={{
        ColorizedCellRenderer: ColorizedCellRenderer,
      }}
      {...props}>

      </AgGridReact>
    </div>
  );
}
