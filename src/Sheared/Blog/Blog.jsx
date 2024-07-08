


import { useState } from 'react';
import { useEffect } from 'react';
import { backEndUrl } from '../utils/Url';
import BlogsCard from './BlogsCard';
import FancyText from "@carefully-coded/react-text-gradient";


const Blog = () => {
 
    const [blogNews,setBlogNews]=useState([])
    useEffect(()=>{
        fetch(`${backEndUrl}/get-blogs`).then(res=>res.json()).then(data=>{
            console.log(data.data)
            setBlogNews(data.data)
        })
    },[])



    return (
        <section className=" pb-10 lg:pb-20 bg-[#000000]">
            <div className="w-full max-w-screen-xl mx-auto">
            <FancyText className="w-full " gradient={{ from: "#FDFBFF", to: "#8852F7" }}>
            <h6 className="text-5xl font-bold text-center mb-4 ">
              This is our Blogs
            </h6>
          </FancyText>
                <div className="grid md:grid-cols-3 gap-5 mx-4">
                    {
                        blogNews?.map((Blogs,index) => <BlogsCard key={index}
                            Blogs={Blogs}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;