/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = Node & {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly social: Maybe<ReadonlyArray<Maybe<Social>>>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ThemeUiConfig = Node & {
  readonly preset: Maybe<Scalars['JSON']>;
  readonly prismPreset: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Social = {
  readonly url: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type DatoCmsFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly sizes: Maybe<Scalars['String']>;
};

type DatoCmsFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly sizes: Scalars['String'];
};

type DatoCmsImgixParams = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image (https://docs.imgix.com/apis/url/size/ar) */
  readonly ar: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  readonly auto: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. (https://docs.imgix.com/apis/url/bg) */
  readonly bg: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/blend-align) */
  readonly blendAlign: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/blend-alpha) */
  readonly blendAlpha: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. (https://docs.imgix.com/apis/url/blending/blend-color) */
  readonly blendColor: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/blend-crop) */
  readonly blendCrop: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/blend-fit) */
  readonly blendFit: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/blend-h) */
  readonly blendH: Maybe<Scalars['String']>;
  /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/blend-mode) */
  readonly blendMode: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/blend-pad) */
  readonly blendPad: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/blend-size) */
  readonly blendSize: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/blend-w) */
  readonly blendW: Maybe<Scalars['String']>;
  /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-x) */
  readonly blendX: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-y) */
  readonly blendY: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  readonly blend: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  readonly blur: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-bottom) */
  readonly borderBottom: Maybe<Scalars['Int']>;
  /** Sets left border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-left) */
  readonly borderLeft: Maybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */
  readonly borderRadiusInner: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  readonly borderRadius: Maybe<Scalars['String']>;
  /** Sets right border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-right) */
  readonly borderRight: Maybe<Scalars['Int']>;
  /** Sets top border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-top) */
  readonly borderTop: Maybe<Scalars['Int']>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  readonly border: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */
  readonly bri: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */
  readonly ch: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */
  readonly chromasub: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */
  readonly colorquant: Maybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. (https://docs.imgix.com/apis/url/color-palette/colors) */
  readonly colors: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */
  readonly con: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */
  readonly cornerRadius: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */
  readonly crop: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */
  readonly cs: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */
  readonly dl: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */
  readonly dpi: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */
  readonly dpr: Maybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. (https://docs.imgix.com/apis/url/stylize/duotone-alpha) */
  readonly duotoneAlpha: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. (https://docs.imgix.com/apis/url/stylize/duotone) */
  readonly duotone: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */
  readonly exp: Maybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. (https://docs.imgix.com/apis/url/expires) */
  readonly expires: Maybe<Scalars['String']>;
  /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */
  readonly faceindex: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */
  readonly facepad: Maybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces) */
  readonly faces: Maybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill-color) */
  readonly fillColor: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill) */
  readonly fill: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */
  readonly fit: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */
  readonly flip: Maybe<Scalars['String']>;
  /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */
  readonly fm: Maybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug) */
  readonly fpDebug: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */
  readonly fpX: Maybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */
  readonly fpY: Maybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */
  readonly fpZ: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  readonly gam: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. (undefined) */
  readonly gridColors: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. (undefined) */
  readonly gridSize: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */
  readonly h: Maybe<Scalars['String']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */
  readonly high: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */
  readonly htn: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */
  readonly hue: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  readonly invert: Maybe<Scalars['Boolean']>;
  /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */
  readonly lossless: Maybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/mark-align) */
  readonly markAlign: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-alpha) */
  readonly markAlpha: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-base) */
  readonly markBase: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/mark-fit) */
  readonly markFit: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-h) */
  readonly markH: Maybe<Scalars['String']>;
  /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-pad) */
  readonly markPad: Maybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. (https://docs.imgix.com/apis/url/watermark/mark-rot) */
  readonly markRot: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-scale) */
  readonly markScale: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. (https://docs.imgix.com/apis/url/watermark/mark-tile) */
  readonly markTile: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-w) */
  readonly markW: Maybe<Scalars['String']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-x) */
  readonly markX: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-y) */
  readonly markY: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  readonly mark: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  readonly maskBg: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  readonly mask: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-height) */
  readonly maxH: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-width) */
  readonly maxW: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-height) */
  readonly minH: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-width) */
  readonly minW: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/monochrome) */
  readonly monochrome: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */
  readonly nr: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */
  readonly nrs: Maybe<Scalars['Int']>;
  /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/orient) */
  readonly orient: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-bottom) */
  readonly padBottom: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-left) */
  readonly padLeft: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-right) */
  readonly padRight: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-top) */
  readonly padTop: Maybe<Scalars['Int']>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  readonly pad: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf/page) */
  readonly page: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */
  readonly palette: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. (https://docs.imgix.com/apis/url/pdf/pdf-annotation) */
  readonly pdfAnnotation: Maybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */
  readonly prefix: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */
  readonly px: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */
  readonly q: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */
  readonly rect: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */
  readonly rot: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */
  readonly sat: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */
  readonly sepia: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */
  readonly shad: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */
  readonly sharp: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. (https://docs.imgix.com/apis/url/fill/transparency) */
  readonly transparency: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-color) */
  readonly trimColor: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-md) */
  readonly trimMd: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. (https://docs.imgix.com/apis/url/trim/trim-pad) */
  readonly trimPad: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-sd) */
  readonly trimSd: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-tol) */
  readonly trimTol: Maybe<Scalars['Float']>;
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  readonly trim: Maybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. (https://docs.imgix.com/apis/url/text/txt-align) */
  readonly txtAlign: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txt-clip) */
  readonly txtClip: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txt-color) */
  readonly txtColor: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txt-fit) */
  readonly txtFit: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txt-font) */
  readonly txtFont: Maybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-lead) */
  readonly txtLead: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txt-lig) */
  readonly txtLig: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txt-line-color) */
  readonly txtLineColor: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txt-line) */
  readonly txtLine: Maybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. (https://docs.imgix.com/apis/url/text/txt-pad) */
  readonly txtPad: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txt-shad) */
  readonly txtShad: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txt-size) */
  readonly txtSize: Maybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-track) */
  readonly txtTrack: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txt-width) */
  readonly txtWidth: Maybe<Scalars['Int']>;
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  readonly txt: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  readonly usm: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  readonly usmrad: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  readonly vib: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  readonly w: Maybe<Scalars['String']>;
};

type DatoCmsColorField = {
  readonly red: Maybe<Scalars['Int']>;
  readonly green: Maybe<Scalars['Int']>;
  readonly blue: Maybe<Scalars['Int']>;
  readonly alpha: Maybe<Scalars['Int']>;
  readonly rgb: Maybe<Scalars['String']>;
  readonly hex: Maybe<Scalars['String']>;
};

type DatoCmsFileField = {
  readonly size: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly format: Maybe<Scalars['String']>;
  readonly isImage: Maybe<Scalars['Boolean']>;
  readonly notes: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly smartTags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly filename: Maybe<Scalars['String']>;
  readonly basename: Maybe<Scalars['String']>;
  readonly exifInfo: Maybe<Scalars['JSON']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly colors: Maybe<ReadonlyArray<Maybe<DatoCmsColorField>>>;
  readonly blurhash: Maybe<Scalars['String']>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly video: Maybe<DatoCmsAssetVideo>;
  readonly fluid: Maybe<DatoCmsFluid>;
  readonly sizes: Maybe<DatoCmsFluid>;
  readonly fixed: Maybe<DatoCmsFixed>;
  readonly resolutions: Maybe<DatoCmsFixed>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly alt: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly customData: Maybe<Scalars['JSON']>;
  readonly focalPoint: Maybe<DatoCmsFocalPoint>;
};


type DatoCmsFileField_urlArgs = {
  imgixParams: Maybe<DatoCmsImgixParams>;
};


type DatoCmsFileField_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type DatoCmsFileField_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
};


type DatoCmsFileField_sizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
};


type DatoCmsFileField_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
};


type DatoCmsFileField_resolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
};


type DatoCmsFileField_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  sizes: Maybe<Scalars['String']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
  placeholder: Maybe<DatoImagePlaceholder>;
};

type DatoImagePlaceholder =
  | 'NONE'
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED';

type DatoCmsFocalPoint = {
  readonly x: Scalars['Float'];
  readonly y: Scalars['Float'];
};

type DatoCmsLatLonField = {
  readonly latitude: Maybe<Scalars['Float']>;
  readonly longitude: Maybe<Scalars['Float']>;
};

type DatoCmsMetaField = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly firstPublishedAt: Maybe<Scalars['Date']>;
  readonly isValid: Maybe<Scalars['Boolean']>;
  readonly status: Maybe<Scalars['String']>;
};


type DatoCmsMetaField_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type DatoCmsMetaField_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type DatoCmsMetaField_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type DatoCmsMetaField_firstPublishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DatoCmsSeoField = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly twitterCard: Maybe<Scalars['String']>;
  readonly image: Maybe<DatoCmsAsset>;
};

