import React from 'react';
import Title from './Title';
function List() {
    const data = [
        {
            id: 1,
            title: "GTA Vice city",
            desc: "Launched in 2001 based on fictional open country named vice city"
        },
        {
            id: 2,
            title: "GTA San-andreas",
            desc: "Launched in 2005 based on 3 fictional open country named Los santos,Los ventures and San Fiero"
        },
        {
            id: 3,
            title: "GTA 5",
            desc: "Launched in 2013. World record for best selling till now"
        }
    ]
    return (
        <div>
            {data.map((obj) => {
                return <Title Title={obj} />
            })}
        </div>
    )
}
export default List;