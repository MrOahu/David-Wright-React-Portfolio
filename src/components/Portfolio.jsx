import ProjectCard from "./ProjectCard"

function Portfolio(){
    const myProjects = [
        {
            title: "Work Day Scheduler",
            imageUrl: "url to image",
            githubUrl: "https://github.com/MrOahu/David-Wright-Work-Day-Scheduler/tree/main",
            liveUrl: "https://mroahu.github.io/David-Wright-Work-Day-Scheduler"
        },
        {
            title: "Password Generator",
            imageUrl: "url to image",
            githubUrl: "https://github.com/MrOahu/David-Wright-Password-Generator",
            liveUrl: "https://mroahu.github.io/David-Wright-Password-Generator"
        },
        {
            title: "Note Taker",
            imageUrl: "url to image",
            githubUrl: "https://github.com/MrOahu/David-Wright-Note-Taker",
            liveUrl: "https://david-wright-note-taker-67000c0f3123.herokuapp.com"
        },
        {
            title: "Timed Coding Quiz",
            imageUrl: "url to image",
            githubUrl: "https://github.com/MrOahu/David-Wright-Timed-Coding-Quiz",
            liveUrl: "https://mroahu.github.io/David-Wright-Timed-Coding-Quiz/"
        },
    ]


    return(
        <div>
            <h1>Here are some of David Wright's projects in React.</h1>
            {
                myProjects.map(project => {
                    return(
                        <ProjectCard
                        title = {project.title}
                        imageUrl = {project.imageUrl}
                        githubUrl = {project.githubUrl}
                        liveUrl = {project.liveUrl}
                        />
                    )
                })
            }
        </div>
    )
}
export default Portfolio