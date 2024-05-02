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
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: ''
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const handleViewProject = (projectId) => {
    window.location.href = `/users/project/${projectId}`;
  };

  const handleEditProject = (projectId) => {
    const project = projects.find(project => project.id === projectId);
    if (project) {
      setFormData({
        id: project.id,
        name: project.name,
        description: project.description
      });
      setIsUpdateMode(true); // Switch to update mode when editing
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    // For now, let's just log the form data
    console.log("Form submitted with data:", formData);
    // Add the new project to the projects array
    const newProject = {
      id: projects.length + 1, // Generate a unique ID for the new project
      name: formData.name,
      description: formData.description
    };
    setProjects([...projects, newProject]);
    // Clear form fields after submission
    setFormData({
      name: '',
      description: ''
    });
    // Show SweetAlert notification
    Swal.fire({
      title: 'Success!',
      text: 'New project added successfully.',
      icon: 'success'
    });
  };

  const handleUpdateProject = () => {
    // Update project data in projects state
    const updatedProjects = projects.map(project => {
      if (project.id === formData.id) {
        return {
          ...project,
          name: formData.name,
          description: formData.description
        };
      }
      return project;
    });
    setProjects(updatedProjects);
    // Reset form data
    setFormData({
      id: '',
      name: '',
      description: ''
    });
    // Reset to add mode after updating
    setIsUpdateMode(false);
    Swal.fire({
      title: 'Updated!',
      text: 'Your project has been updated.',
      icon: 'success'
    });
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

  return (
    <div>
       <div>
        {/* Conditional rendering for add or update form */}
        {!isUpdateMode ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Enter project name" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleInputChange} 
              placeholder="Enter project description" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Project</button>
          </div>
        </form>
        ) : (
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdateProject();
          }} className="max-w-md mx-auto">
            <div className="mb-4">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                placeholder="Enter project name" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input 
                type="text" 
                name="description" 
                value={formData.description} 
                onChange={handleInputChange} 
                placeholder="Enter project description" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Project</button>
            </div>
                  </form>
        )}
      </div>
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
                  <Link href={`/users/project/${project.id}`}>
                    {project.description}
                    </Link>
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


