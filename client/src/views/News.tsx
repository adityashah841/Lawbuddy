import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/navbar';
import Footer from '@/footer';
import { Container, Typography, Card, CardContent, Link, Grid } from '@mui/material';

// Assuming CardData type definition
type CardData = {
  title: string;
  description: string;
  link: string;
};

const NewsComponent: React.FC = () => {
  const [news, setNews] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<CardData[]>('/api/get_news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{
        overflow: 'hidden',
        backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        width: '100%', // Set width to 100% to span the entire width
      }} >
        <Container
          className="text-white p-8 rounded-md"
          style={{
            padding: '50px',
            overflow: 'hidden',
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            width: '100%', // Set width to 100% to span the entire width
          }}
        >
          <Typography variant="h3" align="center" mt={5} mb={3} className="text-white bg-opacity-75 bg-black p-4 rounded-md text-6xl transform animate-pulse">
            Latest News
          </Typography>


          <Grid container spacing={3}>
            {news.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className="bg-white bg-opacity-50 rounded-md h-full overflow-hidden transform hover:scale-105 transition-transform duration-300" style={{ borderRadius: '15px' }}>
                  <CardContent className="flex flex-col h-full">
                    <Typography variant="h6" component="div" gutterBottom>
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#004080' }} className="hover:underline">
                        {item.title}
                      </Link>

                    </Typography>
                    <Typography variant="body2" color="black" className="text-gray-700 flex-grow">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default NewsComponent;
