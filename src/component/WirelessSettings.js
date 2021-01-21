import React from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import Wifi from "./check/Wifi";
import Security from "./check/Security";
import IpRadio from "./IP/IpRadio";
import DnsRadio from "./DNS/DnsRadio";

const WirelessSettings = ({
  onCheck,
  data,
  onSelect,
  onChange,
  checkIfEmpty,
  validate,
  clear,
}) => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Wireless Settings</FormLabel>
        <Wifi onCheck={onCheck} data={data} onSelect={onSelect} />
        <Security
          onCheck={onCheck}
          data={data}
          onChange={onChange}
          checkIfEmpty={checkIfEmpty}
        />
      </FormControl>
      <FormControl disabled={!data.checkWifi}>
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
    </div>
  );
};

export default WirelessSettings;
