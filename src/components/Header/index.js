import React from "react";

function Header(props) {
    return (
        <div class="aboutheader">
            <h1>{props.children}</h1>
        </div>
    );
}

export default Header;