import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardAdsContainer from './components/Dashboard/DashboardAdsContainer';
import Test from './test';

const endpoints = 'abc' | 'cde' | 'edg'

function App() {
  return (
    <Layout>
      {/* <Dashboard /> */}
      <Test />
    </Layout>
    // <BrowserRouter>
    //     <Routes>
    //       <Route path={`/ele/abc`} element={<DashboardAdsContainer />} />
    //     </Routes>
    // </BrowserRouter>
  );
}

export default App;
