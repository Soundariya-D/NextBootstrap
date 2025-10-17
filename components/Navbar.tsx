'use client';

import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        color: 'black',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                letterSpacing: '0.5px',
              }}
            >
              EQUITEQ
            </Typography>
          </Link>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Link href="/what-we-do" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'text.primary', textTransform: 'none', fontSize: '0.95rem' }}>
                What We Do
              </Button>
            </Link>
            <Link href="/our-firm" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'text.primary', textTransform: 'none', fontSize: '0.95rem' }}>
                Our Firm
              </Button>
            </Link>
            <Link href="/careers" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'text.primary', textTransform: 'none', fontSize: '0.95rem' }}>
                Careers
              </Button>
            </Link>
            <Link href="/news-research" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'text.primary', textTransform: 'none', fontSize: '0.95rem' }}>
                News & Research
              </Button>
            </Link>
            <Link href="/competitor-transactions" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'text.primary', textTransform: 'none', fontSize: '0.95rem' }}>
                Competitor Transactions
              </Button>
            </Link>
            <IconButton size="small" sx={{ color: 'text.primary' }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
