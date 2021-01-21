import React from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import IpRadio from "./IP/IpRadio";
import DnsRadio from "./DNS/DnsRadio";

const EthernetSettings = ({ onChange, validate, clear, data }) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Ethernet Settings</FormLabel>
        <IpRadio
          onChange={onChange}
          validate={validate}
          clear={clear}
          data={data}
        />
        <DnsRadio
          onChange={onChange}
          validate={validate}
          clear={clear}
          data={data}
        />
      </FormControl>
    </>
  );
};

export default EthernetSettings;
