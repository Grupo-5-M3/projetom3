import AuthProvider from './contexts/authContext/AuthContext';
import RouteMain from './routes/MainRouter';
import Global from './styles/global';

function App() {
  return (
    <AuthProvider>
      <Global />
      <HomeLess />
    </AuthProvider>
  );
}

export default App;
