import React from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import Wifi from "./check/Wifi";
import Security from "./check/Security";
// import IpRadio from "./IP/IpRadio";
// import DnsRadio from "./DNS/DnsRadio";

const WirelessSettings = ({ onCheck, data }) => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Wireless Settings</FormLabel>
        <Wifi onCheck={onCheck} data={data} />
        <Security onCheck={onCheck} data={data} />
      </FormControl>
    </div>
  );
};

export default WirelessSettings;
