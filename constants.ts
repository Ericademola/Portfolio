import microsoft from 'public/images/microsoft.png'
import AvayeDashboard from 'public/images/AvayeDashboard.png'
import AvayeExplore from 'public/images/AvayeExplore.png'
import AvayeHomePage from 'public/images/AvayeHomePage.png'
import AvayeProfile from 'public/images/AvayeProfile.png'
import AvayeStorefrontDetails from 'public/images/AvayeStorefrontDetails.png'
import shareAmSignup from 'public/images/shareAmSignup.png'
import shareAmLanding from 'public/images/shareAmLanding.png'
import AvayeStorefrontGrid from 'public/images/AvayeStorefrontGrid.png'
import airbnbHome from 'public/images/airbnbHome.png'
import airbnbPage from 'public/images/airbnbPage.png'
import paga from 'public/images/paga.png'
import AvayeStorefrontList from 'public/images/AvayeStorefrontList.png'
import PushItHome from 'public/images/PushItHome.png'
import PushItContent from 'public/images/PushItContent.png'
import PushItCashier from 'public/images/PushItCashier.png'
import kuditip from 'public/images/kuditip.png'
import kuditip1 from 'public/images/kuditip1.png'
import kuditip3 from 'public/images/kuditip3.png'
import ClabboxHome from 'public/images/ClabboxHome.jpeg'

import angular_logo from 'public/images/angular_logo.png'
import ant_design_logo from 'public/images/ant_design_logo.jpeg'
import axios_logo from 'public/images/axios_logo.png'
import ionic_logo from 'public/images/ionic_logo.png'
import nextjs_logo from 'public/images/nextjs_logo.png'
import react_logo from 'public/images/react_logo.png'
import react_query_logo from 'public/images/react_query_logo.png'
import tailwindcss_logo from 'public/images/tailwindcss_logo.png'
import typescript_logo from 'public/images/typescript_logo.png'
import javascript_logo from 'public/images/javascript_logo.png'
import zustand_logo from 'public/images/zustand_logo.jpeg'


export const works = [
  {
    image: AvayeHomePage,
    project: 'Real Estate',
    Description: `
      A platform for homeowners, guests, and other stakeholders in the real estate and hospitality industry. 
      The platform allows users to browse, book, and manage properties, as well as interact with other stakeholders.
      Additionally, it provides features for payment processing, messaging, and more. 
      the platform is designed to be user-friendly and easy to navigate, with a clean and modern interface. 
      The website is responsive and works well on both desktop and mobile devices.
      The project covers various platforms, including a mobile app, a web app, and a website for the company's management.
    `,
    pictures: [AvayeStorefrontDetails, AvayeExplore, AvayeProfile, AvayeHomePage, AvayeDashboard, AvayeStorefrontGrid, AvayeStorefrontList],
    // link: 'https://avaye.africa/',
    link: 'https://dev-avaye-site-ba8166f5a23f.herokuapp.com/',
    technologies: ['nextJs', 'Axios', 'Ant Design', 'Tailwindcss', 'typescript', 'Zustand', 'Shadcn UI'],
  },
  {
    image: PushItHome,
    project: 'POSCHOICE',
    Description: `Point of sales web application for selling at shops and warehouses. \n
    Password for the cashier: use 1234. \n
    To login as a super admin: \n
    - Email: choicestplace@gmail.com \n
    - Password: Lekens0001. \n
    - Secret code: POS-CHOICEST
    `,
    pictures: [PushItHome, PushItContent, PushItCashier],
    link: 'poschoice.ng',
    technologies: ['React', 'Axios', 'prime react', 'styled-components', 'typescript']
  },
  {
    image: shareAmSignup,
    project: 'ShareAm',
    Description: 'A screen sharing app for effective coloboration.',
    pictures: [shareAmLanding, shareAmSignup],
    // link: 'https://moonlit-puffpuff-193974.netlify.app' 
    technologies: ['electron', 'CSS', 'HTML', 'javascript']
  },
  {
    image: ClabboxHome,
    project: 'Clab box',
    Description: 'A charity app that solve money and food donation.',
    pictures: [ClabboxHome],
    link: 'https://moonlit-puffpuff-193974.netlify.app',
    technologies: ['Angular', 'Ionic', 'typescript']
  },
  {
    image: kuditip3,
    project: 'Kuditip',
    Description: 'We building tipping service app for receiving gratification from supporters.',
    pictures: [kuditip3, kuditip1, kuditip],
    link: 'https://tipping-service.vercel.app/',
    technologies: ['React', 'javascript']
  },
  {
    image: airbnbHome,
    project: 'Airbnb clone',
    Description: 'Airbnb webapp clone.',
    pictures: [airbnbHome, airbnbPage],
    link: 'https://airbnb-clone-sooty-two.vercel.app/',
    technologies: ['React', 'typescript']
  },
  // {
  //   image: Zcoin,
  //   project: 'Kuditip',
  //   Description: 'We building tipping service app for receiving gratification from supporters.',
  //   pictures: [],
  //   link: 'https://super-haupia-7b5270.netlify.app'
  // },
  {
    image: paga,
    project: 'Paga Website Redesign',
    Description: 'Paga website redesign.',
    pictures: [paga],
    link: 'https://super-haupia-7b5270.netlify.app',
    technologies: ['CSS', 'HTML', 'javascript']
  },
  {
    image: microsoft,
    project: 'Microsoft Cloning',
    Description: 'Microsoft webapp clone.',
    pictures: [microsoft],
    // link: '#',
    technologies: ['CSS', 'HTML', 'javascript']
  },
]

export const reviews = [
  {
    name: 'AMOS OLUSUMI',
    organization: 'NAIJACODEPADI',
    comment: `The development process was well thought out — our app has been performant and stable, making it much easier for us to manage with limited resources. I'd definitely recommend working with Adeyemi!`,
  },
]

export const skills = [
  {
    logo: typescript_logo,
    name: "TYPESCRIPT"
  },
  {
    logo: javascript_logo,
    name: "JAVASCRIPT"
  },
  {
    logo: react_logo,
    name: "REACT.JS"
  },
  {
    logo: angular_logo,
    name: "ANGULAR"
  },
  {
    logo: nextjs_logo,
    name: "NEXT.JS"
  },
  {
    logo: tailwindcss_logo,
    name: "TAILWINDCSS"
  },
  {
    logo: ant_design_logo,
    name: "ANT DESIGN"
  },
  {
    logo: ionic_logo,
    name: "IONIC"
  },
  {
    logo: zustand_logo,
    name: "ZUSTAND"
  },
  {
    logo: axios_logo,
    name: "AXIOS"
  },
  {
    logo: react_query_logo,
    name: "REACT QUERY"
  },
  {
    logo: typescript_logo,
    name: "TYPESCRIPT"
  },
]