import React from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "@/actions/todo-action";
import { toast } from "sonner";

export const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  return (
    <div className="flex items-center justify-between p-4 bg-card border rounded-lg shadow-sm hover:shadow-md transition-shadow mb-3">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => {}}
          id={`todo-${todo._id}`}
        />

        <label
          htmlFor={`todo-${todo._id}`}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
            todo.completed && "line-through text-muted-foreground",
          )}
        >
          {todo.title}
        </label>
      </div>
      <Button onClick={()=>{}} variant="destructive" size="icon" >
        <Trash size={18} />
      </Button>
    </div>
  );
};