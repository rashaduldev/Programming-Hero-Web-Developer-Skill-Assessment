"use client";
import AllTask from '@/components/AllTask/AllTask';
import { projectData } from '@/fakeData/projectPageData';
import React, { useState, useEffect } from 'react';
import { FaProductHunt } from 'react-icons/fa6';

const ProjectDetailPage = () => {
    const [project, setProject] = useState(null);
    const data=projectData;
    console.log(data);
    const location = window.location.href;
    const newprojectId = parseInt(location.substring(location.lastIndexOf('/') + 1));
 // Extract projectId from URL
    console.log(typeof newprojectId);
    useEffect(() => {
      // Find the project with the given projectId
      const selectedProject = projectData.find(proj => proj.id === newprojectId);
      console.log(selectedProject);
      setProject(selectedProject);
    }, [newprojectId]); // Add projectId as a dependency to trigger the effect when it changes

    if (!project) {
      return <div>Loading...</div>;
    }
    console.log(project);
    return (
        <div className='mx-20 my-20'>
            
           
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='text-9xl py-12'>
            <FaProductHunt />
            </figure>
            <div className="card-body">
            <h1 className='text-4xl font-bold'>{project.name}</h1>
            <p>{project.description}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
          </div>
          <AllTask/>
        </div>
    );
};

export default ProjectDetailPage;
