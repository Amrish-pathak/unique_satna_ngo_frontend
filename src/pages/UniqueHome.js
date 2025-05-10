import React, { useEffect, useState } from "react";


import '../App.css';
import '../index.css';

import Animate from '../Components/Animate';
import Spinner from '../Components/Spinner';
import Header from "../Components/Header";

import DoubtManager from "../Components/DoubtManager";
import Footer from "../Components/Footer";
import HomeContent from "../Components/HomeContent";

import HeroSlider from "../Components/HeroSlider";
import ServicesSection from "../Components/ServicesSection";
import CollegesList from "../Components/CollegesList";





const UniqueHome = () => {
  const [loading, setloading] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [NeedToWithdraw, setNeedToWithdraw] = useState(0);

  useEffect(() => {

    // setTimeout(() => {
    //   setLoadingTwo(false);
    // }, 2000);
    // eslint-disable-next-line
  }, []);


  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Animate>
          <div class="Main-Container">

            <Header />

            <section class="First-Section">


              <HeroSlider />
              <ServicesSection/>
              <CollegesList/>

              {/* <DoubtManager /> */}
            </section>

            <Footer />

          </div>


        </Animate>

      )}
    </>
  );

};

export default UniqueHome;
