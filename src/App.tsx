import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Account from '@pages/Account';
import Login from '@pages/Login';
import PublicLayout from '@components/layout/PublicLayout';
import PrivateLayout from '@components/layout/PrivateLayout';
import { ToastContainer } from 'react-toastify';
import LanguageMenu from '@components/LanguageMenu';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Account />} />
        </Route>

        <Route path="/auth" element={<PrivateLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      <ToastContainer />
      <LanguageMenu />
    </Router>
  );
}

export default App;
