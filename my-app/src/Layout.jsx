import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from "./components/Footer";


export default function Layout () {
    return (
        <div>
            <Header />
            <main>
                <Outlet />

            </main>
            <Footer />
        </div>
    )
}
