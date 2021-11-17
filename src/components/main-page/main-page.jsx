import './main.scss';
import Catalog from'../catalog/catalog.jsx'

const MainPage = () => {
    return <>
     <main className="main">
        <h1 className="visually-hidden">Your Guitar Shop</h1>
        <Catalog />
    </main>
    </>
}

export default MainPage;