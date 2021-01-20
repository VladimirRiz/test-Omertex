import React from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import IpRadio from "./IP/IpRadio";
import DnsRadio from "./DNS/DnsRadio";

const EthernetSettings = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Ethernet Settings</FormLabel>
      <IpRadio />
      <DnsRadio />
    </FormControl>
  );
};

export default EthernetSettings;
