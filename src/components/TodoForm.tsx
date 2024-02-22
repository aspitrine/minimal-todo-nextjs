"use client";
import {useRef} from "react";
import {addTodo} from "@/actions/todo";

function TodoForm() {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <form
      action={async (formData) => {
        await addTodo(formData);
        ref.current?.reset()
      }}
      className="border-2 border-[#f0f] p-2 flex gap-2 items-center"
      ref={ref}
    >
      <label htmlFor="task">Nouvelle tâche</label>
      <input id="task" name="task" className="border-2 border-[#F0F]" />
    </form>
  );
}

export default TodoForm;
