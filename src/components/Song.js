import React from "react"

function Song(props) {
    return (
        <tr className="listed-song" value={props.title} id={props.id}>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
            <td className="delete-button">
                <button onClick={() => props.handleClick(props.id)}>Remove</button>
            </td>
        </tr>

    )
}
export default Song