import React,{Component} from "react";
 
const Header = (props) => {
    return (
        <div className="w-2/3 m-auto h-[100px] shadow-md flex items-center justify-center text-center uppercase">
            <h1>{props.title}</h1>
        </div>
    );
};

export default Header;


