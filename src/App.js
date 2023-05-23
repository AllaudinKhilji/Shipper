import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import TableComponent from './Table';
import Adhar from './Ahdar/Adhar';
import Postedloads from './postedloads/postedlods';
 const App=()=> {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Make an Axios GET request to fetch data
//     axios.get('https://motionless-cowboy-hat-ant.cyclic.app/admin/allUsers')
//       .then(response => {
//         // Assuming the response data is an array
//         setData(response.data.users);
//         console.log(response.data.users)
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//  }
return(<div>
  
  <Postedloads/>

</div>
)

 }

  
 
export default App;










