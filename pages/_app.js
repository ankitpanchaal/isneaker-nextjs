import '../styles/index.scss'
import '../styles/Cart.scss'
import '../styles/CartItem.scss'
import '../styles/Category.scss'
import '../styles/Footer.scss'
import '../styles/Newsletter.scss'
import '../styles/HeaderF.scss'
import '../styles/Search.scss'
import '../styles/Banner.scss'
import '../styles/Home.scss'
import '../styles/Product.scss'
import '../styles/Products.scss'
import '../styles/RelatedProducts.scss'
import '../styles/SingleProduct.scss'
import '../styles/form.scss'
import '../styles/summry.scss'
import '../styles/Categories.scss'

import AppContext from '@/utils/context'
import HeaderF from '@/Components/Header/HeaderF'
import Newsletter from '@/Components/Footer/Newsletter/Newsletter'
import Footer from '@/Components/Footer/Footer'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://isneakers-server.onrender.com/',
  cache: new InMemoryCache(),
});


export default function MyApp({ Component, pageProps }) {

  return <>
    <ApolloProvider client={client} >
      <AppContext>
        <HeaderF />
        <Component {...pageProps} />
        <Newsletter />
        <Footer />
      </AppContext>
    </ApolloProvider>
  </>
}
