import React from 'react'

const DetailComponent = (props) => {
  return (
    <div className="col">
        <div className="card h-100" onClick={() => {props.setClick({click:false,id:props.properties.id})}}>
            <div className="card-body">
                <div className='cardhead'>
                    <div className='rating'>
                        <img src='./images/Star.png' className='star' alt='star'/>
                        <span>{props.properties.score}</span>
                    </div>
                    <h5 className="card-title">{props.properties.city}</h5>
                </div>
                <p className="card-text">{props.properties.title}<br />$<span
                    className="price">{props.properties.price}</span> hour</p>
                <p>Amenities: {props.properties.amenities}</p>
                <p>description: {props.properties.description}</p>
                <button type="button" class="btn btn-outline-success">Reserve</button>
                <button type="button" class="btn btn-outline-danger">Save</button>
            </div>
        </div>
    </div>
  )
}

export default DetailComponent