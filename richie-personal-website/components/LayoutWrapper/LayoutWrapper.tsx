"use client";

import { useIsMobile } from "@/util/useIsMobile"
import Navbar from "../NavBar/Navbar";
import NavbarMobile from "../NavBarMobile/NavbarMobile";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

export default function LayoutWrapper() {
    const [mounted, setMounted] = useState(false);
    
    const isMobile = useIsMobile()

    // only render after mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    return (
        <>
            { isMobile ? (
                <NavbarMobile />
            ) : 
            (
                <>
                    <Navbar />
                    <MusicPlayer />
                </>
            )
            }
            <Footer />
        </>
    )
}