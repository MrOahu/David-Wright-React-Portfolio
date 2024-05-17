import ProjectCard from "./ProjectCard"
import passwordGenerator from "../assets/password_generator_image.png"
import workDayScheduler from "../assets/work_day_scheduler_image.png"
import timedCodingQuiz from "../assets/timed_coding_quiz_image.png"
import noteTaker from "../assets/note_taker_image.png"

function Portfolio(){
    const myProjects = [
        {
            title: "Work Day Scheduler",
            imageUrl: workDayScheduler,
            githubUrl: "https://github.com/MrOahu/David-Wright-Work-Day-Scheduler/tree/main",
            liveUrl: "https://mroahu.github.io/David-Wright-Work-Day-Scheduler"
        },
        {
            title: "Password Generator",
            imageUrl: passwordGenerator,
            githubUrl: "https://github.com/MrOahu/David-Wright-Password-Generator",
            liveUrl: "https://mroahu.github.io/David-Wright-Password-Generator"
        },
        {
            title: "Note Taker",
            imageUrl: noteTaker,
            githubUrl: "https://github.com/MrOahu/David-Wright-Note-Taker",
            liveUrl: "https://david-wright-note-taker-67000c0f3123.herokuapp.com"
        },
        {
            title: "Timed Coding Quiz",
            imageUrl: timedCodingQuiz,
            githubUrl: "https://github.com/MrOahu/David-Wright-Timed-Coding-Quiz",
            liveUrl: "https://mroahu.github.io/David-Wright-Timed-Coding-Quiz/"
        },
    ]


    return(
        <div>
            <h1>Here are some of David Wright's projects in React.</h1>
            <div className="project-div">
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
        </div>
    )
}
export default Portfolio