import React from "react"

// eslint-disable-next-line react/prop-types
const ImageGallery = ({ links }) => {
  const [images, setImages] = React.useState(links)
  const handleDelete = (imgLink) => {
    const newImageList = images.filter((link) => link !== imgLink)
    setImages(newImageList)
  }
  return (
    <div>
      {images.map((link, index) => {
        return (
          <div className="image" key={index}>
            <img src={link} />
            <button className="remove" onClick={() => handleDelete(link)}>
              X
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ImageGallery
