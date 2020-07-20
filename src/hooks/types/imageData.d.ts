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

export type ImageData = {
  allDatoCmsAsset: {
    edges: Array<DatoCmsAssetNodes>;
  };
};
