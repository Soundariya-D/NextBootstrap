'use client';

import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  TextField, 
  InputAdornment, 
  IconButton, 
  Link,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import { searchCountries, Country } from '@/lib/graphql-client';

export default function LocationSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError('Please enter a search term');
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const countries = await searchCountries(searchQuery);
      setResults(countries);
      
      if (countries.length === 0) {
        setError('No countries found matching your search');
      }
    } catch (err) {
      setError('Failed to fetch countries. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '50%' }}>
          <Typography variant="h4" sx={{ fontWeight: 400, mb: 2.5, color: 'primary.main' }}>
            Search Global Locations
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.primary', mb: 4, lineHeight: 1.6 }}>
            Discover countries around the world. Search by country name, code, or capital city to find detailed information.
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
              placeholder="Search by country name, code, or capital"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={loading}
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
                    <IconButton 
                      type="submit" 
                      edge="end" 
                      aria-label="search"
                      disabled={loading}
                    >
                      {loading ? <CircularProgress size={24} /> : <SearchIcon />}
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

        {error && (
          <Box sx={{ mt: 4 }}>
            <Alert severity="error" sx={{ borderRadius: 0 }}>
              {error}
            </Alert>
          </Box>
        )}

        {hasSearched && !loading && results.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 400 }}>
              Search Results ({results.length} {results.length === 1 ? 'country' : 'countries'})
            </Typography>
            <Grid container spacing={3}>
              {results.map((country) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={country.code}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      borderRadius: 0,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h3" sx={{ mr: 2 }}>
                          {country.emoji}
                        </Typography>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 500 }}>
                            {country.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {country.code}
                          </Typography>
                        </Box>
                      </Box>
                      
                      {country.capital && (
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          <strong>Capital:</strong> {country.capital}
                        </Typography>
                      )}
                      
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Continent:</strong> {country.continent.name}
                      </Typography>
                      
                      {country.currency && (
                        <Typography variant="body2">
                          <strong>Currency:</strong> {country.currency}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
}
