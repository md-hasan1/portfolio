
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { backEndUrl } from '../utils/Url';


const BlogDetails = () => {
  const [newsData, setNewsData] = useState({});
  const { id } = useParams();
//   console.log(id);
  useEffect(() => {
    const url = `${backEndUrl}/blog/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);

                setNewsData(data.data)
            })
    }, [id])
    //console.log(id)
    // console.log(newsData)
    return (
        <div className='w-full  bg-[#000000] h-fit'>
          <div className='bg-[#153035]  mx-20 text-white p-4'> 
          <div className='p-4 '>
           
           <img className='mx-auto w-full h-full rounded-md'src={newsData.img} alt="" />
             </div>
             <h3 className=" md:mx-auto mt-2 px-4 md:w-full font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-2 inline-block text-dark ">
               {newsData.title}

           </h3>
             <p className='px-4  pb-10'>{newsData.detail}</p>
          </div>
               
        </div>
    );
};

export default BlogDetails;