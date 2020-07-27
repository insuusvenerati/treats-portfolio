/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutQuery
// ====================================================

export interface AboutQuery_about_seoMetaTags {
  tags: any | null;
}

export interface AboutQuery_about_photo_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface AboutQuery_about_photo {
  fluid: AboutQuery_about_photo_fluid | null;
}

export interface AboutQuery_about_bioNode_childMarkdownRemark {
  html: string | null;
}

export interface AboutQuery_about_bioNode {
  childMarkdownRemark: AboutQuery_about_bioNode_childMarkdownRemark | null;
}

export interface AboutQuery_about {
  seoMetaTags: AboutQuery_about_seoMetaTags | null;
  title: string | null;
  subtitle: string | null;
  photo: AboutQuery_about_photo | null;
  bioNode: AboutQuery_about_bioNode | null;
}

export interface AboutQuery {
  about: AboutQuery_about | null;
}
