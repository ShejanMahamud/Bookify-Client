import React from 'react'
import Banner from '../components/Banner'
import Books from '../components/Books'
import Categories from '../components/Categories'
import NewsSection from '../components/NewsSection'
import Stats from '../components/Stats'
import Writers from '../components/Writers'

const Home = () => {
  return (
    <>
    <Banner/>
    <Stats/>
    <Categories/>
    <Writers/>
    <Books/>
    {/* <Discount/> */}
    <NewsSection/>
    </>
  )
}

export default Home