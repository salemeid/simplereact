import './App.css';
import MyCalendar from './components/Calender';
import StickyFooter from './components/Footer';

import HeaderMUI from './components/HeaderMUI';


function App() {
  return (
    <div className="App">
      <HeaderMUI />

      <MyCalendar />
      <div>
        <StickyFooter />
      </div>
    </div>
  );
}

export default App;
