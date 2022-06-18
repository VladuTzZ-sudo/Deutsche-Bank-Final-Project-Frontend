import React from 'react';
import NavBar from '../Navbar/NavBar';
import FooterMain from "../FooterMain/FooterMain";
import "./MainPage.css";
import InfoMainCard from '../InfoCard/InfoMainCard';
import SecondSection from '../InfoCard/SecondSection';
import AboutUs from '../InfoCard/AboutUs';


export default function MainPage(){
    return(
        <div className="main-page">
            <NavBar></NavBar>
            <InfoMainCard></InfoMainCard>
            <SecondSection></SecondSection>
            <AboutUs></AboutUs>   
            <FooterMain></FooterMain>
        </div>
    )
}