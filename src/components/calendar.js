import React from "react";
import "../styles/demo.css";
import Timezone from "./Timezone";



const CalendarTable = ({ data }) => {
  // const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {};
  return (
     <tbody data-testid="calendar-table"
                               className="wZGlUnakVDTcucBRQGo6 fGu8kxu560yIPsHH1Ad2 fqQfQuKMIf_qzgsSs7Ga"
                             > 
    <tbody
      data-testid="calendar-table"
      className="wZGlUnakVDTcucBRQGo6 fGu8kxu560yIPsHH1Ad2 fqQfQuKMIf_qzgsSs7Ga"
    >
      <tr>
        {data.days.map((day, index) => {
          // console.log(day);
          return (
            <td key={index} role="gridcell">
              <button
                aria-label={`${day.name}, ${day.date} - No times available`}
                className="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5"
                onClick={handleSidebar}
              >
                <span> {day.daysInMonth}</span>
              </button>
            </td>
            // <div>
            //   <td>{day.daysInMonth}</td>
            // </div>
          );
        })}
      </tr>
      </tbody>
      </tbody>
  );
};

export default CalendarTable;
