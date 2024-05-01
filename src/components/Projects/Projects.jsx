"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { projectData } from '@/fakeData/projectPageData';
import Link from 'next/link';

const ProjectsOverviewPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const handleEditProject = (projectId) => {
    // Navigate to project editing page
    console.log(`Edit project ${projectId}`);
  };
  
  const handleDeleteProject = (projectId) => {
    console.log(`Delete project ${projectId}`);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProjects = projects.filter(project => project.id !== projectId);
        setProjects(updatedProjects);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your project has been deleted.',
          icon: 'success'
        });
      }
    });
  };

  const handleViewProject = (projectId) => {
    window.location.href = `/users/project/${projectId}`;
  };

  return (
    <div>
      <ul>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr className="cursor-pointer" key={project.id}>
                  <td>
                    <Link href={`/users/project/${project.id}`}>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image src="/tailwind-css-component-profile-2@56w.png" width={100} height={100} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div onClick={() => handleViewProject(project.id)} className="font-bold">{project.name}</div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td onClick={() => handleViewProject(project.id)} className="w-[450px]">
                    {project.description}
                  </td>
                  <td>
                    <button onClick={() => handleEditProject(project.id)} className="btn btn-ghost btn-lg text-2xl"><FaPencilAlt /></button>
                  </td>
                  <th>
                    <button onClick={() => handleDeleteProject(project.id)} className="btn btn-ghost btn-lg text-3xl"><AiTwotoneDelete /></button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ul>
    </div>
  );
};

export default ProjectsOverviewPage;
