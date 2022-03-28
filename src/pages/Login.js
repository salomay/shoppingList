import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Login = () => {
    return ( 
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'space-between', marginLeft:'30%',marginRight:'30%' }}
        >
            
            <h1>Authentication</h1>
            
         
                <TextField id="standard-basic" label="Username" variant="standard" />
               
            
                <TextField id="standard-basic" label="Password" variant="standard" />
            
            
                <Button variant="contained" sx={{   marginTop:'10px'}}>Sign In</Button>
            
            

        </Box>
     );
}
 
export default Login;