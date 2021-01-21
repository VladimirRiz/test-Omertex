import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import Ethernet from "./EthernetSettings";
import Wireless from "./WirelessSettings";
import { regExp } from "./regex";

class Form extends Component {
  state = {
    ethernet: {
      title: "ethernet",
      ip: "",
      gateway: "",
      subnet: "",
      dns: "",
      altDns: "",
      validation: {
        ip: true,
        subnet: true,
        dns: true,
      },
    },
    wireless: {
      title: "wireless",
      dns: "",
      checkWifi: false,
      checkSecurity: false,
      key: "",
      name: "",
      ip: "",
      subnet: "",
      validation: {
        empty: false,
        ip: true,
        subnet: true,
        dns: true,
      },
    },
  };

  onChange = (name, title, value) => {
    this.setState({
      [title]: {
        ...this.state[title],
        [name]: value,
      },
    });
    // console.log(sss, target.name, this.state);
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

  validate = (name, title) => {
    const isValid = regExp[name].test(this.state[title][name]);
    this.setState({
      [title]: {
        ...this.state[title],
        validation: {
          ...this.state[title].validation,
          [name]: isValid,
        },
      },
    });
  };

  clearError = (name, title) => {
    this.setState({
      [title]: {
        ...this.state[title],
        validation: {
          ...this.state[title].validation,
          [name]: true,
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

  setEvent = (e) => {
    this.onChange("ethernet", e);
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <Ethernet
              data={this.state.ethernet}
              onChange={this.onChange}
              validate={this.validate}
              //   validateSubnet={this.validateSubnetMask}
              //   validateDns={this.validateDns}
              clear={this.clearError}
            />
          </Grid>
          <Grid item xs={6}>
            <Wireless
              onCheck={this.onCheck}
              data={this.state.wireless}
              onSelect={this.onChangeSelect}
              onChange={this.onChange}
              validate={this.validate}
              //   validateSubnet={this.validateSubnetMask}
              //   validateDns={this.validateDns}
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
