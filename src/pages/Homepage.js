import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios-instance";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@material-ui/core";
import { TablePagination } from "@mui/material";

const Homepage = () => {
  // State in wich we add employees fetched from be
  const [employees, setEmployees] = useState([]);
  //page number for displaying employees
  const [page, setPage] = useState(0);
  //number of employees cards per page
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //fetch Employees from BE
  const getEmployees = async () => {
    try {
      const { data } = await axiosInstance(
        `/employees?page=${page + 1}&limit=${rowsPerPage}`
      );
      console.log(data);
      setEmployees(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDelete = async (id)=>{
    try {
        const {data} = await axiosInstance.delete(`/employees/soft-delete/${id}`)
    } catch (error) {
        console.log(error)
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    getEmployees();
  }, [page,rowsPerPage]);
  return (
    <Grid container spacing={2}>
      {employees.employees &&
        employees?.employees.map((employer) => (
          <Grid item key={employer._id}>
            <Card sx={{ maxWidth: 345 }} >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {employer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Adress:{" "}
                  {`${employer.homeAddress.addressLine1} | ${employer.homeAddress.ZIPCode} | ${employer.homeAddress.city}`}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  Phone Number: {employer.phoneNumber}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  Email: {employer.email}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  Active: {employer.isDeleted ? 'Yes': 'No'}
                </Typography>
                
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Edit</Button>
                <Button size="small" variant='outlined' onClick={()=>handleDelete(employer._id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid container>
            
        <TablePagination
      component="div"
      count={employees.count || 10}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
        </Grid>
    </Grid>
  );
};

export default Homepage;
