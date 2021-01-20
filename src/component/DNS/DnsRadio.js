import React, { Component } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import DnsInputs from "./DnsInputs";

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
    const { fillMode } = this.state;
    return (
      <div>
        <RadioGroup name="dns" value={fillMode} onChange={this.handlerChange}>
          <FormControlLabel
            value="auto"
            control={<Radio color="primary" />}
            label="Obtain DNS server address automatically"
          />
          <FormControlLabel
            value="custom"
            control={<Radio color="primary" />}
            label="Use the following DS server addresses"
          />
        </RadioGroup>
        <DnsInputs isDisabled={fillMode === "auto" ? true : false} />
      </div>
    );
  }
}

export default IpAddress;
