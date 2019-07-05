import React from 'react'
import { Row, Col, Card, CardTitle, CardText, Badge } from 'reactstrap';
import ReactPlayer from 'react-player';
//Trailer View
const TrailerView = ({ data, view, id }) => {
    if (!view) return null;
    let { TrailerURL, EventTitle, wtsPerc, wtsCount, EventLanguage, EventGenre, ShowDate } = data;
    return (
        <Row className={"test"} id={id} >
            <Col lg="7" md="6" className="pb-2">
                <div className='player-wrapper'>
                    <ReactPlayer className='react-player'

                        controls={true}
                        url={TrailerURL} playing={false} width="100%" height="100%" />
                </div>
            </Col>
            <Col lg="5" md="6" >

                <Card body outline color="danger">
                    <CardTitle><strong>{EventTitle}</strong></CardTitle>
                    <CardText><i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        <span className="ml-2">{wtsPerc}% ({wtsCount} votes)</span>


                    </CardText>
                    <CardText>
                        <span className="flex__space-between"><Badge color="info">{EventLanguage}</Badge>
                            <Badge color="dark">{EventGenre}</Badge></span>
                    </CardText>
                    <CardText>
                        <small className="text-muted">Release Date :  {ShowDate}</small>
                    </CardText>

                </Card>
            </Col>
        </Row>
    )
}

export default TrailerView
