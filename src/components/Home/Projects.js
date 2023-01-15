import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate()
    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const handleDetail = (id) => {
        navigate(`/home/${id}`)
    }

    return (
        <>
            <h1 className='my-8 text-5xl font-semibold text-center text-slate-600'>My Projects</h1>
            <div className='grid px-4 gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    projects && projects.map(project =>
                        <div
                            key={project._id} className="card my-5  bg-base-100 shadow-xl">
                            <figure className="px-2 pt-3">
                                <img src={project.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-500 text-2xl uppercase">{project.name}</h2>
                                <div className="card-actions">
                                    <a href={project.live} target='_blank' rel="noreferrer"> <button className="btn btn-outline">Live site </button></a>

                                    <button className='btn btn-outline' onClick={() => handleDetail(project._id)}>detail</button>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Projects;