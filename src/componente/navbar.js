import React from 'react'

function navbar(props) {
    return (
        <ul>
            {props.x.map (el=><li>{el.title}
                <ul>
                    {!el.dorp?null:el.drop.map(el=><li><a href={el.url}>{el.title}</a></li>)}
                </ul>
            </li>)}
            
        </ul>
    )
}
export default navbar

