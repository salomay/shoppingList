import * as React from 'react';
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbar
  } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const Users = () => {


   const columns = [
    {field: 'user_number', headerName: 'User Number', width: 200},
    {field: 'user_name', headerName: 'User Name', width: 200},
    {field: 'priviledge', headerName: 'Priviledge', width: 200},
   ];

   const data =[
    {id:'01',user_number:'User 001',user_name:"Cyntia",priviledge:'Administrator'},
    {id:'02',user_number:'User 002',user_name:"Lala",priviledge:'Support'}
   ];

    return ( 
        <div className="room" style={{ display: 'flex', justifyContent:'right', height: '100%', zIndex:1 }} >
          <div style={{ height: 500, width: '100%' }}>
             <div style={{margin:'10px'}}> 
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Add Users</Button>
                    </Stack>
                </div>
            <DataGrid
                columns={columns}
                rows={data}
                components={{
                Toolbar: GridToolbar,
                }}
            />
          </div>
        </div>
     );
}
 
export default Users;