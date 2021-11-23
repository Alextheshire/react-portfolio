import React, { useState } from 'react';
import ProjectCard from './ProjectCard';


const projects = [
    {
        url: "https://mental-health-tracker-dbt.herokuapp.com/",
        link: "./assets/screencapture-mental-health-tracker-dbt-herokuapp-profile-2021-11-09-09_41_16.png",
        about: "This is a project developed with 3 other members of my cohort to track mental health.  It is a proof of concept for a website that connects patients and providers and allows sharing of mental health resources.  Patients can fill out daily DBT diary cards and view their progress over time, and providers have access to patient data."
    },
    {
        url: "https://alextheshire.github.io/dinner-and-a-drink/",
        link: "./assets/site1.png",
        about: "This app allows users to search for recipes based on ingredients that have or would like included.  Built of multiple external APIs."
    },
    {
        url: "https://alextheshire.github.io/weather-dashboard/",
        link: "./assets/weatherdashboard.png",
        about: "A weather dashboard that uses local storage to save search history. Will give daily and weekly weather data for any location searched."
    },
    {
        url: "https://alextheshire.github.io/password-generator/",
        link: "./assets/passgen.png",
        about: "This is a simple random password generator built using prompts for specifications."
    },
    {
        url: "https://alextheshire.github.io/password-generator/",
        link: "./assets/passgen.png",
        about: "This is a simple random password generator built using prompts for specifications."
    },
    {
        url: "https://alextheshire.github.io/password-generator/",
        link: "./assets/passgen.png",
        about: "This is a simple random password generator built using prompts for specifications."
    },
]
function Projects() {
    return (
        <div>
        {projects.map(item=>(
                <ProjectCard projectUrl={item.url} link={item.link} about={item.about} />
        ))}
        </div>
    )

}


export default Projects;