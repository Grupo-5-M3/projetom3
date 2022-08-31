import Header from './components/Header/Header';
import AuthProvider from './contexts/authContext/AuthContext';
import RouteMain from './routes/MainRouter';
import Global from './styles/global';

function App(){
  return (
    <AuthProvider>
        <Header/>
    </AuthProvider>
  
    // <AuthProvider>
    //   <Global />
    //   <RouteMain />
    // </AuthProvider>
  );
}

export default App;
