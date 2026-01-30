import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { toggleTheme } from '../redux/themeSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

function ThemeToggle(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
      {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default ThemeToggle;
