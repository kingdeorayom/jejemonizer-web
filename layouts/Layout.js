
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useOpenSans } from '@/utils/fonts'

const Layout = ({ children }) => {

    return (
        <>
            <Header useOpenSans={useOpenSans} />
            <main className={`${useOpenSans.className}`}>
                {children}
            </main>
            <Footer useOpenSans={useOpenSans} />
        </>
    )

}

export default Layout