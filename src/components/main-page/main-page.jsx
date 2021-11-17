import { mocks } from '../mocks/mock';
import './main.scss';

const MainPage = () => {
    return <>
     <main className="main">
        <h1 className="visually-hidden">Your Guitar Shop</h1>
        <section className="catalog">
            <h2 className="title catalog__title">Каталог гитар</h2>
            <div className="catalog__sort sort">
                <span>Сортировать:</span>
            </div>
            <div className="catalog__wrapper">
                <ul className="catalog__list">
                    {/* {mocks.map((mockGuitar) => {
                        return 
                    }} */}
                </ul>
            </div>
        </section>
    </main>
    </>
}

export default MainPage;