import MainNavbar from '../MainNavbar.js';
import HomeBanner from './HomeBanner.js';
import HomeCategories from './HomeCategories.js';
import HomeNewProducts from './HomeNewProducts.js';
import HomeMember from './HomeMember.js';

function  Home () {
    return(
        <>
            <MainNavbar activeTab="/home"/>
            <HomeBanner/>
            <HomeCategories/>
            <HomeNewProducts/>
            <HomeMember/>
        </>
    );
}

export default Home;