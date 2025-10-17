'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button, TextField, InputAdornment, IconButton, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function LocationSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '50%' }}>
          <Typography variant="h4" sx={{ fontWeight: 400, mb: 2.5, color: 'primary.main' }}>
            Lorem ipsum dolor sit
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.primary', mb: 4, lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'white',
              textTransform: 'none',
              px: 4,
              py: 1.5,
              mb: 4,
              borderRadius: 0,
              '&:hover': {
                bgcolor: '#333'
              }
            }}
          >
            Learn More
          </Button>
          
          <Box component="form" onSubmit={handleSearch} sx={{ mt: 4 }}>
            <TextField
              fullWidth
              placeholder="OR search location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  '& fieldset': {
                    borderColor: '#ddd',
                  }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" edge="end" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link 
              href="#" 
              underline="hover" 
              sx={{ 
                color: 'text.primary', 
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' }
              }}
            >
              View all Locations →
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
