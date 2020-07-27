/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BGTags
// ====================================================

export interface BGTags_desktopBgImage_edges_node_fixed {
  base64: string | null;
  width: number;
  height: number;
  aspectRatio: number | null;
  src: string;
  srcSet: string;
}

export interface BGTags_desktopBgImage_edges_node_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface BGTags_desktopBgImage_edges_node {
  id: string;
  fixed: BGTags_desktopBgImage_edges_node_fixed | null;
  fluid: BGTags_desktopBgImage_edges_node_fluid | null;
}

export interface BGTags_desktopBgImage_edges {
  node: BGTags_desktopBgImage_edges_node;
}

export interface BGTags_desktopBgImage {
  edges: BGTags_desktopBgImage_edges[];
}

export interface BGTags_mobileBgImage_edges_node_fixed {
  base64: string | null;
  width: number;
  height: number;
  aspectRatio: number | null;
  src: string;
  srcSet: string;
}

export interface BGTags_mobileBgImage_edges_node_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface BGTags_mobileBgImage_edges_node {
  id: string;
  fixed: BGTags_mobileBgImage_edges_node_fixed | null;
  fluid: BGTags_mobileBgImage_edges_node_fluid | null;
}

export interface BGTags_mobileBgImage_edges {
  node: BGTags_mobileBgImage_edges_node;
}

export interface BGTags_mobileBgImage {
  edges: BGTags_mobileBgImage_edges[];
}

export interface BGTags {
  desktopBgImage: BGTags_desktopBgImage;
  mobileBgImage: BGTags_mobileBgImage;
}
