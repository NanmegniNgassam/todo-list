import Create from "../create";
import TasksWidget from "../tasksWidget";

const Home = () => {
  return (
    <div className="landing">
      <h1>Suivi des tâches.</h1>
      <Create />
      <TasksWidget />
    </div>
  );
}
 
export default Home;