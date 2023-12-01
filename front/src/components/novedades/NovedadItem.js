import React from 'react';

const NovedadItem = (props) => {
    const { titulo, valoracion, imagen, body  } = props;

    return (
        <div className="novedades">
            <h1>{titulo}</h1>
            <h2>{valoracion}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{__html: body}} />
            <hr />
        </div>
    );
}

export default NovedadItem;