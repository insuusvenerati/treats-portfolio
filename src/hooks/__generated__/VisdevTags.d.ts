/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VisdevTags
// ====================================================

export interface VisdevTags_desktopVisdevImage_edges_node_fixed {
  base64: string | null;
  width: number;
  height: number;
  aspectRatio: number | null;
  src: string;
  srcSet: string;
}

export interface VisdevTags_desktopVisdevImage_edges_node_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface VisdevTags_desktopVisdevImage_edges_node {
  id: string;
  fixed: VisdevTags_desktopVisdevImage_edges_node_fixed | null;
  fluid: VisdevTags_desktopVisdevImage_edges_node_fluid | null;
}

export interface VisdevTags_desktopVisdevImage_edges {
  node: VisdevTags_desktopVisdevImage_edges_node;
}

export interface VisdevTags_desktopVisdevImage {
  edges: VisdevTags_desktopVisdevImage_edges[];
}

export interface VisdevTags_mobileVisdevImage_edges_node_fixed {
  base64: string | null;
  width: number;
  height: number;
  aspectRatio: number | null;
  src: string;
  srcSet: string;
}

export interface VisdevTags_mobileVisdevImage_edges_node_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface VisdevTags_mobileVisdevImage_edges_node {
  id: string;
  fixed: VisdevTags_mobileVisdevImage_edges_node_fixed | null;
  fluid: VisdevTags_mobileVisdevImage_edges_node_fluid | null;
}

export interface VisdevTags_mobileVisdevImage_edges {
  node: VisdevTags_mobileVisdevImage_edges_node;
}

export interface VisdevTags_mobileVisdevImage {
  edges: VisdevTags_mobileVisdevImage_edges[];
}

export interface VisdevTags {
  desktopVisdevImage: VisdevTags_desktopVisdevImage;
  mobileVisdevImage: VisdevTags_mobileVisdevImage;
}
