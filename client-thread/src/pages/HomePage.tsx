// import React from "react";

import Header from "../components/elements/Header/Header.tsx";
import PostList from "../components/containers/PostList/PostList.tsx";
import PostAdd from '../components/elements/PostAdd/PostAdd.tsx'

const HomePage = () => {
    return <>
        <Header />
        <div className="container">
            <PostAdd />
            <PostList />
        </div>
    </>
}

export default HomePage