import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        const url = `https://lit-waters-26265.herokuapp.com/doctors`
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    const deleteProduct = (id)=>{
        fetch(`https://lit-waters-26265.herokuapp.com/doctors/${id}`, {
             method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            console.log('product deleted')
            // if(res){
                
            // }
        })
    }
    return (
        <div className='d-flex justify-content-center'>
            <TableContainer component={Paper} sx={{width:'500px'}}>
                <Table  aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctors.map((doctor) => (
                            <TableRow
                                key={doctor._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="doctor">
                                    {doctor.name}
                                </TableCell>
                                <TableCell align="right"><Button onClick={()=> deleteProduct(doctor._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Doctors;