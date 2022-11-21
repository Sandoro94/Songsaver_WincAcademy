import React from "react"

function Filter(props) {
    return(
        <div className="song-filter">
            <form>
                <select className="filter-box" defaultValue="default" name="genre-filter" onChange={props.FilterGenre}>
                    <option value="default" disabled hidden>
                        Filter by genre
                    </option>
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Classical">Classical</option>
                    <option value="Hiphop">Hiphop</option>
                    <option value="Folk">Folk</option>
                </select>
                <select className="filter-box" defaultValue="default" name="rating-filter" onChange={props.FilterRating}>
                    <option value="default" disabled hidden>
                        Filter by rating
                    </option>
                    <option value="1 Star">1 Star</option>
                    <option value="2 Stars">2 Stars</option>
                    <option value="3 Stars">3 Stars</option>
                    <option value="4 Stars">4 Stars</option>
                    <option value="5 Stars">5 Stars</option>
                </select>
            </form>
            {props.hasFilter && <button onClick={props.resetFilter}>reset filter</button>}
        </div>
    )
}

export default Filter