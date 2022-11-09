import logo from '../../../assets/img/logo.png';
import {BsGlobe} from 'react-icons/bs'
export default function HeaderLogin(){
    return(
        <div className="login-header d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="config-lang">
                                <BsGlobe className='text-danger'/>
                                <select className="form-select form-select-sm select-lang" >
                                  <option selected>Español</option>
                                  <option value="1">English</option>
                                </select>
                              </div>
        </div>
    )
}