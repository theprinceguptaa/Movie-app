import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container' key={index}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className='movie-title'>{movie.Title}</div>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay'
                    >
                        <props.favouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
