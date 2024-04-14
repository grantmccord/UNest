import React from 'react';

const ModifyListingPage = () => {
    const handleEditClick = () => {
        alert('Edit button clicked');
    };

    const handleDeleteClick = () => {
        alert('Delete button clicked');
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
