import { Route, Routes,Link } from "react-router-dom";

import Feedback from "./dashboard_screens/feedback";
import Message from "./dashboard_screens/message.jsx";
import Notification from "./dashboard_screens/notification.jsx";
function Dashboard() {
    return <div>
         <h1>Dashboard</h1>
        <div className='li'>
        <Link className="link" to="feedback">Feedback</Link>
        <Link className="link" to="message">Message</Link>
        <Link className="link" to="notification">Notification</Link>

        </div>
        <Routes>
            <Route path="message" element={<Message/>}/>
            <Route path="feedback" element={<Feedback/>}/>
            <Route path="notification" element={<Notification/>}/>
        </Routes>
       
    </div>
}
export default Dashboard;