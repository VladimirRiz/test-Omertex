import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { regExp } from "../regex";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "25ch",
      margin: theme.spacing(1),
    },
  },
});

class IpInputs extends Component {
  state = {
    address: "",
    subnet: "",
    validation: {
      address: true,
      subnet: true,
    },
  };

  handlerChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  validateIp = ({ target }) => {
    const isValid = regExp.ip.test(this.state.address);
    this.setState({
      validation: {
        ...this.state.validation,
        [target.name]: isValid,
      },
    });
  };

  validateSubnetMask = ({ target }) => {
    const isValid = regExp.subnet.test(this.state.subnet);
    this.setState({
      validation: {
        ...this.state.validation,
        [target.name]: isValid,
      },
    });
  };

  clearError = ({ target }) => {
    this.setState({
      validation: {
        ...this.state.validation,
        [target.name]: true,
      },
    });
  };

  render() {
    const { isDisabled, classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={!this.state.validation.address}
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
            InputProps={{ onBlur: this.validateIp, onFocus: this.clearError }}
            onChange={this.handlerChange}
            helperText={this.state.validation.address ? "" : "Invalid IP"}
          />

          <TextField
            error={!this.state.validation.subnet}
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
            InputProps={{ onBlur: this.validateSubnetMask }}
            onChange={this.handlerChange}
            helperText={this.state.validation.subnet ? "" : "Invalid Subnet"}
          />
          <TextField
            id="gateway"
            label="Default Gateway"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            variant="outlined"
          />
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(IpInputs);
