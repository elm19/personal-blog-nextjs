import {AppBar, Button, ButtonGroup, Container, Stack, Toolbar } from "@mui/material"
import Link from "next/link"



export const HeaderNavBar = () => {

  return (
    <AppBar
    position="fixed"
    enableColorOnDark
    sx={{
      bgcolor: 'rgba(255, 255, 255, 0.6)', // Lighter and less transparent background
      backgroundImage: 'none',
      backdropFilter: 'blur(20px)', // Blurring the content under the AppBar
    }}
  >
    
      <Stack spacing={2} direction="row" maxWidth="lg" >
          <Link href={'/'}>
            <Button variant="text" size="small" sx={{ minWidth: 0, color:'black', textTransform: 'none'}}>Home</Button>
          </Link>
          <Link href={'/about'}>
            <Button size="small" sx={{ minWidth: 0, color:'black', textTransform: 'none' }}>Blogs</Button>
          </Link>
          <Link href={'/about'}>
            <Button size="small" sx={{ minWidth: 0, color:'black', textTransform: 'none' }}>Categories</Button>
          </Link>
          <Link href={'/about'}>
            <Button size="small" sx={{ minWidth: 0, color:'black', textTransform: 'none' }}>FAQ</Button>
          </Link>
          <Link href={'/about'}>
            <Button size="small" sx={{ minWidth: 0, color:'black', textTransform: 'none' }}>About Us</Button>
          </Link>
      </Stack>
    </AppBar>
  
  );
}