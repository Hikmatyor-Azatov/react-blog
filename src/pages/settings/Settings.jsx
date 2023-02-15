import "./settings.css";
import React from "react";
import SideBar from "../../components/sidebar/SideBar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDaleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://avatars.githubusercontent.com/u/26920327?v=4"
                            alt="avatar"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Hikmatyor" />
                    <label>Username</label>
                    <input
                        type="email"
                        placeholder="azatovhikmatyor@gmail.com"
                    />
                    <label>Username</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    );
}
