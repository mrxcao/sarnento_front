import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import { getReacts } from '../../services/reactsService';
import ReactsRow from './ReactsRow';

function reacts() {

    const [data, setData] = useState([])
    const history = useHistory();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(()=>{
        const token = localStorage.getItem('token');        
        getReacts(token)
          .then(data=> {
            setData(data)
            
          })
          .catch(err=> {
            if (err.response && err.response.status === 401) return history.push('/')
            console.error(err.message);
            setError(err.response ? err.response.data : err.message);
            setSuccess('')
          })
    }, [])
    



    return (
        <React.Fragment>      
        <Menu />
            
            <main className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body border-0 shadow mb-4">         

                            <div className="card-header">
                                <div className="row align-item-center ">
                                    <div className="col">
                                        <h2 className="fs-5 fw-bold mb-0">Reacts</h2>                
                                    </div>
                                </div>
                            </div>                            

                            
                            <div className="row align-item-left ">
                                <div className="col">                            

                                </div>
                            </div>
                                  
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light" >
                                        <tr>
                                            <th className="border-bottom" scope="col"> Name</th>
                                            <th className="border-bottom" scope="col"> trigger</th>
                                            <th className="border-bottom" scope="col"> do</th>
                                     
                                            <th > - </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { data.map(item => <ReactsRow key={item.id} data={item} /> )}
                                    </tbody>                                      
                                    <tfoot>

                                    </tfoot>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap">
                        { error
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

            </main>
        </React.Fragment>
    );
}

export default reacts;