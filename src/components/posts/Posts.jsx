import Post from "../post/Post";
import React from "react";
import "./posts.css";

export default function Posts() {
    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}
