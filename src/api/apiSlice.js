import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import uuid from "react-uuid";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
      providesTags: ["Todos"],
    }),
    createTodo: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: { id: uuid(), todo, completed: false },
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: "todos/" + todo.id,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: "todos/" + todoId,
        method: "DELETE",
        body: {},
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
