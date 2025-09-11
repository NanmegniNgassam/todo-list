import { useState, type FormEvent } from "react";
import type { Task } from "../../models/Task.model";

const Create = () => {
  const [content, setContent] = useState<string>('');

  const createTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(content.length < 3) {
      return;
    }

    const newTask: Task = {
      id: 1,
      content: content.trim(),
      created: new Date().toLocaleDateString(),
    }
    console.log('Création de nouvelle tâche : ', newTask);
    setContent('');
  } 

  return (
    <form onSubmit={(e) => createTask(e)}>
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
 
export default Create;