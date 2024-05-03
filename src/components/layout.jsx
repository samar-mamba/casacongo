    import Header from "./header";
    import {Outlet} from "react-router-dom"
    import Footer from "./footer";

    function Layout() {

        return(
            <>
            <div className="flex flex-col  justify-center content-center "> 
            <nav className="z-50 sticky inset-0 w-full ">
                <Header/>
            </nav>
            <main className="z-20">
                <Outlet/>
            </main>
            <footer className="pt-5">
                <Footer/>
            </footer>

            </div>
            </>
        )
        
    }

    export default Layout;