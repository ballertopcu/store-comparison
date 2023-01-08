import React from 'react';
import Utils from '../../../Utils/Utils';

const ColorizedCellRenderer = ({value}) => {
  return (
    <span style={{display: 'flex', alignItems: 'center',  justifyContent: 'center', gap: '5px'}}>
      {Utils.getIcon(value.type, 15)}
      {value.value}
      <span style={{fontSize: '11px'}}>
        {value.amount && (value.type === 'increase' ? '+' : value.type === 'decrease' ? '-' : '')}
        {value.amount}
      </span>
    </span>
  );
};

export default ColorizedCellRenderer