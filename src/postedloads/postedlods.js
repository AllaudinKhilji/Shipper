import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Icon } from '@iconify/react';
import filterLine from '@iconify-icons/majesticons/filter-line';
import { Form, InputGroup } from 'react-bootstrap';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F58E26',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const  Postedloads = ()=> {
    const [data, setData] = useState([]);
    
    const [search, setSearch] = useState('');
    console.log(search)
    useEffect(() => {
        axios
            .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allPostedLoads')
            .then(response => {
                setData(response.data.loads);
                //setFilteredData(response.data.users);
                console.log(response.data.loads)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

      
   
  

    
    return (
        
        
        <TableContainer component={Paper}>
            <Form style={{marginLeft:'10px', marginTop:'20px'}}>
                <inputGroup>
                    <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='search by Id/Name' style={{width:'200px',borderColor:'#F58E26'}} type='search'/>
                </inputGroup>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h2 style={{color:'#F58E26'}}>Total Bookings: <span style={{color:'black'}}>{data.length}</span></h2>
                <div style={{ display: 'flex' }}>
                    
                           <div style={{marginRight:'50px',borderWidth:'10px',borderColor:'lightgray'}}>
                            
                            
                                  
                             

                             </div>
                        
                        
                    
                </div>
            </div>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Id&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">User&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">No.of loads&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">User Type&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">View Details&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter((row)=>{
                        return search.toLowerCase()==='' ? 
                        row : row.UserName.toLowerCase().includes(search) ||
                        row.LoadId.toLowerCase().includes(search.toLowerCase())
                    }).map(row => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.LoadId} 
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.UserName}</StyledTableCell>
                            <StyledTableCell align="right">{1}</StyledTableCell>
                            <StyledTableCell align="right">{row.UserType}</StyledTableCell>
                            
                            <StyledTableCell align="right">
                                <button variant="contained" style={{ backgroundColor: '#F58E26', color: 'white', borderRadius: '10px' }}>
                                    View
                                </button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Postedloads;