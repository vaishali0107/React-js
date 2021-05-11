import React from 'react'

export default function Cards(props) {

    return (
        <>
        
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="" className="card-img"/>
                <div className="card-info">
                    <span className="card-category">
                        {props.series}
                    </span>
                    <h3 className="card-title">
                        {props.title}
                    </h3>
                    <button>Watch Now</button>
                </div>
            </div>
        </div>
        </>
    )
}
