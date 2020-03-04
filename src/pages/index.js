import React from "react"
// import { graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"
// import ImgModal from "../components/imgmodal"
import DatoContainer from "../components/datocontainer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <DatoContainer images={data}>
        {data ? (
          <Masonry className="showcase">
            {data.map(({ node: work }) => {
              return (
                <div key={work.id} className="showcase__item">
                  <figure
                    // onClick={() => setOpen(!isOpen)}
                    onClick={() => console.log(work)}
                    className="card"
                  >
                    <Img fluid={work.coverImage.fluid} />
                  </figure>
                </div>
              )
            })}
          </Masonry>
        ) : (
          <button onClick={() => console.log(data)}>Debug Data</button>
        )}

        {/* {isOpen && (
          <ImgModal
            img={data.node.coverImage.fixed}
            setOpen={() => setOpen(!isOpen)}
          />
        )} */}
      </DatoContainer>
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
//   query DatoContainerQuery {
//     allDatoCmsWork(sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           id
//           coverImage {
//             fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//               ...GatsbyDatoCmsSizes
//             }
//             url
//             fixed(width: 800) {
//               ...GatsbyDatoCmsFixed
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `
