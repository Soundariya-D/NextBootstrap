import { Box, Container, Typography, Grid, Card, CardContent, Link } from '@mui/material';

export default function NewsCards() {
  const newsItems = [
    {
      id: 1,
      title: "Some news title goes here and should stay to two to three lines maximum",
      image: "/placeholder-news.jpg"
    },
    {
      id: 2,
      title: "Some news title goes here and should stay to two to three lines maximum",
      image: "/placeholder-news.jpg"
    },
    {
      id: 3,
      title: "Some news title goes here and should stay to two to three lines maximum",
      image: "/placeholder-news.jpg"
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 400, color: 'primary.main' }}>
            Lorem Ipsum
          </Typography>
          <Link 
            href="#" 
            underline="hover" 
            sx={{ 
              color: 'text.primary', 
              fontSize: '0.9rem',
              '&:hover': { color: 'primary.main' }
            }}
          >
            View all News →
          </Link>
        </Box>
        <Grid container spacing={4}>
          {newsItems.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }}>
              <Card 
                sx={{ 
                  border: '1px solid #eee',
                  boxShadow: 'none',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box
                  sx={{
                    height: 220,
                    background: `
                      linear-gradient(135deg, #f5f5f5 25%, transparent 25%),
                      linear-gradient(225deg, #f5f5f5 25%, transparent 25%),
                      linear-gradient(45deg, #f5f5f5 25%, transparent 25%),
                      linear-gradient(315deg, #f5f5f5 25%, #e0e0e0 25%)
                    `,
                    backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                    backgroundSize: '20px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', p: 2 }}>
                    <Typography variant="body2" sx={{ color: '#999' }}>
                      Image placeholder
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ minHeight: 100 }}>
                  <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.5 }}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
