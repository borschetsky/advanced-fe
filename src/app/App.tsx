import { useTheme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>);
};

export default App;