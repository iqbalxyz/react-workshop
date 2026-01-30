import { Box, Paper, styled, Typography } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';

function TodoContainer(): JSX.Element {

      const TodoContainer = styled(Paper)(({ theme }) => ({
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(4),
        marginTop: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        border: '1px solid #e0e0e0', // Border halus seperti di gambar
        boxShadow: 'none', // Di gambar terlihat flat/tanpa bayangan tebal
        backgroundColor: '#ffffff',
      }));

    return(
        <TodoContainer>
            <Box sx={{ color: '#bdbdbd', mb: 2 }}>
                <InventoryIcon sx={{ fontSize: 60 }} />
            </Box>
            <Typography variant="h6" sx={{ color: '#a89292', fontWeight: 600 }}>
                No todos found
            </Typography>
            <Typography variant="body2" sx={{ color: '#a89292' }}>
                Add a new todo to get started!
            </Typography>
        </TodoContainer>
    );
}

export default TodoContainer;