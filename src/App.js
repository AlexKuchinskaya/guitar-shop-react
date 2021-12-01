// import Footer from './components/footer/footer';
// import Header from './components/header/header';
import '../src/styles/App.scss';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "./browser-history";
import { Routes } from './components/const/const';
import MainPage from './components/main-page/main-page';
import Basket from './components/basket/basket';
// import './styles/App.scss';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <MainPage />
//       <Footer />
//     </div>
//   );
  
// }

// export default App;

const App = () => {


  return (
    <div className="App">
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Routes.MAIN} component={MainPage}/>
        <Route exact path={Routes.MY_BASKET} component={Basket} />
      </Switch>
    </BrowserRouter>
    </div>
  );
};


export default App;
