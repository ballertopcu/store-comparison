import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./FilterModal.module.css";
import TextField from "@mui/material/TextField";
import Utils from "../../Utils/Utils";
import Switch from "@mui/material/Switch";
import { Button } from "../Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const FilterModal = ({ open, handleClose }) => {
  const [store, setStore] = useState("");
  const [stock, setStock] = useState("");
  const [sales, setSales] = useState(false);

  const handleChange = (event, setEvent) => {
    setEvent(event.target.value);
  };

  const clear = () => {
    setStore('')
    setStock('')
    setSales(false)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={styles.header}>
          <span onClick={handleClose}>{Utils.getIcon("x", 16)}</span>
          Filters
        </div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Store</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={store}
            label="Store"
            onChange={(e) => handleChange(e, setStore)}
          >
            <MenuItem value="compareA">Compare A</MenuItem>
            <MenuItem value="compareB">Compare B</MenuItem>
            <MenuItem value="compareC">Compare C</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="AVG Stock"
          variant="outlined"
          fullWidth
          value={stock}
          onChange={(e) => handleChange(e, setStock)}
        />
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            fontWeight: "400",
          }}
        >
          Increased Sales <Switch checked={sales} onChange={(e) => setSales(e.target.checked)}/>
        </div>
        <div className={styles.footer}>
          <Button onClick={clear} style={{ textDecoration: "underline" }}>Clear All</Button>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "#334155",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: "500",
            }}
          >
            Show
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
