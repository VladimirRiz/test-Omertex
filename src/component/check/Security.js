import React, { Component } from "react";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";

class Security extends Component {
  onChange = ({ target }) => {
    this.props.onChange(target.name, this.props.data.title, target.value);
  };
  render() {
    const { onCheck, data, checkIfEmpty } = this.props;
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              name="checkSecurity"
              checked={data.checkSecurity}
              onChange={onCheck}
              color="primary"
              disabled={!data.checkWifi}
            />
          }
          label="Enable Wireless Security:"
        />
        <TextField
          error={data.validation.empty}
          required
          id="outlined-required"
          label="Security Key"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ onBlur: checkIfEmpty }}
          name="key"
          onChange={this.onChange}
          disabled={!data.checkSecurity}
          variant="outlined"
          helperText={!data.validation.empty ? "" : "Required Field"}
        />
      </div>
    );
  }
}

export default Security;
