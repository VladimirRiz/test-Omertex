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
    isValidAddress: true,
    subnet: "",
    isValidSubnet: true,
  };

  handlerChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  validateIp = () => {
    const check = regExp.ip.test(this.state.address);
    this.setState({
      isValidAddress: check ? true : false,
    });
  };

  validateSubnetMask = () => {
    const check = regExp.subnet.test(this.state.subnet);
    this.setState({
      isValidSubnet: check ? true : false,
    });
  };

  render() {
    const { isDisabled, classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={this.state.isValidAddress ? false : true}
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
            InputProps={{ onBlur: this.validateIp }}
            onChange={this.handlerChange}
          />

          <TextField
            error={this.state.isValidSubnet ? false : true}
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
