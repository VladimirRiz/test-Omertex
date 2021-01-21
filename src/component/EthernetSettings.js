import React from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import IpRadio from "./IP/IpRadio";
import DnsRadio from "./DNS/DnsRadio";

const EthernetSettings = ({
  onChange,
  validateIp,
  validateSubnet,
  validateDns,
  clear,
  data,
}) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Ethernet Settings</FormLabel>
        <IpRadio
          onChange={onChange}
          validateIp={validateIp}
          validateSubnet={validateSubnet}
          clear={clear}
          data={data}
        />
        <DnsRadio
          onChange={onChange}
          validateDns={validateDns}
          clear={clear}
          data={data}
        />
      </FormControl>
    </>
  );
};

export default EthernetSettings;
