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

const Project = () => {


   const columns = [
    {field: 'project_number', headerName: 'Project Number', width: 200},
    {field: 'project_name', headerName: 'Project Name', width: 200},
    {field: 'items_count', headerName: 'Count Items', width: 200},
    {field: 'total', headerName: 'Total', width: 300}
   ];

   const data =[
    {id:'01',project_number:'PRJ-001',project_name:'Michael Jackson',items_count:'20/pcs',total:'Rp 4.500.000'},
    {id:'02',project_number:'PRJ-002',project_name:'Putri Kemala',items_count:'10/pcs',total:'Rp 5.500.000'},
    {id:'03',project_number:'PRJ-003',project_name:'Prio Subagio',items_count:'40/pcs',total:'Rp 6.500.000'}
   ];

    return ( 
        <div className="room" style={{ display: 'flex', justifyContent:'right', height: '100%', zIndex:1 }} >
          <div style={{ height: 500, width: '100%' }}>
             <div style={{margin:'10px'}}> 
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Add Project</Button>
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
 
export default Project;