import React from 'react';
import {Link} from "react-router-dom"
import Moment from 'react-moment';
import {MdLocationOn} from "react-icons/md"

const ListingItem = ({listing, id}) => {
    return (
        <li className='relative bg-white flex flex-col justify-between item-center shadow-md hover:shadow-xl rounded-md overflow-clip transition-shadow duration-150'>
           <Link to={`/category/${listing.type}/${id}`}>
                <img 
                    className='h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200' 
                    loading='lazy'
                    src={listing.imgUrls[0]} 
                    alt=''                    
                />
                <Moment className='absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg' fromNow>
                    {listing.timestamp?.toDate()}
                </Moment>
                <div className='w-full p-[10px]'>
                    <div className='flex items-center space-x-1'>
                        <MdLocationOn className='h-4 w-4 text-green-600' />
                        <p className='font-semibold text-sm mb-[2px] text-ray-600 truncate'>{listing.address}</p>
                    </div>
                    <p className='font-semibold mt-2 text-lg text-[#457b9d]'>{listing.name}</p>
                    <p>
                        $
                        {listing.offer 
                        ? listing.discountedPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                         : listing.regularPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                         }
                         {listing.type === "rent" && " / month"}
                    </p>
                    <div className=''>
                        <div className=''>
                            <p>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed" }</p>
                        </div>
                        <div className=''>
                            <p>
                                {listing.bathrooms > 1 
                                    ? `${listing.bathrooms} Baths` 
                                    : "1 Baths"}
                            </p>
                        </div>
                    </div>
                </div>
           </Link>
        </li>
    );
}

export default ListingItem;
