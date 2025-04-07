import { Box, Container, Typography, Grid } from '@mui/material'; // Import Grid from @mui/material
import { AttackAlerts } from '../components/Dashboard/AttackAlerts';
import { DataUpload } from '../components/Dashboard/DataUpload';
import { AttackChart } from '../components/Dashboard/AttackChart';

const mockAlerts = [
  {
    id: '1',
    title: 'Brute Force Attempt',
    description: 'Multiple failed login attempts detected',
    severity: 'high' as const,
    timestamp: new Date(),
  },
  {
    id: '2',
    title: 'Port Scanning',
    description: 'Unusual port scanning activity detected',
    severity: 'medium' as const,
    timestamp: new Date(),
  },
];

export const DashboardPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h1" gutterBottom>
        IoT Attack Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={8}> */}
          <Box sx={{ mb: 4 }}>
            <AttackAlerts alerts={mockAlerts} />
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Attack Statistics
            </Typography>
            <AttackChart />
          </Box>
        </Grid>
        
        {/* <Grid item xs={12} md={4}> */}
          <DataUpload />
        {/* </Grid> */}
      {/* </Grid> */}
    </Container>
  );
};