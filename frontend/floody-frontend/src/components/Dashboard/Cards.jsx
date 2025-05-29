import React from "react";

export default function Cards(){
    
    return(
        <>
            <Card 
                props= "hello"
            />
            <Card
                props= "hi"
            />
            <Card 
                props= "how r u"
            />
        </>
    )
}

const Card = ({props}) => {
    return(
        <div className="m-4 p-4 col-span-4 rounded border border-stone-300">
            <div className="flex mb-8 items-start justify-between">

            </div>

        </div>
    )
}