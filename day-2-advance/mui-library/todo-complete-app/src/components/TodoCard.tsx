import { Box, Typography, Card, CardContent } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface TodoCardProps {
  Icon: SvgIconComponent;
  countValue: number | string;
  label: string;
  iconColor?: string; 
}

const TodoCard = ({ Icon, countValue, label, iconColor = "primary" }: TodoCardProps) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon 
          fontSize="large" 
          sx={{ 
            mr: 2, 
            color: iconColor
          }} 
        />
        <Box>
          <Typography variant="h6" component="div" fontWeight="bold">
            {countValue}
          </Typography>
          <Typography variant="body1" component="div" sx={{ color: '#a89292' }}>
            {label}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoCard;