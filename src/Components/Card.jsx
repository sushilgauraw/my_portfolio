import "./CardStyle.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardProduct from "./CardProduct";
import Proj1 from "../Asset/Project1.png"
import Proj2 from "../Asset/Project2.png"
import Proj3 from "../Asset/Project3.png"
import Proj4 from "../Asset/Project4.png"
import Proj5 from "../Asset/Project5.png"
import Proj6 from "../Asset/Project6.png"
import Proj7 from "../Asset/Project7.png"
import Proj8 from "../Asset/Project8.png"
import Proj9 from "../Asset/Project9.png"
import Proj12 from "../Asset/Project12.png"
import Proj13 from "../Asset/Project13.png"
import Proj14 from "../Asset/Project14.png"
import Proj16 from "../Asset/Project16.png"
import React from 'react'

function Card() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const ProductData = [
        {
            id:1,
            Url :Proj1,
            Title:"Your Justice ",
            SubTitle:"what justice is our top priority,YourJustice is a blockchain social network where anyone can create a virtual jurisdiction based on values and enforced by code. Let's create a fairer world.",
            Deployed_Link : "https://sushilgauraw.github.io/-live-class-project--03-/"


        },
        {
            id:2,
            Url :Proj2,
            Title:"Trend in 2025",
            SubTitle: " Mintel reveals the four key trends set to impact the global beauty and personal care industry over the next decade, discussing how the dynamic relationship 8 pages ",
            Deployed_Link : "https://sushilgauraw.github.io/live-project-01/"

        },
        {
            id:3,
            Url :Proj3,
            Title:"Wirless Headphone",
            SubTitle:"One of the biggest benefits of wireless earphones and headphones is their portability. They are lightweight, compact, and easy to carry around, making them ...",
            Deployed_Link: "https://sushilgauraw.github.io/Live-Project-07/"

        },
        {
            id:4,
            Url :Proj4,
            Title:"WE Help your crush",
            SubTitle:"Look pretty. If you’re not used to taking care of yourself, it’s a good reason to start improving s",
            Deployed_Link:"https://sushilgauraw.github.io/live-class--project-04/"


        },
        {
            id:5,
            Url :Proj5,
            Title:"Lets Build Latter",
            SubTitle:"This generator converts your normal next into bold text which you can copy and paste into your Instagram bio, and into many of social media places.",
            Deployed_Link: "https://sushilgauraw.github.io/live-class-project-05/"

        },
        {
            id:6,
            Url :Proj6,
            Title:"Monstera",
            SubTitle:"Monstera deliciosa, the Swiss cheese plant or split-leaf philodendron is a species of flowering plant native to tropical forests of southern Mexico, ...",
            Deployed_Link: "https://sushilgauraw.github.io/live--project--06/"

        },
        {
            id:7,
            Url :Proj7,
            Title:"web Design",
            SubTitle:"A web designer works on the appearance, layout, and, in some cases, content of a website. Appearance, for instance, relates to the colors, font, and images used ...",
            Deployed_Link:"https://sushilgauraw.github.io/Live-project-08/"


        },
        {
            id:8,
            Url :Proj8,
            Title:"API Catargery",
            SubTitle:"A web designer works on the appearance, layout, and, in some cases, content of a website. Appearance, for instance, relates to the colors, font, and images used ...",
            Deployed_Link: "https://sushilgauraw.github.io/live-Project-09/"

        },
        {
            id:9,
            Url :Proj9,
            Title:"Interior Desing",
            SubTitle:"Latest home interior design collection for your Kitchen, Bedroom, Living Room, Dining Room, Wardrobe, Bathroom, and more from DesignCafe. Explore Today.",
            Deployed_Link: "https://sushilgauraw.github.io/Live-Project-10/"

        },
        {
            id:12,
            Url :Proj12,
            Title:"SASS",
            SubTitle:" Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            Deployed_Link:"https://sushilgauraw.github.io/live-project-13/"

        },
        {
            id:13,
            Url :Proj13,
            Title:"Cra- Tivity",
            SubTitle:"This is a custom create-react-app template of react-boilerplate . React Boilerplate has been developing the ultimate React starter kit for many years now.",
            Deployed_Link:"https://sushilgauraw.github.io/livve-project-14/"

        },
        {
            id:14,
            Url :Proj14,
            Title:"Visual Desins",
            SubTitle:"Visual design focuses on the aesthetics of a site and its related materials by strategically implementing images, colors, fonts, and other elements",
            Deployed_Link :"https://sushilgauraw.github.io/live-Project-15/"

        },
        {
            id:16,
            Url :Proj16,
            Title:"Delicious Food",
            SubTitle:" Our website is currently undergoing scheduled maintenance. We should be back shortly.",
            Deployed_Link: "https://sushilgauraw.github.io/live-project-02/"

        },
     
      ]
      const result = ProductData.map(item=>(
         <CardProduct Title = {item.Title} Url = {item.Url} SubTitle = {item.SubTitle} Deployed_Link = {item.Deployed_Link} />
      ))     
  return (
    <>
    <Carousel responsive={responsive}>
    {result}
    </Carousel>;
    </>
  )
}

export default Card