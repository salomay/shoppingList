import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Project = () => {


   const columns = [
    {field: 'product_number', headerName: 'Product Number', width: 200},
    {field: 'product_name', headerName: 'Product Name', width: 200},
    {field: 'specification', headerName: 'Specification', width: 200},
    {field: 'action', headerName: 'Action', width: 300}
   ];

   const data =[
    {id:'01',room_name:'Living Room',action:''}
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