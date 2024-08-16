import  { FC, ReactElement } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Header from './components/Header/Header';
import DaysList from './components/DaysList/DaysList';
import TodaysHighlightsList from './components/TodaysHighlightsList/TodaysHighlightsList';
import SearchInput from './components/UI/SearchInput/SearchInput';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Title from './components/UI/Title/Title';


const App : FC = () : ReactElement => {
  return (
    <div className="App">
      <Sidebar>
        <SearchInput/>
        <CurrentWeather/>
      </Sidebar>
      <div>
        <Header/>
        <DaysList/>
        <div className='info-wrapper'>
        <Title>Today's Highlights</Title>
        <TodaysHighlightsList/>
        </div>
      </div>
    </div>
  );
}

export default App;
