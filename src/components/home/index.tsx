import Create from "../create";
import TasksList from "../tasksList";

const Home = () => {
  return (
    <div className="landing">
      <h1>Suivi des tâches.</h1>
      <Create />
      <TasksList />
    </div>
  );
}
 
export default Home;