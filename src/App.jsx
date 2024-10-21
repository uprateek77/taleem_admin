import {BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './routes/routesWrapper';

function App() {
  const baseName = process.env.NODE_ENV === 'development' ? '/' : '/taleem/taleem_admin/';

  return (
    <BrowserRouter basename={baseName}>
      <RoutesWrapper />
    </BrowserRouter>
  );
}

export default App;