type DatoCmsSeoMetaTags = Node & {
  readonly tags: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsVideoField = {
  readonly url: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly provider: Maybe<Scalars['String']>;
  readonly providerUid: Maybe<Scalars['String']>;
  readonly thumbnailUrl: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type DatoCmsTextNode = Node & {
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsHome = Node & {
  readonly introText: Maybe<Scalars['String']>;
  readonly introTextNode: Maybe<DatoCmsTextNode>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly seoSettings: Maybe<DatoCmsSeoField>;
  readonly gatsbypreview: Maybe<Scalars['JSON']>;
  readonly meta: Maybe<DatoCmsMetaField>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  readonly model: Maybe<DatoCmsModel>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsSocialProfile = Node & {
  readonly profileType: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly gatsbypreview: Maybe<Scalars['JSON']>;
  readonly icon: Maybe<DatoCmsFileField>;
  readonly position: Maybe<Scalars['Int']>;
  readonly meta: Maybe<DatoCmsMetaField>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  readonly model: Maybe<DatoCmsModel>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsAboutPage = Node & {
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly photo: Maybe<DatoCmsFileField>;
  readonly bio: Maybe<Scalars['String']>;
  readonly bioNode: Maybe<DatoCmsTextNode>;
  readonly seoSettings: Maybe<DatoCmsSeoField>;
  readonly gatsbypreview: Maybe<Scalars['JSON']>;
  readonly meta: Maybe<DatoCmsMetaField>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  readonly model: Maybe<DatoCmsModel>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsWork = Node & {
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly coverImage: Maybe<DatoCmsFileField>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptNode: Maybe<DatoCmsTextNode>;
  readonly gallery: Maybe<ReadonlyArray<Maybe<DatoCmsFileField>>>;
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionNode: Maybe<DatoCmsTextNode>;
  readonly seoSettings: Maybe<DatoCmsSeoField>;
  readonly gatsbypreview: Maybe<Scalars['JSON']>;
  readonly position: Maybe<Scalars['Int']>;
  readonly meta: Maybe<DatoCmsMetaField>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  readonly model: Maybe<DatoCmsModel>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsAsset = Node & {
  readonly size: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly format: Maybe<Scalars['String']>;
  readonly isImage: Maybe<Scalars['Boolean']>;
  readonly notes: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly smartTags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly filename: Maybe<Scalars['String']>;
  readonly basename: Maybe<Scalars['String']>;
  readonly exifInfo: Maybe<Scalars['JSON']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly colors: Maybe<ReadonlyArray<Maybe<DatoCmsColorField>>>;
  readonly blurhash: Maybe<Scalars['String']>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly video: Maybe<DatoCmsAssetVideo>;
  readonly fluid: Maybe<DatoCmsFluid>;
  readonly sizes: Maybe<DatoCmsFluid>;
  readonly fixed: Maybe<DatoCmsFixed>;
  readonly resolutions: Maybe<DatoCmsFixed>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type DatoCmsAsset_urlArgs = {
  imgixParams: Maybe<DatoCmsImgixParams>;
};


type DatoCmsAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type DatoCmsAsset_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
};


type DatoCmsAsset_sizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
};


type DatoCmsAsset_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
};


type DatoCmsAsset_resolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
};


type DatoCmsAsset_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  sizes: Maybe<Scalars['String']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<DatoCmsImgixParams>;
  forceBlurhash: Maybe<Scalars['Boolean']>;
  placeholder: Maybe<DatoImagePlaceholder>;
};

type DatoCmsAssetVideoThumbnailFormat =
  | 'jpg'
  | 'png'
  | 'gif';

type DatoCmsAssetVideoMp4ResolutionQuality =
  | 'low'
  | 'medium'
  | 'high';

type DatoCmsAssetVideo = {
  readonly muxPlaybackId: Maybe<Scalars['String']>;
  readonly frameRate: Maybe<Scalars['Int']>;
  readonly duration: Maybe<Scalars['Int']>;
  readonly streamingUrl: Maybe<Scalars['String']>;
  readonly thumbnailUrl: Maybe<Scalars['String']>;
  readonly mp4Url: Maybe<Scalars['String']>;
};


type DatoCmsAssetVideo_thumbnailUrlArgs = {
  format: Maybe<DatoCmsAssetVideoThumbnailFormat>;
};


type DatoCmsAssetVideo_mp4UrlArgs = {
  res: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  exactRes: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};

type DatoCmsSite = Node & {
  readonly name: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly locales: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly domain: Maybe<Scalars['String']>;
  readonly internalDomain: Maybe<Scalars['String']>;
  readonly noIndex: Maybe<Scalars['Boolean']>;
  readonly globalSeo: Maybe<DatoCmsGlobalSeo>;
  readonly faviconMetaTags: Maybe<DatoCmsFaviconMetaTags>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsFaviconMetaTags = Node & {
  readonly tags: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsGlobalSeo = {
  readonly siteName: Maybe<Scalars['String']>;
  readonly titleSuffix: Maybe<Scalars['String']>;
  readonly twitterAccount: Maybe<Scalars['String']>;
  readonly facebookPageUrl: Maybe<Scalars['String']>;
  readonly fallbackSeo: Maybe<DatoCmsSeoField>;
};

type DatoCmsField = Node & {
  readonly label: Maybe<Scalars['String']>;
  readonly fieldType: Maybe<Scalars['String']>;
  readonly apiKey: Maybe<Scalars['String']>;
  readonly localized: Maybe<Scalars['Boolean']>;
  readonly validators: Maybe<Scalars['JSON']>;
  readonly position: Maybe<Scalars['Int']>;
  readonly appeareance: Maybe<Scalars['JSON']>;
  readonly defaultValue: Maybe<Scalars['JSON']>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DatoCmsModel = Node & {
  readonly name: Maybe<Scalars['String']>;
  readonly singleton: Maybe<Scalars['Boolean']>;
  readonly sortable: Maybe<Scalars['Boolean']>;
  readonly apiKey: Maybe<Scalars['String']>;
  readonly orderingDirection: Maybe<Scalars['String']>;
  readonly tree: Maybe<Scalars['Boolean']>;
  readonly modularBlock: Maybe<Scalars['Boolean']>;
  readonly draftModeActive: Maybe<Scalars['Boolean']>;
  readonly allLocalesRequired: Maybe<Scalars['Boolean']>;
  readonly collectionAppeareance: Maybe<Scalars['String']>;
  readonly hasSingletonItem: Maybe<Scalars['Boolean']>;
  readonly originalId: Maybe<Scalars['String']>;
  readonly fields: Maybe<DatoCmsFaviconMetaTags>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteSiteMetadata: Maybe<SiteSiteMetadata>;
  readonly allSiteSiteMetadata: SiteSiteMetadataConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly themeUiConfig: Maybe<ThemeUiConfig>;
  readonly allThemeUiConfig: ThemeUiConfigConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly datoCmsSeoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  readonly allDatoCmsSeoMetaTags: DatoCmsSeoMetaTagsConnection;
  readonly datoCmsTextNode: Maybe<DatoCmsTextNode>;
  readonly allDatoCmsTextNode: DatoCmsTextNodeConnection;
  readonly datoCmsHome: Maybe<DatoCmsHome>;
  readonly allDatoCmsHome: DatoCmsHomeConnection;
  readonly datoCmsSocialProfile: Maybe<DatoCmsSocialProfile>;
  readonly allDatoCmsSocialProfile: DatoCmsSocialProfileConnection;
  readonly datoCmsAboutPage: Maybe<DatoCmsAboutPage>;
  readonly allDatoCmsAboutPage: DatoCmsAboutPageConnection;
  readonly datoCmsWork: Maybe<DatoCmsWork>;
  readonly allDatoCmsWork: DatoCmsWorkConnection;
  readonly datoCmsAsset: Maybe<DatoCmsAsset>;
  readonly allDatoCmsAsset: DatoCmsAssetConnection;
  readonly datoCmsSite: Maybe<DatoCmsSite>;
  readonly allDatoCmsSite: DatoCmsSiteConnection;
  readonly datoCmsFaviconMetaTags: Maybe<DatoCmsFaviconMetaTags>;
  readonly allDatoCmsFaviconMetaTags: DatoCmsFaviconMetaTagsConnection;
  readonly datoCmsField: Maybe<DatoCmsField>;
  readonly allDatoCmsField: DatoCmsFieldConnection;
  readonly datoCmsModel: Maybe<DatoCmsModel>;
  readonly allDatoCmsModel: DatoCmsModelConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteSiteMetadataArgs = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  social: Maybe<SocialFilterListInput>;
  siteUrl: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteSiteMetadataArgs = {
  filter: Maybe<SiteSiteMetadataFilterInput>;
  sort: Maybe<SiteSiteMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_themeUiConfigArgs = {
  preset: Maybe<JSONQueryOperatorInput>;
  prismPreset: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allThemeUiConfigArgs = {
  filter: Maybe<ThemeUiConfigFilterInput>;
  sort: Maybe<ThemeUiConfigSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsSeoMetaTagsArgs = {
  tags: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsSeoMetaTagsArgs = {
  filter: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  sort: Maybe<DatoCmsSeoMetaTagsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsTextNodeArgs = {
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsTextNodeArgs = {
  filter: Maybe<DatoCmsTextNodeFilterInput>;
  sort: Maybe<DatoCmsTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsHomeArgs = {
  introText: Maybe<StringQueryOperatorInput>;
  introTextNode: Maybe<DatoCmsTextNodeFilterInput>;
  copyright: Maybe<StringQueryOperatorInput>;
  seoSettings: Maybe<DatoCmsSeoFieldFilterInput>;
  gatsbypreview: Maybe<JSONQueryOperatorInput>;
  meta: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model: Maybe<DatoCmsModelFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsHomeArgs = {
  filter: Maybe<DatoCmsHomeFilterInput>;
  sort: Maybe<DatoCmsHomeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsSocialProfileArgs = {
  profileType: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  gatsbypreview: Maybe<JSONQueryOperatorInput>;
  icon: Maybe<DatoCmsFileFieldFilterInput>;
  position: Maybe<IntQueryOperatorInput>;
  meta: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model: Maybe<DatoCmsModelFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsSocialProfileArgs = {
  filter: Maybe<DatoCmsSocialProfileFilterInput>;
  sort: Maybe<DatoCmsSocialProfileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsAboutPageArgs = {
  title: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  photo: Maybe<DatoCmsFileFieldFilterInput>;
  bio: Maybe<StringQueryOperatorInput>;
  bioNode: Maybe<DatoCmsTextNodeFilterInput>;
  seoSettings: Maybe<DatoCmsSeoFieldFilterInput>;
  gatsbypreview: Maybe<JSONQueryOperatorInput>;
  meta: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model: Maybe<DatoCmsModelFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsAboutPageArgs = {
  filter: Maybe<DatoCmsAboutPageFilterInput>;
  sort: Maybe<DatoCmsAboutPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsWorkArgs = {
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  coverImage: Maybe<DatoCmsFileFieldFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  excerptNode: Maybe<DatoCmsTextNodeFilterInput>;
  gallery: Maybe<DatoCmsFileFieldFilterListInput>;
  description: Maybe<StringQueryOperatorInput>;
  descriptionNode: Maybe<DatoCmsTextNodeFilterInput>;
  seoSettings: Maybe<DatoCmsSeoFieldFilterInput>;
  gatsbypreview: Maybe<JSONQueryOperatorInput>;
  position: Maybe<IntQueryOperatorInput>;
  meta: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model: Maybe<DatoCmsModelFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsWorkArgs = {
  filter: Maybe<DatoCmsWorkFilterInput>;
  sort: Maybe<DatoCmsWorkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsAssetArgs = {
  size: Maybe<IntQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  format: Maybe<StringQueryOperatorInput>;
  isImage: Maybe<BooleanQueryOperatorInput>;
  notes: Maybe<StringQueryOperatorInput>;
  author: Maybe<StringQueryOperatorInput>;
  copyright: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  smartTags: Maybe<StringQueryOperatorInput>;
  filename: Maybe<StringQueryOperatorInput>;
  basename: Maybe<StringQueryOperatorInput>;
  exifInfo: Maybe<JSONQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  colors: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash: Maybe<StringQueryOperatorInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  video: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid: Maybe<DatoCmsFluidFilterInput>;
  sizes: Maybe<DatoCmsFluidFilterInput>;
  fixed: Maybe<DatoCmsFixedFilterInput>;
  resolutions: Maybe<DatoCmsFixedFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsAssetArgs = {
  filter: Maybe<DatoCmsAssetFilterInput>;
  sort: Maybe<DatoCmsAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsSiteArgs = {
  name: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  locales: Maybe<StringQueryOperatorInput>;
  domain: Maybe<StringQueryOperatorInput>;
  internalDomain: Maybe<StringQueryOperatorInput>;
  noIndex: Maybe<BooleanQueryOperatorInput>;
  globalSeo: Maybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsSiteArgs = {
  filter: Maybe<DatoCmsSiteFilterInput>;
  sort: Maybe<DatoCmsSiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsFaviconMetaTagsArgs = {
  tags: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsFaviconMetaTagsArgs = {
  filter: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  sort: Maybe<DatoCmsFaviconMetaTagsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsFieldArgs = {
  label: Maybe<StringQueryOperatorInput>;
  fieldType: Maybe<StringQueryOperatorInput>;
  apiKey: Maybe<StringQueryOperatorInput>;
  localized: Maybe<BooleanQueryOperatorInput>;
  validators: Maybe<JSONQueryOperatorInput>;
  position: Maybe<IntQueryOperatorInput>;
  appeareance: Maybe<JSONQueryOperatorInput>;
  defaultValue: Maybe<JSONQueryOperatorInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsFieldArgs = {
  filter: Maybe<DatoCmsFieldFilterInput>;
  sort: Maybe<DatoCmsFieldSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_datoCmsModelArgs = {
  name: Maybe<StringQueryOperatorInput>;
  singleton: Maybe<BooleanQueryOperatorInput>;
  sortable: Maybe<BooleanQueryOperatorInput>;
  apiKey: Maybe<StringQueryOperatorInput>;
  orderingDirection: Maybe<StringQueryOperatorInput>;
  tree: Maybe<BooleanQueryOperatorInput>;
  modularBlock: Maybe<BooleanQueryOperatorInput>;
  draftModeActive: Maybe<BooleanQueryOperatorInput>;
  allLocalesRequired: Maybe<BooleanQueryOperatorInput>;
  collectionAppeareance: Maybe<StringQueryOperatorInput>;
  hasSingletonItem: Maybe<BooleanQueryOperatorInput>;
  originalId: Maybe<StringQueryOperatorInput>;
  fields: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDatoCmsModelArgs = {
  filter: Maybe<DatoCmsModelFilterInput>;
  sort: Maybe<DatoCmsModelSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly social: Maybe<SocialFilterListInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SocialFilterListInput = {
  readonly elemMatch: Maybe<SocialFilterInput>;
};

type SocialFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.social'
  | 'siteMetadata.social.url'
  | 'siteMetadata.social.name'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.id'
  | 'siteMetadata.parent.id'
  | 'siteMetadata.parent.parent.id'
  | 'siteMetadata.parent.parent.children'
  | 'siteMetadata.parent.children'
  | 'siteMetadata.parent.children.id'
  | 'siteMetadata.parent.children.children'
  | 'siteMetadata.parent.internal.content'
  | 'siteMetadata.parent.internal.contentDigest'
  | 'siteMetadata.parent.internal.description'
  | 'siteMetadata.parent.internal.fieldOwners'
  | 'siteMetadata.parent.internal.ignoreType'
  | 'siteMetadata.parent.internal.mediaType'
  | 'siteMetadata.parent.internal.owner'
  | 'siteMetadata.parent.internal.type'
  | 'siteMetadata.children'
  | 'siteMetadata.children.id'
  | 'siteMetadata.children.parent.id'
  | 'siteMetadata.children.parent.children'
  | 'siteMetadata.children.children'
  | 'siteMetadata.children.children.id'
  | 'siteMetadata.children.children.children'
  | 'siteMetadata.children.internal.content'
  | 'siteMetadata.children.internal.contentDigest'
  | 'siteMetadata.children.internal.description'
  | 'siteMetadata.children.internal.fieldOwners'
  | 'siteMetadata.children.internal.ignoreType'
  | 'siteMetadata.children.internal.mediaType'
  | 'siteMetadata.children.internal.owner'
  | 'siteMetadata.children.internal.type'
  | 'siteMetadata.internal.content'
  | 'siteMetadata.internal.contentDigest'
  | 'siteMetadata.internal.description'
  | 'siteMetadata.internal.fieldOwners'
  | 'siteMetadata.internal.ignoreType'
  | 'siteMetadata.internal.mediaType'
  | 'siteMetadata.internal.owner'
  | 'siteMetadata.internal.type'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteSiteMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteSiteMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteSiteMetadataGroupConnection>;
};


type SiteSiteMetadataConnection_distinctArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataConnection_maxArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataConnection_minArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataConnection_sumArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteSiteMetadataFieldsEnum;
};

type SiteSiteMetadataEdge = {
  readonly next: Maybe<SiteSiteMetadata>;
  readonly node: SiteSiteMetadata;
  readonly previous: Maybe<SiteSiteMetadata>;
};

type SiteSiteMetadataFieldsEnum =
  | 'title'
  | 'description'
  | 'social'
  | 'social.url'
  | 'social.name'
  | 'siteUrl'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteSiteMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteSiteMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteSiteMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteSiteMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteSiteMetadataGroupConnection_distinctArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataGroupConnection_maxArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataGroupConnection_minArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataGroupConnection_sumArgs = {
  field: SiteSiteMetadataFieldsEnum;
};


type SiteSiteMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteSiteMetadataFieldsEnum;
};

type SiteSiteMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteSiteMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ThemeUiConfigConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ThemeUiConfigGroupConnection>;
};


type ThemeUiConfigConnection_distinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_maxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_minArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_sumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

type ThemeUiConfigEdge = {
  readonly next: Maybe<ThemeUiConfig>;
  readonly node: ThemeUiConfig;
  readonly previous: Maybe<ThemeUiConfig>;
};

type ThemeUiConfigFieldsEnum =
  | 'preset'
  | 'prismPreset'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ThemeUiConfigGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ThemeUiConfigGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ThemeUiConfigGroupConnection_distinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_maxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_minArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_sumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

type ThemeUiConfigFilterInput = {
  readonly preset: Maybe<JSONQueryOperatorInput>;
  readonly prismPreset: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ThemeUiConfigSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ThemeUiConfigFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsSeoMetaTagsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsSeoMetaTagsEdge>;
  readonly nodes: ReadonlyArray<DatoCmsSeoMetaTags>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsSeoMetaTagsGroupConnection>;
};


type DatoCmsSeoMetaTagsConnection_distinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsConnection_maxArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsConnection_minArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsConnection_sumArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

type DatoCmsSeoMetaTagsEdge = {
  readonly next: Maybe<DatoCmsSeoMetaTags>;
  readonly node: DatoCmsSeoMetaTags;
  readonly previous: Maybe<DatoCmsSeoMetaTags>;
};

type DatoCmsSeoMetaTagsFieldsEnum =
  | 'tags'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsSeoMetaTagsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsSeoMetaTagsEdge>;
  readonly nodes: ReadonlyArray<DatoCmsSeoMetaTags>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsSeoMetaTagsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsSeoMetaTagsGroupConnection_distinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsGroupConnection_maxArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsGroupConnection_minArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsGroupConnection_sumArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


type DatoCmsSeoMetaTagsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

type DatoCmsSeoMetaTagsFilterInput = {
  readonly tags: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsSeoMetaTagsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsSeoMetaTagsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type DatoCmsTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsTextNodeEdge>;
  readonly nodes: ReadonlyArray<DatoCmsTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsTextNodeGroupConnection>;
};


type DatoCmsTextNodeConnection_distinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeConnection_maxArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeConnection_minArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeConnection_sumArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

type DatoCmsTextNodeEdge = {
  readonly next: Maybe<DatoCmsTextNode>;
  readonly node: DatoCmsTextNode;
  readonly previous: Maybe<DatoCmsTextNode>;
};

type DatoCmsTextNodeFieldsEnum =
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsTextNodeEdge>;
  readonly nodes: ReadonlyArray<DatoCmsTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsTextNodeGroupConnection_distinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeGroupConnection_maxArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeGroupConnection_minArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeGroupConnection_sumArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


type DatoCmsTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

type DatoCmsTextNodeFilterInput = {
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsSeoFieldFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly twitterCard: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<DatoCmsAssetFilterInput>;
};

type DatoCmsAssetFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly format: Maybe<StringQueryOperatorInput>;
  readonly isImage: Maybe<BooleanQueryOperatorInput>;
  readonly notes: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly smartTags: Maybe<StringQueryOperatorInput>;
  readonly filename: Maybe<StringQueryOperatorInput>;
  readonly basename: Maybe<StringQueryOperatorInput>;
  readonly exifInfo: Maybe<JSONQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly colors: Maybe<DatoCmsColorFieldFilterListInput>;
  readonly blurhash: Maybe<StringQueryOperatorInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly video: Maybe<DatoCmsAssetVideoFilterInput>;
  readonly fluid: Maybe<DatoCmsFluidFilterInput>;
  readonly sizes: Maybe<DatoCmsFluidFilterInput>;
  readonly fixed: Maybe<DatoCmsFixedFilterInput>;
  readonly resolutions: Maybe<DatoCmsFixedFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsColorFieldFilterListInput = {
  readonly elemMatch: Maybe<DatoCmsColorFieldFilterInput>;
};

type DatoCmsColorFieldFilterInput = {
  readonly red: Maybe<IntQueryOperatorInput>;
  readonly green: Maybe<IntQueryOperatorInput>;
  readonly blue: Maybe<IntQueryOperatorInput>;
  readonly alpha: Maybe<IntQueryOperatorInput>;
  readonly rgb: Maybe<StringQueryOperatorInput>;
  readonly hex: Maybe<StringQueryOperatorInput>;
};

type DatoCmsAssetVideoFilterInput = {
  readonly muxPlaybackId: Maybe<StringQueryOperatorInput>;
  readonly frameRate: Maybe<IntQueryOperatorInput>;
  readonly duration: Maybe<IntQueryOperatorInput>;
  readonly streamingUrl: Maybe<StringQueryOperatorInput>;
  readonly thumbnailUrl: Maybe<StringQueryOperatorInput>;
  readonly mp4Url: Maybe<StringQueryOperatorInput>;
};

type DatoCmsFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type DatoCmsFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type DatoCmsMetaFieldFilterInput = {
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly firstPublishedAt: Maybe<DateQueryOperatorInput>;
  readonly isValid: Maybe<BooleanQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
};

type DatoCmsModelFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly singleton: Maybe<BooleanQueryOperatorInput>;
  readonly sortable: Maybe<BooleanQueryOperatorInput>;
  readonly apiKey: Maybe<StringQueryOperatorInput>;
  readonly orderingDirection: Maybe<StringQueryOperatorInput>;
  readonly tree: Maybe<BooleanQueryOperatorInput>;
  readonly modularBlock: Maybe<BooleanQueryOperatorInput>;
  readonly draftModeActive: Maybe<BooleanQueryOperatorInput>;
  readonly allLocalesRequired: Maybe<BooleanQueryOperatorInput>;
  readonly collectionAppeareance: Maybe<StringQueryOperatorInput>;
  readonly hasSingletonItem: Maybe<BooleanQueryOperatorInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsFaviconMetaTagsFilterInput = {
  readonly tags: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsHomeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsHomeEdge>;
  readonly nodes: ReadonlyArray<DatoCmsHome>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsHomeGroupConnection>;
};


type DatoCmsHomeConnection_distinctArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeConnection_maxArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeConnection_minArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeConnection_sumArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsHomeFieldsEnum;
};

type DatoCmsHomeEdge = {
  readonly next: Maybe<DatoCmsHome>;
  readonly node: DatoCmsHome;
  readonly previous: Maybe<DatoCmsHome>;
};

type DatoCmsHomeFieldsEnum =
  | 'introText'
  | 'introTextNode.childrenMarkdownRemark'
  | 'introTextNode.childrenMarkdownRemark.id'
  | 'introTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'introTextNode.childrenMarkdownRemark.excerpt'
  | 'introTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'introTextNode.childrenMarkdownRemark.html'
  | 'introTextNode.childrenMarkdownRemark.htmlAst'
  | 'introTextNode.childrenMarkdownRemark.excerptAst'
  | 'introTextNode.childrenMarkdownRemark.headings'
  | 'introTextNode.childrenMarkdownRemark.headings.id'
  | 'introTextNode.childrenMarkdownRemark.headings.value'
  | 'introTextNode.childrenMarkdownRemark.headings.depth'
  | 'introTextNode.childrenMarkdownRemark.timeToRead'
  | 'introTextNode.childrenMarkdownRemark.tableOfContents'
  | 'introTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'introTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'introTextNode.childrenMarkdownRemark.wordCount.words'
  | 'introTextNode.childrenMarkdownRemark.parent.id'
  | 'introTextNode.childrenMarkdownRemark.parent.children'
  | 'introTextNode.childrenMarkdownRemark.children'
  | 'introTextNode.childrenMarkdownRemark.children.id'
  | 'introTextNode.childrenMarkdownRemark.children.children'
  | 'introTextNode.childrenMarkdownRemark.internal.content'
  | 'introTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'introTextNode.childrenMarkdownRemark.internal.description'
  | 'introTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'introTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'introTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'introTextNode.childrenMarkdownRemark.internal.owner'
  | 'introTextNode.childrenMarkdownRemark.internal.type'
  | 'introTextNode.childMarkdownRemark.id'
  | 'introTextNode.childMarkdownRemark.frontmatter.title'
  | 'introTextNode.childMarkdownRemark.excerpt'
  | 'introTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'introTextNode.childMarkdownRemark.html'
  | 'introTextNode.childMarkdownRemark.htmlAst'
  | 'introTextNode.childMarkdownRemark.excerptAst'
  | 'introTextNode.childMarkdownRemark.headings'
  | 'introTextNode.childMarkdownRemark.headings.id'
  | 'introTextNode.childMarkdownRemark.headings.value'
  | 'introTextNode.childMarkdownRemark.headings.depth'
  | 'introTextNode.childMarkdownRemark.timeToRead'
  | 'introTextNode.childMarkdownRemark.tableOfContents'
  | 'introTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'introTextNode.childMarkdownRemark.wordCount.sentences'
  | 'introTextNode.childMarkdownRemark.wordCount.words'
  | 'introTextNode.childMarkdownRemark.parent.id'
  | 'introTextNode.childMarkdownRemark.parent.children'
  | 'introTextNode.childMarkdownRemark.children'
  | 'introTextNode.childMarkdownRemark.children.id'
  | 'introTextNode.childMarkdownRemark.children.children'
  | 'introTextNode.childMarkdownRemark.internal.content'
  | 'introTextNode.childMarkdownRemark.internal.contentDigest'
  | 'introTextNode.childMarkdownRemark.internal.description'
  | 'introTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'introTextNode.childMarkdownRemark.internal.ignoreType'
  | 'introTextNode.childMarkdownRemark.internal.mediaType'
  | 'introTextNode.childMarkdownRemark.internal.owner'
  | 'introTextNode.childMarkdownRemark.internal.type'
  | 'introTextNode.id'
  | 'introTextNode.parent.id'
  | 'introTextNode.parent.parent.id'
  | 'introTextNode.parent.parent.children'
  | 'introTextNode.parent.children'
  | 'introTextNode.parent.children.id'
  | 'introTextNode.parent.children.children'
  | 'introTextNode.parent.internal.content'
  | 'introTextNode.parent.internal.contentDigest'
  | 'introTextNode.parent.internal.description'
  | 'introTextNode.parent.internal.fieldOwners'
  | 'introTextNode.parent.internal.ignoreType'
  | 'introTextNode.parent.internal.mediaType'
  | 'introTextNode.parent.internal.owner'
  | 'introTextNode.parent.internal.type'
  | 'introTextNode.children'
  | 'introTextNode.children.id'
  | 'introTextNode.children.parent.id'
  | 'introTextNode.children.parent.children'
  | 'introTextNode.children.children'
  | 'introTextNode.children.children.id'
  | 'introTextNode.children.children.children'
  | 'introTextNode.children.internal.content'
  | 'introTextNode.children.internal.contentDigest'
  | 'introTextNode.children.internal.description'
  | 'introTextNode.children.internal.fieldOwners'
  | 'introTextNode.children.internal.ignoreType'
  | 'introTextNode.children.internal.mediaType'
  | 'introTextNode.children.internal.owner'
  | 'introTextNode.children.internal.type'
  | 'introTextNode.internal.content'
  | 'introTextNode.internal.contentDigest'
  | 'introTextNode.internal.description'
  | 'introTextNode.internal.fieldOwners'
  | 'introTextNode.internal.ignoreType'
  | 'introTextNode.internal.mediaType'
  | 'introTextNode.internal.owner'
  | 'introTextNode.internal.type'
  | 'copyright'
  | 'seoSettings.title'
  | 'seoSettings.description'
  | 'seoSettings.twitterCard'
  | 'seoSettings.image.size'
  | 'seoSettings.image.width'
  | 'seoSettings.image.height'
  | 'seoSettings.image.path'
  | 'seoSettings.image.format'
  | 'seoSettings.image.isImage'
  | 'seoSettings.image.notes'
  | 'seoSettings.image.author'
  | 'seoSettings.image.copyright'
  | 'seoSettings.image.tags'
  | 'seoSettings.image.smartTags'
  | 'seoSettings.image.filename'
  | 'seoSettings.image.basename'
  | 'seoSettings.image.exifInfo'
  | 'seoSettings.image.mimeType'
  | 'seoSettings.image.colors'
  | 'seoSettings.image.colors.red'
  | 'seoSettings.image.colors.green'
  | 'seoSettings.image.colors.blue'
  | 'seoSettings.image.colors.alpha'
  | 'seoSettings.image.colors.rgb'
  | 'seoSettings.image.colors.hex'
  | 'seoSettings.image.blurhash'
  | 'seoSettings.image.originalId'
  | 'seoSettings.image.url'
  | 'seoSettings.image.createdAt'
  | 'seoSettings.image.video.muxPlaybackId'
  | 'seoSettings.image.video.frameRate'
  | 'seoSettings.image.video.duration'
  | 'seoSettings.image.video.streamingUrl'
  | 'seoSettings.image.video.thumbnailUrl'
  | 'seoSettings.image.video.mp4Url'
  | 'seoSettings.image.fluid.base64'
  | 'seoSettings.image.fluid.tracedSVG'
  | 'seoSettings.image.fluid.aspectRatio'
  | 'seoSettings.image.fluid.width'
  | 'seoSettings.image.fluid.height'
  | 'seoSettings.image.fluid.src'
  | 'seoSettings.image.fluid.srcSet'
  | 'seoSettings.image.fluid.sizes'
  | 'seoSettings.image.sizes.base64'
  | 'seoSettings.image.sizes.tracedSVG'
  | 'seoSettings.image.sizes.aspectRatio'
  | 'seoSettings.image.sizes.width'
  | 'seoSettings.image.sizes.height'
  | 'seoSettings.image.sizes.src'
  | 'seoSettings.image.sizes.srcSet'
  | 'seoSettings.image.sizes.sizes'
  | 'seoSettings.image.fixed.base64'
  | 'seoSettings.image.fixed.tracedSVG'
  | 'seoSettings.image.fixed.aspectRatio'
  | 'seoSettings.image.fixed.width'
  | 'seoSettings.image.fixed.height'
  | 'seoSettings.image.fixed.src'
  | 'seoSettings.image.fixed.srcSet'
  | 'seoSettings.image.fixed.sizes'
  | 'seoSettings.image.resolutions.base64'
  | 'seoSettings.image.resolutions.tracedSVG'
  | 'seoSettings.image.resolutions.aspectRatio'
  | 'seoSettings.image.resolutions.width'
  | 'seoSettings.image.resolutions.height'
  | 'seoSettings.image.resolutions.src'
  | 'seoSettings.image.resolutions.srcSet'
  | 'seoSettings.image.resolutions.sizes'
  | 'seoSettings.image.gatsbyImageData'
  | 'seoSettings.image.id'
  | 'seoSettings.image.parent.id'
  | 'seoSettings.image.parent.children'
  | 'seoSettings.image.children'
  | 'seoSettings.image.children.id'
  | 'seoSettings.image.children.children'
  | 'seoSettings.image.internal.content'
  | 'seoSettings.image.internal.contentDigest'
  | 'seoSettings.image.internal.description'
  | 'seoSettings.image.internal.fieldOwners'
  | 'seoSettings.image.internal.ignoreType'
  | 'seoSettings.image.internal.mediaType'
  | 'seoSettings.image.internal.owner'
  | 'seoSettings.image.internal.type'
  | 'gatsbypreview'
  | 'meta.createdAt'
  | 'meta.updatedAt'
  | 'meta.publishedAt'
  | 'meta.firstPublishedAt'
  | 'meta.isValid'
  | 'meta.status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags.tags'
  | 'seoMetaTags.id'
  | 'seoMetaTags.parent.id'
  | 'seoMetaTags.parent.parent.id'
  | 'seoMetaTags.parent.parent.children'
  | 'seoMetaTags.parent.children'
  | 'seoMetaTags.parent.children.id'
  | 'seoMetaTags.parent.children.children'
  | 'seoMetaTags.parent.internal.content'
  | 'seoMetaTags.parent.internal.contentDigest'
  | 'seoMetaTags.parent.internal.description'
  | 'seoMetaTags.parent.internal.fieldOwners'
  | 'seoMetaTags.parent.internal.ignoreType'
  | 'seoMetaTags.parent.internal.mediaType'
  | 'seoMetaTags.parent.internal.owner'
  | 'seoMetaTags.parent.internal.type'
  | 'seoMetaTags.children'
  | 'seoMetaTags.children.id'
  | 'seoMetaTags.children.parent.id'
  | 'seoMetaTags.children.parent.children'
  | 'seoMetaTags.children.children'
  | 'seoMetaTags.children.children.id'
  | 'seoMetaTags.children.children.children'
  | 'seoMetaTags.children.internal.content'
  | 'seoMetaTags.children.internal.contentDigest'
  | 'seoMetaTags.children.internal.description'
  | 'seoMetaTags.children.internal.fieldOwners'
  | 'seoMetaTags.children.internal.ignoreType'
  | 'seoMetaTags.children.internal.mediaType'
  | 'seoMetaTags.children.internal.owner'
  | 'seoMetaTags.children.internal.type'
  | 'seoMetaTags.internal.content'
  | 'seoMetaTags.internal.contentDigest'
  | 'seoMetaTags.internal.description'
  | 'seoMetaTags.internal.fieldOwners'
  | 'seoMetaTags.internal.ignoreType'
  | 'seoMetaTags.internal.mediaType'
  | 'seoMetaTags.internal.owner'
  | 'seoMetaTags.internal.type'
  | 'model.name'
  | 'model.singleton'
  | 'model.sortable'
  | 'model.apiKey'
  | 'model.orderingDirection'
  | 'model.tree'
  | 'model.modularBlock'
  | 'model.draftModeActive'
  | 'model.allLocalesRequired'
  | 'model.collectionAppeareance'
  | 'model.hasSingletonItem'
  | 'model.originalId'
  | 'model.fields.tags'
  | 'model.fields.id'
  | 'model.fields.parent.id'
  | 'model.fields.parent.children'
  | 'model.fields.children'
  | 'model.fields.children.id'
  | 'model.fields.children.children'
  | 'model.fields.internal.content'
  | 'model.fields.internal.contentDigest'
  | 'model.fields.internal.description'
  | 'model.fields.internal.fieldOwners'
  | 'model.fields.internal.ignoreType'
  | 'model.fields.internal.mediaType'
  | 'model.fields.internal.owner'
  | 'model.fields.internal.type'
  | 'model.id'
  | 'model.parent.id'
  | 'model.parent.parent.id'
  | 'model.parent.parent.children'
  | 'model.parent.children'
  | 'model.parent.children.id'
  | 'model.parent.children.children'
  | 'model.parent.internal.content'
  | 'model.parent.internal.contentDigest'
  | 'model.parent.internal.description'
  | 'model.parent.internal.fieldOwners'
  | 'model.parent.internal.ignoreType'
  | 'model.parent.internal.mediaType'
  | 'model.parent.internal.owner'
  | 'model.parent.internal.type'
  | 'model.children'
  | 'model.children.id'
  | 'model.children.parent.id'
  | 'model.children.parent.children'
  | 'model.children.children'
  | 'model.children.children.id'
  | 'model.children.children.children'
  | 'model.children.internal.content'
  | 'model.children.internal.contentDigest'
  | 'model.children.internal.description'
  | 'model.children.internal.fieldOwners'
  | 'model.children.internal.ignoreType'
  | 'model.children.internal.mediaType'
  | 'model.children.internal.owner'
  | 'model.children.internal.type'
  | 'model.internal.content'
  | 'model.internal.contentDigest'
  | 'model.internal.description'
  | 'model.internal.fieldOwners'
  | 'model.internal.ignoreType'
  | 'model.internal.mediaType'
  | 'model.internal.owner'
  | 'model.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsHomeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsHomeEdge>;
  readonly nodes: ReadonlyArray<DatoCmsHome>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsHomeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsHomeGroupConnection_distinctArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeGroupConnection_maxArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeGroupConnection_minArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeGroupConnection_sumArgs = {
  field: DatoCmsHomeFieldsEnum;
};


type DatoCmsHomeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsHomeFieldsEnum;
};

type DatoCmsHomeFilterInput = {
  readonly introText: Maybe<StringQueryOperatorInput>;
  readonly introTextNode: Maybe<DatoCmsTextNodeFilterInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly seoSettings: Maybe<DatoCmsSeoFieldFilterInput>;
  readonly gatsbypreview: Maybe<JSONQueryOperatorInput>;
  readonly meta: Maybe<DatoCmsMetaFieldFilterInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  readonly model: Maybe<DatoCmsModelFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsHomeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsHomeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsFileFieldFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly format: Maybe<StringQueryOperatorInput>;
  readonly isImage: Maybe<BooleanQueryOperatorInput>;
  readonly notes: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly smartTags: Maybe<StringQueryOperatorInput>;
  readonly filename: Maybe<StringQueryOperatorInput>;
  readonly basename: Maybe<StringQueryOperatorInput>;
  readonly exifInfo: Maybe<JSONQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly colors: Maybe<DatoCmsColorFieldFilterListInput>;
  readonly blurhash: Maybe<StringQueryOperatorInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly video: Maybe<DatoCmsAssetVideoFilterInput>;
  readonly fluid: Maybe<DatoCmsFluidFilterInput>;
  readonly sizes: Maybe<DatoCmsFluidFilterInput>;
  readonly fixed: Maybe<DatoCmsFixedFilterInput>;
  readonly resolutions: Maybe<DatoCmsFixedFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly customData: Maybe<JSONQueryOperatorInput>;
  readonly focalPoint: Maybe<DatoCmsFocalPointFilterInput>;
};

type DatoCmsFocalPointFilterInput = {
  readonly x: Maybe<FloatQueryOperatorInput>;
  readonly y: Maybe<FloatQueryOperatorInput>;
};

type DatoCmsSocialProfileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsSocialProfileEdge>;
  readonly nodes: ReadonlyArray<DatoCmsSocialProfile>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsSocialProfileGroupConnection>;
};


type DatoCmsSocialProfileConnection_distinctArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileConnection_maxArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileConnection_minArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileConnection_sumArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsSocialProfileFieldsEnum;
};

type DatoCmsSocialProfileEdge = {
  readonly next: Maybe<DatoCmsSocialProfile>;
  readonly node: DatoCmsSocialProfile;
  readonly previous: Maybe<DatoCmsSocialProfile>;
};

type DatoCmsSocialProfileFieldsEnum =
  | 'profileType'
  | 'url'
  | 'slug'
  | 'gatsbypreview'
  | 'icon.size'
  | 'icon.width'
  | 'icon.height'
  | 'icon.path'
  | 'icon.format'
  | 'icon.isImage'
  | 'icon.notes'
  | 'icon.author'
  | 'icon.copyright'
  | 'icon.tags'
  | 'icon.smartTags'
  | 'icon.filename'
  | 'icon.basename'
  | 'icon.exifInfo'
  | 'icon.mimeType'
  | 'icon.colors'
  | 'icon.colors.red'
  | 'icon.colors.green'
  | 'icon.colors.blue'
  | 'icon.colors.alpha'
  | 'icon.colors.rgb'
  | 'icon.colors.hex'
  | 'icon.blurhash'
  | 'icon.originalId'
  | 'icon.url'
  | 'icon.createdAt'
  | 'icon.video.muxPlaybackId'
  | 'icon.video.frameRate'
  | 'icon.video.duration'
  | 'icon.video.streamingUrl'
  | 'icon.video.thumbnailUrl'
  | 'icon.video.mp4Url'
  | 'icon.fluid.base64'
  | 'icon.fluid.tracedSVG'
  | 'icon.fluid.aspectRatio'
  | 'icon.fluid.width'
  | 'icon.fluid.height'
  | 'icon.fluid.src'
  | 'icon.fluid.srcSet'
  | 'icon.fluid.sizes'
  | 'icon.sizes.base64'
  | 'icon.sizes.tracedSVG'
  | 'icon.sizes.aspectRatio'
  | 'icon.sizes.width'
  | 'icon.sizes.height'
  | 'icon.sizes.src'
  | 'icon.sizes.srcSet'
  | 'icon.sizes.sizes'
  | 'icon.fixed.base64'
  | 'icon.fixed.tracedSVG'
  | 'icon.fixed.aspectRatio'
  | 'icon.fixed.width'
  | 'icon.fixed.height'
  | 'icon.fixed.src'
  | 'icon.fixed.srcSet'
  | 'icon.fixed.sizes'
  | 'icon.resolutions.base64'
  | 'icon.resolutions.tracedSVG'
  | 'icon.resolutions.aspectRatio'
  | 'icon.resolutions.width'
  | 'icon.resolutions.height'
  | 'icon.resolutions.src'
  | 'icon.resolutions.srcSet'
  | 'icon.resolutions.sizes'
  | 'icon.gatsbyImageData'
  | 'icon.alt'
  | 'icon.title'
  | 'icon.customData'
  | 'icon.focalPoint.x'
  | 'icon.focalPoint.y'
  | 'position'
  | 'meta.createdAt'
  | 'meta.updatedAt'
  | 'meta.publishedAt'
  | 'meta.firstPublishedAt'
  | 'meta.isValid'
  | 'meta.status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags.tags'
  | 'seoMetaTags.id'
  | 'seoMetaTags.parent.id'
  | 'seoMetaTags.parent.parent.id'
  | 'seoMetaTags.parent.parent.children'
  | 'seoMetaTags.parent.children'
  | 'seoMetaTags.parent.children.id'
  | 'seoMetaTags.parent.children.children'
  | 'seoMetaTags.parent.internal.content'
  | 'seoMetaTags.parent.internal.contentDigest'
  | 'seoMetaTags.parent.internal.description'
  | 'seoMetaTags.parent.internal.fieldOwners'
  | 'seoMetaTags.parent.internal.ignoreType'
  | 'seoMetaTags.parent.internal.mediaType'
  | 'seoMetaTags.parent.internal.owner'
  | 'seoMetaTags.parent.internal.type'
  | 'seoMetaTags.children'
  | 'seoMetaTags.children.id'
  | 'seoMetaTags.children.parent.id'
  | 'seoMetaTags.children.parent.children'
  | 'seoMetaTags.children.children'
  | 'seoMetaTags.children.children.id'
  | 'seoMetaTags.children.children.children'
  | 'seoMetaTags.children.internal.content'
  | 'seoMetaTags.children.internal.contentDigest'
  | 'seoMetaTags.children.internal.description'
  | 'seoMetaTags.children.internal.fieldOwners'
  | 'seoMetaTags.children.internal.ignoreType'
  | 'seoMetaTags.children.internal.mediaType'
  | 'seoMetaTags.children.internal.owner'
  | 'seoMetaTags.children.internal.type'
  | 'seoMetaTags.internal.content'
  | 'seoMetaTags.internal.contentDigest'
  | 'seoMetaTags.internal.description'
  | 'seoMetaTags.internal.fieldOwners'
  | 'seoMetaTags.internal.ignoreType'
  | 'seoMetaTags.internal.mediaType'
  | 'seoMetaTags.internal.owner'
  | 'seoMetaTags.internal.type'
  | 'model.name'
  | 'model.singleton'
  | 'model.sortable'
  | 'model.apiKey'
  | 'model.orderingDirection'
  | 'model.tree'
  | 'model.modularBlock'
  | 'model.draftModeActive'
  | 'model.allLocalesRequired'
  | 'model.collectionAppeareance'
  | 'model.hasSingletonItem'
  | 'model.originalId'
  | 'model.fields.tags'
  | 'model.fields.id'
  | 'model.fields.parent.id'
  | 'model.fields.parent.children'
  | 'model.fields.children'
  | 'model.fields.children.id'
  | 'model.fields.children.children'
  | 'model.fields.internal.content'
  | 'model.fields.internal.contentDigest'
  | 'model.fields.internal.description'
  | 'model.fields.internal.fieldOwners'
  | 'model.fields.internal.ignoreType'
  | 'model.fields.internal.mediaType'
  | 'model.fields.internal.owner'
  | 'model.fields.internal.type'
  | 'model.id'
  | 'model.parent.id'
  | 'model.parent.parent.id'
  | 'model.parent.parent.children'
  | 'model.parent.children'
  | 'model.parent.children.id'
  | 'model.parent.children.children'
  | 'model.parent.internal.content'
  | 'model.parent.internal.contentDigest'
  | 'model.parent.internal.description'
  | 'model.parent.internal.fieldOwners'
  | 'model.parent.internal.ignoreType'
  | 'model.parent.internal.mediaType'
  | 'model.parent.internal.owner'
  | 'model.parent.internal.type'
  | 'model.children'
  | 'model.children.id'
  | 'model.children.parent.id'
  | 'model.children.parent.children'
  | 'model.children.children'
  | 'model.children.children.id'
  | 'model.children.children.children'
  | 'model.children.internal.content'
  | 'model.children.internal.contentDigest'
  | 'model.children.internal.description'
  | 'model.children.internal.fieldOwners'
  | 'model.children.internal.ignoreType'
  | 'model.children.internal.mediaType'
  | 'model.children.internal.owner'
  | 'model.children.internal.type'
  | 'model.internal.content'
  | 'model.internal.contentDigest'
  | 'model.internal.description'
  | 'model.internal.fieldOwners'
  | 'model.internal.ignoreType'
  | 'model.internal.mediaType'
  | 'model.internal.owner'
  | 'model.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsSocialProfileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsSocialProfileEdge>;
  readonly nodes: ReadonlyArray<DatoCmsSocialProfile>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsSocialProfileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsSocialProfileGroupConnection_distinctArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileGroupConnection_maxArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileGroupConnection_minArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileGroupConnection_sumArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};


type DatoCmsSocialProfileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsSocialProfileFieldsEnum;
};

type DatoCmsSocialProfileFilterInput = {
  readonly profileType: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly gatsbypreview: Maybe<JSONQueryOperatorInput>;
  readonly icon: Maybe<DatoCmsFileFieldFilterInput>;
  readonly position: Maybe<IntQueryOperatorInput>;
  readonly meta: Maybe<DatoCmsMetaFieldFilterInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  readonly model: Maybe<DatoCmsModelFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsSocialProfileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsSocialProfileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsAboutPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsAboutPageEdge>;
  readonly nodes: ReadonlyArray<DatoCmsAboutPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsAboutPageGroupConnection>;
};


type DatoCmsAboutPageConnection_distinctArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageConnection_maxArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageConnection_minArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageConnection_sumArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsAboutPageFieldsEnum;
};

type DatoCmsAboutPageEdge = {
  readonly next: Maybe<DatoCmsAboutPage>;
  readonly node: DatoCmsAboutPage;
  readonly previous: Maybe<DatoCmsAboutPage>;
};

type DatoCmsAboutPageFieldsEnum =
  | 'title'
  | 'subtitle'
  | 'photo.size'
  | 'photo.width'
  | 'photo.height'
  | 'photo.path'
  | 'photo.format'
  | 'photo.isImage'
  | 'photo.notes'
  | 'photo.author'
  | 'photo.copyright'
  | 'photo.tags'
  | 'photo.smartTags'
  | 'photo.filename'
  | 'photo.basename'
  | 'photo.exifInfo'
  | 'photo.mimeType'
  | 'photo.colors'
  | 'photo.colors.red'
  | 'photo.colors.green'
  | 'photo.colors.blue'
  | 'photo.colors.alpha'
  | 'photo.colors.rgb'
  | 'photo.colors.hex'
  | 'photo.blurhash'
  | 'photo.originalId'
  | 'photo.url'
  | 'photo.createdAt'
  | 'photo.video.muxPlaybackId'
  | 'photo.video.frameRate'
  | 'photo.video.duration'
  | 'photo.video.streamingUrl'
  | 'photo.video.thumbnailUrl'
  | 'photo.video.mp4Url'
  | 'photo.fluid.base64'
  | 'photo.fluid.tracedSVG'
  | 'photo.fluid.aspectRatio'
  | 'photo.fluid.width'
  | 'photo.fluid.height'
  | 'photo.fluid.src'
  | 'photo.fluid.srcSet'
  | 'photo.fluid.sizes'
  | 'photo.sizes.base64'
  | 'photo.sizes.tracedSVG'
  | 'photo.sizes.aspectRatio'
  | 'photo.sizes.width'
  | 'photo.sizes.height'
  | 'photo.sizes.src'
  | 'photo.sizes.srcSet'
  | 'photo.sizes.sizes'
  | 'photo.fixed.base64'
  | 'photo.fixed.tracedSVG'
  | 'photo.fixed.aspectRatio'
  | 'photo.fixed.width'
  | 'photo.fixed.height'
  | 'photo.fixed.src'
  | 'photo.fixed.srcSet'
  | 'photo.fixed.sizes'
  | 'photo.resolutions.base64'
  | 'photo.resolutions.tracedSVG'
  | 'photo.resolutions.aspectRatio'
  | 'photo.resolutions.width'
  | 'photo.resolutions.height'
  | 'photo.resolutions.src'
  | 'photo.resolutions.srcSet'
  | 'photo.resolutions.sizes'
  | 'photo.gatsbyImageData'
  | 'photo.alt'
  | 'photo.title'
  | 'photo.customData'
  | 'photo.focalPoint.x'
  | 'photo.focalPoint.y'
  | 'bio'
  | 'bioNode.childrenMarkdownRemark'
  | 'bioNode.childrenMarkdownRemark.id'
  | 'bioNode.childrenMarkdownRemark.frontmatter.title'
  | 'bioNode.childrenMarkdownRemark.excerpt'
  | 'bioNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'bioNode.childrenMarkdownRemark.html'
  | 'bioNode.childrenMarkdownRemark.htmlAst'
  | 'bioNode.childrenMarkdownRemark.excerptAst'
  | 'bioNode.childrenMarkdownRemark.headings'
  | 'bioNode.childrenMarkdownRemark.headings.id'
  | 'bioNode.childrenMarkdownRemark.headings.value'
  | 'bioNode.childrenMarkdownRemark.headings.depth'
  | 'bioNode.childrenMarkdownRemark.timeToRead'
  | 'bioNode.childrenMarkdownRemark.tableOfContents'
  | 'bioNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'bioNode.childrenMarkdownRemark.wordCount.sentences'
  | 'bioNode.childrenMarkdownRemark.wordCount.words'
  | 'bioNode.childrenMarkdownRemark.parent.id'
  | 'bioNode.childrenMarkdownRemark.parent.children'
  | 'bioNode.childrenMarkdownRemark.children'
  | 'bioNode.childrenMarkdownRemark.children.id'
  | 'bioNode.childrenMarkdownRemark.children.children'
  | 'bioNode.childrenMarkdownRemark.internal.content'
  | 'bioNode.childrenMarkdownRemark.internal.contentDigest'
  | 'bioNode.childrenMarkdownRemark.internal.description'
  | 'bioNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'bioNode.childrenMarkdownRemark.internal.ignoreType'
  | 'bioNode.childrenMarkdownRemark.internal.mediaType'
  | 'bioNode.childrenMarkdownRemark.internal.owner'
  | 'bioNode.childrenMarkdownRemark.internal.type'
  | 'bioNode.childMarkdownRemark.id'
  | 'bioNode.childMarkdownRemark.frontmatter.title'
  | 'bioNode.childMarkdownRemark.excerpt'
  | 'bioNode.childMarkdownRemark.rawMarkdownBody'
  | 'bioNode.childMarkdownRemark.html'
  | 'bioNode.childMarkdownRemark.htmlAst'
  | 'bioNode.childMarkdownRemark.excerptAst'
  | 'bioNode.childMarkdownRemark.headings'
  | 'bioNode.childMarkdownRemark.headings.id'
  | 'bioNode.childMarkdownRemark.headings.value'
  | 'bioNode.childMarkdownRemark.headings.depth'
  | 'bioNode.childMarkdownRemark.timeToRead'
  | 'bioNode.childMarkdownRemark.tableOfContents'
  | 'bioNode.childMarkdownRemark.wordCount.paragraphs'
  | 'bioNode.childMarkdownRemark.wordCount.sentences'
  | 'bioNode.childMarkdownRemark.wordCount.words'
  | 'bioNode.childMarkdownRemark.parent.id'
  | 'bioNode.childMarkdownRemark.parent.children'
  | 'bioNode.childMarkdownRemark.children'
  | 'bioNode.childMarkdownRemark.children.id'
  | 'bioNode.childMarkdownRemark.children.children'
  | 'bioNode.childMarkdownRemark.internal.content'
  | 'bioNode.childMarkdownRemark.internal.contentDigest'
  | 'bioNode.childMarkdownRemark.internal.description'
  | 'bioNode.childMarkdownRemark.internal.fieldOwners'
  | 'bioNode.childMarkdownRemark.internal.ignoreType'
  | 'bioNode.childMarkdownRemark.internal.mediaType'
  | 'bioNode.childMarkdownRemark.internal.owner'
  | 'bioNode.childMarkdownRemark.internal.type'
  | 'bioNode.id'
  | 'bioNode.parent.id'
  | 'bioNode.parent.parent.id'
  | 'bioNode.parent.parent.children'
  | 'bioNode.parent.children'
  | 'bioNode.parent.children.id'
  | 'bioNode.parent.children.children'
  | 'bioNode.parent.internal.content'
  | 'bioNode.parent.internal.contentDigest'
  | 'bioNode.parent.internal.description'
  | 'bioNode.parent.internal.fieldOwners'
  | 'bioNode.parent.internal.ignoreType'
  | 'bioNode.parent.internal.mediaType'
  | 'bioNode.parent.internal.owner'
  | 'bioNode.parent.internal.type'
  | 'bioNode.children'
  | 'bioNode.children.id'
  | 'bioNode.children.parent.id'
  | 'bioNode.children.parent.children'
  | 'bioNode.children.children'
  | 'bioNode.children.children.id'
  | 'bioNode.children.children.children'
  | 'bioNode.children.internal.content'
  | 'bioNode.children.internal.contentDigest'
  | 'bioNode.children.internal.description'
  | 'bioNode.children.internal.fieldOwners'
  | 'bioNode.children.internal.ignoreType'
  | 'bioNode.children.internal.mediaType'
  | 'bioNode.children.internal.owner'
  | 'bioNode.children.internal.type'
  | 'bioNode.internal.content'
  | 'bioNode.internal.contentDigest'
  | 'bioNode.internal.description'
  | 'bioNode.internal.fieldOwners'
  | 'bioNode.internal.ignoreType'
  | 'bioNode.internal.mediaType'
  | 'bioNode.internal.owner'
  | 'bioNode.internal.type'
  | 'seoSettings.title'
  | 'seoSettings.description'
  | 'seoSettings.twitterCard'
  | 'seoSettings.image.size'
  | 'seoSettings.image.width'
  | 'seoSettings.image.height'
  | 'seoSettings.image.path'
  | 'seoSettings.image.format'
  | 'seoSettings.image.isImage'
  | 'seoSettings.image.notes'
  | 'seoSettings.image.author'
  | 'seoSettings.image.copyright'
  | 'seoSettings.image.tags'
  | 'seoSettings.image.smartTags'
  | 'seoSettings.image.filename'
  | 'seoSettings.image.basename'
  | 'seoSettings.image.exifInfo'
  | 'seoSettings.image.mimeType'
  | 'seoSettings.image.colors'
  | 'seoSettings.image.colors.red'
  | 'seoSettings.image.colors.green'
  | 'seoSettings.image.colors.blue'
  | 'seoSettings.image.colors.alpha'
  | 'seoSettings.image.colors.rgb'
  | 'seoSettings.image.colors.hex'
  | 'seoSettings.image.blurhash'
  | 'seoSettings.image.originalId'
  | 'seoSettings.image.url'
  | 'seoSettings.image.createdAt'
  | 'seoSettings.image.video.muxPlaybackId'
  | 'seoSettings.image.video.frameRate'
  | 'seoSettings.image.video.duration'
  | 'seoSettings.image.video.streamingUrl'
  | 'seoSettings.image.video.thumbnailUrl'
  | 'seoSettings.image.video.mp4Url'
  | 'seoSettings.image.fluid.base64'
  | 'seoSettings.image.fluid.tracedSVG'
  | 'seoSettings.image.fluid.aspectRatio'
  | 'seoSettings.image.fluid.width'
  | 'seoSettings.image.fluid.height'
  | 'seoSettings.image.fluid.src'
  | 'seoSettings.image.fluid.srcSet'
  | 'seoSettings.image.fluid.sizes'
  | 'seoSettings.image.sizes.base64'
  | 'seoSettings.image.sizes.tracedSVG'
  | 'seoSettings.image.sizes.aspectRatio'
  | 'seoSettings.image.sizes.width'
  | 'seoSettings.image.sizes.height'
  | 'seoSettings.image.sizes.src'
  | 'seoSettings.image.sizes.srcSet'
  | 'seoSettings.image.sizes.sizes'
  | 'seoSettings.image.fixed.base64'
  | 'seoSettings.image.fixed.tracedSVG'
  | 'seoSettings.image.fixed.aspectRatio'
  | 'seoSettings.image.fixed.width'
  | 'seoSettings.image.fixed.height'
  | 'seoSettings.image.fixed.src'
  | 'seoSettings.image.fixed.srcSet'
  | 'seoSettings.image.fixed.sizes'
  | 'seoSettings.image.resolutions.base64'
  | 'seoSettings.image.resolutions.tracedSVG'
  | 'seoSettings.image.resolutions.aspectRatio'
  | 'seoSettings.image.resolutions.width'
  | 'seoSettings.image.resolutions.height'
  | 'seoSettings.image.resolutions.src'
  | 'seoSettings.image.resolutions.srcSet'
  | 'seoSettings.image.resolutions.sizes'
  | 'seoSettings.image.gatsbyImageData'
  | 'seoSettings.image.id'
  | 'seoSettings.image.parent.id'
  | 'seoSettings.image.parent.children'
  | 'seoSettings.image.children'
  | 'seoSettings.image.children.id'
  | 'seoSettings.image.children.children'
  | 'seoSettings.image.internal.content'
  | 'seoSettings.image.internal.contentDigest'
  | 'seoSettings.image.internal.description'
  | 'seoSettings.image.internal.fieldOwners'
  | 'seoSettings.image.internal.ignoreType'
  | 'seoSettings.image.internal.mediaType'
  | 'seoSettings.image.internal.owner'
  | 'seoSettings.image.internal.type'
  | 'gatsbypreview'
  | 'meta.createdAt'
  | 'meta.updatedAt'
  | 'meta.publishedAt'
  | 'meta.firstPublishedAt'
  | 'meta.isValid'
  | 'meta.status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags.tags'
  | 'seoMetaTags.id'
  | 'seoMetaTags.parent.id'
  | 'seoMetaTags.parent.parent.id'
  | 'seoMetaTags.parent.parent.children'
  | 'seoMetaTags.parent.children'
  | 'seoMetaTags.parent.children.id'
  | 'seoMetaTags.parent.children.children'
  | 'seoMetaTags.parent.internal.content'
  | 'seoMetaTags.parent.internal.contentDigest'
  | 'seoMetaTags.parent.internal.description'
  | 'seoMetaTags.parent.internal.fieldOwners'
  | 'seoMetaTags.parent.internal.ignoreType'
  | 'seoMetaTags.parent.internal.mediaType'
  | 'seoMetaTags.parent.internal.owner'
  | 'seoMetaTags.parent.internal.type'
  | 'seoMetaTags.children'
  | 'seoMetaTags.children.id'
  | 'seoMetaTags.children.parent.id'
  | 'seoMetaTags.children.parent.children'
  | 'seoMetaTags.children.children'
  | 'seoMetaTags.children.children.id'
  | 'seoMetaTags.children.children.children'
  | 'seoMetaTags.children.internal.content'
  | 'seoMetaTags.children.internal.contentDigest'
  | 'seoMetaTags.children.internal.description'
  | 'seoMetaTags.children.internal.fieldOwners'
  | 'seoMetaTags.children.internal.ignoreType'
  | 'seoMetaTags.children.internal.mediaType'
  | 'seoMetaTags.children.internal.owner'
  | 'seoMetaTags.children.internal.type'
  | 'seoMetaTags.internal.content'
  | 'seoMetaTags.internal.contentDigest'
  | 'seoMetaTags.internal.description'
  | 'seoMetaTags.internal.fieldOwners'
  | 'seoMetaTags.internal.ignoreType'
  | 'seoMetaTags.internal.mediaType'
  | 'seoMetaTags.internal.owner'
  | 'seoMetaTags.internal.type'
  | 'model.name'
  | 'model.singleton'
  | 'model.sortable'
  | 'model.apiKey'
  | 'model.orderingDirection'
  | 'model.tree'
  | 'model.modularBlock'
  | 'model.draftModeActive'
  | 'model.allLocalesRequired'
  | 'model.collectionAppeareance'
  | 'model.hasSingletonItem'
  | 'model.originalId'
  | 'model.fields.tags'
  | 'model.fields.id'
  | 'model.fields.parent.id'
  | 'model.fields.parent.children'
  | 'model.fields.children'
  | 'model.fields.children.id'
  | 'model.fields.children.children'
  | 'model.fields.internal.content'
  | 'model.fields.internal.contentDigest'
  | 'model.fields.internal.description'
  | 'model.fields.internal.fieldOwners'
  | 'model.fields.internal.ignoreType'
  | 'model.fields.internal.mediaType'
  | 'model.fields.internal.owner'
  | 'model.fields.internal.type'
  | 'model.id'
  | 'model.parent.id'
  | 'model.parent.parent.id'
  | 'model.parent.parent.children'
  | 'model.parent.children'
  | 'model.parent.children.id'
  | 'model.parent.children.children'
  | 'model.parent.internal.content'
  | 'model.parent.internal.contentDigest'
  | 'model.parent.internal.description'
  | 'model.parent.internal.fieldOwners'
  | 'model.parent.internal.ignoreType'
  | 'model.parent.internal.mediaType'
  | 'model.parent.internal.owner'
  | 'model.parent.internal.type'
  | 'model.children'
  | 'model.children.id'
  | 'model.children.parent.id'
  | 'model.children.parent.children'
  | 'model.children.children'
  | 'model.children.children.id'
  | 'model.children.children.children'
  | 'model.children.internal.content'
  | 'model.children.internal.contentDigest'
  | 'model.children.internal.description'
  | 'model.children.internal.fieldOwners'
  | 'model.children.internal.ignoreType'
  | 'model.children.internal.mediaType'
  | 'model.children.internal.owner'
  | 'model.children.internal.type'
  | 'model.internal.content'
  | 'model.internal.contentDigest'
  | 'model.internal.description'
  | 'model.internal.fieldOwners'
  | 'model.internal.ignoreType'
  | 'model.internal.mediaType'
  | 'model.internal.owner'
  | 'model.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsAboutPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsAboutPageEdge>;
  readonly nodes: ReadonlyArray<DatoCmsAboutPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsAboutPageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsAboutPageGroupConnection_distinctArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageGroupConnection_maxArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageGroupConnection_minArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageGroupConnection_sumArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};


type DatoCmsAboutPageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsAboutPageFieldsEnum;
};

type DatoCmsAboutPageFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly photo: Maybe<DatoCmsFileFieldFilterInput>;
  readonly bio: Maybe<StringQueryOperatorInput>;
  readonly bioNode: Maybe<DatoCmsTextNodeFilterInput>;
  readonly seoSettings: Maybe<DatoCmsSeoFieldFilterInput>;
  readonly gatsbypreview: Maybe<JSONQueryOperatorInput>;
  readonly meta: Maybe<DatoCmsMetaFieldFilterInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  readonly model: Maybe<DatoCmsModelFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsAboutPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsAboutPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsFileFieldFilterListInput = {
  readonly elemMatch: Maybe<DatoCmsFileFieldFilterInput>;
};

type DatoCmsWorkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsWorkEdge>;
  readonly nodes: ReadonlyArray<DatoCmsWork>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsWorkGroupConnection>;
};


type DatoCmsWorkConnection_distinctArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkConnection_maxArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkConnection_minArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkConnection_sumArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsWorkFieldsEnum;
};

type DatoCmsWorkEdge = {
  readonly next: Maybe<DatoCmsWork>;
  readonly node: DatoCmsWork;
  readonly previous: Maybe<DatoCmsWork>;
};

type DatoCmsWorkFieldsEnum =
  | 'title'
  | 'slug'
  | 'coverImage.size'
  | 'coverImage.width'
  | 'coverImage.height'
  | 'coverImage.path'
  | 'coverImage.format'
  | 'coverImage.isImage'
  | 'coverImage.notes'
  | 'coverImage.author'
  | 'coverImage.copyright'
  | 'coverImage.tags'
  | 'coverImage.smartTags'
  | 'coverImage.filename'
  | 'coverImage.basename'
  | 'coverImage.exifInfo'
  | 'coverImage.mimeType'
  | 'coverImage.colors'
  | 'coverImage.colors.red'
  | 'coverImage.colors.green'
  | 'coverImage.colors.blue'
  | 'coverImage.colors.alpha'
  | 'coverImage.colors.rgb'
  | 'coverImage.colors.hex'
  | 'coverImage.blurhash'
  | 'coverImage.originalId'
  | 'coverImage.url'
  | 'coverImage.createdAt'
  | 'coverImage.video.muxPlaybackId'
  | 'coverImage.video.frameRate'
  | 'coverImage.video.duration'
  | 'coverImage.video.streamingUrl'
  | 'coverImage.video.thumbnailUrl'
  | 'coverImage.video.mp4Url'
  | 'coverImage.fluid.base64'
  | 'coverImage.fluid.tracedSVG'
  | 'coverImage.fluid.aspectRatio'
  | 'coverImage.fluid.width'
  | 'coverImage.fluid.height'
  | 'coverImage.fluid.src'
  | 'coverImage.fluid.srcSet'
  | 'coverImage.fluid.sizes'
  | 'coverImage.sizes.base64'
  | 'coverImage.sizes.tracedSVG'
  | 'coverImage.sizes.aspectRatio'
  | 'coverImage.sizes.width'
  | 'coverImage.sizes.height'
  | 'coverImage.sizes.src'
  | 'coverImage.sizes.srcSet'
  | 'coverImage.sizes.sizes'
  | 'coverImage.fixed.base64'
  | 'coverImage.fixed.tracedSVG'
  | 'coverImage.fixed.aspectRatio'
  | 'coverImage.fixed.width'
  | 'coverImage.fixed.height'
  | 'coverImage.fixed.src'
  | 'coverImage.fixed.srcSet'
  | 'coverImage.fixed.sizes'
  | 'coverImage.resolutions.base64'
  | 'coverImage.resolutions.tracedSVG'
  | 'coverImage.resolutions.aspectRatio'
  | 'coverImage.resolutions.width'
  | 'coverImage.resolutions.height'
  | 'coverImage.resolutions.src'
  | 'coverImage.resolutions.srcSet'
  | 'coverImage.resolutions.sizes'
  | 'coverImage.gatsbyImageData'
  | 'coverImage.alt'
  | 'coverImage.title'
  | 'coverImage.customData'
  | 'coverImage.focalPoint.x'
  | 'coverImage.focalPoint.y'
  | 'excerpt'
  | 'excerptNode.childrenMarkdownRemark'
  | 'excerptNode.childrenMarkdownRemark.id'
  | 'excerptNode.childrenMarkdownRemark.frontmatter.title'
  | 'excerptNode.childrenMarkdownRemark.excerpt'
  | 'excerptNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'excerptNode.childrenMarkdownRemark.html'
  | 'excerptNode.childrenMarkdownRemark.htmlAst'
  | 'excerptNode.childrenMarkdownRemark.excerptAst'
  | 'excerptNode.childrenMarkdownRemark.headings'
  | 'excerptNode.childrenMarkdownRemark.headings.id'
  | 'excerptNode.childrenMarkdownRemark.headings.value'
  | 'excerptNode.childrenMarkdownRemark.headings.depth'
  | 'excerptNode.childrenMarkdownRemark.timeToRead'
  | 'excerptNode.childrenMarkdownRemark.tableOfContents'
  | 'excerptNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'excerptNode.childrenMarkdownRemark.wordCount.sentences'
  | 'excerptNode.childrenMarkdownRemark.wordCount.words'
  | 'excerptNode.childrenMarkdownRemark.parent.id'
  | 'excerptNode.childrenMarkdownRemark.parent.children'
  | 'excerptNode.childrenMarkdownRemark.children'
  | 'excerptNode.childrenMarkdownRemark.children.id'
  | 'excerptNode.childrenMarkdownRemark.children.children'
  | 'excerptNode.childrenMarkdownRemark.internal.content'
  | 'excerptNode.childrenMarkdownRemark.internal.contentDigest'
  | 'excerptNode.childrenMarkdownRemark.internal.description'
  | 'excerptNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'excerptNode.childrenMarkdownRemark.internal.ignoreType'
  | 'excerptNode.childrenMarkdownRemark.internal.mediaType'
  | 'excerptNode.childrenMarkdownRemark.internal.owner'
  | 'excerptNode.childrenMarkdownRemark.internal.type'
  | 'excerptNode.childMarkdownRemark.id'
  | 'excerptNode.childMarkdownRemark.frontmatter.title'
  | 'excerptNode.childMarkdownRemark.excerpt'
  | 'excerptNode.childMarkdownRemark.rawMarkdownBody'
  | 'excerptNode.childMarkdownRemark.html'
  | 'excerptNode.childMarkdownRemark.htmlAst'
  | 'excerptNode.childMarkdownRemark.excerptAst'
  | 'excerptNode.childMarkdownRemark.headings'
  | 'excerptNode.childMarkdownRemark.headings.id'
  | 'excerptNode.childMarkdownRemark.headings.value'
  | 'excerptNode.childMarkdownRemark.headings.depth'
  | 'excerptNode.childMarkdownRemark.timeToRead'
  | 'excerptNode.childMarkdownRemark.tableOfContents'
  | 'excerptNode.childMarkdownRemark.wordCount.paragraphs'
  | 'excerptNode.childMarkdownRemark.wordCount.sentences'
  | 'excerptNode.childMarkdownRemark.wordCount.words'
  | 'excerptNode.childMarkdownRemark.parent.id'
  | 'excerptNode.childMarkdownRemark.parent.children'
  | 'excerptNode.childMarkdownRemark.children'
  | 'excerptNode.childMarkdownRemark.children.id'
  | 'excerptNode.childMarkdownRemark.children.children'
  | 'excerptNode.childMarkdownRemark.internal.content'
  | 'excerptNode.childMarkdownRemark.internal.contentDigest'
  | 'excerptNode.childMarkdownRemark.internal.description'
  | 'excerptNode.childMarkdownRemark.internal.fieldOwners'
  | 'excerptNode.childMarkdownRemark.internal.ignoreType'
  | 'excerptNode.childMarkdownRemark.internal.mediaType'
  | 'excerptNode.childMarkdownRemark.internal.owner'
  | 'excerptNode.childMarkdownRemark.internal.type'
  | 'excerptNode.id'
  | 'excerptNode.parent.id'
  | 'excerptNode.parent.parent.id'
  | 'excerptNode.parent.parent.children'
  | 'excerptNode.parent.children'
  | 'excerptNode.parent.children.id'
  | 'excerptNode.parent.children.children'
  | 'excerptNode.parent.internal.content'
  | 'excerptNode.parent.internal.contentDigest'
  | 'excerptNode.parent.internal.description'
  | 'excerptNode.parent.internal.fieldOwners'
  | 'excerptNode.parent.internal.ignoreType'
  | 'excerptNode.parent.internal.mediaType'
  | 'excerptNode.parent.internal.owner'
  | 'excerptNode.parent.internal.type'
  | 'excerptNode.children'
  | 'excerptNode.children.id'
  | 'excerptNode.children.parent.id'
  | 'excerptNode.children.parent.children'
  | 'excerptNode.children.children'
  | 'excerptNode.children.children.id'
  | 'excerptNode.children.children.children'
  | 'excerptNode.children.internal.content'
  | 'excerptNode.children.internal.contentDigest'
  | 'excerptNode.children.internal.description'
  | 'excerptNode.children.internal.fieldOwners'
  | 'excerptNode.children.internal.ignoreType'
  | 'excerptNode.children.internal.mediaType'
  | 'excerptNode.children.internal.owner'
  | 'excerptNode.children.internal.type'
  | 'excerptNode.internal.content'
  | 'excerptNode.internal.contentDigest'
  | 'excerptNode.internal.description'
  | 'excerptNode.internal.fieldOwners'
  | 'excerptNode.internal.ignoreType'
  | 'excerptNode.internal.mediaType'
  | 'excerptNode.internal.owner'
  | 'excerptNode.internal.type'
  | 'gallery'
  | 'gallery.size'
  | 'gallery.width'
  | 'gallery.height'
  | 'gallery.path'
  | 'gallery.format'
  | 'gallery.isImage'
  | 'gallery.notes'
  | 'gallery.author'
  | 'gallery.copyright'
  | 'gallery.tags'
  | 'gallery.smartTags'
  | 'gallery.filename'
  | 'gallery.basename'
  | 'gallery.exifInfo'
  | 'gallery.mimeType'
  | 'gallery.colors'
  | 'gallery.colors.red'
  | 'gallery.colors.green'
  | 'gallery.colors.blue'
  | 'gallery.colors.alpha'
  | 'gallery.colors.rgb'
  | 'gallery.colors.hex'
  | 'gallery.blurhash'
  | 'gallery.originalId'
  | 'gallery.url'
  | 'gallery.createdAt'
  | 'gallery.video.muxPlaybackId'
  | 'gallery.video.frameRate'
  | 'gallery.video.duration'
  | 'gallery.video.streamingUrl'
  | 'gallery.video.thumbnailUrl'
  | 'gallery.video.mp4Url'
  | 'gallery.fluid.base64'
  | 'gallery.fluid.tracedSVG'
  | 'gallery.fluid.aspectRatio'
  | 'gallery.fluid.width'
  | 'gallery.fluid.height'
  | 'gallery.fluid.src'
  | 'gallery.fluid.srcSet'
  | 'gallery.fluid.sizes'
  | 'gallery.sizes.base64'
  | 'gallery.sizes.tracedSVG'
  | 'gallery.sizes.aspectRatio'
  | 'gallery.sizes.width'
  | 'gallery.sizes.height'
  | 'gallery.sizes.src'
  | 'gallery.sizes.srcSet'
  | 'gallery.sizes.sizes'
  | 'gallery.fixed.base64'
  | 'gallery.fixed.tracedSVG'
  | 'gallery.fixed.aspectRatio'
  | 'gallery.fixed.width'
  | 'gallery.fixed.height'
  | 'gallery.fixed.src'
  | 'gallery.fixed.srcSet'
  | 'gallery.fixed.sizes'
  | 'gallery.resolutions.base64'
  | 'gallery.resolutions.tracedSVG'
  | 'gallery.resolutions.aspectRatio'
  | 'gallery.resolutions.width'
  | 'gallery.resolutions.height'
  | 'gallery.resolutions.src'
  | 'gallery.resolutions.srcSet'
  | 'gallery.resolutions.sizes'
  | 'gallery.gatsbyImageData'
  | 'gallery.alt'
  | 'gallery.title'
  | 'gallery.customData'
  | 'gallery.focalPoint.x'
  | 'gallery.focalPoint.y'
  | 'description'
  | 'descriptionNode.childrenMarkdownRemark'
  | 'descriptionNode.childrenMarkdownRemark.id'
  | 'descriptionNode.childrenMarkdownRemark.frontmatter.title'
  | 'descriptionNode.childrenMarkdownRemark.excerpt'
  | 'descriptionNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'descriptionNode.childrenMarkdownRemark.html'
  | 'descriptionNode.childrenMarkdownRemark.htmlAst'
  | 'descriptionNode.childrenMarkdownRemark.excerptAst'
  | 'descriptionNode.childrenMarkdownRemark.headings'
  | 'descriptionNode.childrenMarkdownRemark.headings.id'
  | 'descriptionNode.childrenMarkdownRemark.headings.value'
  | 'descriptionNode.childrenMarkdownRemark.headings.depth'
  | 'descriptionNode.childrenMarkdownRemark.timeToRead'
  | 'descriptionNode.childrenMarkdownRemark.tableOfContents'
  | 'descriptionNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'descriptionNode.childrenMarkdownRemark.wordCount.sentences'
  | 'descriptionNode.childrenMarkdownRemark.wordCount.words'
  | 'descriptionNode.childrenMarkdownRemark.parent.id'
  | 'descriptionNode.childrenMarkdownRemark.parent.children'
  | 'descriptionNode.childrenMarkdownRemark.children'
  | 'descriptionNode.childrenMarkdownRemark.children.id'
  | 'descriptionNode.childrenMarkdownRemark.children.children'
  | 'descriptionNode.childrenMarkdownRemark.internal.content'
  | 'descriptionNode.childrenMarkdownRemark.internal.contentDigest'
  | 'descriptionNode.childrenMarkdownRemark.internal.description'
  | 'descriptionNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'descriptionNode.childrenMarkdownRemark.internal.ignoreType'
  | 'descriptionNode.childrenMarkdownRemark.internal.mediaType'
  | 'descriptionNode.childrenMarkdownRemark.internal.owner'
  | 'descriptionNode.childrenMarkdownRemark.internal.type'
  | 'descriptionNode.childMarkdownRemark.id'
  | 'descriptionNode.childMarkdownRemark.frontmatter.title'
  | 'descriptionNode.childMarkdownRemark.excerpt'
  | 'descriptionNode.childMarkdownRemark.rawMarkdownBody'
  | 'descriptionNode.childMarkdownRemark.html'
  | 'descriptionNode.childMarkdownRemark.htmlAst'
  | 'descriptionNode.childMarkdownRemark.excerptAst'
  | 'descriptionNode.childMarkdownRemark.headings'
  | 'descriptionNode.childMarkdownRemark.headings.id'
  | 'descriptionNode.childMarkdownRemark.headings.value'
  | 'descriptionNode.childMarkdownRemark.headings.depth'
  | 'descriptionNode.childMarkdownRemark.timeToRead'
  | 'descriptionNode.childMarkdownRemark.tableOfContents'
  | 'descriptionNode.childMarkdownRemark.wordCount.paragraphs'
  | 'descriptionNode.childMarkdownRemark.wordCount.sentences'
  | 'descriptionNode.childMarkdownRemark.wordCount.words'
  | 'descriptionNode.childMarkdownRemark.parent.id'
  | 'descriptionNode.childMarkdownRemark.parent.children'
  | 'descriptionNode.childMarkdownRemark.children'
  | 'descriptionNode.childMarkdownRemark.children.id'
  | 'descriptionNode.childMarkdownRemark.children.children'
  | 'descriptionNode.childMarkdownRemark.internal.content'
  | 'descriptionNode.childMarkdownRemark.internal.contentDigest'
  | 'descriptionNode.childMarkdownRemark.internal.description'
  | 'descriptionNode.childMarkdownRemark.internal.fieldOwners'
  | 'descriptionNode.childMarkdownRemark.internal.ignoreType'
  | 'descriptionNode.childMarkdownRemark.internal.mediaType'
  | 'descriptionNode.childMarkdownRemark.internal.owner'
  | 'descriptionNode.childMarkdownRemark.internal.type'
  | 'descriptionNode.id'
  | 'descriptionNode.parent.id'
  | 'descriptionNode.parent.parent.id'
  | 'descriptionNode.parent.parent.children'
  | 'descriptionNode.parent.children'
  | 'descriptionNode.parent.children.id'
  | 'descriptionNode.parent.children.children'
  | 'descriptionNode.parent.internal.content'
  | 'descriptionNode.parent.internal.contentDigest'
  | 'descriptionNode.parent.internal.description'
  | 'descriptionNode.parent.internal.fieldOwners'
  | 'descriptionNode.parent.internal.ignoreType'
  | 'descriptionNode.parent.internal.mediaType'
  | 'descriptionNode.parent.internal.owner'
  | 'descriptionNode.parent.internal.type'
  | 'descriptionNode.children'
  | 'descriptionNode.children.id'
  | 'descriptionNode.children.parent.id'
  | 'descriptionNode.children.parent.children'
  | 'descriptionNode.children.children'
  | 'descriptionNode.children.children.id'
  | 'descriptionNode.children.children.children'
  | 'descriptionNode.children.internal.content'
  | 'descriptionNode.children.internal.contentDigest'
  | 'descriptionNode.children.internal.description'
  | 'descriptionNode.children.internal.fieldOwners'
  | 'descriptionNode.children.internal.ignoreType'
  | 'descriptionNode.children.internal.mediaType'
  | 'descriptionNode.children.internal.owner'
  | 'descriptionNode.children.internal.type'
  | 'descriptionNode.internal.content'
  | 'descriptionNode.internal.contentDigest'
  | 'descriptionNode.internal.description'
  | 'descriptionNode.internal.fieldOwners'
  | 'descriptionNode.internal.ignoreType'
  | 'descriptionNode.internal.mediaType'
  | 'descriptionNode.internal.owner'
  | 'descriptionNode.internal.type'
  | 'seoSettings.title'
  | 'seoSettings.description'
  | 'seoSettings.twitterCard'
  | 'seoSettings.image.size'
  | 'seoSettings.image.width'
  | 'seoSettings.image.height'
  | 'seoSettings.image.path'
  | 'seoSettings.image.format'
  | 'seoSettings.image.isImage'
  | 'seoSettings.image.notes'
  | 'seoSettings.image.author'
  | 'seoSettings.image.copyright'
  | 'seoSettings.image.tags'
  | 'seoSettings.image.smartTags'
  | 'seoSettings.image.filename'
  | 'seoSettings.image.basename'
  | 'seoSettings.image.exifInfo'
  | 'seoSettings.image.mimeType'
  | 'seoSettings.image.colors'
  | 'seoSettings.image.colors.red'
  | 'seoSettings.image.colors.green'
  | 'seoSettings.image.colors.blue'
  | 'seoSettings.image.colors.alpha'
  | 'seoSettings.image.colors.rgb'
  | 'seoSettings.image.colors.hex'
  | 'seoSettings.image.blurhash'
  | 'seoSettings.image.originalId'
  | 'seoSettings.image.url'
  | 'seoSettings.image.createdAt'
  | 'seoSettings.image.video.muxPlaybackId'
  | 'seoSettings.image.video.frameRate'
  | 'seoSettings.image.video.duration'
  | 'seoSettings.image.video.streamingUrl'
  | 'seoSettings.image.video.thumbnailUrl'
  | 'seoSettings.image.video.mp4Url'
  | 'seoSettings.image.fluid.base64'
  | 'seoSettings.image.fluid.tracedSVG'
  | 'seoSettings.image.fluid.aspectRatio'
  | 'seoSettings.image.fluid.width'
  | 'seoSettings.image.fluid.height'
  | 'seoSettings.image.fluid.src'
  | 'seoSettings.image.fluid.srcSet'
  | 'seoSettings.image.fluid.sizes'
  | 'seoSettings.image.sizes.base64'
  | 'seoSettings.image.sizes.tracedSVG'
  | 'seoSettings.image.sizes.aspectRatio'
  | 'seoSettings.image.sizes.width'
  | 'seoSettings.image.sizes.height'
  | 'seoSettings.image.sizes.src'
  | 'seoSettings.image.sizes.srcSet'
  | 'seoSettings.image.sizes.sizes'
  | 'seoSettings.image.fixed.base64'
  | 'seoSettings.image.fixed.tracedSVG'
  | 'seoSettings.image.fixed.aspectRatio'
  | 'seoSettings.image.fixed.width'
  | 'seoSettings.image.fixed.height'
  | 'seoSettings.image.fixed.src'
  | 'seoSettings.image.fixed.srcSet'
  | 'seoSettings.image.fixed.sizes'
  | 'seoSettings.image.resolutions.base64'
  | 'seoSettings.image.resolutions.tracedSVG'
  | 'seoSettings.image.resolutions.aspectRatio'
  | 'seoSettings.image.resolutions.width'
  | 'seoSettings.image.resolutions.height'
  | 'seoSettings.image.resolutions.src'
  | 'seoSettings.image.resolutions.srcSet'
  | 'seoSettings.image.resolutions.sizes'
  | 'seoSettings.image.gatsbyImageData'
  | 'seoSettings.image.id'
  | 'seoSettings.image.parent.id'
  | 'seoSettings.image.parent.children'
  | 'seoSettings.image.children'
  | 'seoSettings.image.children.id'
  | 'seoSettings.image.children.children'
  | 'seoSettings.image.internal.content'
  | 'seoSettings.image.internal.contentDigest'
  | 'seoSettings.image.internal.description'
  | 'seoSettings.image.internal.fieldOwners'
  | 'seoSettings.image.internal.ignoreType'
  | 'seoSettings.image.internal.mediaType'
  | 'seoSettings.image.internal.owner'
  | 'seoSettings.image.internal.type'
  | 'gatsbypreview'
  | 'position'
  | 'meta.createdAt'
  | 'meta.updatedAt'
  | 'meta.publishedAt'
  | 'meta.firstPublishedAt'
  | 'meta.isValid'
  | 'meta.status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags.tags'
  | 'seoMetaTags.id'
  | 'seoMetaTags.parent.id'
  | 'seoMetaTags.parent.parent.id'
  | 'seoMetaTags.parent.parent.children'
  | 'seoMetaTags.parent.children'
  | 'seoMetaTags.parent.children.id'
  | 'seoMetaTags.parent.children.children'
  | 'seoMetaTags.parent.internal.content'
  | 'seoMetaTags.parent.internal.contentDigest'
  | 'seoMetaTags.parent.internal.description'
  | 'seoMetaTags.parent.internal.fieldOwners'
  | 'seoMetaTags.parent.internal.ignoreType'
  | 'seoMetaTags.parent.internal.mediaType'
  | 'seoMetaTags.parent.internal.owner'
  | 'seoMetaTags.parent.internal.type'
  | 'seoMetaTags.children'
  | 'seoMetaTags.children.id'
  | 'seoMetaTags.children.parent.id'
  | 'seoMetaTags.children.parent.children'
  | 'seoMetaTags.children.children'
  | 'seoMetaTags.children.children.id'
  | 'seoMetaTags.children.children.children'
  | 'seoMetaTags.children.internal.content'
  | 'seoMetaTags.children.internal.contentDigest'
  | 'seoMetaTags.children.internal.description'
  | 'seoMetaTags.children.internal.fieldOwners'
  | 'seoMetaTags.children.internal.ignoreType'
  | 'seoMetaTags.children.internal.mediaType'
  | 'seoMetaTags.children.internal.owner'
  | 'seoMetaTags.children.internal.type'
  | 'seoMetaTags.internal.content'
  | 'seoMetaTags.internal.contentDigest'
  | 'seoMetaTags.internal.description'
  | 'seoMetaTags.internal.fieldOwners'
  | 'seoMetaTags.internal.ignoreType'
  | 'seoMetaTags.internal.mediaType'
  | 'seoMetaTags.internal.owner'
  | 'seoMetaTags.internal.type'
  | 'model.name'
  | 'model.singleton'
  | 'model.sortable'
  | 'model.apiKey'
  | 'model.orderingDirection'
  | 'model.tree'
  | 'model.modularBlock'
  | 'model.draftModeActive'
  | 'model.allLocalesRequired'
  | 'model.collectionAppeareance'
  | 'model.hasSingletonItem'
  | 'model.originalId'
  | 'model.fields.tags'
  | 'model.fields.id'
  | 'model.fields.parent.id'
  | 'model.fields.parent.children'
  | 'model.fields.children'
  | 'model.fields.children.id'
  | 'model.fields.children.children'
  | 'model.fields.internal.content'
  | 'model.fields.internal.contentDigest'
  | 'model.fields.internal.description'
  | 'model.fields.internal.fieldOwners'
  | 'model.fields.internal.ignoreType'
  | 'model.fields.internal.mediaType'
  | 'model.fields.internal.owner'
  | 'model.fields.internal.type'
  | 'model.id'
  | 'model.parent.id'
  | 'model.parent.parent.id'
  | 'model.parent.parent.children'
  | 'model.parent.children'
  | 'model.parent.children.id'
  | 'model.parent.children.children'
  | 'model.parent.internal.content'
  | 'model.parent.internal.contentDigest'
  | 'model.parent.internal.description'
  | 'model.parent.internal.fieldOwners'
  | 'model.parent.internal.ignoreType'
  | 'model.parent.internal.mediaType'
  | 'model.parent.internal.owner'
  | 'model.parent.internal.type'
  | 'model.children'
  | 'model.children.id'
  | 'model.children.parent.id'
  | 'model.children.parent.children'
  | 'model.children.children'
  | 'model.children.children.id'
  | 'model.children.children.children'
  | 'model.children.internal.content'
  | 'model.children.internal.contentDigest'
  | 'model.children.internal.description'
  | 'model.children.internal.fieldOwners'
  | 'model.children.internal.ignoreType'
  | 'model.children.internal.mediaType'
  | 'model.children.internal.owner'
  | 'model.children.internal.type'
  | 'model.internal.content'
  | 'model.internal.contentDigest'
  | 'model.internal.description'
  | 'model.internal.fieldOwners'
  | 'model.internal.ignoreType'
  | 'model.internal.mediaType'
  | 'model.internal.owner'
  | 'model.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsWorkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsWorkEdge>;
  readonly nodes: ReadonlyArray<DatoCmsWork>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsWorkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsWorkGroupConnection_distinctArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkGroupConnection_maxArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkGroupConnection_minArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkGroupConnection_sumArgs = {
  field: DatoCmsWorkFieldsEnum;
};


type DatoCmsWorkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsWorkFieldsEnum;
};

type DatoCmsWorkFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly coverImage: Maybe<DatoCmsFileFieldFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly excerptNode: Maybe<DatoCmsTextNodeFilterInput>;
  readonly gallery: Maybe<DatoCmsFileFieldFilterListInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly descriptionNode: Maybe<DatoCmsTextNodeFilterInput>;
  readonly seoSettings: Maybe<DatoCmsSeoFieldFilterInput>;
  readonly gatsbypreview: Maybe<JSONQueryOperatorInput>;
  readonly position: Maybe<IntQueryOperatorInput>;
  readonly meta: Maybe<DatoCmsMetaFieldFilterInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly seoMetaTags: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  readonly model: Maybe<DatoCmsModelFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsWorkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsWorkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsAssetEdge>;
  readonly nodes: ReadonlyArray<DatoCmsAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsAssetGroupConnection>;
};


type DatoCmsAssetConnection_distinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetConnection_maxArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetConnection_minArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetConnection_sumArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

type DatoCmsAssetEdge = {
  readonly next: Maybe<DatoCmsAsset>;
  readonly node: DatoCmsAsset;
  readonly previous: Maybe<DatoCmsAsset>;
};

type DatoCmsAssetFieldsEnum =
  | 'size'
  | 'width'
  | 'height'
  | 'path'
  | 'format'
  | 'isImage'
  | 'notes'
  | 'author'
  | 'copyright'
  | 'tags'
  | 'smartTags'
  | 'filename'
  | 'basename'
  | 'exifInfo'
  | 'mimeType'
  | 'colors'
  | 'colors.red'
  | 'colors.green'
  | 'colors.blue'
  | 'colors.alpha'
  | 'colors.rgb'
  | 'colors.hex'
  | 'blurhash'
  | 'originalId'
  | 'url'
  | 'createdAt'
  | 'video.muxPlaybackId'
  | 'video.frameRate'
  | 'video.duration'
  | 'video.streamingUrl'
  | 'video.thumbnailUrl'
  | 'video.mp4Url'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.width'
  | 'fluid.height'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.sizes'
  | 'sizes.base64'
  | 'sizes.tracedSVG'
  | 'sizes.aspectRatio'
  | 'sizes.width'
  | 'sizes.height'
  | 'sizes.src'
  | 'sizes.srcSet'
  | 'sizes.sizes'
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.sizes'
  | 'resolutions.base64'
  | 'resolutions.tracedSVG'
  | 'resolutions.aspectRatio'
  | 'resolutions.width'
  | 'resolutions.height'
  | 'resolutions.src'
  | 'resolutions.srcSet'
  | 'resolutions.sizes'
  | 'gatsbyImageData'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsAssetEdge>;
  readonly nodes: ReadonlyArray<DatoCmsAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsAssetGroupConnection_distinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetGroupConnection_maxArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetGroupConnection_minArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetGroupConnection_sumArgs = {
  field: DatoCmsAssetFieldsEnum;
};


type DatoCmsAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

type DatoCmsAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsGlobalSeoFilterInput = {
  readonly siteName: Maybe<StringQueryOperatorInput>;
  readonly titleSuffix: Maybe<StringQueryOperatorInput>;
  readonly twitterAccount: Maybe<StringQueryOperatorInput>;
  readonly facebookPageUrl: Maybe<StringQueryOperatorInput>;
  readonly fallbackSeo: Maybe<DatoCmsSeoFieldFilterInput>;
};

type DatoCmsSiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsSiteEdge>;
  readonly nodes: ReadonlyArray<DatoCmsSite>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsSiteGroupConnection>;
};


type DatoCmsSiteConnection_distinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteConnection_maxArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteConnection_minArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteConnection_sumArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

type DatoCmsSiteEdge = {
  readonly next: Maybe<DatoCmsSite>;
  readonly node: DatoCmsSite;
  readonly previous: Maybe<DatoCmsSite>;
};

type DatoCmsSiteFieldsEnum =
  | 'name'
  | 'locale'
  | 'locales'
  | 'domain'
  | 'internalDomain'
  | 'noIndex'
  | 'globalSeo.siteName'
  | 'globalSeo.titleSuffix'
  | 'globalSeo.twitterAccount'
  | 'globalSeo.facebookPageUrl'
  | 'globalSeo.fallbackSeo.title'
  | 'globalSeo.fallbackSeo.description'
  | 'globalSeo.fallbackSeo.twitterCard'
  | 'globalSeo.fallbackSeo.image.size'
  | 'globalSeo.fallbackSeo.image.width'
  | 'globalSeo.fallbackSeo.image.height'
  | 'globalSeo.fallbackSeo.image.path'
  | 'globalSeo.fallbackSeo.image.format'
  | 'globalSeo.fallbackSeo.image.isImage'
  | 'globalSeo.fallbackSeo.image.notes'
  | 'globalSeo.fallbackSeo.image.author'
  | 'globalSeo.fallbackSeo.image.copyright'
  | 'globalSeo.fallbackSeo.image.tags'
  | 'globalSeo.fallbackSeo.image.smartTags'
  | 'globalSeo.fallbackSeo.image.filename'
  | 'globalSeo.fallbackSeo.image.basename'
  | 'globalSeo.fallbackSeo.image.exifInfo'
  | 'globalSeo.fallbackSeo.image.mimeType'
  | 'globalSeo.fallbackSeo.image.colors'
  | 'globalSeo.fallbackSeo.image.blurhash'
  | 'globalSeo.fallbackSeo.image.originalId'
  | 'globalSeo.fallbackSeo.image.url'
  | 'globalSeo.fallbackSeo.image.createdAt'
  | 'globalSeo.fallbackSeo.image.gatsbyImageData'
  | 'globalSeo.fallbackSeo.image.id'
  | 'globalSeo.fallbackSeo.image.children'
  | 'faviconMetaTags.tags'
  | 'faviconMetaTags.id'
  | 'faviconMetaTags.parent.id'
  | 'faviconMetaTags.parent.parent.id'
  | 'faviconMetaTags.parent.parent.children'
  | 'faviconMetaTags.parent.children'
  | 'faviconMetaTags.parent.children.id'
  | 'faviconMetaTags.parent.children.children'
  | 'faviconMetaTags.parent.internal.content'
  | 'faviconMetaTags.parent.internal.contentDigest'
  | 'faviconMetaTags.parent.internal.description'
  | 'faviconMetaTags.parent.internal.fieldOwners'
  | 'faviconMetaTags.parent.internal.ignoreType'
  | 'faviconMetaTags.parent.internal.mediaType'
  | 'faviconMetaTags.parent.internal.owner'
  | 'faviconMetaTags.parent.internal.type'
  | 'faviconMetaTags.children'
  | 'faviconMetaTags.children.id'
  | 'faviconMetaTags.children.parent.id'
  | 'faviconMetaTags.children.parent.children'
  | 'faviconMetaTags.children.children'
  | 'faviconMetaTags.children.children.id'
  | 'faviconMetaTags.children.children.children'
  | 'faviconMetaTags.children.internal.content'
  | 'faviconMetaTags.children.internal.contentDigest'
  | 'faviconMetaTags.children.internal.description'
  | 'faviconMetaTags.children.internal.fieldOwners'
  | 'faviconMetaTags.children.internal.ignoreType'
  | 'faviconMetaTags.children.internal.mediaType'
  | 'faviconMetaTags.children.internal.owner'
  | 'faviconMetaTags.children.internal.type'
  | 'faviconMetaTags.internal.content'
  | 'faviconMetaTags.internal.contentDigest'
  | 'faviconMetaTags.internal.description'
  | 'faviconMetaTags.internal.fieldOwners'
  | 'faviconMetaTags.internal.ignoreType'
  | 'faviconMetaTags.internal.mediaType'
  | 'faviconMetaTags.internal.owner'
  | 'faviconMetaTags.internal.type'
  | 'originalId'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsSiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsSiteEdge>;
  readonly nodes: ReadonlyArray<DatoCmsSite>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsSiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsSiteGroupConnection_distinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteGroupConnection_maxArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteGroupConnection_minArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteGroupConnection_sumArgs = {
  field: DatoCmsSiteFieldsEnum;
};


type DatoCmsSiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

type DatoCmsSiteFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly locales: Maybe<StringQueryOperatorInput>;
  readonly domain: Maybe<StringQueryOperatorInput>;
  readonly internalDomain: Maybe<StringQueryOperatorInput>;
  readonly noIndex: Maybe<BooleanQueryOperatorInput>;
  readonly globalSeo: Maybe<DatoCmsGlobalSeoFilterInput>;
  readonly faviconMetaTags: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsSiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsSiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsFaviconMetaTagsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsFaviconMetaTagsEdge>;
  readonly nodes: ReadonlyArray<DatoCmsFaviconMetaTags>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsFaviconMetaTagsGroupConnection>;
};


type DatoCmsFaviconMetaTagsConnection_distinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsConnection_maxArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsConnection_minArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsConnection_sumArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

type DatoCmsFaviconMetaTagsEdge = {
  readonly next: Maybe<DatoCmsFaviconMetaTags>;
  readonly node: DatoCmsFaviconMetaTags;
  readonly previous: Maybe<DatoCmsFaviconMetaTags>;
};

type DatoCmsFaviconMetaTagsFieldsEnum =
  | 'tags'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsFaviconMetaTagsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsFaviconMetaTagsEdge>;
  readonly nodes: ReadonlyArray<DatoCmsFaviconMetaTags>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsFaviconMetaTagsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsFaviconMetaTagsGroupConnection_distinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsGroupConnection_maxArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsGroupConnection_minArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsGroupConnection_sumArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


type DatoCmsFaviconMetaTagsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

type DatoCmsFaviconMetaTagsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsFaviconMetaTagsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsFieldConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsFieldEdge>;
  readonly nodes: ReadonlyArray<DatoCmsField>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsFieldGroupConnection>;
};


type DatoCmsFieldConnection_distinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldConnection_maxArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldConnection_minArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldConnection_sumArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

type DatoCmsFieldEdge = {
  readonly next: Maybe<DatoCmsField>;
  readonly node: DatoCmsField;
  readonly previous: Maybe<DatoCmsField>;
};

type DatoCmsFieldFieldsEnum =
  | 'label'
  | 'fieldType'
  | 'apiKey'
  | 'localized'
  | 'validators'
  | 'position'
  | 'appeareance'
  | 'defaultValue'
  | 'originalId'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsFieldGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsFieldEdge>;
  readonly nodes: ReadonlyArray<DatoCmsField>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsFieldGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsFieldGroupConnection_distinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldGroupConnection_maxArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldGroupConnection_minArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldGroupConnection_sumArgs = {
  field: DatoCmsFieldFieldsEnum;
};


type DatoCmsFieldGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

type DatoCmsFieldFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly fieldType: Maybe<StringQueryOperatorInput>;
  readonly apiKey: Maybe<StringQueryOperatorInput>;
  readonly localized: Maybe<BooleanQueryOperatorInput>;
  readonly validators: Maybe<JSONQueryOperatorInput>;
  readonly position: Maybe<IntQueryOperatorInput>;
  readonly appeareance: Maybe<JSONQueryOperatorInput>;
  readonly defaultValue: Maybe<JSONQueryOperatorInput>;
  readonly originalId: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DatoCmsFieldSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsFieldFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DatoCmsModelConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsModelEdge>;
  readonly nodes: ReadonlyArray<DatoCmsModel>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsModelGroupConnection>;
};


type DatoCmsModelConnection_distinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelConnection_maxArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelConnection_minArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelConnection_sumArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

type DatoCmsModelEdge = {
  readonly next: Maybe<DatoCmsModel>;
  readonly node: DatoCmsModel;
  readonly previous: Maybe<DatoCmsModel>;
};

type DatoCmsModelFieldsEnum =
  | 'name'
  | 'singleton'
  | 'sortable'
  | 'apiKey'
  | 'orderingDirection'
  | 'tree'
  | 'modularBlock'
  | 'draftModeActive'
  | 'allLocalesRequired'
  | 'collectionAppeareance'
  | 'hasSingletonItem'
  | 'originalId'
  | 'fields.tags'
  | 'fields.id'
  | 'fields.parent.id'
  | 'fields.parent.parent.id'
  | 'fields.parent.parent.children'
  | 'fields.parent.children'
  | 'fields.parent.children.id'
  | 'fields.parent.children.children'
  | 'fields.parent.internal.content'
  | 'fields.parent.internal.contentDigest'
  | 'fields.parent.internal.description'
  | 'fields.parent.internal.fieldOwners'
  | 'fields.parent.internal.ignoreType'
  | 'fields.parent.internal.mediaType'
  | 'fields.parent.internal.owner'
  | 'fields.parent.internal.type'
  | 'fields.children'
  | 'fields.children.id'
  | 'fields.children.parent.id'
  | 'fields.children.parent.children'
  | 'fields.children.children'
  | 'fields.children.children.id'
  | 'fields.children.children.children'
  | 'fields.children.internal.content'
  | 'fields.children.internal.contentDigest'
  | 'fields.children.internal.description'
  | 'fields.children.internal.fieldOwners'
  | 'fields.children.internal.ignoreType'
  | 'fields.children.internal.mediaType'
  | 'fields.children.internal.owner'
  | 'fields.children.internal.type'
  | 'fields.internal.content'
  | 'fields.internal.contentDigest'
  | 'fields.internal.description'
  | 'fields.internal.fieldOwners'
  | 'fields.internal.ignoreType'
  | 'fields.internal.mediaType'
  | 'fields.internal.owner'
  | 'fields.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DatoCmsModelGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DatoCmsModelEdge>;
  readonly nodes: ReadonlyArray<DatoCmsModel>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DatoCmsModelGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DatoCmsModelGroupConnection_distinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelGroupConnection_maxArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelGroupConnection_minArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelGroupConnection_sumArgs = {
  field: DatoCmsModelFieldsEnum;
};


type DatoCmsModelGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

type DatoCmsModelSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DatoCmsModelFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GatsbyDatoCmsSeoMetaTagsFragment = Pick<DatoCmsSeoMetaTags, 'tags'>;

type GatsbyDatoCmsSizesFragment = Pick<DatoCmsFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type AboutQueryQueryVariables = Exact<{ [key: string]: never; }>;


type AboutQueryQuery = { readonly about: Maybe<(
    Pick<DatoCmsAboutPage, 'title' | 'subtitle'>
    & { readonly seoMetaTags: Maybe<GatsbyDatoCmsSeoMetaTagsFragment>, readonly photo: Maybe<{ readonly fluid: Maybe<GatsbyDatoCmsSizesFragment> }>, readonly bioNode: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<{ readonly social: Maybe<ReadonlyArray<Maybe<Pick<Social, 'url' | 'name'>>>> }> }> };

type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


type LayoutQueryQuery = { readonly datoCmsSite: Maybe<{ readonly globalSeo: Maybe<Pick<DatoCmsGlobalSeo, 'siteName'>>, readonly faviconMetaTags: Maybe<Pick<DatoCmsFaviconMetaTags, 'tags'>> }>, readonly datoCmsHome: Maybe<(
    Pick<DatoCmsHome, 'copyright'>
    & { readonly seoMetaTags: Maybe<Pick<DatoCmsSeoMetaTags, 'tags'>>, readonly introTextNode: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )>, readonly allDatoCmsSocialProfile: { readonly nodes: ReadonlyArray<(
      Pick<DatoCmsSocialProfile, 'url' | 'profileType'>
      & { readonly icon: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData'>> }
    )> }, readonly sidebar: Maybe<Pick<DatoCmsAsset, 'url'>>, readonly catImages: { readonly nodes: ReadonlyArray<Pick<DatoCmsAsset, 'gatsbyImageData'>> }, readonly catIcon: Maybe<Pick<DatoCmsAsset, 'gatsbyImageData'>> };

type BGTagsQueryVariables = Exact<{ [key: string]: never; }>;


type BGTagsQuery = { readonly gatsbyImages: { readonly nodes: ReadonlyArray<Pick<DatoCmsAsset, 'gatsbyImageData' | 'id' | 'url'>> } };

type VisdevTagsQueryVariables = Exact<{ [key: string]: never; }>;


type VisdevTagsQuery = { readonly gatsbyImages: { readonly nodes: ReadonlyArray<Pick<DatoCmsAsset, 'gatsbyImageData' | 'id' | 'url'>> } };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly themeUiConfig: Maybe<Pick<ThemeUiConfig, 'preset' | 'prismPreset'>> };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<{ readonly social: Maybe<ReadonlyArray<Maybe<Pick<Social, 'url' | 'name'>>>> }> }> };

type GatsbyDatoCmsResolutionsFragment = Pick<DatoCmsFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyDatoCmsResolutions_tracedSVGFragment = Pick<DatoCmsFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyDatoCmsResolutions_noBase64Fragment = Pick<DatoCmsFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyDatoCmsSizes_tracedSVGFragment = Pick<DatoCmsFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyDatoCmsSizes_noBase64Fragment = Pick<DatoCmsFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyDatoCmsFixedFragment = Pick<DatoCmsFixed, 'base64' | 'width' | 'height' | 'aspectRatio' | 'src' | 'srcSet'>;

type GatsbyDatoCmsFixed_tracedSVGFragment = Pick<DatoCmsFixed, 'tracedSVG' | 'width' | 'height' | 'aspectRatio' | 'src' | 'srcSet'>;

type GatsbyDatoCmsFixed_noBase64Fragment = Pick<DatoCmsFixed, 'width' | 'height' | 'src' | 'srcSet' | 'aspectRatio'>;

type GatsbyDatoCmsFluidFragment = Pick<DatoCmsFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyDatoCmsFluid_tracedSVGFragment = Pick<DatoCmsFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyDatoCmsFluid_noBase64Fragment = Pick<DatoCmsFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyDatoCmsFaviconMetaTagsFragment = Pick<DatoCmsFaviconMetaTags, 'tags'>;

}