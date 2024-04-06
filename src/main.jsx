import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
/* import App from './components/App'; */
import ModalProvider from './components/Home/DailyNorma/DailyNormaModal/ModalProvider/ModalProvider';

import { UserLogoutModal } from './components/Logout/UserLogoutModal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/WaterTracker">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ModalProvider>
            <UserLogoutModal />
            {/* <App /> */}
          </ModalProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
