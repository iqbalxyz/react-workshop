import { Box, Typography, Card, CardContent } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

function TodoCard(): JSX.Element {
    return(
        <Card sx={{ width: '100%', mt:2 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <AssignmentIcon fontSize="large" color="primary" sx={{ mr: 2 }} />
                <Box>
                    <Typography variant="h6" component="div" fontWeight="bold">
                    0
                    </Typography>
                    <Typography variant="caption" component="div" sx={{color: '#a89292'}}>
                    Total
                </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default TodoCard;