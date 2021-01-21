import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import WirelessSelect from "../WirelessSelect";

const Wifi = ({ onCheck, data }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            name="checkWifi"
            checked={data.checkWifi}
            onChange={onCheck}
            color="primary"
          />
        }
        label="Enable wifi:"
      />
      <WirelessSelect checked={data.checkWifi} />
    </div>
  );
};

export default Wifi;
