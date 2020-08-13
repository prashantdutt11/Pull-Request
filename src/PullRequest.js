import React ,{useState,useEffect} from "react";
import axios from "axios";

const PullRequest = (props) => {
    const [pullRequest, setPullRequest] = useState([]);
    useEffect(() => {
        console.log("here");
        axios
        .get(
        "https://api.github.com/repos/" + props.user + "/" + props.repo + "/pulls"
        )
        .then((repo) => {
            console.log("repo", repo);
            console.log("pr",pullRequest);
            setPullRequest(repo.data);
        });
    },[props.user,props.repo])
  console.log(pullRequest);
  return (
    <div>
        {pullRequest.map(pr => {
            
            return(
                <div>
                <br />
                    <p>pull title :{pr.title}</p>
                    <p>pr number: {pr.id}</p>
                    <p>pr state: {pr.state}</p>
                    <p>create: {pr.created_at}</p>
                <br />
                </div>
            )
        })
        }

    </div>
  );
};

export default PullRequest;