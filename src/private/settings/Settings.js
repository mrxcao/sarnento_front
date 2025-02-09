import React, { useEffect, useRef, useState } from 'react';
// import Menu from '../../components/Menu/Menu';
// import { getSettings, updateSettings } from '../../services/SettingsService';
// import Symbols from '../Settings/Symbols';
import Menu from '../../components/Menu/Menu';
import { getSettings } from '../../services/SettingsService';

function Settings() {
    const [settings, setSettings] = useState({
        lastUpTime:''
    })


    useEffect(()=>{
        const token = localStorage.getItem('token');
        
        getSettings(token).then(resp=> {
            setSettings(resp)
           // document.getElementById('email').removeAttribute('readOnly');
          }).catch(err=> {
            if (err.response && err.response.status === 401)
                    return history.push('admin/')
            setError(err)
          })
    }, [])

    const inputEmail = useRef('');
    const inputNewPassword = useRef('');
    const inputConfirmPassword = useRef('');
    const inputApiUrl = useRef('');
    const inputStreamUrl = useRef('');
    const inputAccessKey = useRef('');
    const inputSecretKey = useRef('');

    // const history = useHistory();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

   

    function onFormSubmit(event) {
        event.preventDefault();

        if ((inputNewPassword.current.value || inputConfirmPassword.current.value)
            && inputNewPassword.current.value !== inputConfirmPassword.current.value)
            return setError(`The fields New Password and Confirm Password must be equal.`);

/*
        const token = localStorage.getItem("token");
        updateSettings({
            email: inputEmail.current.value,
            password: inputNewPassword.current.value ? inputNewPassword.current.value : null,
            apiUrl: inputApiUrl.current.value,
            streamUrl: inputStreamUrl.current.value,
            accessKey: inputAccessKey.current.value,
            secretKey: inputSecretKey.current.value ? inputSecretKey.current.value : null
        }, token)
            .then(result => {
                if (result) {
                    setError('');
                    inputSecretKey.current.value = '';
                    inputNewPassword.current.value = '';
                    inputConfirmPassword.current.value = '';
                    return setSuccess(`Settings saved successfully!`);
                }
                else {
                    setSuccess('');
                    return setError(`Can't update the settings.`);
                }
            })
            .catch(err => {
                console.error(err.response ? err.response.data : err.message);
                return setError(`Can't update the settings.`);
            })
            */
    }

    return (
        <React.Fragment>      
        <Menu />
            
            <main className="content">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-md-0">
                        <h1 className="h4">Settings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body border-0 shadow mb-4">
                            <form>
                                <h2 className="h5 mb-4">General Info</h2>
                                {settings.email}
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email_">Email</label>
                                            <input ref={inputEmail} className="form-control" id="email_"
                                                   type="email" placeholder="name@company.com" autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap">
                                        <div className="col-sm-3">
                                            <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit" onClick={onFormSubmit}>Save all</button>
                                        </div>
                                        {
                                            error
                                                ? <div className="alert alert-danger mt-2 col-9 py-2">{error}</div>
                                                : <React.Fragment></React.Fragment>
                                        }
                                        {
                                            success
                                                ? <div className="alert alert-success mt-2 col-9 py-2">{success}</div>
                                                : <React.Fragment></React.Fragment>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <Symbols /> */}
            </main>
        </React.Fragment>
    );
}

export default Settings;