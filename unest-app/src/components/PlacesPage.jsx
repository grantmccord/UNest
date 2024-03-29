import {Link, useParams} from 'react-router-dom'
import React from "react";
import {useState}  from "react";

export default function PlacesPage(){
    const{action} = useParams();
    const [title,setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [price, setPrice] = useState(1);


    return(
        <div>
            <div style={{width:10000}} className="underline"></div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-black py-10 px-6 rounded-full"
                          to={'/myplaces/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        Create New Listing
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div className='text-center' style={{width: 1200, background: "white"}}>
                    <div className="inline-flex gap-1 bg-primary text-black py-10 rounded-full">
                        <h1>
                            New Property Listing
                        </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"/>
                        </svg>
                    </div>
                    <div className='text-left'>
                        <form>
                            <h2 className="text-xl mt-4">Title</h2>
                            <input style={{width: 1300, background: "white"}} type='text'
                                   placeholder="Give us a name, for example: My Little Dwelling"/>
                            <h2 className="text-xl mt-4">University</h2>
                            <input style={{width: 1300, background: "white"}} type='text'
                                   placeholder="Rep your school!"/>
                            <h2 className="text-xl mt-4">Address</h2>
                            <input style={{width: 1300, background: "white"}} type='text'
                                   placeholder="Where can we find you?"/>
                            <h2 className="text-xl mt-4">Photos</h2>
                            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                <button
                                    className='flex justify-center text-left border bg-white text-black rounded-2xl p-8 text-2xl text-gray-600'
                                    style={{width: 1300}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
                                    </svg>
                                    Upload
                                </button>
                            </div>
                            <h2 className="text-xl mt-4">Description</h2>
                            <input style={{width: 1300, background: "white"}} type='text'
                                   placeholder="Tell us why we should stay here"/>
                            <h2 className="text-xl mt-4">Perks</h2>
                            <div className='flex' style={{width: 1300, background: "white"}}>
                                <label className='px-5 cursor-pointer'>
                                    <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"/>
                                    </svg>
                                    <h3>Wifi</h3>
                                </label>

                                <label className='px-5 cursor-pointer'>
                                    <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                                    </svg>
                                    <h3>Free Parking</h3>
                                </label>

                                <label className='px-5 cursor-pointer'>
                                    <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z"/>
                                    </svg>
                                    <h3>Pet Friendly</h3>
                                </label>

                                <label className='px-5 cursor-pointer'>
                                    <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M4.867 19.125h.008v.008h-.008v-.008Z"/>
                                    </svg>
                                    <h3>24/7 Maintenance</h3>
                                </label>

                                <label className='px-5 cursor-pointer'>
                                    <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"/>
                                    </svg>
                                    <h3>Pest Control</h3>
                                </label>
                            </div>
                            <h2 className="text-xl mt-4">Rental Dates</h2>
                            <div className="grid grid-cols-2">
                                <div className="px-10">
                                    <h3>Check-In Date</h3>
                                    <input style={{width: 300, background:"white"}} type='text'
                                           placeholder="Please enter in MM/DD/YYYY format"/>
                                </div>
                                <div>
                                    <h3>Check-Out Date</h3>
                                    <input style={{width: 300, background:"white"}} type='text'
                                           placeholder="Please enter in MM/DD/YYYY format"/>
                                </div>
                            </div>
                            <h2 className="text-xl mt-4">Price per Month ($)</h2>
                            <input style={{width: 1300, background: "white"}} type='text'
                                   placeholder="What's the cost to stay?"/>
                            <button style={{width: 1300, background: "#d55757"}} className="primary my-4">Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}