// import CreatePackages from './CreatePackages/CreatePackages';
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
import AllPackages from "./AllPackages/AllPackages";
import FileBase64 from "react-file-base64";

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

const Packages = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { reset } = useForm();

  const [packageInfo, setPackageInfo] = React.useState();

  const handlaOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newInfo = { ...packageInfo };
    newInfo[field] = value;
    setPackageInfo(newInfo);
  };

  const handleOnSubmit = (e) => {
    console.log(packageInfo);
    e.preventDefault();
    axios
      .post("https://fast-thicket-64971.herokuapp.com/packages", packageInfo)
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
        <Button onClick={handleOpen}>Create New Package</Button>
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
                Please provide the information for your new Package
              </Typography>

              <form onSubmit={handleOnSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Package Name"
                  variant="outlined"
                  sx={{ width: "99%", m: 1 }}
                  name="packageName"
                  onBlur={handlaOnBlur}
                />
                <TextField
                  id="outlined-basic"
                  label="Package Description"
                  variant="outlined"
                  sx={{ width: "99%", m: 1 }}
                  name="packageDescription"
                  onBlur={handlaOnBlur}
                />
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) =>
                    setPackageInfo({ ...packageInfo, packageImage: base64 })
                  }
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
        <AllPackages />
      </div>
    </div>
  );
};

export default Packages;
