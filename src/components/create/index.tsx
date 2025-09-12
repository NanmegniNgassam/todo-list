import { useState, type FormEvent } from "react";
import { connect } from "react-redux";
import type { Action, Dispatch } from "redux";

const Create = (props : { createTask: (content: string) => void }) => {
  const [content, setContent] = useState<string>('');
  const { createTask } = props;

  const handleTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(content.length < 3) {
      return;
    }

    createTask(content);
    setContent('');
  } 

  return (
    <form onSubmit={(e) => handleTaskSubmit(e)}>
      <input 
        type="text" 
        id="task" 
        value={content}
        placeholder="Entrer une nouvelle tâche"
        onChange={(event) => setContent(event.target.value)} 
      />
      <button type="submit" disabled={content.length < 3}>Créer une tâche</button>
    </form>
  );
}

interface CreateTaskAction extends Action {
  content: string;
}

const mapDispatchToProps = (dispatch: Dispatch<CreateTaskAction>) => {
  return {
    createTask: (content: string) => { dispatch({ type: 'CREATE_TASK', content }) }
  }
}
 
export default connect(null, mapDispatchToProps)(Create);