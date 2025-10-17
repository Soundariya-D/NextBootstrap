import { Box, Container, Typography, Grid } from '@mui/material';
import Navbar from '@/components/Navbar';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import LocationSearch from '@/components/LocationSearch';
import NewsCards from '@/components/NewsCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Box sx={{ bgcolor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 400, 
              mb: 3, 
              textAlign: 'center',
              color: 'text.primary'
            }}
          >
            Equiteq is the Elite Global Investment Bank for the Technology Services & Consulting Sector.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center', 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Our job is to highlight the company's strengths, the guide shareholders in making the best decisions to secure lasting value.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 400, mb: 3, color: 'text.primary' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box 
                sx={{ 
                  bgcolor: 'background.default', 
                  p: 5, 
                  minHeight: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Image placeholder
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  fontSize: '0.75rem', 
                  letterSpacing: '1.5px',
                  display: 'block',
                  mb: 2
                }}
              >
                TESTIMONIALS
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 400, color: 'text.primary' }}>
                Lorem ipsum dolor sit amet
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <TestimonialCarousel />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <LocationSearch />

      <NewsCards />

      <Footer />
    </>
  );
}
