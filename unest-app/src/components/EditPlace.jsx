import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'

const ModifyListingPage = () => {
    const {id} = useParams();
    const location = useLocation();
    const place = location.state?.place;

    const handleEditClick = () => {
        console.log({id});
    };

    const handleDeleteClick = () => {
        if (place) {
            alert(`Delete button clicked for ${place.name}, ${place.address}`);
        } else {
            alert('No place data available');
        }
    };


    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1 style={{ paddingBottom: '10px'}}>Modify Your Listing</h1>
            <div style={{width: 10000}} className="underline"></div>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '250px'}}>
                <Link to={'/myplaces/new/'+id} onClick={handleEditClick} style={{
                    marginRight: '20px',
                    display: 'inline-block',
                    width: '300px',
                    height: '200px',
                    fontSize: '24px',
                    backgroundColor: '#EA5455',
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'center',
                    lineHeight: '200px',
                    fontWeight: 'bold',
                    borderRadius: '15px'
                }}>Edit Listing
                </Link>
                <Link onClick={handleDeleteClick} style={{
                    marginRight: '20px',
                    display: 'inline-block',
                    width: '300px',
                    height: '200px',
                    fontSize: '24px',
                    backgroundColor: '#EA5455',
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'center',
                    lineHeight: '200px',
                    fontWeight: 'bold',
                    borderRadius: '15px',
                    marginLeft: '50px',
                }}>Delete Listing
                </Link>
            </div>
        </div>
    );
};

export default ModifyListingPage;
