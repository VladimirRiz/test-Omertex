import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "25ch",
      margin: theme.spacing(1),
    },
  },
});

class DnsInputs extends Component {
  render() {
    const {
      isDisabled,
      classes,
      onChange,
      validateDns,
      clear,
      data,
    } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={!data.validation.preferredDns}
            required
            id="outlined-required"
            label="Preferred DNS server"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ onBlur: validateDns, onFocus: clear }}
            name="preferredDns"
            onChange={onChange}
            disabled={isDisabled}
            variant="outlined"
            helperText={data.validation.preferredDns ? "" : "Invalid DNS"}
          />
          <TextField
            id="outlined-basic"
            label="Alternative DNS server"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            name="altDns"
            onChange={onChange}
            disabled={isDisabled}
            variant="outlined"
          />
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(DnsInputs);
