import React from "react";
import { FormControl, FormLabel, Button } from "@material-ui/core";
import IpRadio from "./IP/IpRadio";
import DnsRadio from "./DNS/DnsRadio";

const EthernetSettings = () => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Ethernet Settings</FormLabel>
        <IpRadio />
        <DnsRadio />
      </FormControl>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </>
  );
};

export default EthernetSettings;
