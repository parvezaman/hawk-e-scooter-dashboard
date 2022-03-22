// import React from 'react';
import { TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import AllCoustomers from "./AllCoustomers/AllCoustomers";
// import AllPackages from './AllPackages/AllPackages';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomerData = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { reset } = useForm();

  const [userInfo, setUserInfo] = React.useState();

  const handlaOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newInfo = { ...userInfo };
    newInfo[field] = value;
    setUserInfo(newInfo);
  };

  const handleOnSubmit = (e) => {
    console.log(userInfo);
    e.preventDefault();
    axios
      .post("https://fast-thicket-64971.herokuapp.com/users", userInfo)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("data added successfully");
        }
        reset();
      });
  };
  return (
    <div style={{ margin: "1rem 0 0 5rem" }}>
      <div>
        <Button onClick={handleOpen}>Add New User</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Please provide the information for your new user
              </Typography>

              <form onSubmit={handleOnSubmit}>
                <TextField
                  required
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  sx={{ width: "99%", m: 1 }}
                  name="userName"
                  onBlur={handlaOnBlur}
                />
                <TextField
                  required
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  sx={{ width: "99%", m: 1 }}
                  name="userEmail"
                  type='email'
                  onBlur={handlaOnBlur}
                />
                <TextField
                  required
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  sx={{ width: "99%", m: 1 }}
                  name="userAge"
                  onBlur={handlaOnBlur}
                />
                <TextField
                  required
                  id="outlined-basic"
                  label="Gender"
                  variant="outlined"
                  sx={{ width: "99%", m: 1 }}
                  name="userGender"
                  onBlur={handlaOnBlur}
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
      <div>
        <AllCoustomers />
      </div>
    </div>
  );
};

export default CustomerData;
