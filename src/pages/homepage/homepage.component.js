import React from 'react';

import MainBillboard from '../../components/main-billboard/main-billboard.component';
import HomeCategory from '../../components/home-category/home-category.component';
import FeaturedBrands from '../../components/featured-brands/featured-brands.component';
import BestSeller from '../../components/best-seller/best-seller.component';

const HomePage = () => (
  <div className='homepage-container'>
      <MainBillboard/>
      <HomeCategory/>
      <BestSeller/>
      <FeaturedBrands/>
  </div>
);

export default HomePage;