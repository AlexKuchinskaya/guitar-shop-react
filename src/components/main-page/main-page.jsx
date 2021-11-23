import './main.scss';
import Catalog from'../catalog/catalog.jsx'
import {connect} from 'react-redux';

const MainPage = (props) => {
    const {guitars} = props;
    return <>
     <main className="main">
        <h1 className="visually-hidden">Your Guitar Shop</h1>
        <Catalog guitars={guitars}/>
    </main>
    </>
}

const mapStateToProps = (state) => ({
    guitars: state.guitarList,
});
export {MainPage};
export default connect(mapStateToProps)(MainPage);