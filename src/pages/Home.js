import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    const location = useLocation();

    const [restrictAccess, setRestrictAccess] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);


    return (
        <>
            <AnimatePresence mode="wait">
                {restrictAccess ? (
                    <>
                        <div style={{ overflowY: "auto", height: "100vh" }}>
                            <Outlet />
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ overflowY: "auto", height: "100vh" }}>
                            <Outlet />
                        </div>
                    </>
                )}
            </AnimatePresence>



        </>
    );
};

export default Home;
