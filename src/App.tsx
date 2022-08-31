import AuthProvider from './contexts/authContext/AuthContext';
import HomeLess from './pages/HomeLess/HomeLess';
import RouteMain from './routes/MainRouter';
import Global from './styles/global';

function App() {
  return (
    <AuthProvider>
      <Global />
      <RouteMain />
    </AuthProvider>
  );
}

export default App;
