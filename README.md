## Minimal Library Management System
This is a library management system. You can add, modify, borrow, and view borrow summary of book by this application.

## Key Features
### 1. Book Management
  - Add Book: You can add a new book by providing Title, Author Name, Genre, ISBN, Description and Quantity
  - Show Book: You can see the books as card in home page and as a table in All Books page with SL, Title, Author Name, Genre, ISBN, Description, Copies,Availability, and Action columns
  - Actions: Under action column you can perform four actions:
    - Preview: You can see full details by click on this button.
    - Edit: You can edit any book by click on edit button.
    - Delete: You can delete a book from database by click on this button. When you click on this button a confirmation warning will be show. If you confirm then the book be deleted.
    - Borrow: By clicking this button you can borrow a book by providing necessary information like due date and number of copies.

### 2. Borrow Book
  - You can borrow a book from All Books and Details pages.
  - When you clicked on borrow button a new page be open with a table.
  - In this table have two input field due date and quantity.
  - The date must be tody or any future date and quantity must be greater than 0 and equal or less than available of stock.
  - By clicking borrow button after providing necessary field data the book is being borrowed and redirect to borrow summary page.

### 3. Borrow Summary
  - Borrow Summary page contain the summary of borrowed books.
  - There have a table with four column: SL, Book Title, ISBN and Borrowed Quantity.

## Uges Technologies
  #### React
  #### TypeScript
  #### Redux
  #### React hook-form
  #### TailwindCSS
  #### Eslint

## Basic Setup of Project
- Goto your suitable folder where you want to keep your project
- Open the folder in powershell
- Write the following command

      npm create vite
- Give a project name like "minimal-library"
- Then select reack from from framework list
- Now select TypeScript from variant list
- Write the following command to enter your project folder
 
      cd miminal-library
- Now install npm
   
        npm install
- After install npm, open your project with code editor

          code .
- Now open run your project in browser
   
          npm run dev

## Redus Setup
- Create a folder as name "src" in root directory
- Under src folder create a folder as name "redux"
- Under redux folder create a file as name "api" and two files as name "hooks.ts" and "store.ts"
- Under api folder create a file as name "baseApi.ts"
- In baseApi.ts ts file, you add your base api and enpoints as like follows:

      import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
      
      export const baseApi = createApi({
        reducerPath: "baseApi",
        tagTypes: ["books", "borrow", "singleBook","borrowBook"],
        baseQuery: fetchBaseQuery({
          baseUrl: import.meta.env.VITE_SERVER_URL,
        }),
      
        endpoints: (builder) => ({
          getbooks: builder.query({
            query: () => ({
              url: "/books",
              method: "GET",
            }),
            providesTags: ["books"],
          }),
      
          addBook: builder.mutation({
            query: (bookData) => ({
              url: "/books",
              method: "POST",
              body: bookData,
            }),
            invalidatesTags: ["books"],
          }),
      
          getSingleBook: builder.query({
            query: (id) => ({
              url: `/books/${id}`,
              method: "GET",
            }),
            providesTags: ["singleBook"],
          }),
      
          updateBook: builder.mutation({
            query: ({ id, updatedData }) => ({
              url: `/books/${id}`,
              body: updatedData,
              method: "PUT",
            }),
            invalidatesTags: ["books"],
          }),
      
          deleteBook: builder.mutation({
            query: (id) => ({
              url: `books/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ["books"],
          }),
      
          addBorrowBook: builder.mutation({
            query: (data) => ({
              url: "/borrow",
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["borrowBook","books"],
          }),
      
          getBorrowedBook: builder.query({
            query: () => ({
              url: "/borrow",
              method: "GET",
            }),
            providesTags:["borrowBook"]
          }),
        }),
      });
      
      export const {
        useGetbooksQuery,
        useAddBookMutation,
        useGetSingleBookQuery,
        useUpdateBookMutation,
        useDeleteBookMutation,
        useAddBorrowBookMutation,
        useGetBorrowedBookQuery,
      } = baseApi;
  
- In store.ts file you write the following code:


      import { configureStore } from "@reduxjs/toolkit";
      import { baseApi } from "./api/baseApi";
      
      export const store = configureStore({
        reducer: {
          [baseApi.reducerPath]: baseApi.reducer,
        },
      
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(baseApi.middleware),
      });
      
      export type RootState = ReturnType<typeof store.getState>;
      export type AppDispatch = typeof store.dispatch;
  
- In hooks.ts write the following code


      import { useDispatch, useSelector } from "react-redux";
      import { AppDispatch, RootState } from "./store";
      
      export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
      export const useAppSelector = useSelector.withTypes<RootState>();

## Folder Structure
- Create necessary folder like
    - Layout:
       - Banner
       - Footer
       - Navbar
    - Pages:
       - Books
       - BookDegails
       - BookTableBody
       - BookTableRow
       - BorrowBook
       - BorroedBooks
       - CreateBook
       - Home
       - Update Book
    - routes
        
## Project Deploy
After finishing the project you need to deploy the project. You can deploy it in vercel. The setps to deploy in vercel is following:

- Install vercel

      npm i -g vercel

- Now write the following command to login vercel

      vercel login
- Login your github or google account
  
-After that create a file in root directory as name "vercel.json" and write the follwoing code:


      {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
    }

- Write a command to build the project

      npm run build

- Now write the following command to deploy

      vercel --prod

## Live link of this project
https://minimal-library-management-client-lime.vercel.app/
  
