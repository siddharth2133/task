import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        fetchUsers: builder.query({
            query: (page) => `/users?page=${page}`,
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useFetchUsersQuery,
} = apiSlice;

export default apiSlice;
