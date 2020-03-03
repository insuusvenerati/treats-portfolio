import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"

export const ImgModal = ({ data }) => {
  const [isOpen, setOpen] = useState(false)
  {
    data.allDatoCmsWork.edges.map(({ node: img }) => {
      return (
        <ModalGateway>
          {isOpen ? (
            <Modal>
              <Carousel views={img} />
            </Modal>
          ) : null}
        </ModalGateway>
      )
    })
  }
}

export const query = graphql`
  query ImageQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          coverImage {
            fixed(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`
