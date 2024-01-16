import React from "react";
import { Link } from "react-router-dom";

function SideBar({ Heading, value }) {
    return (
        <div className="bg-yellow-100 text-white h-full w-1/5 p-4">
            <ul>
                {Heading.map((el) => (
                    <Link to={el.page} key={el.page}>
                        <li className="flex justify-center text-xl font-bold text-gray-700 p-2 ">
                            {value === el.title ?
                            (
                            <div className="rounded-2xl border w-full p-2 flex justify-center bg-green-600">
                                {el.title}
                            </div>)
                            :(el.title)}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;
