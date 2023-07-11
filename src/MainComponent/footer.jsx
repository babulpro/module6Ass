import React from "react";
 

const Footer = (props) => {
    return (
        <div className="w-2/3 m-auto grid grid-cols-4 mt-3 shadow-lg">
            <div className="capitalize col-span-2">
                <h1 className="text-red-900">{props.name}</h1>
                <p className="text-sm">{props.title}</p>
            </div>

            <div>
                <h1 className="underline text-red-900">Skills</h1>
                <ul>
                    <li>{props.skill1}</li>
                    <li>{props.skill2}</li>
                    <li>{props.skill3}</li>
                </ul>
            </div>
            <div>
                <h1 className="underline text-red-900">Links</h1>
                <ul>
                    <li className="hover:underline"><a href="#">{props.links1}</a></li>
                    <li className="hover:underline"><a href="#"></a>{props.links2}</li>
                    <li className="hover:underline"><a href="#">{props.links3}</a></li>
                </ul>
            </div>
           
        </div>
    );
};

export default Footer;