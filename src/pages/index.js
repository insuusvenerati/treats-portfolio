import React, { useState } from "react"
import { graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const ImgModal = ({ img }) => {
  return (
    <SRLWrapper>
      <Img fixed={img} />
    </SRLWrapper>
  )
}

const IndexPage = ({ data }) => {
  const [isOpen, setOpen] = useState(false)
  const [stuff] = useState(data.allDatoCmsWork.edges)
  return (
    <SimpleReactLightbox>
      <Layout>
        <Masonry className="showcase">
          {stuff.map(({ node: work }) => {
            return (
              <div key={work.id} className="showcase__item">
                <figure
                  onClick={() => setOpen(!isOpen)}
                  // onClick={() => console.log(work)}
                  className="card"
                >
                  <Img fluid={work.coverImage.fluid} />
                </figure>
              </div>
            )
          })}
        </Masonry>
        <button onClick={() => console.log(stuff)}>Debug</button>
        {isOpen && (
          <ImgModal
            img={stuff[0].node.coverImage.fixed}
            setOpen={() => setOpen(!isOpen)}
          />
        )}
      </Layout>
    </SimpleReactLightbox>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            url
            fixed(width: 800) {
              ...GatsbyDatoCmsFixed
              src
            }
          }
        }
      }
    }
  }
`
