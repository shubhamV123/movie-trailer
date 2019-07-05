import React from 'react'
import { Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'
const TrailerView = ({ data, view }) => {
    if (!view) return null;
    let { TrailerURL } = data;
    return (
        <Row>
            <Col md="8"><ReactPlayer url={TrailerURL} playing={false} /></Col>
            <Col md="4"></Col>
        </Row>
    )
}

export default TrailerView
