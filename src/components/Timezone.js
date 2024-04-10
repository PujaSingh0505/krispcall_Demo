import React, { useState } from "react";
import moment from "moment-timezone";
import '../styles/demo.css'
const Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(moment.tz.guess());
  const timezones = moment.tz.names();

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone);
  };
  return (
    <div className="P_f95J2VZ_1U_Ls1kl4W CRWV09Vs9BY6UR2JltQc">
      <p
        className="c7jd249 cg4c1by c13ezcyz"
        id="timezone-label"
        style={{ color: "currentcolor" }}
      >
        Time zone
      </p>
      <div className="toGKj5D6jUisSQKMklAa eAXPB8abe4Y_kwBPQDvY">
        <select
          value={selectedTimezone}
          onChange={(e) => handleTimezoneChange(e.target.value)}
          id="timezone-field"
          aria-expanded="false"
          aria-labelledby="timezone-label timezone-field"
          name="Timezone dropdown button"
          role="combobox"
          aria-controls="timezone-menu"
          className="uvkj3lh _PeNy9r9oHguOsTkgE0R c7X_WH5ytG_b0OVTpFNI"
          type="button"
        >
          {/* <span className="dtiYI0ZAilcWwVQT8jlT Kpz_FK0jIfx5ZsrbHJzw i84knf7 ig3btk ng8j088" />
          <div className="wy3nmKehNg2EoNrrDPYn lkxZvaYVQFp5u1WY_s6e">
            India Standard Time
          </div>
          <div className="_5fp92vuGXd8SQOKvB8c _ZK2hZCDi0aqKOnl3a9J">
            (11:35am)
          </div>
          <span className="VU6zsDtTZptTnUq_RAcm wfIT_nNtCZcWzA828xWS i84knf7 ig3btk naomxmt" /> */}
          {timezones.map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Timezone;
