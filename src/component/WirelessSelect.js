import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { MenuItem, FormControl, Select, InputLabel } from "@material-ui/core";

const styles = (theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
});

class WirelessSelect extends Component {
  state = {
    open: false,
  };

  onOpen = () => {
    console.log(this.state);
    this.setState({
      open: !this.state.open,
    });
  };

  onClose = () => {
    console.log(this.state);
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { classes, checked, onSelect, name } = this.props;
    const { open } = this.state;
    return (
      <div>
        <FormControl
          required
          className={classes.formControl}
          disabled={!checked}
        >
          <InputLabel id="open">Wireless NetWork Name:</InputLabel>
          <Select
            // labelId="open"
            id="open"
            open={open}
            onClose={this.onClose}
            onOpen={this.onOpen}
            value={name}
            onChange={onSelect}
          >
            <MenuItem value="">
              <em>Please select</em>
            </MenuItem>
            <MenuItem value={1}>Wireless Name</MenuItem>
            <MenuItem value={2}>Another Wireless Name</MenuItem>
            <MenuItem value={3}>Totally Other Name </MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(WirelessSelect);
