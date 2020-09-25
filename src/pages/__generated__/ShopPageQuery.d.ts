/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ShopPageQuery
// ====================================================

export interface ShopPageQuery_allGumroadProductType_edges_node {
  id: string;
  image: string | null;
  name: string | null;
  url: string | null;
}

export interface ShopPageQuery_allGumroadProductType_edges {
  node: ShopPageQuery_allGumroadProductType_edges_node;
}

export interface ShopPageQuery_allGumroadProductType {
  edges: ShopPageQuery_allGumroadProductType_edges[];
}

export interface ShopPageQuery {
  allGumroadProductType: ShopPageQuery_allGumroadProductType;
}
