import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let cardStyle = {
    width: "290px",
    maxWidth: "100 %"
}
const MovieCard = ({ key, data, toggleData, activeClass }) => {
    let { EventCode } = data;
    const imgSrc = `https://in.bmscdn.com/events/moviecard/${EventCode}.jpg`;
    return (
        <Card key={key} onClick={() => toggleData(activeClass, data)}>
            <CardImg top width="100%" src={imgSrc} />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
}

export default React.memo(MovieCard);
