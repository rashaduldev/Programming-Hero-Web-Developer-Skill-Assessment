"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';

const fakeProjects = [
    {
      "id": 1,
      "name": "Project Alpha",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum massa sit amet ligula feugiat laoreet.",
      "teamMembers": ["John Doe", "Jane Smith", "Alice Johnson"]
    },
    {
      "id": 2,
      "name": "Project Beta",
      "description": "Sed ac ante at orci ultricies hendrerit. Ut tincidunt dolor sed lacus condimentum interdum.",
      "teamMembers": ["Bob Brown", "Eva Wilson", "David Lee"]
    },
    {
      "id": 3,
      "name": "Project Gamma",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pretium elit quis velit.",
      "teamMembers": ["Grace Taylor", "Daniel Martinez", "Sophia Adams"]
    },
    {
      "id": 4,
      "name": "Project Delta",
      "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi.",
      "teamMembers": ["Liam Wilson", "Olivia Brown", "Noah Taylor"]
    },
    {
      "id": 5,
      "name": "Project Epsilon",
      "description": "Integer aliquet dolor nec libero consequat, nec luctus justo commodo. Nam commodo, libero ut varius bibendum.",
      "teamMembers": ["Ava Wilson", "William Davis", "Mia Johnson"]
    },
    {
      "id": 6,
      "name": "Project Zeta",
      "description": "Aliquam vel risus nec magna hendrerit consequat. Nam id magna non ipsum scelerisque laoreet.",
      "teamMembers": ["James Taylor", "Charlotte Brown", "Ethan Wilson"]
    },
    {
      "id": 7,
      "name": "Project Eta",
      "description": "Suspendisse efficitur magna nec quam sodales, sit amet vestibulum lacus volutpat. Fusce dapibus arcu ut posuere convallis.",
      "teamMembers": ["Lily Johnson", "Benjamin Brown", "Chloe Wilson"]
    },
    {
      "id": 8,
      "name": "Project Theta",
      "description": "Vivamus sed ex eu ex aliquam congue. Cras at aliquet elit. Sed auctor ante at justo placerat, et cursus risus convallis.",
      "teamMembers": ["Jackson Brown", "Penelope Taylor", "Michael Wilson"]
    },
    {
      "id": 9,
      "name": "Project Iota",
      "description": "Curabitur fermentum nisi at leo accumsan, et convallis mauris pharetra. Nam vel dictum urna, eu laoreet sapien.",
      "teamMembers": ["Emily Johnson", "Alexander Brown", "Harper Wilson"]
    },
    {
      "id": 10,
      "name": "Project Kappa",
      "description": "Quisque tristique mauris eget consequat consequat. Duis in urna vel odio laoreet ornare.",
      "teamMembers": ["Evelyn Taylor", "William Brown", "Scarlett Wilson"]
    }
  ]
  

const ProjectsOverviewPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return fakeProjects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

//   const { data: projects } = useQuery('projects', fetchProjects);

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching projects</div>;
  const handleEditProject = (projectId) => {
    // Navigate to project editing page
    console.log(`Edit project ${projectId}`);
  };

  const handleDeleteProject = (projectId) => {
    // Implement project deletion logic
    console.log(`Delete project ${projectId}`);
  };
  const handleViewProject = (projectId) => {
    // Redirect to project details page
    // router.push(`/projects/${projectId}`);
    console.log(`/projects/${projectId}`);
  };

  return (
    <div>
      <ul>
       <div>
     
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
            fakeProjects.map((project,index)=>(
                <tr onClick={() => handleViewProject(project.id)} className="cursor-pointer" key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image src="/tailwind-css-component-profile-2@56w.png" width={100} height={100} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div  className="font-bold">{project.name}</div>
                      {/* <div className="text-sm opacity-50">{project.teamMembers}</div> */}
                    </div>
                  </div>
                </td>
                <td className="w-[450px] ">
                  {project.description}
                </td>
                <td>
                <button className="btn btn-ghost btn-lg text-2xl"><FaPencilAlt /></button>
                    </td>
                <th>
                  <button className="btn btn-ghost btn-lg text-3xl"><AiTwotoneDelete /></button>
                </th>
              </tr>
            ))
        }
     
    </tbody>
  </table>
</div>
       </div>
        {/* {projects.map((project) => (
          <li key={project.id}>
            <span>{project.name}</span>
            <button onClick={() => handleViewProject(project.id)}>View</button>
            <button onClick={() => handleEditProject(project.id)}>Edit</button>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ProjectsOverviewPage;



  