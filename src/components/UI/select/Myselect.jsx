import React from 'react';
import cl from "./Myselect.module.css"

const Myselect = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={cl.mySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
          <option disabled value="">{defaultValue}</option>
          {options.map(option =>
                <option value={option.value}>
                    {option.name}
                </option>
          )}
        </select>
    );
}

export default Myselect;
