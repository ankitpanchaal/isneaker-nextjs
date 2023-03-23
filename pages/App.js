import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.scss";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import SingleProduct from "./components/SingleProduct/[slug]";
import HeaderF from "./components/Header/HeaderF";
import About from "./components/About";
import PP from "./components/PP";
import TC from "./components/TC";
import Summry from "./components/summry/summry";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://isneakers-server.onrender.com/',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client} >
            <BrowserRouter>
                <AppContext>
                    <HeaderF />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/product/:id" element={<SingleProduct />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/PP" element={<PP />} />
                        <Route path="/TC" element={<TC />} />
                        <Route path="/summry/:id" element={<Summry />} />
                    </Routes>
                    <Newsletter />
                    <Footer />
                </AppContext>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
