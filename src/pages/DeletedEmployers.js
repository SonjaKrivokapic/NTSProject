import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios-instance";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import { TablePagination } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DeletedEmployers = () => {
  // State in wich we add employees fetched from be
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  //page number for displaying employees 
  const [page, setPage] = useState(0);
  //number of employees cards per page 
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const history = useHistory();


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 2)); 
    setPage(0);
    
  };
  //fetch deleted Employees from BE
  useEffect(() => {
    const getDeletedEmployees = async () => {
      try {
        const { data } = await axiosInstance(
          `/employees/deleted?page=${page + 1}&limit=${rowsPerPage}`
        );
        console.log(data);
        setDeletedEmployees(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    getDeletedEmployees();
  }, [page, rowsPerPage]);
  return (
    <Grid container spacing={2}>
      <Grid container xs={{ marginTop: 10 }}>
        <Button onClick={()=>history.push('/')}> Employees</Button>
        <Button onClick={()=>history.push('/add-employer')}> Add Employees</Button>
      </Grid>
      {deletedEmployees.employees &&
        deletedEmployees?.employees.map((employer) => (
          <Grid item key={employer._id}>
            <Card sx={{ maxWidth: 345 }}>
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
                  Active: {employer.isDeleted ? "Yes" : "No"}
                </Typography>
              </CardContent>
              <CardActions>
                
            
              </CardActions>
            </Card>
          </Grid>
        ))}
      <Grid container>
        <TablePagination
          component="div"
          count={deletedEmployees.count || 10}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
};

export default DeletedEmployers;

