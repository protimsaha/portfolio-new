import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { pId } = useParams()
    const [projectDetail, setProjectDetail] = useState({})

    useEffect(() => {
        fetch(`https://desolate-citadel-04738.herokuapp.com/projects/${pId}`)
            .then(res => res.json())
            .then(data => setProjectDetail(data))
    }, [pId])

    return (
        <div className='my-20 w-full lg:w-2/3 mx-auto shadow-xl rounded-2xl p-11'>
            <div className='bg-slate-500 mx-auto h-80 w-full lg:w-3/4 rounded-3xl shadow-lg'>
                <img className='w-full lg:w-3/4 lg:pt-8 pt-20 mx-auto rounded' src={projectDetail.img} alt="" />
            </div>
            <p className='text-2xl text-slate mt-5 text-center font-semibold'>Photo Gallery</p>
            <div className='grid border-slate-600 mt-10 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
                <div className='flex  my-4 items-center'>
                    <img className='rounded py-' src={projectDetail.img1} alt="" />
                </div>
                <div className='flex my-4 items-center'>
                    <img className='rounded py-' src={projectDetail.img2} alt="" />
                </div>
                <div className='flex my-4 items-center'>
                    <img className='rounded py-' src={projectDetail.img3} alt="" />
                </div>
            </div>
            <a target='_blank' rel="noreferrer" href={projectDetail.live}><h1 role='button' className='text-center text-5xl font-semibold uppercase text-slate-600 my-5'>{projectDetail.name}</h1></a>
            <div className='flex flex-col text-center'>
                <a target='_blank' rel="noreferrer" href={projectDetail.gitC}><button className='btn w-1/2'>github client</button></a>
                {projectDetail.gitS && <a target='_blank' rel="noreferrer" href={projectDetail.gitS}><button className='btn my-3 w-1/2'>github server</button></a>}
            </div>
            <p className='text-secondary text-2xl  px-8 mt-5 font-semibold'>Description:</p>
            <p className='text-xl px-8'>{projectDetail.sDes}</p>
        </div>
    );
};

export default ProjectDetail;