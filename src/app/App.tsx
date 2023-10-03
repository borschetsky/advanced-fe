import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import 'app/styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import MainPage from 'pages/MainPage/ui/MainPage';



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>);
};

export default App;