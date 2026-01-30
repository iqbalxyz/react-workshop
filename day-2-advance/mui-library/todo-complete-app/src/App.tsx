import { Container } from '@mui/material';
import TodoAppBar from './components/TodoAppBar';
import TodoCard from './components/TodoCard';
import TodoForms from './components/TodoForms';
import TodoToggle from './components/TodoToggle';
import TodoFooter from './components/TodoFooter';
import TodoContainer from './components/TodoContainer';

function App(): JSX.Element {

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>

        {/* Component AppBar */}
        <TodoAppBar/>

        {/* Component Cards */}
        <Container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <TodoCard/>
          <TodoCard/>
          <TodoCard/>
        </Container>

      {/* Component Forms */}
      <TodoForms/>

      {/* Component Toggle */}
      <TodoToggle/>

      {/* Component List */}
      <TodoContainer/>

      {/* Component Footer */}
      <TodoFooter/>

     </Container>
    </>
  );
}

export default App;
