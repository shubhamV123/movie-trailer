import React, { useState } from 'react'
import MovieCard from './MovieCard';
import { Row, Col } from 'reactstrap';
import TrailerView from './TrailerView';
const MovieCards = ({ movies }) => {
    const [selectedData, setData] = useState({ selectedRow: null, data: null })
    const toggleData = (active, data) => {
        setData({ selectedRow: active, data })
    }
    const { selectedRow, data } = selectedData;
    const CreateMovieRow = () => {
        let totalMovies = movies.length;
        const rows = [];
        for (let i = 0; i < Math.ceil(totalMovies / 4); i++) {
            let RowSequence = (<>
                <TrailerView view={selectedRow === `row-${i}`} data={data} />
                <Row md="3" className={`row-${i}`}>
                    {movies.map((movie, index) => <Col md="3" className="mt-2 mb-2">
                        <MovieCard key={movie.EventCode}
                            data={movie}
                            toggleData={toggleData}
                            index={index}
                            activeClass={`row-${i}`}
                        />
                    </Col>).slice(i * 4, i * 4 + 4)}

                </Row>
            </>)
            rows.push(RowSequence)
        }
        return rows;
        // 
    }
    return (
        <div>
            {CreateMovieRow()}

        </div>
    )

}

export default MovieCards;
