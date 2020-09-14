import React from "react";
import Modal from 'react-bootstrap/Modal';

const TopMoviesModal = ({ currentMovies }) => {

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );


    // const renderMovies = () => {
    //     if (Object.keys(currentMovies).length && currentMovies.length) {
    //         return (
    //             <div className="movies-labels-container">
    //                 {currentMovies.map((movie) => {
    //                     return (
    //                         <div className="movie-label" key={movie.id.attributes['im:id']}  title={movie['im:name']['label']} >
    //                             <a className="item-link" href={movie.link[0].attributes.href} target="_blank" rel="noopener noreferrer">
    //                                 <img className="movie-img" src={movie['im:image'][2]['label']} alt={movie['im:name']['label']} />
    //                             </a>
    //                             <br />
    //                             <div className="text-under">
    //                             <span id="movie-title">{movie['im:name']['label']}</span>
    //                             <br />
    //                             <span id="movie-subtitle">{movie.category.attributes.term}</span>
    //                             </div>
    //                         </div>
    //                     );
    //                 })}
    //             </div>
    //         );
    //     }
    // };

    // return (
    //     <section className="top-movies-list">
    //         <div className="container-outter">
    //             <div className="container-fluid">
    //                 <div className="row">
    //                     <div className="col-lg-12 col-md-12 col-sm-12" id="top-movies-module">
    //                         <div className="top-movies-container">
    //                             <h1 className="container-title">
    //                                 TOP 100 movies
    //                             </h1>
    //                             {renderMovies()}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section >
    // )
}


export default TopMoviesModal;
