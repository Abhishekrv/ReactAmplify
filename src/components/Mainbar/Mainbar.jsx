
import React from "react";
import "./mainbar.css"
import { Button, Link } from "@material-ui/core";
import ProjectCreateForm from "../../ui-components/ProjectCreateForm";

const CreateProject = () => {
    return <div>
        <h1>Create a project</h1>
        <div>Hello there</div>
    </div>
}

export default function Mainbar() {
    return (
        <div className="mainbar">
            <div className="mainbarMenu">
                <ul className="mainbarList">
                    <li className="mainbarListItem">
                    <Button>View All Projects</Button>
                    </li>
                    <li className="mainbarListItem">
                    <Button>Create Project</Button>
                    </li>    
                    <li className="mainbarListItem">
                    <Button>Update Project</Button>
                    </li>
                </ul>
                <div className="redirects">
                    <Link to="/">CreateProject</Link>
                </div>
            </div>
        </div>
    )
}