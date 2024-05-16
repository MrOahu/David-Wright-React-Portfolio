function ProjectCard(props){
return(
    <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href={props.githubUrl} className="btn btn-primary">Github Repo</a>
        <a href={props.liveUrl} className="btn btn-primary">Go to App</a>
  </div>
</div>
    </div>
)
}
export default ProjectCard