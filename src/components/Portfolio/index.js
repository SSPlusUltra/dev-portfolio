import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import ImageOverlay from "../Overlay";
import RevevrseImageOverlay from "../ReverseImageOverlay";
import img1 from '../../assets/images/Ts.png';
import img2 from '../../assets/images/Expense.png'
import img3 from '../../assets/images/Investment.png'
import img4 from '../../assets/images/Research.png'
import img5 from '../../assets/images/nflix.png'
import img6 from '../../assets/images/ddash.png'
import img7 from '../../assets/images/tableau.png'


const expenseTracker = [{
    title: "Expense tracker ",
    gh: "https://github.com/SSPlusUltra/heroku-ExpenseTracker",
    lw:"https://ssplusultra.github.io/heroku-ExpenseTracker/",
    techStack: [
      "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png", // React
      "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png", // HTML
      "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png", // Git
      "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png", // CSS
      "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
    ],
    description:  <>
    <h3>Efficient Money Management: Expense Tracker simplifies expense tracking and financial management with an intuitive interface.<br />
    Dynamic Filtering: Users can analyze spending trends using powerful filters based on categories or time periods.<br />
    Visual Representation: Vertical bars visually represent expenses, providing clear insights into spending patterns over time.</h3>
  </>
  }];
  
  const investmentCalculator = [{
    title: "Investment Calculator",
    gh: "https://github.com/SSPlusUltra/InvestmentCalculator",
    lw:"https://ssplusultra.github.io/InvestmentCalculator/",
    techStack: [
      "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png", // React
      "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png", // Git
      "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png", // CSS
      "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png", // HTML
      "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"

    ],
    description: <>
    <h3>Financial Planning Tool: Developed an investment calculator that accurately predicts future savings based on user-provided inputs, including current savings, yearly savings, expected interest rates, and investment duration.

Created a user-friendly interface allowing users to input their financial parameters and visualize the growth of their savings over time through a detailed breakdown of yearly totals, interest earned, and invested capital, empowering users to make informed financial decisions by providing transparent insights into their potential savings growth and investment returns, facilitating long-term financial planning and goal-setting.
    </h3>
    
    </>,
  }];
  
  const watchersApp = [{
    title: "Watchers App",
    gh: "https://react-portfolio-website-f9cd9.web.app/",
    techStack: [
      "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png", // React
      "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png", // CSS
    ],
    description: "Watchers app",
  }]
  
  const researchPaper = [{
    title: "Research Paper",
    lw:"https://link.springer.com/chapter/10.1007/978-981-19-2069-1_18",
    techStack: [
      "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png", // TensorFlow
    ],
    description:
    <>
    <h3>
    Curated water quality data from King County, containing 1.63 million rows for 68 areas from 1971 to 2019. Implemented the weighted arithmetic WQI method, considering weights, relative values, and standard values for each parameter. Employed a range of machine learning algorithms, including Multilayer Perceptron, XGBoost, Random Forest, AdaBoost, Naive 
Bayes, KNN Regressor, and SVM. Published  proceedings in Springer Lecture Notes on Data Engineering and Communications Technologies(Scopus).

    </h3>
    
    
    </>
  }];
  
  const threadShare = [{
    title: "ThreadShare",
    gh: "https://github.com/SSPlusUltra/Thread-Share", 
    lw:"https://thread-share-production.up.railway.app/",
    techStack: [
      "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png", // React
      "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png", // Git
      "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
      "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png", // CSS
      "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
      "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png", // Node.js
      "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
      "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"

    ],
    description: <>
<h3>ThreadShare is a dynamic social media platform inspired by Reddit, using React.js for frontend development and Node.js for backend operations.
Enhanced data management capabilities by integrating MongoDB as the primary database, ensuring efficient handling of user interactions and critical features such as user registration, post creation, and voting.
Overcame technical challenges through iterative refinement, ensuring seamless technology transitions and strategizing future development phases for scalability and feature enhancements.</h3>

    
    
    </>,
  }];
  
  const tableauDashboard1 = [{
    title: "Netflix Analysis",
    gh: "", // No GitHub link provided
    techStack: [
      img7, 
    ],
    description: 
    <>
    <h3>
        
    Implemented a dynamic map to represent the country-wise count of movies, enhancing geographical insights. Enhanced user engagement with interactive text fields, allowing users to explore movie details like duration, rating, 
description, and release year based on applied filters. 
        </h3></>
  }];
  const tableauDashboard2 = [{
    title: "DoorDash Analysis",
    gh: "", // No GitHub link provided
    techStack: [
    img7
    ],
    description: <>
    <h3>
    Conducted detailed analysis of DoorDash operations, visualizing order punctuality through a donut chart highlighting 
late, early, and on-time deliveries. Utilized data visualization techniques, including a scatter plot, to illustrate the correlation between estimated and 
actual delivery times, providing insights into delivery efficiency trends.. 
    </h3>
    </>
  }];


const Portfolio = () => { 



      const [letterClass, setLetterClass] = useState('text-animate');
      const [portfolio, setPortfolio] = useState([]);
  
      useEffect(() => {
          const timer = setTimeout(() => {
              setLetterClass('text-animate-hover');
          }, 3000);
  
          return () => {
              clearTimeout(timer);
          }
      });
      const renderPortfolio = () => {
        return (
            <div className="overlay">
            <div className="overlays">
            <div ><ImageOverlay img={img1} data = {threadShare}/></div>
            <div> <div className="orev"  ><RevevrseImageOverlay img = {img2} data={expenseTracker}/></div></div>
            <div ><ImageOverlay img = {img3}data={investmentCalculator}/></div>
            <div> <div className="orev"  ><RevevrseImageOverlay img = {img4} data={researchPaper}/></div></div>
            <div ><ImageOverlay img = {img5}data={tableauDashboard1}/></div>
            <div > <div className="orev" ><RevevrseImageOverlay img = {img6} data={tableauDashboard2}/></div></div>
            </div>
            </div> 
        );
    } 

  
      



    return(
        <>
             <div style={{display:'flex', flexDirection:'column'}} className="container">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
        <Loader type="pacman" />
        </>
    )

















   
   

 

    return (
        <>
           
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;