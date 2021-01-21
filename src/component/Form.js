import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import Ethernet from "./EthernetSettings";
import Wireless from "./WirelessSettings";
import { regExp } from "./regex";

class Form extends Component {
  state = {
    ethernet: {
      address: "",
      gateway: "",
      subnet: "",
      preferredDns: "",
      altDns: "",
      validation: {
        address: true,
        subnet: true,
        preferredDns: true,
      },
    },
    wireless: {
      checkWifi: false,
      checkSecurity: false,
      key: "",
      name: "",
      address: "",
      subnet: "",
      validation: {
        empty: false,
        address: true,
        subnet: true,
        preferredDns: true,
      },
    },
  };

  onChangeEthernet = ({ target }) => {
    this.setState({
      ethernet: {
        ...this.state.ethernet,
        [target.name]: target.value,
      },
    });
  };

  onChangeWireless = ({ target }) => {
    this.setState({
      wireless: {
        ...this.state.wireless,
        [target.name]: target.value,
      },
    });
  };

  onChangeSelect = ({ target }) => {
    this.setState({
      wireless: {
        ...this.state.wireless,
        name: target.value,
      },
    });
  };

  onCheck = ({ target }) => {
    this.setState({
      wireless: {
        ...this.state.wireless,
        [target.name]: target.checked,
      },
    });
  };

  validateIp = ({ target }) => {
    const isValid = regExp.ip.test(this.state.ethernet.address);
    this.setState({
      ethernet: {
        ...this.state.ethernet,
        validation: {
          ...this.state.ethernet.validation,
          [target.name]: isValid,
        },
      },
    });
  };

  validateSubnetMask = ({ target }) => {
    console.log(target.value);
    const isValid = regExp.subnet.test(this.state.ethernet.subnet);
    this.setState({
      ethernet: {
        ...this.state.ethernet,
        validation: {
          ...this.state.ethernet.validation,
          [target.name]: isValid,
        },
      },
    });
  };

  validateDns = ({ target }) => {
    const isValid = regExp.dns.test(this.state.ethernet.preferredDns);
    this.setState({
      ethernet: {
        ...this.state.ethernet,
        validation: {
          ...this.state.ethernet.validation,
          [target.name]: isValid,
        },
      },
    });
  };

  clearError = ({ target }) => {
    this.setState({
      ethernet: {
        ...this.state.ethernet,
        validation: {
          ...this.state.ethernet.validation,
          [target.name]: true,
        },
      },
    });
  };

  checkIfEmpty = ({ target }) => {
    const isEmpty = target.value > 0 ? false : true;
    this.setState({
      wireless: {
        ...this.state.wireless,
        validation: {
          ...this.state.wireless.validation,
          empty: isEmpty,
        },
      },
    });
  };

  showStat = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <Ethernet
              data={this.state.ethernet}
              onChange={this.onChangeEthernet}
              validateIp={this.validateIp}
              validateSubnet={this.validateSubnetMask}
              validateDns={this.validateDns}
              clear={this.clearError}
            />
          </Grid>
          <Grid item xs={6}>
            <Wireless
              onCheck={this.onCheck}
              data={this.state.wireless}
              onSelect={this.onChangeSelect}
              onChange={this.onChangeWireless}
              validateIp={this.validateIp}
              validateSubnet={this.validateSubnetMask}
              validateDns={this.validateDns}
              clear={this.clearError}
              checkIfEmpty={this.checkIfEmpty}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={this.showStat}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Form;
