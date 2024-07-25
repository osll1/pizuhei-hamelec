import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Announcement from '../../components/Announcement/Announcement'

const Home = () => {

  const [category , setCategory] = useState("All");

  return (
    <div> 
        <FoodDisplay category={category}/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <AppDownload/>
    </div>
  )
}

export default Home