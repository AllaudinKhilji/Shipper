// import React, { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// //import { Icon } from '@iconify/react';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Icon, InlineIcon } from '@iconify/react';
// import filterLine from '@iconify-icons/majesticons/filter-line';
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#F58E26',
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];

// export default function TableComponent() {
//     const [data, setData] = useState([]);
//     const [filterOption, setFilterOption] = useState(null);
//     //const [Data,setDataa] = useState([]);
//     useEffect(() => {
//         // Make an Axios GET request to fetch data
//         axios.get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
//             .then(response => {
//                 // Assuming the response data is an array
//                 setData(response.data.users);
//                 console.log(response.data.users)
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });


//     }, []);





//     return (

//         <TableContainer component={Paper}>
//             <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom:'10px' }}>
//                 <h2>
//                     Total Users: {data.length}
//                 </h2>
//                 <div style={{ display: 'flex' }}>
//                     <div style={{  fontSize: '30px', color:'#F58E26' }}>
//                         <Icon icon="majesticons:filter-line" style={{color:'#F58E26'}} />
//                     </div>
//                     <div style={{ border: '1px solid black', display:'flex', marginRight:'30px', borderRadius:'10px',height:'35px',marginTop:'10px' }}>
//                         <h5 style={{   marginLeft:'10px',marginTop:'10px',fontSize:'15px',color:'rgba(39, 132, 42, 1)' }}>KYC Verified
//                          </h5>
//                          <div><NavDropdown  id="nav-dropdown" style={{ fontSize:'15px', marginTop:'10px',marginRight:'10px'}}>
//                                 <NavDropdown.Item eventKey="4.1" style={{color:'rgba(39, 132, 42, 1)'}} onClick={() => handleFilterClick('verified')}>Verified</NavDropdown.Item>
//                                 <NavDropdown.Item eventKey="4.2" style={{color:'rgba(39, 132, 42, 1)'}} onClick={() => handleFilterClick('notVerified')}>Not Verified</NavDropdown.Item>

//                             </NavDropdown></div>

//                     </div>

//                 </div>
//             </div>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         {/* <StyledTableCell>ID </StyledTableCell> */}
//                         <StyledTableCell >Name&nbsp;</StyledTableCell>
//                         <StyledTableCell align="right">MobileNumber&nbsp;</StyledTableCell>
//                         <StyledTableCell align="right">GST Verification&nbsp;</StyledTableCell>
//                         <StyledTableCell align="right">Role&nbsp;</StyledTableCell>
//                         <StyledTableCell align="right">View Details&nbsp;</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {data.map((row) => (

//                         <StyledTableRow key={row.Availability}>

//                             {/* <StyledTableCell component="th" scope="row">
//                 {row._id}
//               </StyledTableCell> */}
//                             <StyledTableCell component="th" scope="row">{row.firstName}{row.lastName}</StyledTableCell>
//                             <StyledTableCell align="right">{row.mobileNo}</StyledTableCell>
//                             <StyledTableCell align="right">{row.gstVerify}</StyledTableCell>
//                             <StyledTableCell align="right">{row.role}</StyledTableCell>
//                             {/* <StyledTableCell align="right">{row.}</StyledTableCell> */
//                                 <StyledTableCell align="right">
//                                     <button variant="contained" style={{ backgroundColor: '#F58E26', color: 'white', borderRadius: '10px' }}>
//                                         View
//                                     </button>

//                                 </StyledTableCell>}
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Icon } from '@iconify/react';
// import filterLine from '@iconify-icons/majesticons/filter-line';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#F58E26',
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// export default function TableComponent() {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterOption, setFilterOption] = useState(null);

//   useEffect(() => {
//     axios
//       .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
//       .then(response => {
//         setData(response.data.users);
//         setFilteredData(response.data.users);

//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (filterOption === 'verified') {
//         const filtered = data.filter(row => row.gstVerify === true);
//         setFilteredData(filtered);
//       } else if (filterOption === 'notVerified') {
//         const filtered = data.filter(row => row.gstVerify === false);
//         setFilteredData(filtered);
//       } else {
//         setFilteredData(data);
//       }
//   }, [data, filterOption]);

//   const handleFilterClick = option => {
//     if (option === 'verified') {
//       setFilterOption('true');
//     } else if (option === 'notVerified') {
//       setFilterOption('false');
//     } else {
//       setFilterOption(null);
//     }
//   };

//   return (
//     <TableContainer component={Paper}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
//         <h2>Total Users: {data.length}</h2>
//         <div style={{ display: 'flex' }}>
//           <div style={{ fontSize: '30px', color: '#F58E26' }}>
//             <Icon icon={filterLine} style={{ color: '#F58E26' }} />
//           </div>
//           <div
//             style={{
//               border: '1px solid black',
//               display: 'flex',
//               marginRight: '30px',
//               borderRadius: '10px',
//               height: '35px',
//               marginTop: '10px',
//             }}
//           >
//             <h5 style={{ marginLeft: '10px', marginTop: '10px', fontSize: '15px', color: 'rgba(39, 132, 42, 1)' }}>
//               KYC Verified
//             </h5>
//             <NavDropdown id="nav-dropdown" style={{ fontSize: '15px', marginTop: '10px', marginRight: '10px' }}>
//               <NavDropdown.Item
//                 eventKey="4.1"
//                 style={{ color: 'rgba(39, 132, 42, 1)' }}
//                 onClick={() => handleFilterClick('verified')}
//               >
//                 Verified
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 eventKey="4.2"
//                 style={{ color: 'rgba(39, 132, 42, 1)' }}
//                 onClick={() => handleFilterClick('notVerified')}
//               >
//                 Not Verified
//               </NavDropdown.Item>
//             </NavDropdown>
//           </div>
//         </div>
//       </div>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Name&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">MobileNumber&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">GST Verification&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">Role&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">View Details&nbsp;</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredData.map(row => (
//             <StyledTableRow key={row.Availability}>
//               <StyledTableCell component="th" scope="row">
//                 {row.firstName} {row.lastName}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.mobileNo}</StyledTableCell>
//               <StyledTableCell align="right">{row.gstVerify}</StyledTableCell>
//               <StyledTableCell align="right">{row.role}</StyledTableCell>
//               <StyledTableCell align="right">
//                 <button variant="contained" style={{ backgroundColor: '#F58E26', color: 'white', borderRadius: '10px' }}>
//                   View
//                 </button>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


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

