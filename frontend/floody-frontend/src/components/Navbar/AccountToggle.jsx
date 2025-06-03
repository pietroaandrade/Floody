import React, { useState, useEffect } from "react";
import {FiChevronDown,FiChevronUp } from "react-icons/fi";

export default function AccountToggle(){
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem('loggedInUserEmail');
        if (storedEmail) {
            const storedUserData = localStorage.getItem(storedEmail);
            if (storedUserData) {
                try {
                    setUserData(JSON.parse(storedUserData));
                } catch (error) {
                    console.error('Error parsing user data from localStorage:', error);
                }
            }
        }
    }, []); 

    return(
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
            <button className="flex p-0.5 hover:bg-stone-200 rounded 
            transition-colors relative gap-2 w-full items-center">
                <img 
                    src="https://api.dicebear.com/9.x/notionists/svg"
                    alt="avatar" 
                    className="size-8 rounded shrink-0 bg-violet-500 
                    shadow"
                />
                <div className="text-start">
                    <span className="text-sm font-bold block">{userData ? userData.username : 'Guest'}</span>
                    <span className="text-xs block text-stone-500">{userData ? userData.email : 'guest@example.com'}</span>
                </div>

                <FiChevronDown className="absolute right-2 top-1/2
                translate-y-[calc(-50%+4px)] text-xs"
                />
                <FiChevronUp className="absolute right-2 top-1/2
                translate-y-[calc(-50%-4px)] text-xs"
                />
                

            </button>

        </div>
    )
}