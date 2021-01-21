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
  validateIp = ({ target }) => {
    this.props.validate(target.name, this.props.data.title);
  };

  validateSubnet = ({ target }) => {
    this.props.validate(target.name, this.props.data.title);
  };

  clearError = ({ target }) => {
    this.props.clear(target.name, this.props.data.title);
  };

  render() {
    const { isDisabled, classes, onChange, clear, data } = this.props;

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={!data.validation.ip}
            required
            id={`${data.title}-address`}
            label="IP address"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            variant="outlined"
            name="ip"
            InputProps={{
              onBlur: this.validateIp,
              onFocus: this.clearError,
            }}
            onChange={onChange}
            helperText={data.validation.ip ? "" : "Invalid IP"}
          />

          <TextField
            error={!data.validation.subnet}
            required
            id={`${data.title}-mask`}
            label="Subnet mask"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            variant="outlined"
            name="subnet"
            InputProps={{
              onBlur: this.validateSubnet,
              onFocus: this.clearError,
            }}
            onChange={onChange}
            helperText={data.validation.subnet ? "" : "Invalid Subnet"}
          />
          <TextField
            id={`${data.title}-gateway`}
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
