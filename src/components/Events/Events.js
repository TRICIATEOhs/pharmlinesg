
import MainNavbar from '../MainNavbar.js';
import PastEvents from './PastEvents.js';
import UpcomingEvents from './UpcomingEvents.js';


function Events() {

    return(
        <>
            <MainNavbar activeTab="/events"/>
            <div className="container section events secondarybg">
                <UpcomingEvents/>
            </div>

            <div className="container section events">
                <PastEvents/>
            </div>
        </>
    );
}

export default Events;