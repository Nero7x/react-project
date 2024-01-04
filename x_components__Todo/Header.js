import React from 'react'

function Header(){
    const client = "Designer";
    const title = {
        designer: "Design",
        programmer: "Programming",
        engineer: "Engineer"
    }

    const info = {
        name: "ali",
        nick: "Alahmadi"
    }

    return(
        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name} ${info.nick}`}
            <h2>
                {client === "Designer" ? title.designer : (client === "Programmer" ? title.programmer : title.engineer)}is my life.
            </h2>
        </div>
    );
}

export default Header;
