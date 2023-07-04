import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SideNav from './SideNav';
import ContentContainer from './ContentContainer';
import PageNotFound from './PageNotFound';
import Home from './Home';
import Subscriptions from './Subscriptions';
import SubscriptionContent from './SubscriptionContent';
import DisplayHome from './DisplayHome';
import Library from './Library';

function App() {
  return (
    <>
      <NavBar />
      {/* <SideNav /> */}
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/library' element={<Library />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
      {/* <ContentContainer /> */}
    </>
  );
}

export default App;
