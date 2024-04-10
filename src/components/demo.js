import React from "react";
import { useState } from "react";
import "../styles/demo.css";
import Timezone from "./Timezone";
import CalendarTable from '../components/calendar.js';

// Define an enum for days of the week
const DaysOfWeek = {
  MON: "Monday",
  TUE: "Tuesday",
  WED: "Wednesday",
  THU: "Thursday",
  FRI: "Friday",
  SAT: "Saturday",
  SUN: "Sunday",
};

const DemoComp = () => {
  const [sidebar, setSidebar] = useState(false);

  const currentDate = new Date();

  const currentMonthIndex = currentDate.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Get month name using current month index
  const currentMonthName = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();

  // Get the number of days in the current month
  const numberOfDaysInMonth = new Date(
    currentYear,
    currentMonthIndex + 1,
    0
  ).getDate();

  // Create an array of numbers from 1 to 30
  const numbers = Array.from({ length: 7 }, (_, index) => index + 1);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();


  const data = {
    className: "wZGlUnakVDTcucBRQGo6 fGu8kxu560yIPsHH1Ad2 fqQfQuKMIf_qzgsSs7Ga",
    days: [],
  };

  // Loop through each day of the month and add to the data array
  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const dayName = day.toLocaleString('en-us', { weekday: 'long' });
    const dateString = `${dayName}, ${day.toLocaleString('en-us', { month: 'long' })} ${i}`;
    const dayObject = {
      name: dayName,
      date: dateString,
      className: 'uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5',
      disabled: true,
      daysInMonth: i,
    };
    data.days.push(dayObject);
  }

  

  return (
    <div>
      <div className="lmtWIHO_gkbTeeyuvoJC sbRR6Vj9cBntcZ6P4tOo">
        <div className="_cUP1np9gMvFQrcPftuf OGcBAyJGBej5Gnyi9hGA xahN8AEzyAvQtVj17TPv _Y8HCTxgNkwxXcG_DCXx">
          <div
            data-container="booking-container"
            className="_3efP_GeH5kyBAzqnLzL adpQ3VUeQbmczOdx9ymw _NhHeOwIn1FU09sukys_ w_Mtb2W9166EgOSv9i3M cllbjvXCdYDt9A3te4cz"
          >
            <div
              data-container="side-panel"
              className="WrdpezlzjKu1CoRihaXS Rb2e9IwsOFiKlSQIX7YA _eIcko0LuRzVhqMC1mmy y2BHUjkNYLaMI5GB_dVt"
            >
              <div className="vijtvgyx_9152uGHndeu ij0tkCti5WftuGeyXE84">
                <div
                  data-simplebar="init"
                  className="g4kIX1cEbAUBf5qD2Udt EDtlc0_uFpxiVRZXmgE5 Kp7kkfKOnqzgiL6A7iT9"
                >
                  <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: 0, bottom: 0 }}
                      >
                        <div
                          tabIndex={0}
                          className="simplebar-content-wrapper"
                          style={{ height: "auto", overflow: "hidden" }}
                        >
                          <div
                            className="simplebar-content"
                            style={{ padding: 0 }}
                          >
                            <div className="Z3zhp7CS7tNsCSX6_KJW KtQUtHvVvyq716gdA29c">
                              <div className="dByP7suNIfCqOSaMcM6_ _CXzNZJcVKGB6oSxcDYf">
                                <img
                                  src="https://d3v0px0pttie1i.cloudfront.net/uploads/team/avatar/244108/bf92ad95.png"
                                  alt="Sales Team"
                                  className="l8_ox8UFJxB3KJMwAXbz _sRvWjppwBLlS1XAiWzQ SQ_Bs3qHy7XHjSu3iTrm nDdZjeb2Zpw_OzgLPGim"
                                />
                                <div
                                  data-component="name"
                                  className="igLUv25CGn1lcV9W4BLo VHgo1Gke8HlB303mVQsG q4cOvvEx6Vd1DIiuVXso GzvVI3Y6rac8lZAKNbGw cj8hJKtajauY7EuaKsh6"
                                >
                                  Sales Team
                                </div>
                                <h1 className="aJYfwRAjpy85vGyjTA_k aNTWZDYqtNuY8Y3A0Rlw nCQmpQ3zRtu1xXb_x8YC lfS31_5Mqhye4NzHzcKh UqnoAE3IPZScZj__n24Z">
                                  KrispCall Demo
                                </h1>
                              </div>
                              <div className="dukviH9w_EuHzTw_qBQt NgoiMCeEYfWcZjlNlAgG AyhFx5OlFGq9yVKxlioJ">
                                <div
                                  data-container="details"
                                  className="_L4TEojXfdzWp8RxMPuB N0L2N94hAAnivlQ6DGit Ko5wAaZye5TiJ64tY67l PO5XPbkuZPY7V9uoHMUx"
                                >
                                  <div className="YAmKI90l5OyINFgGmq9L TuKawS25ZXxJafgZdElP">
                                    <div className="kjPV9BSUqWArFIVxfBTq _7Au4UjgXrnFtkfgdDsM">
                                      <span
                                        aria-hidden="true"
                                        className="srpdbd5 l15h8fme ly3eodl"
                                      >
                                        <svg
                                          data-id="details-item-icon"
                                          viewBox="0 0 10 10"
                                          xmlns="http://www.w3.org/2000/svg"
                                          role="img"
                                        >
                                          <path
                                            d="M.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M5 3.269V5l1.759 2.052"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    {/* {"{"}" "{"}"} */}
                                    30&nbsp;min
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="yHJsX7btzZUMOuQu_qbF _QY08ZnTdckO8dGtuWjX rITYjoHV2NF_yl1tR68x rUewQ7gbiLM7fEmxWleS">
                                  <div className="k_tUa2XwT0esKZkWYshM UOUgYFhrylMAqJDUG1Tn">
                                    <p>
                                      Join us for an insightful virtual meeting
                                      in Zoom, where you can:
                                    </p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      🔍 Explore KrispCall's tailored solutions
                                      for your needs
                                    </p>
                                    <p>
                                      💡 Discuss about customized solution for
                                      your business
                                    </p>
                                    <p>
                                      🗣 Share your requirements and kickstart
                                      your KrispCall journey
                                    </p>
                                    <p>
                                      👥 Train your team on advanced telephony
                                      features
                                    </p>
                                    <p>
                                      🤝 Discover seamless integrations with
                                      your CRM &amp; tools
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "auto", height: 533 }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "none",
                      }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "none",
                        height: 447,
                      }}
                    />
                  </div>
                </div>
                <div className="Pz2TGUG_nAL6m_qTt_A4 _Y9jfPKOHyKOzqzq0C1V">
                  <button
                    className="uvkj3lh l15h8fme buuwct9 d13adumu soq3ksa f1vsw93b"
                    type="button"
                  >
                    <span className="t1850o97 t7sc041">Cookie settings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* right*/}
            <div className="nX1mqja_7P44IZA6HzKt GggfqbUnbiV8ibOhSGq7 QnoSECjNGJyoVwZeO1Cp">
              <div
                data-component="spotpicker"
                className="oNS9ciVl9HkYl_RNpI17 hx0jWwb5b2ea04pDWimx _BfNOA8QBweO_ToDizhl Nrbbdq548gT3unfkNGu1"
              >
                {/* {"{"}
                {"}"} */}
                <h2 className="mcGoFZ2bdw0rWtCmf9EQ xKJJw__HuKqq1YBdsufM LgqhkbVKEnFcwdgjSO8V sVw1FGoSfKwp1_fa_eS4">
                  Select a Date &amp; Time
                </h2>
                {/* /*date and time */}
                <div className="yXXPyAx6ZnQ_1sL07UcY bUOrbFu6ZUwN8paYsknc wyF_fjmXW63y3Lx40e8z R0H8cdJJS564Rkru1FfV">
                  {/* date */}
                  <div
                    data-component="spotpicker-dates"
                    className="_3YPRbLVNkBcc0bgx_45 HROmbWD7c3C9f6LV3EJ0 kOIVqBZiWfIrGDIK8_CN ENoUZlR59XHXARLvCpgD"
                  >
                    <div className="bVHxWj5qDIG5SK_FAB3w kNky9uZjx_bGQ6uNotHU">
                      <div
                        className="tQ1xYUpfrkOxuvsKBoho LDaTxNPTKhnbt7xxb9Vj mZLPPtvRh9Y_bMsVkNtV fVWketp4DIXsukJ6FhoS aquiaG_83YknEd3mI51g"
                        data-testid="calendar"
                      >
                        <div
                          data-testid="calendar-header"
                          className="djX_w_Vib_phNTE5OxUN ThnEvlLR4LibM5f8twVB ovM2irV_YDo7zhmwtwhO"
                        >
                          <div className="nY1UdpJ_iaOmUQG5au5a F28Z1DL_NPeHHaq1Hnsx">
                            <button
                              aria-label="Go to previous month"
                              className="uvkj3lh ubvdp8w DO2tGtY4S_mBBFgXvZxy _GYG1Q8jLlqx_ApAW6Av"
                              type="button"
                              disabled
                            >
                              <span
                                aria-hidden="true"
                                className="srpdbd5 l15h8fme ly3eodl"
                              >
                                <svg
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.4806 15.9941C13.8398 15.6529 13.8398 15.0998 13.4806 14.7586L8.47062 10L13.4806 5.24142C13.8398 4.90024 13.8398 4.34707 13.4806 4.00589C13.1214 3.66471 12.539 3.66471 12.1798 4.00589L6.51941 9.38223C6.1602 9.72342 6.1602 10.2766 6.51941 10.6178L12.1798 15.9941C12.539 16.3353 13.1214 16.3353 13.4806 15.9941Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            data-testid="title"
                            className="hOG1yWAgjl_Zm5t_5cxZ j8_A_9gON5cRo4O8uVVy"
                          >
                            {currentMonthName} {currentYear}
                          </div>
                          <div className="nY1UdpJ_iaOmUQG5au5a F28Z1DL_NPeHHaq1Hnsx">
                            <button
                              aria-label="Go to next month"
                              className="uvkj3lh ubvdp8w DO2tGtY4S_mBBFgXvZxy _GYG1Q8jLlqx_ApAW6Av"
                              type="button"
                              disabled
                            >
                              <span
                                aria-hidden="true"
                                className="srpdbd5 l15h8fme ly3eodl"
                              >
                                <svg
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.51941 15.9941C6.1602 15.6529 6.1602 15.0998 6.51941 14.7586L11.5294 10L6.51941 5.24142C6.1602 4.90024 6.1602 4.34707 6.51941 4.00589C6.87862 3.66471 7.46101 3.66471 7.82022 4.00589L13.4806 9.38223C13.8398 9.72342 13.8398 10.2766 13.4806 10.6178L7.82022 15.9941C7.46101 16.3353 6.87862 16.3353 6.51941 15.9941Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            role="status"
                            aria-live="polite"
                            className="b1rtbe9g"
                          >
                            {currentMonthName} is now displayed
                          </div>
                        </div>
                        <div className="_b038ak5NRMeAulzu6R6 zQZ2MXLWEJx0950xrbAO PC37i8mk7tLiGoVS_g4Y">
                          <table
                            aria-label="Select a Day"
                            className="o7E3WKZwxPG62HeoeUTg wv0EVF7Zlv0nXZ6KaeM5 _cfOvs_bmRbgb9Y6XwU4"
                          >
                            <thead>
                              <tr>
                                {Object.values(DaysOfWeek).map((day, index) => (
                                  <th
                                    key={index}
                                    className={`JLgK9JrgZSTdEv1B7P9Q AFuMcxU26kUdUCnCUrwF ${day}`}
                                  >
                                    {day.substring(0, 3)}{" "}
                                    {/* Display only first three letters of the day */}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            {/* <tbody
                              data-testid="calendar-table"
                              className="wZGlUnakVDTcucBRQGo6 fGu8kxu560yIPsHH1Ad2 fqQfQuKMIf_qzgsSs7Ga"
                            > */}
                              {/* <tr> */}
                                {/* <td role="gridcell">
                                  {numbers.map((number) => (
                                    <button
                                      key={number}
                                      aria-label="Monday, April 1 - No times available"
                                      className="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5"
                                      type="button"
                                      disabled
                                    >
                                      <span>{numbers}</span>
                                    </button>
                                  ))}
                                </td> */}

<CalendarTable data={data} />
 {/* <td role="gridcell"> */}
                                  {/* <button
                                    aria-label="Wednesday, May 1 - No times available"
                                    className="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y"
                                    type="button"
                                    disabled
                                  >
                                    <span>1</span>
                                  </button>
                                </td> */}
                                {/* <td role="gridcell">
                                  <button
                                    aria-label="Thursday, May 2 - No times available"
                                    className="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y"
                                    type="button" */}
                                {/* //     disabled
                                //   >
                                //     <span>2</span>
                                //   </button>
                                // </td>
                                // <td role="gridcell">
                                //   <button */}
                                {/* //     aria-label="Friday, May 3 - No times available"
                                //     className="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y"
                                //     type="button"
                                //     disabled
                                //   >
                                //     <span>3</span>
                                //   </button>
                                // </td> */}
                                {/* <td role="gridcell">
                                  <button
                                    aria-label="Saturday, May 4 - No times available"
                                    className="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y"
                                    type="button"
                                    disabled
                                  >
                                    <span>4</span>
                                  </button> */}
                                {/* </td>
                                <td role="gridcell">
                                  <button
                                    aria-label="Sunday, May 5 - No times available"
                                    className="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y"
                                    type="button"
                                    disabled
                                  >
                                    <span>5</span>
                                  </button>
                                </td> */}
                              {/* </tr> */}
                            {/* </tbody> */}
                          </table>
                          <div
                            role="status"
                            aria-live="polite"
                            className="b1rtbe9g"
                          >
                            Times for April 11 are now displayed
                          </div>
                        </div>
                      </div>
                      <div className="_4BaNTmg3YxFvbIthBgE sPX5QGhIXNU5Yh2kXMHz XIfp1dhaTtPa5UlikIR_">
                        <Timezone />
                      </div>
                    </div>
                  </div>

                  {/* times */}
                  <div
                    data-component="spotpicker-times"
                    className="aC8yrhG_PZOrITgfQHXI SpxR_eHyXhzaZEVyTY3j HPzBvfnDCLBeVloRNB3F _eVPTQcJjL2Ie6bK0QzT"
                  >
                    <h3
                      data-component="spotpicker-times-subtitle"
                      className="gcP8rxpT2piRvbrS8lm_ AjRlD0Dp_PK95J_obyh1"
                    >
                      Thursday, April 11
                    </h3>
                    <div
                      data-component="spotpicker-times-list"
                      className="tBQ2sFQryHicoUQYC2a0 M7qTOn_cwtSaHIDllkgI y_GjIhKBuNa__U_12_Cl _JFfGiPduY9jBYmybYgH"
                    >
                      <div
                        data-component="spot-list"
                        role="list"
                        className="O6m_vG7PJqcrVIdhTxRr _Agzc1Uaqs2Glviq0hoS"
                      >
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="8:45am"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                8:45am
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="9:15am"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                9:15am
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="9:45am"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                9:45am
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="10:15am"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                10:15am
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="10:45am"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                10:45am
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="11:15am"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                11:15am
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="11:45am"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                11:45am
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="12:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                12:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="12:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                12:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="1:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                1:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="1:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                1:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="2:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                2:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="2:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                2:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="3:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                3:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="3:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                3:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="4:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                4:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="4:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                4:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="5:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                5:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="5:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                5:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="6:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                6:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="6:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                6:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="7:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                7:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="7:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                7:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="8:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                8:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="8:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                8:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="9:15pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                9:15pm
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          role="listitem"
                          className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq"
                        >
                          <button
                            data-container="time-button"
                            data-start-time="9:45pm"
                            className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
                            type="button"
                          >
                            <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
                              <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">
                                9:45pm
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="G_eycHIIxsnntLHS95Nc MauoynffSrrmr3E3s_gz OidSTLEj9BNXxWftawO1 bs9KfGpHKLX9dmpQwgnt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoComp;


<tbody data-testid="calendar-table" class="wZGlUnakVDTcucBRQGo6 fGu8kxu560yIPsHH1Ad2 fqQfQuKMIf_qzgsSs7Ga"><tr><td role="gridcell"><button aria-label="Monday, April 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5" type="button" disabled=""><span>1234567</span></button><button aria-label="Monday, April 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5" type="button" disabled=""><span>1234567</span></button><button aria-label="Monday, April 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5" type="button" disabled=""><span>1234567</span></button><button aria-label="Monday, April 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5" type="button" disabled=""><span>1234567</span></button><button aria-label="Monday, April 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5" type="button" disabled=""><span>1234567</span></button><button aria-label="Monday, April 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5" type="button" disabled=""><span>1234567</span></button><button aria-label="Monday, April 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5" type="button" disabled=""><span>1234567</span></button></td><td role="gridcell"><button aria-label="Wednesday, May 1 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y" type="button" disabled=""><span>1</span></button></td><td role="gridcell"><button aria-label="Thursday, May 2 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y" type="button" disabled=""><span>2</span></button></td><td role="gridcell"><button aria-label="Friday, May 3 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y" type="button" disabled=""><span>3</span></button></td><td role="gridcell"><button aria-label="Saturday, May 4 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y" type="button" disabled=""><span>4</span></button></td><td role="gridcell"><button aria-label="Sunday, May 5 - No times available" class="uvkj3lh ubvdp8w o5PJ_9jHomezuy5op7Th gyO7ZjgvT__guDnWiKg5 Vs7SzeE3xF36MXS0Ut7y" type="button" disabled=""><span>5</span></button></td></tr></tbody>