import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Badge
} from 'reactstrap';
//Single Movie Card
const MovieCard = ({ key, data, toggleData, activeClass, isActive, keyProp }) => {

    let { EventCode, EventTitle, EventLanguage, EventGenre, ShowDate } = data;
    const imgSrc = `https://in.bmscdn.com/events/moviecard/${EventCode}.jpg`;
    return (
        <Card key={keyProp} className={`movie__card ${isActive ? 'active-card' : ''}`} onClick={() => toggleData(activeClass, data)}>
            <CardImg top width="100%" src={imgSrc} />
            <CardBody>
                <CardTitle className="card__title">{EventTitle}</CardTitle>
                <div className="flex__space-between"><Badge color="info">{EventLanguage}</Badge>
                    <Badge color="dark">{EventGenre}</Badge></div>
                <CardText>
                    <small className="text-muted">Release Date :  {ShowDate}</small>
                </CardText>
            </CardBody>
        </Card>

    )
}

export default React.memo(MovieCard);
