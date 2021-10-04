import { Switch, Route } from "react-router-dom";
import EditFile from "./EditFile";
import EditFilePull from "../Project/Repository/PullRequests/EditFilePull";
const EditRouter = () => (
  <>
    <Switch>
      <Route
        path="/edit/projects/:project_name/repositories/:repository_name/blob/:branch_name/:route"
        component={EditFile}
      />
    </Switch>
      <Switch>

    </Switch>
  </>
);

export default EditRouter;
