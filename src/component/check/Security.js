import React from "react";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import WirelessSelect from "../WirelessSelect";

const Security = ({ onCheck, data }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            name="checkSecurity"
            checked={data.checkSecurity}
            onChange={onCheck}
            color="primary"
          />
        }
        label="Enable Wireless Security:"
      />
      <TextField
        // error={!data.validation.preferredDns}
        required
        id="outlined-required"
        label="Security Key"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        // InputProps={{ onBlur: validateDns, onFocus: clear }}
        // name="preferredDns"
        // onChange={onChange}
        // disabled={isDisabled}
        variant="outlined"
        // helperText={data.validation.preferredDns ? "" : "Invalid DNS"}
      />
    </div>
  );
};

export default Security;
