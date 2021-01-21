import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "25ch",
      margin: theme.spacing(1),
    },
  },
});

class IpInputs extends Component {
  render() {
    const {
      isDisabled,
      classes,
      onChange,
      validateIp,
      validateSubnet,
      clear,
      data,
    } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={!data.validation.address}
            required
            id="address"
            label="IP address"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            variant="outlined"
            name="address"
            InputProps={{ onBlur: validateIp, onFocus: clear }}
            onChange={onChange}
            helperText={data.validation.address ? "" : "Invalid IP"}
          />

          <TextField
            error={!data.validation.subnet}
            required
            id="mask"
            label="Subnet mask"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            variant="outlined"
            name="subnet"
            InputProps={{ onBlur: validateSubnet, onFocus: clear }}
            onChange={onChange}
            helperText={data.validation.subnet ? "" : "Invalid Subnet"}
          />
          <TextField
            id="gateway"
            label="Default Gateway"
            defaultValue=""
            name="gateway"
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            onChange={onChange}
            variant="outlined"
          />
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(IpInputs);
