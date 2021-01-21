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
  validate = ({ target }) => {
    console.log("here");
    this.props.validate(target.name, this.props.data.title);
  };

  clearError = ({ target }) => {
    this.props.clear(target.name, this.props.data.title);
  };
  render() {
    const { isDisabled, classes, onChange, data } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={!data.validation.dns}
            required
            id={`${data.title}-dns-required`}
            label="Preferred DNS server"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ onBlur: this.validate, onFocus: this.clearError }}
            name="dns"
            onChange={onChange}
            disabled={isDisabled}
            variant="outlined"
            helperText={data.validation.dns ? "" : "Invalid DNS"}
          />
          <TextField
            id={`${data.title}-basic`}
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
