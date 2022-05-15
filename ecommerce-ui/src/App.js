import './App.css';
import TopNavigation from './blocks/01-top-navigation.jsx';

import bnbs from './bnbs.json';

bnbs.map(bnb => {
    return null;
})

function App() {
    return (
        <div className="master-block">
        <TopNavigation />
        

        <div className="host-block">

            <div className="exhibit">
                
                <h1>Centrally-located Manhattan studio</h1>

                <div className="information-card">
                    <div className="combination-house-type-location">
                        <p>House type: Apartment</p>
                        <p>Location: New York, USA</p>
                    </div>
                    <div className="combination-host-price">
                        <p>Host: John Smith</p>
                        <p>Daily Rate: $180</p>
                    </div>
                </div>

                <img className="property-picture" alt="add alt in .json file" src="https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=500&q=80"></img>

                <div className="cart-button">
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="exhibit">
                <h1>Denver apartment outside Union Station</h1>
                
                <div className="information-card">
                    <div className="combination-house-type-location">
                        <p><img alt="house icon" src="../icons/house-16.png"></img> Apartment</p>
                        <p><img alt="pin icon" src="../icons/pin-16.png"></img> Denver, USA</p>
                    </div>
                    
                    <div className="combination-host-price">
                        <p><img alt="desk icon" src="../icons/desk-16.png"></img> John Smith</p>
                        <p><img alt="money icon" src="../icons/money-16.png"></img> $230 per night</p>
                    </div>

                    <div className="cart-button">
                        <button>Add to Cart</button>
                    </div>
                </div>

                <img className="property-picture" alt="add alt in .json file" src="https://images.unsplash.com/photo-1519424187720-db6d0fc5a5d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19f783ae564d7c6da4777cde1a84c1c9&auto=format&fit=crop&w=500&q=80"></img>
            </div>
            <div className="exhibit">
                <h1>Quaint 3-bedroom home in Gamla stan</h1>

                    <div className="information-card">
                        <div className="combination-house-type-location">
                            <p>House type: Apartment</p>
                            <p>Location: Stockholm, Sweden</p>
                        </div>
                        
                        <div className="combination-host-price">
                            <p>Host: John Smith</p>
                            <p>Daily Rate: $320</p>
                        </div> 
                    </div>

                <img className="property-picture" alt="add alt in .json file" src="https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80"></img>
                              
                <div className="cart-button">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div className="attributions">
            <ul>
                <li><a href="https://www.flaticon.com/free-icons/supermarket" title="supermarket icons">Supermarket icons created by Freepik - Flaticon</a></li>
                <li><a href="https://www.flaticon.com/free-icons/building" title="building icons">Building icons created by edt.im - Flaticon</a></li>
                <li><a href="https://www.flaticon.com/free-icons/desk" title="desk icons">Desk icons created by Freepik - Flaticon</a></li>
                <li><a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Those Icons - Flaticon</a></li>
                <li><a href="https://www.flaticon.com/free-icons/money" title="money icons">Money icons created by kosonicon - Flaticon</a></li>
            </ul>
        </div>
    </div>
  );
}

export default App;
