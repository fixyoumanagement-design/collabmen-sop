import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import SOPPage1 from './SOPPage1';
import SOPPage2 from './SOPPage2';
import SOPPage3 from './SOPPage3';
import SOPPage4 from './SOPPage4';
import SOPPage5 from './SOPPage5';
import SOPPage6 from './SOPPage6';
import SOPPage7 from './SOPPage7';
import SOPPage8 from './SOPPage8';
import SOPPage9 from './SOPPage9';
import SOPPage10 from './SOPPage10';
import SOPPage11 from './SOPPage11';
import SOPPage12 from './SOPPage12';
import SOPPage13 from './SOPPage13';
import SOPPage14 from './SOPPage14';
import SOPPage15 from './SOPPage15';
import SOPPage16 from './SOPPage16';
import SOPPage17 from './SOPPage17';
import SOPPage18 from './SOPPage18';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Sidebar />
                <Switch>
                    <Route path='/sop1' component={SOPPage1} />
                    <Route path='/sop2' component={SOPPage2} />
                    <Route path='/sop3' component={SOPPage3} />
                    <Route path='/sop4' component={SOPPage4} />
                    <Route path='/sop5' component={SOPPage5} />
                    <Route path='/sop6' component={SOPPage6} />
                    <Route path='/sop7' component={SOPPage7} />
                    <Route path='/sop8' component={SOPPage8} />
                    <Route path='/sop9' component={SOPPage9} />
                    <Route path='/sop10' component={SOPPage10} />
                    <Route path='/sop11' component={SOPPage11} />
                    <Route path='/sop12' component={SOPPage12} />
                    <Route path='/sop13' component={SOPPage13} />
                    <Route path='/sop14' component={SOPPage14} />
                    <Route path='/sop15' component={SOPPage15} />
                    <Route path='/sop16' component={SOPPage16} />
                    <Route path='/sop17' component={SOPPage17} />
                    <Route path='/sop18' component={SOPPage18} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;