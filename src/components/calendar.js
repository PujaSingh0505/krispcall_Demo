import React from "react";
import "../styles/demo.css";

const CalendarTable = ({ data }) => {
  console.log(data);
  return (
    <tbody data-testid="calendar-table" className={data.className}>
      <tr>
        {data.days.map((day, index) => {
          console.log(day);
          return (
              <td key={index} role="gridcell">
                <button
                  aria-label={`${day.name}, ${day.date} - No times available`}
                  className={day.className}
                  type="button"
                  disabled={day.disabled}
                >
                  {day.dayOfMonth}
                </button>
              </td>
            // <div>
            //   <td>{day.daysInMonth}</td>
            // </div>
          );
        })}
      </tr>
    </tbody>
  );
};

export default CalendarTable;
