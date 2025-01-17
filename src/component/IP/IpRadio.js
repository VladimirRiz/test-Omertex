import React, { Component } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import IpInputs from "./IpInputs";

class IpAddress extends Component {
  state = {
    fillMode: "auto",
  };

  handlerChange = ({ target }) => {
    this.setState({
      fillMode: target.value,
    });
  };

  render() {
    const { onChange, validate, clear, data } = this.props;
    const { fillMode } = this.state;
    return (
      <div>
        <RadioGroup name="ip" value={fillMode} onChange={this.handlerChange}>
          <FormControlLabel
            value="auto"
            control={<Radio color="primary" />}
            label="Obtain an IP address automatically (DHCP/BootP)"
          />
          <FormControlLabel
            value="custom"
            control={<Radio color="primary" />}
            label="Use the following IP address"
          />
        </RadioGroup>
        <IpInputs
          isDisabled={fillMode === "auto" ? true : false}
          data={data}
          onChange={onChange}
          validate={validate}
          clear={clear}
        />
      </div>
    );
  }
}

export default IpAddress;
