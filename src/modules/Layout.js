import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';

let Layout = () =>{
    return(
        <div>
            <div className="container-fluid">
                <div className="first">
                    <div className="row">
                        <div className="col-5"> <h1> Hi, Percy Good Morning!</h1></div>
                        <div className="col-4"></div>
                        <div className="col-3 first"><button type="button" class="btn btn-warning"><FontAwesomeIcon icon ={faCoffee} /> Order History</button></div>

                    </div>

                </div>
                <div>
                    <p>Let's discover a new adventure</p>
                </div>

                <div className="uper">
                <div className='row'>
                    <div className='col-6'>
                    <button type="button" class="btn btn-outline-primary BB"><FontAwesomeIcon icon ={faCoffee} /> Flight</button>
                    <button type="button" class="btn btn-outline-primary BB E"><FontAwesomeIcon icon ={faCoffee} /> Hotel</button>
                    <button type="button" class="btn btn-outline-primary BB E"><FontAwesomeIcon icon ={faCoffee} /> Cab</button>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-3 h"><input type="text" className='inp'  placeholder='Search'/></div>
                    <div className="col-1 g" ><FontAwesomeIcon icon ={faCoffee} /></div>


                </div>

                </div>

                <div className='i'>
                    <h4>Popular place</h4>

                </div>

                <div className='kuch'>
                    <Slider />
                    
                



                </div>




            </div>

        </div>
    )
}
export default Layout;
