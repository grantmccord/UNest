import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import axios from "axios";

const ModifyListingPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const place = location.state?.place;

    const handleEditClick = () => {
        console.log({ id });
    };

    const handleDeleteClick = async () => {
        try{
            alert("Your post has been deleted!");
            await axios.delete(`/places/${id}`);
        } catch (error){
            console.error("Could not delete post, please try again");
        }
    };


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '9999' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: '40px', height: '40px', paddingLeft: "5px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </Link>
            <h1 style={{ paddingBottom: '10px' }}>Modify Your Listing</h1>
            <div style={{ width: 10000 }} className="underline"></div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}>
                <Link to={'/myplaces/new/' + id} onClick={handleEditClick} style={{
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
                    position: 'relative' // Adding relative positioning
                }}>
                    Edit Listing
                </Link>
                <Link to={'/myplaces'} onClick={handleDeleteClick} style={{
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
                    position: 'relative',
                    marginLeft: '30px'
                }}>
                    Delete Listing
                </Link>
            </div>
        </div>
    );
};

export default ModifyListingPage;
