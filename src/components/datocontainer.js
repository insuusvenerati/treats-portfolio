import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ImgModal from "../components/imgmodal"
import Masonry from "react-masonry-component"

const DatoContainer = () => {
  const data = useStaticQuery(graphql`
    query DatoContainerQuery {
      allDatoCmsWork {
        edges {
          node {
            id
            coverImage {
              fluid(maxWidth: 450) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
    }
  `)

  const [edges] = useState(data.allDatoCmsWork.edges)
  const [isOpen, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  return (
    <>
      {edges ? (
        <Masonry className="showcase">
          {edges.map(({ node: work }) => {
            return (
              <div key={work.id} className="showcase__item">
                <figure
                  onClick={() => {
                    setSelectedImage(work.id)
                    setOpen(!isOpen)
                    console.log(selectedImage)
                  }}
                  className="card"
                >
                  {work.coverImage.fluid ? (
                    <Img fluid={work.coverImage.fluid} />
                  ) : (
                    <h1>No Image</h1>
                  )}
                </figure>
              </div>
            )
          })}
        </Masonry>
      ) : (
        <button onClick={() => console.log(edges)}>Debug Data</button>
      )}
      {isOpen && (
        <ImgModal
          img={edges.coverImage.fluid}
          setOpen={() => setOpen(!isOpen)}
        />
      )}
    </>
  )
}

export default DatoContainer
