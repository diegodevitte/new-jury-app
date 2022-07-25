import React from "react";

const CardRepo = ({ repo }) => {
    return (
        <div className="m-10 shadow-lg text-sm">
            <div className="w-[300px] h-[200px] p-2 rounded-md bg-white text-gray">
                <div className="text-center">
                    <h3 className="">{repo.name}</h3>
                </div>
                <div className="mt-5">
                    <span className="text-[10px]">Rama principal - {repo.default_branch}</span>
                </div>
                <div className="">
                    <span className="text-[10px]">Ultima actualizacion - {repo.updated_at}</span>
                </div>
            </div>
        </div>
    );
}

export default CardRepo;