import { DatoCmsAssetNodes } from './imageData';

type DatoCmsSocialProfileNodes = {
  node: {
    profileType: string;
    url: string;
  };
};

export type LayoutData = {
  datoCmsSite: {
    globalSeo: {
      siteName: string;
    };
    faviconMetaTags: {
      tags: JSON;
    };
  };
  datoCmsHome: {
    seoMetaTags: {
      tags: JSON;
    };
    introTextNode: {
      childMarkdownRemark: {
        html: string;
      };
    };
    copyright: string;
  };
  allDatoCmsSocialProfile: {
    edges: DatoCmsSocialProfileNodes[];
  };
  allDatoCmsAsset: {
    nodes: Array<DatoCmsAssetNodes>;
  };
};
