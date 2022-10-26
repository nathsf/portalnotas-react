import './scss/styles.js';
import './App.css';
import SideHeader from './components/layout/sidemenu';
import NavBar from './components/layout/header';
import Main from './components/main.js';
function App() {
  return (
    <div className="App">
      <SideHeader></SideHeader>
      <NavBar></NavBar>
      <Main>
        
      </Main>
    </div>
  );
}

export default App;
