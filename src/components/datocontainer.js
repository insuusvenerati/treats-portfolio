import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DatoContainer = ({ children }) => {
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
  const edges = data.allDatoCmsWork.edges
  return (
    <div images={edges}>
      {children} {console.log(edges)}{" "}
    </div>
  )
}

export default DatoContainer
