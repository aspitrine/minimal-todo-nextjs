"use server";

import {prisma} from "@/utils/prisma";
import {revalidatePath} from "next/cache";
import {Todo} from "@prisma/client";

export const addTodo = async (formData: FormData) => {

  await prisma.todo.create({
    data: {
      label: formData.get("task") as string,
    }
  });
  revalidatePath('/')
};

export const checkTodo = async (todo: Todo) => {
  await prisma.todo.update({
    where: {
      id: todo.id
    },
    data: {
      done: !todo.done
    }
  })
  revalidatePath('/')
}

export const removeTodo = async (todo: Todo) => {
  await prisma.todo.delete({
    where: {
      id: todo.id
    }
  })
  revalidatePath('/')
}
