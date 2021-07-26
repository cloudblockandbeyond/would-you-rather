import React from "react";

const PageNotFound = () => {
    return (
        <div>
            <img className="img" src={ `${process.env.PUBLIC_URL}/error404.png` } alt="PageNotFound"></img>
        </div>
    );
};

export default PageNotFound;
