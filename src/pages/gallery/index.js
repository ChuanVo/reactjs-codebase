import React from 'react'
import './style.css'
import ImageCell from '../../components/image-cell'

function Gallery(props) {
  const data = props.data
  
  return (
    <div className="wrapper-gallery">
      {data.map((data) => {
        return <ImageCell data={data} key={data.id} />
      })}
    </div>
  );
}

export default Gallery