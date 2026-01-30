import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';

function TodoToggle(): JSX.Element {
    
    type FilterValue = 'all' | 'active' | 'completed';
      
      const [alignment, setAlignment] = useState<FilterValue>('all');
    
      const handleAlignment = (event:React.MouseEvent<HTMLElement>, newAlignment: FilterValue) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
      }

    return(
        <Box sx={{ mt: 2 }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="todo filter"
          size="small"
          sx={{
            '& .Mui-selected': {
              backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
              color: '#1976d2 !important',
              fontWeight: 'bold',
            },
          }}
        >
          <ToggleButton value="all" sx={{ px: 3 }}>
            ALL (0)
          </ToggleButton>
          <ToggleButton value="active" sx={{ px: 3 }}>
            ACTIVE (0)
          </ToggleButton>
          <ToggleButton value="completed" sx={{ px: 3 }}>
            COMPLETED (0)
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    );
}

export default TodoToggle;