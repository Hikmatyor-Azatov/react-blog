import "./singlePost.css";
import React from "react";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/722/789/279/nature-turquoise-water-sea-wallpaper-preview.jpg"
                    alt="post"
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i class="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Hikmatyor</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium, recusandae excepturi. Odit deserunt mollitia
                    alias sint deleniti pariatur beatae vel repudiandae quas,
                    totam itaque voluptatem suscipit illum? Nesciunt,
                    exercitationem quibusdam. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Facilis vitae deleniti
                    voluptatum inventore assumenda praesentium voluptatibus.
                    Necessitatibus quasi, aperiam atque cumque tempora eum saepe
                    illum ullam fugiat in dolorem, id dolores? Minus reiciendis
                    dolor tenetur sunt debitis amet doloribus tempora unde
                    mollitia ad, maiores nostrum voluptatum labore quis deleniti
                    corrupti?
                </p>
            </div>
        </div>
    );
}
