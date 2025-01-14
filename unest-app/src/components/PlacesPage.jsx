import {Link, useParams} from 'react-router-dom'
import Perks from "./Perks"
import React, {useEffect} from "react";
import {useState}  from "react";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";

export default function PlacesPage(){
    const {id} = useParams();
    const{action} = useParams();
    const [name,setName] = useState('');
    const [university,setUniversity] = useState('');
    const [address, setAddress] = useState('');
    const [miles_from_campus, setmiles_from_campus] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [price, setPrice] = useState(0);
    const [num_rooms, setNum_rooms] = useState(0);
    const [num_baths, setNum_baths] = useState(0);
    const [redirectToPlacesList, setRedirectToPlacesList] = useState(false)

    useEffect(() => {
        if (!id){
            return;
        }
        axios.get('/places/'+id).then(response => {
            const {data} = response;
            setName(data.name);
            setUniversity(data.university);
            setAddress(data.address);
            setmiles_from_campus(data.miles_from_campus);
            setNum_rooms(data.num_rooms);
            setNum_baths(data.num_baths);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setStart_date(data.start_date);
            setEnd_date(data.end_date);
            setPrice(data.price);

        });
    },[id]);

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(({data}) => {
            setPlaces(data)
        });
    }, []);

    function uploadPhoto(ev){
        const files = ev.target.files;
        const data = new FormData();
        for(let i = 0; i < files.length; i++){
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: {'Content-type':'multipart/form-data'}
        }).then(response =>{
            const{data:filenames} = response;
            setAddedPhotos(prev => {
                return [...prev, ...filenames];
            });
        })
    }
    async function savePlace(ev){
        ev.preventDefault();
        if(id){
            await axios.put('/places',{
                id,
                name, university, address, photos:addedPhotos, description, perks, start_date, end_date, price, miles_from_campus,
                num_rooms, num_baths});

        } else{
            await axios.post('/places',{
                name, university, address, photos:addedPhotos, description, perks, start_date, end_date, price, miles_from_campus,
                num_rooms, num_baths});
        }
        setRedirectToPlacesList(true);
        alert("Your listing has been posted!")
    }

    if(redirectToPlacesList && action==='new'){
        return <Navigate to={'/'}/>
    }

    return(
        <div>
            <div style={{width:10000}} className="underline"></div>
            <Link to="/" className={"pr-5"} style={{ position: 'absolute', top: '10px', right: '9px', zIndex: '9999' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: '40px', height: '40px', paddingLeft: "5px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </Link>
            {action !== 'new' && (
                <div className="text-center py-5">
                    <Link className="inline-flex gap-1 bg-primary text-black py-7 px-6 rounded-full" style={{backgroundColor: "#d55757"}}
                          to={'/myplaces/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <div style={{fontSize: 20, color: "white", fontWeight: "bold"}}>
                            Create New Listing
                        </div>
                    </Link>
                    <div>
                        <div className="inline-flex gap-1 bg-primary text-black py-10 rounded-full">
                            <h1 className="px-5">
                                List of My Properties
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"/>
                            </svg>
                        </div>
                    </div>
                    <div style={{background: "white"}} className="py-5">
                        <div style={{width: 10000, color: "black"}} className="underline2"></div>
                        {places.length > 0 && places.map(place => (
                            <Link to={{pathname: '/myplaces/modify/' + place._id, state: {place: place}}}>
                                <h1 className="py-10 "
                                    style={{fontWeight: "bold", backgroundColor: "#de6363", color:"white"}}>
                                    <div className="bg-gray-200 inline-flex">
                                        {places.length > 0 && (
                                            <img src={'http://localhost:4000/uploads/' + place.photos[0]} alt="" style={{ maxWidth: '200px', maxHeight: '200px' }}/>
                                        )}
                                    </div>
                                    <div>
                                        {place.name}: {place.address}
                                    </div>
                                </h1>
                                <div style={{width: 10000, color: "black"}} className="underline2"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            {action === 'new' && (
                <div className="justify-center items-center min-h-screen">
                    <div className="flex flex-col justify-center items-center gap-1 bg-primary text-black py-10 rounded-full">
                        <h1>
                            Your Property Listing
                        </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"/>
                        </svg>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <form className="w-full max-w-lg">
                            <h2 className="text-xl mt-4">Title</h2>
                            <input className="w-full" style={{background: "white"}} type='text'
                                   placeholder="Give us a name, for example: My Little Dwelling"
                                   value={name} onChange={ev => setName(ev.target.value)}/>
                            <h2 className="text-xl mt-4">University</h2>
                            <input className="w-full" style={{background: "white"}} type='text'
                                   placeholder="Rep your school!"
                                   value={university} onChange={ev => setUniversity(ev.target.value)}/>
                            <h2 className="text-xl mt-4">Address</h2>
                            <input className="w-full" style={{background: "white"}} type='text'
                                   placeholder="Where can we find you?"
                                   value={address} onChange={ev => setAddress(ev.target.value)}/>
                            <h2 className="text-xl mt-4">Miles To Campus</h2>
                            <input className="w-full" style={{background: "white"}} type='number'
                                   placeholder="How far do you live?"
                                   value={miles_from_campus} onChange={ev => setmiles_from_campus(ev.target.value)}/>

                            <h2 className="text-xl mt-4">Room Info</h2>
                            <div className="grid grid-cols-2">
                                <div className="px-10">
                                    <h3>Number of Rooms</h3>
                                    <input className="" style={{background: "white"}} type='number'
                                           placeholder="How many rooms are available?"
                                           value={num_rooms} onChange={ev => setNum_rooms(ev.target.value)}/>
                                </div>
                                <div className="pl-8">
                                    <h3>Number of Baths</h3>
                                    <input style={{background: "white"}} type='number'
                                           placeholder="How many baths are there?"
                                           value={num_baths} onChange={ev => setNum_baths(ev.target.value)}/>
                                </div>
                            </div>

                            <h2 className="text-xl mt-4">Photos</h2>
                            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                {addedPhotos.length > 0 && addedPhotos.map(link => (
                                    <div key={link} style={{background: "transparent"}}>
                                        <img src={'http://localhost:4000/uploads/' + link} alt=""/>
                                    </div>
                                ))}
                                <label
                                    className='cursor-pointer flex justify-center text-left border bg-white text-black rounded-2xl p-8
                                    text-2xl text-gray-600'
                                    style={{width: 400}}>
                                    <input type="file" multiple className='hidden' onChange={uploadPhoto}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
                                    </svg>
                                    Upload
                                </label>
                            </div>
                            <h2 className="text-xl mt-4">Description</h2>
                            <input className="w-full" style={{background: "white"}} type='text'
                                   placeholder="Tell us why we should stay here"
                                   value={description} onChange={ev => setDescription(ev.target.value)}/>
                            <h2 className="text-xl mt-4">Perks</h2>
                            <div className='flex' style={{background: "white"}}>
                                <Perks selected={perks} onChange={setPerks}/>
                            </div>
                            <h2 className="text-xl mt-4">Rental Dates</h2>
                            <div className="grid grid-cols-2">
                                <div className="px-10">
                                    <h3>Check-In Date</h3>
                                    <input className="" style={{background: "white"}} type='text'
                                           placeholder="Please enter in MM/DD/YYYY format"
                                           value={start_date} onChange={ev => setStart_date(ev.target.value)}/>
                                </div>
                                <div className="pl-8">
                                    <h3>Check-Out Date</h3>
                                    <input style={{background: "white"}} type='text'
                                           placeholder="Please enter in MM/DD/YYYY format"
                                           value={end_date} onChange={ev => setEnd_date(ev.target.value)}/>
                                </div>
                            </div>
                            <h2 className="text-xl mt-4">Price per Month ($)</h2>
                            <input className="w-full" style={{background: "white"}} type='number'
                                   placeholder="What's the cost to stay?"
                                   value={price} onChange={ev => setPrice(ev.target.value)}/>
                            <button onClick={savePlace} style={{background: "#d55757"}} className="primary my-4">Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}