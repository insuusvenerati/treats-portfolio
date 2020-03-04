import React from "react"
import Img from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"

const ImgModal = ({ img }) => {
  return (
    <SRLWrapper>
      <Img fixed={img} />
    </SRLWrapper>
  )
}

export default ImgModal
