import { Outlet } from 'react-router-dom';

import MainNavbar from '../MainNavbar.js';
// import ScrollButton from '../ScrollButton.js';

function Products() {


    return(
        <>
            <MainNavbar activeTab="/products"/>

            <div className="container section product">
                <div className="row">
                    <Outlet />
                    {/* <ScrollButton />  */}
                </div>
            </div>
        </>
    );
}

export default Products;