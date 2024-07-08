/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import moment from 'moment/moment';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogsCard = ({ Blogs }) => {
    const { date, img, detail, title,_id } = Blogs
    const [showText, setShowText] = useState(true)
    return (
        <>
          <div data-testid="testNews" className=" text-white p-4 bg-[#153035] rounded-lg">
            <div className=''>
            <div className="max-w-[400px] mx-auto mb-10  ">
                    <div className="rounded overflow-hidden  mb-8">
                        <img
                            src={img}
                            alt="image"
                            className="w-full h-52"
                        />
                    </div>
                    <div>
                        <span className=" bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double   ">
                            {moment(date).format("MMM Do YY")}
                        </span>
                        <h3>
                            <Link  to={`detail/${_id}`}  className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 mt-4 inline-block text-dark hover:text-primary">{title.slice(0,70)}</Link>
                           
                        </h3>
                       
                        <p className="text-base text-body-color overflow-y-auto scrollbar-hide ">
                            { detail.slice(0, 100) } ....
                        </p>
                        
                    </div>
                </div>
            </div>
            </div>
            
        </>
    );
};

export default BlogsCard;