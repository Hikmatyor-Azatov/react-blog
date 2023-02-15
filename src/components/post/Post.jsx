import "./post.css";
import React from "react";

export default function Post() {
    return (
        <div className="post">
            <img
                src="https://c4.wallpaperflare.com/wallpaper/722/789/279/nature-turquoise-water-sea-wallpaper-preview.jpg"
                alt="post"
                className="postImg"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                eius, officia autem magni porro asperiores velit molestiae eum
                praesentium quisquam vero alias excepturi quaerat. Ratione ex
                quibusdam excepturi iste quisquam. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Qui eius, officia autem magni
                porro asperiores velit molestiae eum praesentium quisquam vero
                alias excepturi quaerat. Ratione ex quibusdam excepturi iste
                quisquam.
            </p>
        </div>
    );
}
