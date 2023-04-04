import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsAPI = createApi({
    reducerPath: "postsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: () => "/users",
            providesTags: ['Posts'],
        }),
            createPost: builder.mutation({
                query: (post) => ({
                    url: "api/post",
                    method: "POST",
                    body: post,
                }),
                invalidatesTags: ['Transaction']
            }),
            updatePost: builder.mutation({
                query: (postsId) => ({
                    url: `api/post/${postsId}`,
                    method: "PUT",
                    body: {
                    },
                }),
                invalidatesTags: ['Posts']
            }),
            deletePost: builder.mutation({
                query: (postId) => ({
                    url: `api/post/${postId}`,
                    method: "DELETE",
                }),
                invalidatesTags: ['Posts']
            }),
        }),
    });

    export const {
        useFetchPostsQuery,
        useFetchTitleQuery,
        useCreatePostMutation,
        useUpdatePostMutation,
        useDeletePostMutation,
    } = postsAPI;