import { FixedObject, FluidObject } from 'gatsby-image';

export type DatoCmsAssetNodes = {
  fixed: {
    src: string;
  };
  node: {
    id: number;
    fixed: FixedObject;
    fluid: FluidObject;
  };
};

export type BgImageData = {
  desktopBgImage: {
    edges: Array<DatoCmsAssetNodes>;
  };
  mobileBgImage: {
    edges: Array<DatoCmsAssetNodes>;
  };
};
export type VisDevImageData = {
  allDatoCmsAsset: {
    edges: Array<DatoCmsAssetNodes>;
  };
};
