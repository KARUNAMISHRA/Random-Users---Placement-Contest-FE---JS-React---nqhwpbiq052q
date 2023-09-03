 import React from "react";

function Users({ isLoading, items }) {
    if(isLoading){
        return <div id="loading">{isLoading && "Loading..."}
            </div>;
    }
    return (
        <div>
            {items.map((el,i)=>{
                return <div key={i} className="user">{el.name.first}
                </div>
            })}
        </div>
    )
    
}

export default Users;