export default function TableComponent() {
    const [data, setData] = useState([]);
    //const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    console.log(search)
    useEffect(() => {
        axios
            .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
            .then(response => {
                setData(response.data.users);
                //setFilteredData(response.data.users);
                console.log(response.data.users)

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

      
    const handleFilterClick = (option) => {
       
        if (option === "All") {
          axios
            .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
            .then(response => {
              const filteredALLData = response.data.users
              setData(filteredALLData);
              console.log(filteredALLData);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }else if (option === "Adhar Verified") {
            axios
              .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
              .then(response => {
                const filteredAdharVerify = response.data.users.filter(user => user.aadharVerify === "Verified"                   )
                setData(filteredAdharVerify);
                console.log(filteredAdharVerify);
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          }else if (option === "Adhar Pending" ) {
            axios
              .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
              .then(response => {
                const filteredDataPending = response.data.users.filter(user => user.aadharVerify === "notVerified"                   )
                setData(filteredDataPending);
                console.log(filteredDataPending);
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          }else if (option === "GST Verified" ) {
            axios
              .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
              .then(response => {
                const filteredDataGST = response.data.users.filter(user => user.gstVerify === "Verified")
                setData(filteredDataGST);
                console.log(filteredDataGST);
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          }else if (option === "GST Pending" ) {
            axios
              .get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
              .then(response => {
                const filteredDataGSTPending = response.data.users.filter(user => user.gstVerify === "notVerified")
                setData(filteredDataGSTPending);
                console.log(filteredDataGSTPending);
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          }
          
      };
      
  

    
    return (
        
        
        <TableContainer component={Paper}>
            <Form style={{marginLeft:'650px', marginTop:'20px'}}>
                <inputGroup>
                    <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='search details' style={{width:'200px',borderColor:'#F58E26'}} type='search'/>
                </inputGroup>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h2 style={{color:'#F58E26'}}>Total Transpoters: <span style={{color:'black'}}>{data.length}</span></h2>
                <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: '30px', color: '#F58E26' }}>
                        <Icon icon={filterLine} style={{ color: '#F58E26',marginRight:'10px',marginBottom:"25px"}} />
                    </div>
                    
                           <div style={{marginRight:'50px',borderWidth:'10px',borderColor:'lightgray'}}>
                            <select  onChange={(e) => handleFilterClick(e.target.value)}>

                            

                            <option value="All"  selected>All</option>

                             <option value="Adhar Verified">Adhar Verified</option>
                             <option value="Adhar Pending">Adhar Pending</option>
                             <option value="GST Verified">GST Verified</option>
                             <option value="GST Pending">GST Pending</option>

                             </select>

                             </div>
                        
                        {/* <NavDropdown id="nav-dropdown" style={{ fontSize: '15px', marginTop: '10px', marginRight: '10px' }}>
                            <NavDropdown.Item
                                eventKey="4.1"
                                style={{ color: 'rgba(39, 132, 42, 1)' }}
                                // onClick={() => handleFilterClick('verified')}
                            >
                                Gst Verified
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey="4.2"
                                style={{ color: 'red' }}
                                // onClick={() => handleFilterClick('notVerified')}
                            >
                               Gst Pending
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey="4.1"
                                style={{ color: 'rgba(39, 132, 42, 1)' }}
                                // onClick={() => handleFilterClick('verified')}
                            >
                                Adhar Verified
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey="4.1"
                                style={{ color: 'red' }}
                                // onClick={() => handleFilterClick('verified')}
                            >
                                Adhar Pending
                            </NavDropdown.Item>

                            {/* <NavDropdown.Item
                                eventKey="4.3"
                                style={{ color: 'rgba(39, 132, 42, 1)' }}
                                onClick={() => handleFilterClick('all')}
                            >
                                All
                            </NavDropdown.Item> */}
                        {/* </NavDropdown> */} 
                    
                </div>
            </div>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">MobileNumber&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">GST Verification&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Adhar Verification&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Role&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">View Details&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter((row)=>{
                        return search.toLowerCase()==='' ? 
                        row : row.firstName.toLowerCase().includes(search)
                    }).map(row => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.firstName} {row.lastName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.mobileNo}</StyledTableCell>
                            <StyledTableCell align="right">{row.gstVerify}</StyledTableCell>
                            <StyledTableCell align="right">{row.aadharVerify}</StyledTableCell>
                            <StyledTableCell align="right">{row.role}</StyledTableCell>
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
