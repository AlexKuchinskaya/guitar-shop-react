import './main.scss';
import Catalog from'../catalog/catalog.jsx'
import {connect} from 'react-redux';
import Header  from '../header/header';
import Footer from '../footer/footer';

const MainPage = (props) => {
    const {guitars} = props;
    return <>
     <Header />
     <main className="main">
        <h1 className="visually-hidden">Your Guitar Shop</h1>
        <Catalog guitars={guitars}/>
     </main>
     <Footer />
    </>
}

const mapStateToProps = (state) => ({
    guitars: state.guitarList,
});
export {MainPage};
export default connect(mapStateToProps)(MainPage);