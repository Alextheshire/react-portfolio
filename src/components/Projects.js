import React, { useState } from 'react';
import ProjectCard from './ProjectCard';


const projects = [
    {
        title:"Pocket Rascal" ,
        url: "https://pocket-rascal.herokuapp.com/",
        repo:"https://github.com/evanhosni/pocket-rascal",
        link: "./assets/screencapture-pocket-rascal-herokuapp-2021-12-16-13_46_58.png",
        about: "Our final bootcamp project, Pocket Rascal was developed by Evan Hosni, Lindsay Fitzgerald, and myself.  The app allows you to create your own 'rascal', and then customize them via unlocks earned with in game currency. Won best UI/UX award."
    },
    {
        title:"Mental Health Tracker" ,
        url: "https://mental-health-tracker-dbt.herokuapp.com/",
        repo:"https://github.com/Alextheshire/mental-health-tracker",
        link: "./assets/screencapture-mental-health-tracker-dbt-herokuapp-profile-2021-11-09-09_41_16.png",
        about: "This is a project developed with 3 other members of my cohort to track mental health.  It is a proof of concept for a website that connects patients and providers and allows sharing of mental health resources.  Patients can fill out daily DBT diary cards and view their progress over time, and providers have access to patient data."
    },
    {
        title:"Dinner and a Drink" ,
        url: "https://alextheshire.github.io/dinner-and-a-drink/",
        repo:"https://github.com/Alextheshire/dinner-and-a-drink",
        link: "./assets/site1.png",
        about: "This app allows users to search for recipes based on ingredients that have or would like included.  Built of multiple external APIs."
    },
    {
        title:"Weather Dashboard" ,
        url: "https://alextheshire.github.io/weather-dashboard/",
        repo:"https://github.com/Alextheshire/weather-dashboard",
        link: "./assets/weatherdashboard.png",
        about: "A weather dashboard that uses local storage to save search history. Will give daily and weekly weather data for any location searched."
    },
    {
        title:"Password Generator" ,
        url: "https://alextheshire.github.io/password-generator/",
        repo:"https://github.com/Alextheshire/password-generator",
        link: "./assets/passgen.png",
        about: "This is a simple random password generator built using prompts for specifications. This is the first app that I built!"
    },
    {
        title:"Note Taker" ,
        url: "https://note-taker-alextheshire.herokuapp.com/",
        repo:"https://github.com/Alextheshire/note-taker",
        link: "./assets/notetaker.png",
        about: "This app is an online note taker.  It uses a primitive database system to read and write data directly into a json file."
    },
    {
        title:"Workout Tracker" ,
        url: "https://still-reef-41302.herokuapp.com/",
        repo:"https://github.com/Alextheshire/workout-tracker",
        link: "./assets/workouttracker.png",
        about: "This app can track different exercises included in a workout, track total duration and resistance used, and track progress via Chart.js"
    },
]
function Projects() {
    return (
        <div>
        {projects.map((item,index)=>(
                <ProjectCard projectUrl={item.url} link={item.link} about={item.about} repo={item.repo} key={index} />
        ))}
        <div style={{height:"200px"}}></div>
        </div>
    )

}


export default Projects;