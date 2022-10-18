// Layouts
// import { HeaderOnly } from './Layouts';

// Pages
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Posts from '../pages/Profile/Posts.js';
import Search from '../pages/Search';
import P404 from '../pages/P404';

//khong login
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/search',
    component: Posts,
    // layout: null,
  },
  {
    path: '/*',
    component: P404,
    layout: null,
  },
];

// login
const privateRoutes = {};

export { publicRoutes, privateRoutes };
