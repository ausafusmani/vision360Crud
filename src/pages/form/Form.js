import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import schema from "./schema";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFormData,
  setEditFormData,
  setFormMode,
  updateFormData,
} from "../../redux/Slice";
import { useEffect, useState } from "react";

const Form = (props) => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const formData = useFormik({
    initialValues: {
      name: (props.formData && props.formData.name) || "",
      gender: (props.formData && props.formData.gender) || "",
      height: (props.formData && props.formData.height) || "",
      password: (props.formData && props.formData.password) || "",
      confirmPassword: (props.formData && props.formData.confirmPassword) || "",
      email: (props.formData && props.formData.email) || "",
      state: (props.formData && props.formData.state) || "",
      favouriteFood: (props.formData && props.formData.favouriteFood) || "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const id =
        (formState.editFormData && formState.editFormData.id) ||
        new Date().getTime();
      const payload = { id, ...values };
      if (formState.formMode == "edit") {
        dispatch(updateFormData(payload));
      } else {
        dispatch(addFormData(payload));
      }
      dispatch(setEditFormData(null));
      dispatch(setFormMode(""));
      resetForm();
    },
  });
  

  return (
    <>
      {formData && (
        <Box className="form-container" component="form">
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.values.name}
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
            error={formData.touched.name && formData.errors.name ? true : false}
            helperText={formData.touched.name && formData.errors.name}
          ></TextField>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.values.password}
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
            error={
              formData.touched.password && formData.errors.password
                ? true
                : false
            }
            helperText={formData.touched.password && formData.errors.password}
          ></TextField>
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            name="confirmPassword"
            value={formData.values.confirmPassword}
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
            error={
              formData.touched.confirmPassword &&
              formData.errors.confirmPassword
                ? true
                : false
            }
            helperText={
              formData.touched.confirmPassword &&
              formData.errors.confirmPassword
            }
          ></TextField>
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              variant="outlined"
              name="gender"
              value={formData.values.gender}
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              error={
                formData.touched.gender && formData.errors.gender ? true : false
              }
              helperText={formData.touched.gender && formData.errors.gender}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Height"
            variant="outlined"
            type="number"
            name="height"
            value={formData.values.height}
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
            error={
              formData.touched.height && formData.errors.height ? true : false
            }
            helperText={formData.touched.height && formData.errors.height}
            InputProps={{
              inputProps: {
                step: 0.1,
                min: 0,
                style: { textAlign: "left" },
              },
            }}
          ></TextField>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.values.email}
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
            error={
              formData.touched.email && formData.errors.email ? true : false
            }
            helperText={formData.touched.email && formData.errors.email}
          ></TextField>
          <FormControl>
            <InputLabel>State</InputLabel>
            <Select
              label={formData.values.state ? "State" : "Select State"}
              variant="outlined"
              name="state"
              value={formData.values.state}
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              error={
                formData.touched.state && formData.errors.state ? true : false
              }
              helperText={formData.touched.state && formData.errors.state}
            >
              <MenuItem value="Assam">Assam</MenuItem>
              <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
              <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
              <MenuItem value="Bihar">Bihar</MenuItem>
              <MenuItem value="Goa">Goa</MenuItem>
              <MenuItem value="Gujarat">Gujarat</MenuItem>
              <MenuItem value="Haryana">Haryana</MenuItem>
              <MenuItem value="Jharkhand">Jharkhand</MenuItem>
              <MenuItem value="Karnataka">Karnataka</MenuItem>
              <MenuItem value="Kerala">Kerala</MenuItem>
            </Select>
          </FormControl>
          {/*Multi dropdown */}
          <FormControl>
            <InputLabel id="favourite-food-label">Favourite Food</InputLabel>
            <Select
              label="Favourite Food"
              variant="outlined"
              name="favouriteFood"
              multiple 
              // value={[formData.values.favouriteFood]}
              // // onChange={formData.handleChange}
              onChange={(event) => {
                let value = event.target.value
                formData.handleChange({
                  target: { name: 'favouriteFood', value: event.target.value },
                });
              }}
              value={formData.values.favouriteFood || []}
              // onChange={handleMultiChange}
              onBlur={formData.handleBlur}
              error={
                formData.touched.favouriteFood && formData.errors.favouriteFood
                  ? true
                  : false
              }
              helperText={
                formData.touched.favouriteFood && formData.errors.favouriteFood
              }
              renderValue={(selected) => selected.join(",")}
            >
              <MenuItem value="Food 1">Food 1</MenuItem>
              <MenuItem value="Food 2">Food 2</MenuItem>
              <MenuItem value="Food 3">Food 3</MenuItem>
              <MenuItem value="Food 4">Food 4</MenuItem>
              <MenuItem value="Food 5">Food 5</MenuItem>
            </Select>
          </FormControl>
          <Box
            className="btn-container"
          >
            <Button
              className="btn"
              variant="contained"
              onClick={formData.handleSubmit}
            >
              {formState.formMode == "add" ? "Add" : "Update"}
            </Button>
            <Button
              className="btn"
              variant="contained"
              onClick={(e) => {
                dispatch(setFormMode(""));
                dispatch(setEditFormData(null));
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Form;
