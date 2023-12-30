import microsoft from 'public/images/microsoft.png'
import AvayeFavourite from 'public/images/AvayeFavourite.png'
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

export const works = [
    {
      image: AvayeFavourite,
      project: 'Real Estate',
      Description: 'Home platform for homeowners, short-let hosts, occupants, & service providers to manage properties, payments, and more.',
      pictures: [AvayeFavourite],
      link: 'https://avaye.africa/',
      technologies: ['nextJs', 'Axios', 'Ant Design', 'Tailwindcss', 'typescript', 'Zustand']
    },
    {
      image: AvayeStorefrontDetails,
      project: 'Avaye Real Estate App',
      Description: 'Home platform for homeowners, short-let hosts, occupants, & service providers to manage properties, payments, and more.',
      pictures: [AvayeStorefrontDetails, AvayeStorefrontGrid, AvayeStorefrontList, AvayeStorefrontList, AvayeStorefrontList],
      link: 'https://dev-avaye-web-b9240a823474.herokuapp.com/storefront',
      technologies: ['nextJs', 'Axios', 'Ant Design', 'Tailwindcss', 'typescript', 'Zustand']
    },
    {
      image: PushItHome,
      project: 'PUSH IT',
      Description: 'Point of sales web application for selling at shops and warehouses.',
      pictures: [PushItHome, PushItContent, PushItCashier],
      // link: 'https://super-haupia-7b5270.netlify.app',
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
      // link: 'https://super-haupia-7b5270.netlify.app',
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