import React from 'react';
import { useLocation } from 'react-router-dom';

const ModifyListingPage = () => {
    const location = useLocation();
    const place = location.state?.place;

    const handleEditClick = () => {
        if (place) {
            alert(`Edit button clicked for ${place.name}, ${place.address}`);
        } else {
            alert('No place data available');
        }
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
                <button onClick={handleEditClick} style={{
                    marginRight: '20px',
                    width: '300px',
                    height: '100px',
                    fontSize: '24px',
                    backgroundColor: '#EA5455',
                    color: 'white'
                }}>Edit Listing
                </button>
                <button onClick={handleDeleteClick} style={{
                    marginLeft: '20px',
                    width: '300px',
                    height: '100px',
                    fontSize: '24px',
                    backgroundColor: '#EA5455',
                    color: 'white'
                }}>Delete Listing
                </button>
            </div>
        </div>
    );
};

export default ModifyListingPage;
