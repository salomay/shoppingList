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



function customCheckbox(theme) {
    return {
      '& .MuiCheckbox-root svg': {
        width: 16,
        height: 16,
        backgroundColor: 'transparent',
        border: `1px solid ${
          theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
        }`,
        borderRadius: 2,
      },
      '& .MuiCheckbox-root svg path': {
        display: 'none',
      },
      '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
        backgroundColor: '#1890ff',
        borderColor: '#1890ff',
      },
      '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: 0,
        borderLeft: 0,
        transform: 'rotate(45deg) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '""',
        top: '50%',
        left: '39%',
        width: 5.71428571,
        height: 9.14285714,
      },
      '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
        width: 8,
        height: 8,
        backgroundColor: '#1890ff',
        transform: 'none',
        top: '39%',
        border: 0,
      },
    };
  }
  
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-cell': {
      color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },
    ...customCheckbox(theme),
  }));
  
  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        // @ts-expect-error
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }


const Rooms = () => {


   const columns = [
    {field: 'room_name', headerName: 'Room Name', width: 200},
    {
        field: "update",
        headerName: "Update",
        sortable: false,
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation(); // don't select this row after clicking
    
        //     const api: GridApi = params.api;
        //     const thisRow: Record<string, GridCellValue> = {};
    
        //     api
        //       .getAllColumns()
        //       .filter((c) => c.field !== "__check__" && !!c)
        //       .forEach(
        //         (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        //       );
    
        //     return alert(JSON.stringify(thisRow, null, 4));
          };
    
          return <Button variant="contained" onClick={onClick}>Update</Button>;
        }
      },
      {
        field: "delete",
        headerName: "Delete",
        sortable: false,
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation(); // don't select this row after clicking
    
        //     const api: GridApi = params.api;
        //     const thisRow: Record<string, GridCellValue> = {};
    
        //     api
        //       .getAllColumns()
        //       .filter((c) => c.field !== "__check__" && !!c)
        //       .forEach(
        //         (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        //       );
    
        //     return alert(JSON.stringify(thisRow, null, 4));
          };
    
          return <Button variant="contained" onClick={onClick}>Delete</Button>;
        }
      },
   ];

//    const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 10,
//     maxColumns: 10,
//   });



   const data ={
       columns:[
            {field: 'room_name', headerName: 'Room Name', width: 110},
            {field: 'description', headerName: 'Description', width: 600},
       ],
       rows:[
        {id:'01',room_name:'Living Room',description:'Ruang keluarga (living room) adalah tempat berkumpul dan beraktivitas bersama keluarga. Karena itu, ciptakan living room yang nyaman'},
        {id:'02',room_name:'Kitchen',description:'tempat atau ruangan untuk mengolah berbagai macam makanan.'},
        {id:'03',room_name:'Bed Room',description:'ruangan yang terletak di dalam unit hunian atau akomodasi yang ditandai dengan penggunaannya untuk tidur.'}
       ]
    };


    console.log(data)

    return ( 
        <div className="room" style={{ display: 'flex', justifyContent:'right', height: '100%', zIndex:1 }} >
            
          <div style={{ height: 500, width: '80%' }}>
              <div style={{margin:'10px'}}> 
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Add Room</Button>
                        <Button variant="contained">Update Room</Button>
                        <Button variant="contained">Delete Room</Button>
                    </Stack>
                </div>

                <StyledDataGrid
                    checkboxSelection
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    components={{
                    Pagination: CustomPagination,
                    Toolbar: GridToolbar,
                    }}
                    {...data}
                />
            {/* <DataGrid
                columns={columns}
                rows={data}
                components={{
                Toolbar: GridToolbar,
                Pagination: CustomPagination,
                }}
            /> */}
          </div>
        </div>
     );
}
 
export default Rooms;