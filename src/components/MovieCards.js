import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import { Row, Col } from 'reactstrap';
import TrailerView from './TrailerView';
// Generate Movie Card
const MovieCards = ({ movies, activeColCount }) => {
    const [selectedData, setData] = useState({ selectedRow: null, data: null });
    const { selectedRow, data } = selectedData;
    // Open trailer
    const toggleData = (active, data) => {
        setData({ selectedRow: active, data });

    }
    //Scroll tp trailer view
    useEffect(() => {
        if (data && data.EventCode) {
            var elmnt = document.getElementById(data.EventCode);
            elmnt.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [selectedRow, data])
    // Generate dynamic row as per device
    const CreateMovieRow = () => {
        let totalMovies = movies.length;
        const rows = [];
        for (let i = 0; i < Math.ceil(totalMovies / activeColCount); i++) {
            let RowSequence = (<div key={`row-${i}`}>
                <TrailerView view={selectedRow === `row-${i}`} id={data && data['EventCode']} data={data} />
                <Row className={`row-${i}`}  >
                    {movies.map((movie, index) => <Col md="4" key={movie.EventCode} lg="3" sm="6" xs="12" className="mt-2 mb-2">
                        <MovieCard keyProp={movie.EventGroup}
                            data={movie}
                            toggleData={toggleData}
                            index={index}
                            isActive={`row-${i}` === selectedRow && movie.EventCode === data.EventCode}
                            activeClass={`row-${i}`}
                        />
                    </Col>).slice(i * activeColCount, i * activeColCount + activeColCount)}

                </Row>
            </div >)
            rows.push(RowSequence)
        }
        return rows;
    }
    return (
        <div>
            {CreateMovieRow()}
        </div>
    )

}

export default React.memo(MovieCards);
