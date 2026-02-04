import { FilterValue } from '../App';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

interface TodoToggleProps {
  alignment: FilterValue;
  handleAlignment: (event: React.MouseEvent<HTMLElement>, newAlignment: FilterValue) => void;
  totalCount: number | string;
  activeCount: number | string;
  completedCount: number | string;
}

const TodoToggle = ({ alignment, handleAlignment, totalCount, activeCount, completedCount }: TodoToggleProps) => {
  return(
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
          <ToggleButton value="all">
            ALL ({totalCount})
          </ToggleButton>
          <ToggleButton value="active">
            ACTIVE ({activeCount})
          </ToggleButton>
          <ToggleButton value="completed">
            COMPLETED ({completedCount})
          </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default TodoToggle;