// import React from "react";

import Header from "../components/elements/Header/Header.tsx";
import PostList from "../components/containers/PostList/PostList.tsx";

const HomePage = () => {
    return <>
        <Header />
        <div className="container">
            <PostList />
        </div>
    </>
}

export default HomePage