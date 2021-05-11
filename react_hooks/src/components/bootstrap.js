import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export default function bootstrap() {
    return (
       <>
       <h1 className="text-center text-primary">Welcome to Home Page</h1>
       <div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
      <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://cdn.pixabay.com/photo/2020/10/27/10/27/sunrise-5690237__340.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
       </>
    )
}
