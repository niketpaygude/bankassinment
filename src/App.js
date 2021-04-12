import logo from './logo.svg';
import styles from "./App.module.css";

import Layout from './hoc/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import BankContainer from './containers/bankView';

function App() {
  return (
    <BrowserRouter> 
    <div>
      <Layout>
      <BankContainer />
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
