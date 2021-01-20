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
    const { isDisabled, classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Preferred DNS server"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Alternative DNS server"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
            variant="outlined"
          />
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(DnsInputs);
