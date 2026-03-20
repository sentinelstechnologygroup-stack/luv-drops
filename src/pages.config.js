/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Blog from './pages/Blog';
import BookNel from './pages/BookNel';
import ChildrensBook from './pages/ChildrensBook';
import CommunityResources from './pages/CommunityResources';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HowNelHelps from './pages/HowNelHelps';
import KidneyAdvocacy from './pages/KidneyAdvocacy';
import LuvDrops from './pages/LuvDrops';
import Media from './pages/Media';
import Podcast from './pages/Podcast';
import TheJourney from './pages/TheJourney';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Blog": Blog,
    "BookNel": BookNel,
    "ChildrensBook": ChildrensBook,
    "CommunityResources": CommunityResources,
    "Contact": Contact,
    "Home": Home,
    "HowNelHelps": HowNelHelps,
    "KidneyAdvocacy": KidneyAdvocacy,
    "LuvDrops": LuvDrops,
    "Media": Media,
    "Podcast": Podcast,
    "TheJourney": TheJourney,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};