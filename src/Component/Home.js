import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "..//Component/Hero";
import Footer from "../Component/Footer";
const Home=()=>{

    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title= " Welcome to your space of Enicarthage Events"
        text=""
        />
        <Footer/>
        </>
    )
}
export default Home;