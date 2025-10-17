import { Box, Container, Typography, Button, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#003d1a', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, lg: 3 }}>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, maxWidth: 280 }}>
              Equiteq is the Elite Global Investment Bank for the Technology Services and Consulting Sector.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#7cb342', 
                color: 'white',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                borderRadius: 0,
                '&:hover': {
                  bgcolor: '#8bc34a'
                }
              }}
            >
              Contact Us
            </Button>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontSize: '0.75rem', 
                letterSpacing: '1.5px', 
                mb: 2.5,
                display: 'block',
                fontWeight: 600
              }}
            >
              WHAT WE DO
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  What We Do
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Our Expertise
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Our Events
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontSize: '0.75rem', 
                letterSpacing: '1.5px', 
                mb: 2.5,
                display: 'block',
                fontWeight: 600
              }}
            >
              OUR FIRM
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Our Business
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Our Purpose & Core Values
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Our People & Leadership
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Locations
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontSize: '0.75rem', 
                letterSpacing: '1.5px', 
                mb: 2.5,
                display: 'block',
                fontWeight: 600
              }}
            >
              CAREERS
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Discover Careers
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                  Open Roles
                </Link>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <IconButton 
                href="#" 
                sx={{ 
                  bgcolor: '#7cb342', 
                  color: 'white',
                  width: 35,
                  height: 35,
                  '&:hover': { bgcolor: '#8bc34a' }
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton 
                href="#" 
                sx={{ 
                  bgcolor: '#7cb342', 
                  color: 'white',
                  width: 35,
                  height: 35,
                  '&:hover': { bgcolor: '#8bc34a' }
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton 
                href="#" 
                sx={{ 
                  bgcolor: '#7cb342', 
                  color: 'white',
                  width: 35,
                  height: 35,
                  '&:hover': { bgcolor: '#8bc34a' }
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton 
                href="#" 
                sx={{ 
                  bgcolor: '#7cb342', 
                  color: 'white',
                  width: 35,
                  height: 35,
                  '&:hover': { bgcolor: '#8bc34a' }
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  fontSize: '0.7rem', 
                  letterSpacing: '1.5px',
                  mb: 1,
                  display: 'block',
                  fontWeight: 600
                }}
              >
                INSIGHTS
              </Typography>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                News & Research
              </Link>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  fontSize: '0.7rem', 
                  letterSpacing: '1.5px',
                  mb: 1,
                  display: 'block',
                  fontWeight: 600
                }}
              >
                COMPLETED TRANSACTIONS
              </Typography>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { opacity: 0.8 } }}>
                Completed Transactions
              </Link>
            </Grid>
          </Grid>
        </Box>
        
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
          ©2025 equiteq inc. all rights reserved
        </Typography>
      </Container>
    </Box>
  );
}
