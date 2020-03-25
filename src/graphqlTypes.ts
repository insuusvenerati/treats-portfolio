export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DatoCmsAboutPage = Node & {
  __typename?: 'DatoCmsAboutPage';
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  photo?: Maybe<DatoCmsFileField>;
  bio?: Maybe<Scalars['String']>;
  bioNode?: Maybe<DatoCmsTextNode>;
  seoSettings?: Maybe<DatoCmsSeoField>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAboutPageConnection = {
  __typename?: 'DatoCmsAboutPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAboutPageEdge>;
  nodes: Array<DatoCmsAboutPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsAboutPageGroupConnection>;
};

export type DatoCmsAboutPageConnectionDistinctArgs = {
  field: DatoCmsAboutPageFieldsEnum;
};

export type DatoCmsAboutPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsAboutPageFieldsEnum;
};

export type DatoCmsAboutPageEdge = {
  __typename?: 'DatoCmsAboutPageEdge';
  next?: Maybe<DatoCmsAboutPage>;
  node: DatoCmsAboutPage;
  previous?: Maybe<DatoCmsAboutPage>;
};

export enum DatoCmsAboutPageFieldsEnum {
  Title = 'title',
  Subtitle = 'subtitle',
  PhotoSize = 'photo___size',
  PhotoWidth = 'photo___width',
  PhotoHeight = 'photo___height',
  PhotoPath = 'photo___path',
  PhotoFormat = 'photo___format',
  PhotoIsImage = 'photo___isImage',
  PhotoCreatedAt = 'photo___createdAt',
  PhotoUrl = 'photo___url',
  PhotoNotes = 'photo___notes',
  PhotoAuthor = 'photo___author',
  PhotoCopyright = 'photo___copyright',
  PhotoOriginalId = 'photo___originalId',
  PhotoTags = 'photo___tags',
  PhotoSmartTags = 'photo___smartTags',
  PhotoFilename = 'photo___filename',
  PhotoBasename = 'photo___basename',
  PhotoExifInfo = 'photo___exifInfo',
  PhotoMimeType = 'photo___mimeType',
  PhotoColors = 'photo___colors',
  PhotoColorsRed = 'photo___colors___red',
  PhotoColorsGreen = 'photo___colors___green',
  PhotoColorsBlue = 'photo___colors___blue',
  PhotoColorsAlpha = 'photo___colors___alpha',
  PhotoColorsRgb = 'photo___colors___rgb',
  PhotoColorsHex = 'photo___colors___hex',
  PhotoBlurhash = 'photo___blurhash',
  PhotoVideoMuxPlaybackId = 'photo___video___muxPlaybackId',
  PhotoVideoFrameRate = 'photo___video___frameRate',
  PhotoVideoDuration = 'photo___video___duration',
  PhotoVideoStreamingUrl = 'photo___video___streamingUrl',
  PhotoVideoThumbnailUrl = 'photo___video___thumbnailUrl',
  PhotoVideoMp4Url = 'photo___video___mp4Url',
  PhotoFluidBase64 = 'photo___fluid___base64',
  PhotoFluidTracedSvg = 'photo___fluid___tracedSVG',
  PhotoFluidAspectRatio = 'photo___fluid___aspectRatio',
  PhotoFluidWidth = 'photo___fluid___width',
  PhotoFluidHeight = 'photo___fluid___height',
  PhotoFluidSrc = 'photo___fluid___src',
  PhotoFluidSrcSet = 'photo___fluid___srcSet',
  PhotoFluidSizes = 'photo___fluid___sizes',
  PhotoSizesBase64 = 'photo___sizes___base64',
  PhotoSizesTracedSvg = 'photo___sizes___tracedSVG',
  PhotoSizesAspectRatio = 'photo___sizes___aspectRatio',
  PhotoSizesWidth = 'photo___sizes___width',
  PhotoSizesHeight = 'photo___sizes___height',
  PhotoSizesSrc = 'photo___sizes___src',
  PhotoSizesSrcSet = 'photo___sizes___srcSet',
  PhotoSizesSizes = 'photo___sizes___sizes',
  PhotoFixedBase64 = 'photo___fixed___base64',
  PhotoFixedTracedSvg = 'photo___fixed___tracedSVG',
  PhotoFixedAspectRatio = 'photo___fixed___aspectRatio',
  PhotoFixedWidth = 'photo___fixed___width',
  PhotoFixedHeight = 'photo___fixed___height',
  PhotoFixedSrc = 'photo___fixed___src',
  PhotoFixedSrcSet = 'photo___fixed___srcSet',
  PhotoFixedSizes = 'photo___fixed___sizes',
  PhotoResolutionsBase64 = 'photo___resolutions___base64',
  PhotoResolutionsTracedSvg = 'photo___resolutions___tracedSVG',
  PhotoResolutionsAspectRatio = 'photo___resolutions___aspectRatio',
  PhotoResolutionsWidth = 'photo___resolutions___width',
  PhotoResolutionsHeight = 'photo___resolutions___height',
  PhotoResolutionsSrc = 'photo___resolutions___src',
  PhotoResolutionsSrcSet = 'photo___resolutions___srcSet',
  PhotoResolutionsSizes = 'photo___resolutions___sizes',
  PhotoAlt = 'photo___alt',
  PhotoTitle = 'photo___title',
  PhotoCustomData = 'photo___customData',
  Bio = 'bio',
  BioNodeId = 'bioNode___id',
  BioNodeParentId = 'bioNode___parent___id',
  BioNodeParentParentId = 'bioNode___parent___parent___id',
  BioNodeParentParentChildren = 'bioNode___parent___parent___children',
  BioNodeParentChildren = 'bioNode___parent___children',
  BioNodeParentChildrenId = 'bioNode___parent___children___id',
  BioNodeParentChildrenChildren = 'bioNode___parent___children___children',
  BioNodeParentInternalContent = 'bioNode___parent___internal___content',
  BioNodeParentInternalContentDigest = 'bioNode___parent___internal___contentDigest',
  BioNodeParentInternalDescription = 'bioNode___parent___internal___description',
  BioNodeParentInternalFieldOwners = 'bioNode___parent___internal___fieldOwners',
  BioNodeParentInternalIgnoreType = 'bioNode___parent___internal___ignoreType',
  BioNodeParentInternalMediaType = 'bioNode___parent___internal___mediaType',
  BioNodeParentInternalOwner = 'bioNode___parent___internal___owner',
  BioNodeParentInternalType = 'bioNode___parent___internal___type',
  BioNodeChildren = 'bioNode___children',
  BioNodeChildrenId = 'bioNode___children___id',
  BioNodeChildrenParentId = 'bioNode___children___parent___id',
  BioNodeChildrenParentChildren = 'bioNode___children___parent___children',
  BioNodeChildrenChildren = 'bioNode___children___children',
  BioNodeChildrenChildrenId = 'bioNode___children___children___id',
  BioNodeChildrenChildrenChildren = 'bioNode___children___children___children',
  BioNodeChildrenInternalContent = 'bioNode___children___internal___content',
  BioNodeChildrenInternalContentDigest = 'bioNode___children___internal___contentDigest',
  BioNodeChildrenInternalDescription = 'bioNode___children___internal___description',
  BioNodeChildrenInternalFieldOwners = 'bioNode___children___internal___fieldOwners',
  BioNodeChildrenInternalIgnoreType = 'bioNode___children___internal___ignoreType',
  BioNodeChildrenInternalMediaType = 'bioNode___children___internal___mediaType',
  BioNodeChildrenInternalOwner = 'bioNode___children___internal___owner',
  BioNodeChildrenInternalType = 'bioNode___children___internal___type',
  BioNodeInternalContent = 'bioNode___internal___content',
  BioNodeInternalContentDigest = 'bioNode___internal___contentDigest',
  BioNodeInternalDescription = 'bioNode___internal___description',
  BioNodeInternalFieldOwners = 'bioNode___internal___fieldOwners',
  BioNodeInternalIgnoreType = 'bioNode___internal___ignoreType',
  BioNodeInternalMediaType = 'bioNode___internal___mediaType',
  BioNodeInternalOwner = 'bioNode___internal___owner',
  BioNodeInternalType = 'bioNode___internal___type',
  BioNodeChildMarkdownRemarkId = 'bioNode___childMarkdownRemark___id',
  BioNodeChildMarkdownRemarkFrontmatterTitle = 'bioNode___childMarkdownRemark___frontmatter___title',
  BioNodeChildMarkdownRemarkExcerpt = 'bioNode___childMarkdownRemark___excerpt',
  BioNodeChildMarkdownRemarkRawMarkdownBody = 'bioNode___childMarkdownRemark___rawMarkdownBody',
  BioNodeChildMarkdownRemarkHtml = 'bioNode___childMarkdownRemark___html',
  BioNodeChildMarkdownRemarkHtmlAst = 'bioNode___childMarkdownRemark___htmlAst',
  BioNodeChildMarkdownRemarkExcerptAst = 'bioNode___childMarkdownRemark___excerptAst',
  BioNodeChildMarkdownRemarkHeadings = 'bioNode___childMarkdownRemark___headings',
  BioNodeChildMarkdownRemarkHeadingsValue = 'bioNode___childMarkdownRemark___headings___value',
  BioNodeChildMarkdownRemarkHeadingsDepth = 'bioNode___childMarkdownRemark___headings___depth',
  BioNodeChildMarkdownRemarkTimeToRead = 'bioNode___childMarkdownRemark___timeToRead',
  BioNodeChildMarkdownRemarkTableOfContents = 'bioNode___childMarkdownRemark___tableOfContents',
  BioNodeChildMarkdownRemarkWordCountParagraphs = 'bioNode___childMarkdownRemark___wordCount___paragraphs',
  BioNodeChildMarkdownRemarkWordCountSentences = 'bioNode___childMarkdownRemark___wordCount___sentences',
  BioNodeChildMarkdownRemarkWordCountWords = 'bioNode___childMarkdownRemark___wordCount___words',
  BioNodeChildMarkdownRemarkParentId = 'bioNode___childMarkdownRemark___parent___id',
  BioNodeChildMarkdownRemarkParentChildren = 'bioNode___childMarkdownRemark___parent___children',
  BioNodeChildMarkdownRemarkChildren = 'bioNode___childMarkdownRemark___children',
  BioNodeChildMarkdownRemarkChildrenId = 'bioNode___childMarkdownRemark___children___id',
  BioNodeChildMarkdownRemarkChildrenChildren = 'bioNode___childMarkdownRemark___children___children',
  BioNodeChildMarkdownRemarkInternalContent = 'bioNode___childMarkdownRemark___internal___content',
  BioNodeChildMarkdownRemarkInternalContentDigest = 'bioNode___childMarkdownRemark___internal___contentDigest',
  BioNodeChildMarkdownRemarkInternalDescription = 'bioNode___childMarkdownRemark___internal___description',
  BioNodeChildMarkdownRemarkInternalFieldOwners = 'bioNode___childMarkdownRemark___internal___fieldOwners',
  BioNodeChildMarkdownRemarkInternalIgnoreType = 'bioNode___childMarkdownRemark___internal___ignoreType',
  BioNodeChildMarkdownRemarkInternalMediaType = 'bioNode___childMarkdownRemark___internal___mediaType',
  BioNodeChildMarkdownRemarkInternalOwner = 'bioNode___childMarkdownRemark___internal___owner',
  BioNodeChildMarkdownRemarkInternalType = 'bioNode___childMarkdownRemark___internal___type',
  SeoSettingsTitle = 'seoSettings___title',
  SeoSettingsDescription = 'seoSettings___description',
  SeoSettingsTwitterCard = 'seoSettings___twitterCard',
  SeoSettingsImageSize = 'seoSettings___image___size',
  SeoSettingsImageWidth = 'seoSettings___image___width',
  SeoSettingsImageHeight = 'seoSettings___image___height',
  SeoSettingsImagePath = 'seoSettings___image___path',
  SeoSettingsImageFormat = 'seoSettings___image___format',
  SeoSettingsImageIsImage = 'seoSettings___image___isImage',
  SeoSettingsImageCreatedAt = 'seoSettings___image___createdAt',
  SeoSettingsImageUrl = 'seoSettings___image___url',
  SeoSettingsImageNotes = 'seoSettings___image___notes',
  SeoSettingsImageAuthor = 'seoSettings___image___author',
  SeoSettingsImageCopyright = 'seoSettings___image___copyright',
  SeoSettingsImageOriginalId = 'seoSettings___image___originalId',
  SeoSettingsImageTags = 'seoSettings___image___tags',
  SeoSettingsImageSmartTags = 'seoSettings___image___smartTags',
  SeoSettingsImageFilename = 'seoSettings___image___filename',
  SeoSettingsImageBasename = 'seoSettings___image___basename',
  SeoSettingsImageExifInfo = 'seoSettings___image___exifInfo',
  SeoSettingsImageMimeType = 'seoSettings___image___mimeType',
  SeoSettingsImageColors = 'seoSettings___image___colors',
  SeoSettingsImageColorsRed = 'seoSettings___image___colors___red',
  SeoSettingsImageColorsGreen = 'seoSettings___image___colors___green',
  SeoSettingsImageColorsBlue = 'seoSettings___image___colors___blue',
  SeoSettingsImageColorsAlpha = 'seoSettings___image___colors___alpha',
  SeoSettingsImageColorsRgb = 'seoSettings___image___colors___rgb',
  SeoSettingsImageColorsHex = 'seoSettings___image___colors___hex',
  SeoSettingsImageBlurhash = 'seoSettings___image___blurhash',
  SeoSettingsImageVideoMuxPlaybackId = 'seoSettings___image___video___muxPlaybackId',
  SeoSettingsImageVideoFrameRate = 'seoSettings___image___video___frameRate',
  SeoSettingsImageVideoDuration = 'seoSettings___image___video___duration',
  SeoSettingsImageVideoStreamingUrl = 'seoSettings___image___video___streamingUrl',
  SeoSettingsImageVideoThumbnailUrl = 'seoSettings___image___video___thumbnailUrl',
  SeoSettingsImageVideoMp4Url = 'seoSettings___image___video___mp4Url',
  SeoSettingsImageFluidBase64 = 'seoSettings___image___fluid___base64',
  SeoSettingsImageFluidTracedSvg = 'seoSettings___image___fluid___tracedSVG',
  SeoSettingsImageFluidAspectRatio = 'seoSettings___image___fluid___aspectRatio',
  SeoSettingsImageFluidWidth = 'seoSettings___image___fluid___width',
  SeoSettingsImageFluidHeight = 'seoSettings___image___fluid___height',
  SeoSettingsImageFluidSrc = 'seoSettings___image___fluid___src',
  SeoSettingsImageFluidSrcSet = 'seoSettings___image___fluid___srcSet',
  SeoSettingsImageFluidSizes = 'seoSettings___image___fluid___sizes',
  SeoSettingsImageSizesBase64 = 'seoSettings___image___sizes___base64',
  SeoSettingsImageSizesTracedSvg = 'seoSettings___image___sizes___tracedSVG',
  SeoSettingsImageSizesAspectRatio = 'seoSettings___image___sizes___aspectRatio',
  SeoSettingsImageSizesWidth = 'seoSettings___image___sizes___width',
  SeoSettingsImageSizesHeight = 'seoSettings___image___sizes___height',
  SeoSettingsImageSizesSrc = 'seoSettings___image___sizes___src',
  SeoSettingsImageSizesSrcSet = 'seoSettings___image___sizes___srcSet',
  SeoSettingsImageSizesSizes = 'seoSettings___image___sizes___sizes',
  SeoSettingsImageFixedBase64 = 'seoSettings___image___fixed___base64',
  SeoSettingsImageFixedTracedSvg = 'seoSettings___image___fixed___tracedSVG',
  SeoSettingsImageFixedAspectRatio = 'seoSettings___image___fixed___aspectRatio',
  SeoSettingsImageFixedWidth = 'seoSettings___image___fixed___width',
  SeoSettingsImageFixedHeight = 'seoSettings___image___fixed___height',
  SeoSettingsImageFixedSrc = 'seoSettings___image___fixed___src',
  SeoSettingsImageFixedSrcSet = 'seoSettings___image___fixed___srcSet',
  SeoSettingsImageFixedSizes = 'seoSettings___image___fixed___sizes',
  SeoSettingsImageResolutionsBase64 = 'seoSettings___image___resolutions___base64',
  SeoSettingsImageResolutionsTracedSvg = 'seoSettings___image___resolutions___tracedSVG',
  SeoSettingsImageResolutionsAspectRatio = 'seoSettings___image___resolutions___aspectRatio',
  SeoSettingsImageResolutionsWidth = 'seoSettings___image___resolutions___width',
  SeoSettingsImageResolutionsHeight = 'seoSettings___image___resolutions___height',
  SeoSettingsImageResolutionsSrc = 'seoSettings___image___resolutions___src',
  SeoSettingsImageResolutionsSrcSet = 'seoSettings___image___resolutions___srcSet',
  SeoSettingsImageResolutionsSizes = 'seoSettings___image___resolutions___sizes',
  SeoSettingsImageId = 'seoSettings___image___id',
  SeoSettingsImageParentId = 'seoSettings___image___parent___id',
  SeoSettingsImageParentChildren = 'seoSettings___image___parent___children',
  SeoSettingsImageChildren = 'seoSettings___image___children',
  SeoSettingsImageChildrenId = 'seoSettings___image___children___id',
  SeoSettingsImageChildrenChildren = 'seoSettings___image___children___children',
  SeoSettingsImageInternalContent = 'seoSettings___image___internal___content',
  SeoSettingsImageInternalContentDigest = 'seoSettings___image___internal___contentDigest',
  SeoSettingsImageInternalDescription = 'seoSettings___image___internal___description',
  SeoSettingsImageInternalFieldOwners = 'seoSettings___image___internal___fieldOwners',
  SeoSettingsImageInternalIgnoreType = 'seoSettings___image___internal___ignoreType',
  SeoSettingsImageInternalMediaType = 'seoSettings___image___internal___mediaType',
  SeoSettingsImageInternalOwner = 'seoSettings___image___internal___owner',
  SeoSettingsImageInternalType = 'seoSettings___image___internal___type',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsAboutPageFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<DatoCmsFileFieldFilterInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  bioNode?: Maybe<DatoCmsTextNodeFilterInput>;
  seoSettings?: Maybe<DatoCmsSeoFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsAboutPageGroupConnection = {
  __typename?: 'DatoCmsAboutPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAboutPageEdge>;
  nodes: Array<DatoCmsAboutPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsAboutPageSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsAboutPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAsset = Node & {
  __typename?: 'DatoCmsAsset';
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsAssetConnection = {
  __typename?: 'DatoCmsAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsAssetGroupConnection>;
};

export type DatoCmsAssetConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetEdge = {
  __typename?: 'DatoCmsAssetEdge';
  next?: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous?: Maybe<DatoCmsAsset>;
};

export enum DatoCmsAssetFieldsEnum {
  Size = 'size',
  Width = 'width',
  Height = 'height',
  Path = 'path',
  Format = 'format',
  IsImage = 'isImage',
  CreatedAt = 'createdAt',
  Url = 'url',
  Notes = 'notes',
  Author = 'author',
  Copyright = 'copyright',
  OriginalId = 'originalId',
  Tags = 'tags',
  SmartTags = 'smartTags',
  Filename = 'filename',
  Basename = 'basename',
  ExifInfo = 'exifInfo',
  MimeType = 'mimeType',
  Colors = 'colors',
  ColorsRed = 'colors___red',
  ColorsGreen = 'colors___green',
  ColorsBlue = 'colors___blue',
  ColorsAlpha = 'colors___alpha',
  ColorsRgb = 'colors___rgb',
  ColorsHex = 'colors___hex',
  Blurhash = 'blurhash',
  VideoMuxPlaybackId = 'video___muxPlaybackId',
  VideoFrameRate = 'video___frameRate',
  VideoDuration = 'video___duration',
  VideoStreamingUrl = 'video___streamingUrl',
  VideoThumbnailUrl = 'video___thumbnailUrl',
  VideoMp4Url = 'video___mp4Url',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidWidth = 'fluid___width',
  FluidHeight = 'fluid___height',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesWidth = 'sizes___width',
  SizesHeight = 'sizes___height',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSizes = 'sizes___sizes',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSizes = 'fixed___sizes',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSizes = 'resolutions___sizes',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsAssetFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsAssetGroupConnection = {
  __typename?: 'DatoCmsAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsAssetSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAssetVideo = {
  __typename?: 'DatoCmsAssetVideo';
  muxPlaybackId?: Maybe<Scalars['String']>;
  frameRate?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  streamingUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  mp4Url?: Maybe<Scalars['String']>;
};

export type DatoCmsAssetVideoThumbnailUrlArgs = {
  format?: Maybe<DatoCmsAssetVideoThumbnailFormat>;
};

export type DatoCmsAssetVideoMp4UrlArgs = {
  res?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  exactRes?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};

export type DatoCmsAssetVideoFilterInput = {
  muxPlaybackId?: Maybe<StringQueryOperatorInput>;
  frameRate?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  streamingUrl?: Maybe<StringQueryOperatorInput>;
  thumbnailUrl?: Maybe<StringQueryOperatorInput>;
  mp4Url?: Maybe<StringQueryOperatorInput>;
};

export enum DatoCmsAssetVideoMp4ResolutionQuality {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export enum DatoCmsAssetVideoThumbnailFormat {
  Jpg = 'jpg',
  Png = 'png',
  Gif = 'gif',
}

export type DatoCmsColorField = {
  __typename?: 'DatoCmsColorField';
  red?: Maybe<Scalars['Int']>;
  green?: Maybe<Scalars['Int']>;
  blue?: Maybe<Scalars['Int']>;
  alpha?: Maybe<Scalars['Int']>;
  rgb?: Maybe<Scalars['String']>;
  hex?: Maybe<Scalars['String']>;
};

export type DatoCmsColorFieldFilterInput = {
  red?: Maybe<IntQueryOperatorInput>;
  green?: Maybe<IntQueryOperatorInput>;
  blue?: Maybe<IntQueryOperatorInput>;
  alpha?: Maybe<IntQueryOperatorInput>;
  rgb?: Maybe<StringQueryOperatorInput>;
  hex?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsColorFieldFilterListInput = {
  elemMatch?: Maybe<DatoCmsColorFieldFilterInput>;
};

export type DatoCmsFaviconMetaTags = Node & {
  __typename?: 'DatoCmsFaviconMetaTags';
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFaviconMetaTagsConnection = {
  __typename?: 'DatoCmsFaviconMetaTagsConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
};

export type DatoCmsFaviconMetaTagsConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsEdge = {
  __typename?: 'DatoCmsFaviconMetaTagsEdge';
  next?: Maybe<DatoCmsFaviconMetaTags>;
  node: DatoCmsFaviconMetaTags;
  previous?: Maybe<DatoCmsFaviconMetaTags>;
};

export enum DatoCmsFaviconMetaTagsFieldsEnum {
  Tags = 'tags',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsFaviconMetaTagsFilterInput = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsFaviconMetaTagsGroupConnection = {
  __typename?: 'DatoCmsFaviconMetaTagsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsFaviconMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFaviconMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsField = Node & {
  __typename?: 'DatoCmsField';
  label?: Maybe<Scalars['String']>;
  fieldType?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  localized?: Maybe<Scalars['Boolean']>;
  validators?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  appeareance?: Maybe<Scalars['JSON']>;
  defaultValue?: Maybe<Scalars['JSON']>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFieldConnection = {
  __typename?: 'DatoCmsFieldConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsFieldGroupConnection>;
};

export type DatoCmsFieldConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldEdge = {
  __typename?: 'DatoCmsFieldEdge';
  next?: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous?: Maybe<DatoCmsField>;
};

export enum DatoCmsFieldFieldsEnum {
  Label = 'label',
  FieldType = 'fieldType',
  ApiKey = 'apiKey',
  Localized = 'localized',
  Validators = 'validators',
  Position = 'position',
  Appeareance = 'appeareance',
  DefaultValue = 'defaultValue',
  OriginalId = 'originalId',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsFieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsFieldGroupConnection = {
  __typename?: 'DatoCmsFieldGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsFieldSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsFileField = {
  __typename?: 'DatoCmsFileField';
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['JSON']>;
};

export type DatoCmsFileFieldCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsFileFieldFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsFileFieldSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsFileFieldFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsFileFieldResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsFileFieldFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  customData?: Maybe<JsonQueryOperatorInput>;
};

export type DatoCmsFileFieldFilterListInput = {
  elemMatch?: Maybe<DatoCmsFileFieldFilterInput>;
};

export type DatoCmsFixed = {
  __typename?: 'DatoCmsFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Int'];
  height: Scalars['Int'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes?: Maybe<Scalars['String']>;
};

export type DatoCmsFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsFluid = {
  __typename?: 'DatoCmsFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Scalars['String'];
};

export type DatoCmsFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsGlobalSeo = {
  __typename?: 'DatoCmsGlobalSeo';
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsGlobalSeoFilterInput = {
  siteName?: Maybe<StringQueryOperatorInput>;
  titleSuffix?: Maybe<StringQueryOperatorInput>;
  twitterAccount?: Maybe<StringQueryOperatorInput>;
  facebookPageUrl?: Maybe<StringQueryOperatorInput>;
  fallbackSeo?: Maybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsHome = Node & {
  __typename?: 'DatoCmsHome';
  introText?: Maybe<Scalars['String']>;
  introTextNode?: Maybe<DatoCmsTextNode>;
  copyright?: Maybe<Scalars['String']>;
  seoSettings?: Maybe<DatoCmsSeoField>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsHomeConnection = {
  __typename?: 'DatoCmsHomeConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHomeEdge>;
  nodes: Array<DatoCmsHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsHomeGroupConnection>;
};

export type DatoCmsHomeConnectionDistinctArgs = {
  field: DatoCmsHomeFieldsEnum;
};

export type DatoCmsHomeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsHomeFieldsEnum;
};

export type DatoCmsHomeEdge = {
  __typename?: 'DatoCmsHomeEdge';
  next?: Maybe<DatoCmsHome>;
  node: DatoCmsHome;
  previous?: Maybe<DatoCmsHome>;
};

export enum DatoCmsHomeFieldsEnum {
  IntroText = 'introText',
  IntroTextNodeId = 'introTextNode___id',
  IntroTextNodeParentId = 'introTextNode___parent___id',
  IntroTextNodeParentParentId = 'introTextNode___parent___parent___id',
  IntroTextNodeParentParentChildren = 'introTextNode___parent___parent___children',
  IntroTextNodeParentChildren = 'introTextNode___parent___children',
  IntroTextNodeParentChildrenId = 'introTextNode___parent___children___id',
  IntroTextNodeParentChildrenChildren = 'introTextNode___parent___children___children',
  IntroTextNodeParentInternalContent = 'introTextNode___parent___internal___content',
  IntroTextNodeParentInternalContentDigest = 'introTextNode___parent___internal___contentDigest',
  IntroTextNodeParentInternalDescription = 'introTextNode___parent___internal___description',
  IntroTextNodeParentInternalFieldOwners = 'introTextNode___parent___internal___fieldOwners',
  IntroTextNodeParentInternalIgnoreType = 'introTextNode___parent___internal___ignoreType',
  IntroTextNodeParentInternalMediaType = 'introTextNode___parent___internal___mediaType',
  IntroTextNodeParentInternalOwner = 'introTextNode___parent___internal___owner',
  IntroTextNodeParentInternalType = 'introTextNode___parent___internal___type',
  IntroTextNodeChildren = 'introTextNode___children',
  IntroTextNodeChildrenId = 'introTextNode___children___id',
  IntroTextNodeChildrenParentId = 'introTextNode___children___parent___id',
  IntroTextNodeChildrenParentChildren = 'introTextNode___children___parent___children',
  IntroTextNodeChildrenChildren = 'introTextNode___children___children',
  IntroTextNodeChildrenChildrenId = 'introTextNode___children___children___id',
  IntroTextNodeChildrenChildrenChildren = 'introTextNode___children___children___children',
  IntroTextNodeChildrenInternalContent = 'introTextNode___children___internal___content',
  IntroTextNodeChildrenInternalContentDigest = 'introTextNode___children___internal___contentDigest',
  IntroTextNodeChildrenInternalDescription = 'introTextNode___children___internal___description',
  IntroTextNodeChildrenInternalFieldOwners = 'introTextNode___children___internal___fieldOwners',
  IntroTextNodeChildrenInternalIgnoreType = 'introTextNode___children___internal___ignoreType',
  IntroTextNodeChildrenInternalMediaType = 'introTextNode___children___internal___mediaType',
  IntroTextNodeChildrenInternalOwner = 'introTextNode___children___internal___owner',
  IntroTextNodeChildrenInternalType = 'introTextNode___children___internal___type',
  IntroTextNodeInternalContent = 'introTextNode___internal___content',
  IntroTextNodeInternalContentDigest = 'introTextNode___internal___contentDigest',
  IntroTextNodeInternalDescription = 'introTextNode___internal___description',
  IntroTextNodeInternalFieldOwners = 'introTextNode___internal___fieldOwners',
  IntroTextNodeInternalIgnoreType = 'introTextNode___internal___ignoreType',
  IntroTextNodeInternalMediaType = 'introTextNode___internal___mediaType',
  IntroTextNodeInternalOwner = 'introTextNode___internal___owner',
  IntroTextNodeInternalType = 'introTextNode___internal___type',
  IntroTextNodeChildMarkdownRemarkId = 'introTextNode___childMarkdownRemark___id',
  IntroTextNodeChildMarkdownRemarkFrontmatterTitle = 'introTextNode___childMarkdownRemark___frontmatter___title',
  IntroTextNodeChildMarkdownRemarkExcerpt = 'introTextNode___childMarkdownRemark___excerpt',
  IntroTextNodeChildMarkdownRemarkRawMarkdownBody = 'introTextNode___childMarkdownRemark___rawMarkdownBody',
  IntroTextNodeChildMarkdownRemarkHtml = 'introTextNode___childMarkdownRemark___html',
  IntroTextNodeChildMarkdownRemarkHtmlAst = 'introTextNode___childMarkdownRemark___htmlAst',
  IntroTextNodeChildMarkdownRemarkExcerptAst = 'introTextNode___childMarkdownRemark___excerptAst',
  IntroTextNodeChildMarkdownRemarkHeadings = 'introTextNode___childMarkdownRemark___headings',
  IntroTextNodeChildMarkdownRemarkHeadingsValue = 'introTextNode___childMarkdownRemark___headings___value',
  IntroTextNodeChildMarkdownRemarkHeadingsDepth = 'introTextNode___childMarkdownRemark___headings___depth',
  IntroTextNodeChildMarkdownRemarkTimeToRead = 'introTextNode___childMarkdownRemark___timeToRead',
  IntroTextNodeChildMarkdownRemarkTableOfContents = 'introTextNode___childMarkdownRemark___tableOfContents',
  IntroTextNodeChildMarkdownRemarkWordCountParagraphs = 'introTextNode___childMarkdownRemark___wordCount___paragraphs',
  IntroTextNodeChildMarkdownRemarkWordCountSentences = 'introTextNode___childMarkdownRemark___wordCount___sentences',
  IntroTextNodeChildMarkdownRemarkWordCountWords = 'introTextNode___childMarkdownRemark___wordCount___words',
  IntroTextNodeChildMarkdownRemarkParentId = 'introTextNode___childMarkdownRemark___parent___id',
  IntroTextNodeChildMarkdownRemarkParentChildren = 'introTextNode___childMarkdownRemark___parent___children',
  IntroTextNodeChildMarkdownRemarkChildren = 'introTextNode___childMarkdownRemark___children',
  IntroTextNodeChildMarkdownRemarkChildrenId = 'introTextNode___childMarkdownRemark___children___id',
  IntroTextNodeChildMarkdownRemarkChildrenChildren = 'introTextNode___childMarkdownRemark___children___children',
  IntroTextNodeChildMarkdownRemarkInternalContent = 'introTextNode___childMarkdownRemark___internal___content',
  IntroTextNodeChildMarkdownRemarkInternalContentDigest = 'introTextNode___childMarkdownRemark___internal___contentDigest',
  IntroTextNodeChildMarkdownRemarkInternalDescription = 'introTextNode___childMarkdownRemark___internal___description',
  IntroTextNodeChildMarkdownRemarkInternalFieldOwners = 'introTextNode___childMarkdownRemark___internal___fieldOwners',
  IntroTextNodeChildMarkdownRemarkInternalIgnoreType = 'introTextNode___childMarkdownRemark___internal___ignoreType',
  IntroTextNodeChildMarkdownRemarkInternalMediaType = 'introTextNode___childMarkdownRemark___internal___mediaType',
  IntroTextNodeChildMarkdownRemarkInternalOwner = 'introTextNode___childMarkdownRemark___internal___owner',
  IntroTextNodeChildMarkdownRemarkInternalType = 'introTextNode___childMarkdownRemark___internal___type',
  Copyright = 'copyright',
  SeoSettingsTitle = 'seoSettings___title',
  SeoSettingsDescription = 'seoSettings___description',
  SeoSettingsTwitterCard = 'seoSettings___twitterCard',
  SeoSettingsImageSize = 'seoSettings___image___size',
  SeoSettingsImageWidth = 'seoSettings___image___width',
  SeoSettingsImageHeight = 'seoSettings___image___height',
  SeoSettingsImagePath = 'seoSettings___image___path',
  SeoSettingsImageFormat = 'seoSettings___image___format',
  SeoSettingsImageIsImage = 'seoSettings___image___isImage',
  SeoSettingsImageCreatedAt = 'seoSettings___image___createdAt',
  SeoSettingsImageUrl = 'seoSettings___image___url',
  SeoSettingsImageNotes = 'seoSettings___image___notes',
  SeoSettingsImageAuthor = 'seoSettings___image___author',
  SeoSettingsImageCopyright = 'seoSettings___image___copyright',
  SeoSettingsImageOriginalId = 'seoSettings___image___originalId',
  SeoSettingsImageTags = 'seoSettings___image___tags',
  SeoSettingsImageSmartTags = 'seoSettings___image___smartTags',
  SeoSettingsImageFilename = 'seoSettings___image___filename',
  SeoSettingsImageBasename = 'seoSettings___image___basename',
  SeoSettingsImageExifInfo = 'seoSettings___image___exifInfo',
  SeoSettingsImageMimeType = 'seoSettings___image___mimeType',
  SeoSettingsImageColors = 'seoSettings___image___colors',
  SeoSettingsImageColorsRed = 'seoSettings___image___colors___red',
  SeoSettingsImageColorsGreen = 'seoSettings___image___colors___green',
  SeoSettingsImageColorsBlue = 'seoSettings___image___colors___blue',
  SeoSettingsImageColorsAlpha = 'seoSettings___image___colors___alpha',
  SeoSettingsImageColorsRgb = 'seoSettings___image___colors___rgb',
  SeoSettingsImageColorsHex = 'seoSettings___image___colors___hex',
  SeoSettingsImageBlurhash = 'seoSettings___image___blurhash',
  SeoSettingsImageVideoMuxPlaybackId = 'seoSettings___image___video___muxPlaybackId',
  SeoSettingsImageVideoFrameRate = 'seoSettings___image___video___frameRate',
  SeoSettingsImageVideoDuration = 'seoSettings___image___video___duration',
  SeoSettingsImageVideoStreamingUrl = 'seoSettings___image___video___streamingUrl',
  SeoSettingsImageVideoThumbnailUrl = 'seoSettings___image___video___thumbnailUrl',
  SeoSettingsImageVideoMp4Url = 'seoSettings___image___video___mp4Url',
  SeoSettingsImageFluidBase64 = 'seoSettings___image___fluid___base64',
  SeoSettingsImageFluidTracedSvg = 'seoSettings___image___fluid___tracedSVG',
  SeoSettingsImageFluidAspectRatio = 'seoSettings___image___fluid___aspectRatio',
  SeoSettingsImageFluidWidth = 'seoSettings___image___fluid___width',
  SeoSettingsImageFluidHeight = 'seoSettings___image___fluid___height',
  SeoSettingsImageFluidSrc = 'seoSettings___image___fluid___src',
  SeoSettingsImageFluidSrcSet = 'seoSettings___image___fluid___srcSet',
  SeoSettingsImageFluidSizes = 'seoSettings___image___fluid___sizes',
  SeoSettingsImageSizesBase64 = 'seoSettings___image___sizes___base64',
  SeoSettingsImageSizesTracedSvg = 'seoSettings___image___sizes___tracedSVG',
  SeoSettingsImageSizesAspectRatio = 'seoSettings___image___sizes___aspectRatio',
  SeoSettingsImageSizesWidth = 'seoSettings___image___sizes___width',
  SeoSettingsImageSizesHeight = 'seoSettings___image___sizes___height',
  SeoSettingsImageSizesSrc = 'seoSettings___image___sizes___src',
  SeoSettingsImageSizesSrcSet = 'seoSettings___image___sizes___srcSet',
  SeoSettingsImageSizesSizes = 'seoSettings___image___sizes___sizes',
  SeoSettingsImageFixedBase64 = 'seoSettings___image___fixed___base64',
  SeoSettingsImageFixedTracedSvg = 'seoSettings___image___fixed___tracedSVG',
  SeoSettingsImageFixedAspectRatio = 'seoSettings___image___fixed___aspectRatio',
  SeoSettingsImageFixedWidth = 'seoSettings___image___fixed___width',
  SeoSettingsImageFixedHeight = 'seoSettings___image___fixed___height',
  SeoSettingsImageFixedSrc = 'seoSettings___image___fixed___src',
  SeoSettingsImageFixedSrcSet = 'seoSettings___image___fixed___srcSet',
  SeoSettingsImageFixedSizes = 'seoSettings___image___fixed___sizes',
  SeoSettingsImageResolutionsBase64 = 'seoSettings___image___resolutions___base64',
  SeoSettingsImageResolutionsTracedSvg = 'seoSettings___image___resolutions___tracedSVG',
  SeoSettingsImageResolutionsAspectRatio = 'seoSettings___image___resolutions___aspectRatio',
  SeoSettingsImageResolutionsWidth = 'seoSettings___image___resolutions___width',
  SeoSettingsImageResolutionsHeight = 'seoSettings___image___resolutions___height',
  SeoSettingsImageResolutionsSrc = 'seoSettings___image___resolutions___src',
  SeoSettingsImageResolutionsSrcSet = 'seoSettings___image___resolutions___srcSet',
  SeoSettingsImageResolutionsSizes = 'seoSettings___image___resolutions___sizes',
  SeoSettingsImageId = 'seoSettings___image___id',
  SeoSettingsImageParentId = 'seoSettings___image___parent___id',
  SeoSettingsImageParentChildren = 'seoSettings___image___parent___children',
  SeoSettingsImageChildren = 'seoSettings___image___children',
  SeoSettingsImageChildrenId = 'seoSettings___image___children___id',
  SeoSettingsImageChildrenChildren = 'seoSettings___image___children___children',
  SeoSettingsImageInternalContent = 'seoSettings___image___internal___content',
  SeoSettingsImageInternalContentDigest = 'seoSettings___image___internal___contentDigest',
  SeoSettingsImageInternalDescription = 'seoSettings___image___internal___description',
  SeoSettingsImageInternalFieldOwners = 'seoSettings___image___internal___fieldOwners',
  SeoSettingsImageInternalIgnoreType = 'seoSettings___image___internal___ignoreType',
  SeoSettingsImageInternalMediaType = 'seoSettings___image___internal___mediaType',
  SeoSettingsImageInternalOwner = 'seoSettings___image___internal___owner',
  SeoSettingsImageInternalType = 'seoSettings___image___internal___type',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsHomeFilterInput = {
  introText?: Maybe<StringQueryOperatorInput>;
  introTextNode?: Maybe<DatoCmsTextNodeFilterInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  seoSettings?: Maybe<DatoCmsSeoFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsHomeGroupConnection = {
  __typename?: 'DatoCmsHomeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHomeEdge>;
  nodes: Array<DatoCmsHome>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsHomeSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsHomeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsImgixParams = {
  ar?: Maybe<Scalars['String']>;
  auto?: Maybe<Scalars['String']>;
  bg?: Maybe<Scalars['String']>;
  blendAlign?: Maybe<Scalars['String']>;
  blendAlpha?: Maybe<Scalars['Int']>;
  blendCrop?: Maybe<Scalars['String']>;
  blendFit?: Maybe<Scalars['String']>;
  blendH?: Maybe<Scalars['String']>;
  blendMode?: Maybe<Scalars['String']>;
  blendPad?: Maybe<Scalars['Int']>;
  blendSize?: Maybe<Scalars['String']>;
  blendW?: Maybe<Scalars['String']>;
  blendX?: Maybe<Scalars['Int']>;
  blendY?: Maybe<Scalars['Int']>;
  blend?: Maybe<Scalars['String']>;
  blur?: Maybe<Scalars['Int']>;
  borderRadiusInner?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  bri?: Maybe<Scalars['Int']>;
  ch?: Maybe<Scalars['String']>;
  chromasub?: Maybe<Scalars['Int']>;
  colorquant?: Maybe<Scalars['Int']>;
  colors?: Maybe<Scalars['Int']>;
  con?: Maybe<Scalars['Int']>;
  cornerRadius?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  cs?: Maybe<Scalars['String']>;
  dl?: Maybe<Scalars['String']>;
  dpi?: Maybe<Scalars['Int']>;
  dpr?: Maybe<Scalars['Float']>;
  duotoneAlpha?: Maybe<Scalars['Int']>;
  duotone?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  expires?: Maybe<Scalars['String']>;
  faceindex?: Maybe<Scalars['Int']>;
  facepad?: Maybe<Scalars['Float']>;
  faces?: Maybe<Scalars['Int']>;
  fillColor?: Maybe<Scalars['String']>;
  fill?: Maybe<Scalars['String']>;
  fit?: Maybe<Scalars['String']>;
  flip?: Maybe<Scalars['String']>;
  fm?: Maybe<Scalars['String']>;
  fpDebug?: Maybe<Scalars['Boolean']>;
  fpX?: Maybe<Scalars['Float']>;
  fpY?: Maybe<Scalars['Float']>;
  fpZ?: Maybe<Scalars['Int']>;
  gam?: Maybe<Scalars['Int']>;
  h?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['Int']>;
  htn?: Maybe<Scalars['Int']>;
  hue?: Maybe<Scalars['Int']>;
  invert?: Maybe<Scalars['Boolean']>;
  lossless?: Maybe<Scalars['Boolean']>;
  markAlign?: Maybe<Scalars['String']>;
  markAlpha?: Maybe<Scalars['Int']>;
  markBase?: Maybe<Scalars['String']>;
  markFit?: Maybe<Scalars['String']>;
  markH?: Maybe<Scalars['String']>;
  markPad?: Maybe<Scalars['Int']>;
  markScale?: Maybe<Scalars['Int']>;
  markW?: Maybe<Scalars['String']>;
  markX?: Maybe<Scalars['Int']>;
  markY?: Maybe<Scalars['Int']>;
  mark?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['String']>;
  maskbg?: Maybe<Scalars['String']>;
  maxH?: Maybe<Scalars['Int']>;
  maxW?: Maybe<Scalars['Int']>;
  minH?: Maybe<Scalars['Int']>;
  minW?: Maybe<Scalars['Int']>;
  monochrome?: Maybe<Scalars['String']>;
  nr?: Maybe<Scalars['Int']>;
  nrs?: Maybe<Scalars['Int']>;
  orient?: Maybe<Scalars['Int']>;
  pad?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  palette?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  px?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['Int']>;
  rect?: Maybe<Scalars['String']>;
  rot?: Maybe<Scalars['Float']>;
  sat?: Maybe<Scalars['Int']>;
  sepia?: Maybe<Scalars['Int']>;
  shad?: Maybe<Scalars['Float']>;
  sharp?: Maybe<Scalars['Float']>;
  trimColor?: Maybe<Scalars['String']>;
  trimMd?: Maybe<Scalars['Float']>;
  trimPad?: Maybe<Scalars['Int']>;
  trimSd?: Maybe<Scalars['Float']>;
  trimTol?: Maybe<Scalars['Float']>;
  trim?: Maybe<Scalars['String']>;
  txtAlign?: Maybe<Scalars['String']>;
  txtClip?: Maybe<Scalars['String']>;
  txtColor?: Maybe<Scalars['String']>;
  txtFit?: Maybe<Scalars['String']>;
  txtFont?: Maybe<Scalars['String']>;
  txtLead?: Maybe<Scalars['Int']>;
  txtLig?: Maybe<Scalars['Int']>;
  txtLineColor?: Maybe<Scalars['String']>;
  txtLine?: Maybe<Scalars['Int']>;
  txtPad?: Maybe<Scalars['Int']>;
  txtShad?: Maybe<Scalars['Float']>;
  txtSize?: Maybe<Scalars['Int']>;
  txtTrack?: Maybe<Scalars['Int']>;
  txtWidth?: Maybe<Scalars['Int']>;
  txt?: Maybe<Scalars['String']>;
  usm?: Maybe<Scalars['Int']>;
  usmrad?: Maybe<Scalars['Float']>;
  vib?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['String']>;
};

export type DatoCmsLatLonField = {
  __typename?: 'DatoCmsLatLonField';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type DatoCmsMetaField = {
  __typename?: 'DatoCmsMetaField';
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  isValid?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldFirstPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  isValid?: Maybe<BooleanQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsModel = Node & {
  __typename?: 'DatoCmsModel';
  name?: Maybe<Scalars['String']>;
  singleton?: Maybe<Scalars['Boolean']>;
  sortable?: Maybe<Scalars['Boolean']>;
  apiKey?: Maybe<Scalars['String']>;
  orderingDirection?: Maybe<Scalars['String']>;
  tree?: Maybe<Scalars['Boolean']>;
  modularBlock?: Maybe<Scalars['Boolean']>;
  draftModeActive?: Maybe<Scalars['Boolean']>;
  allLocalesRequired?: Maybe<Scalars['Boolean']>;
  collectionAppeareance?: Maybe<Scalars['String']>;
  hasSingletonItem?: Maybe<Scalars['Boolean']>;
  originalId?: Maybe<Scalars['String']>;
  fields?: Maybe<DatoCmsFaviconMetaTags>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsModelConnection = {
  __typename?: 'DatoCmsModelConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsModelGroupConnection>;
};

export type DatoCmsModelConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelEdge = {
  __typename?: 'DatoCmsModelEdge';
  next?: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous?: Maybe<DatoCmsModel>;
};

export enum DatoCmsModelFieldsEnum {
  Name = 'name',
  Singleton = 'singleton',
  Sortable = 'sortable',
  ApiKey = 'apiKey',
  OrderingDirection = 'orderingDirection',
  Tree = 'tree',
  ModularBlock = 'modularBlock',
  DraftModeActive = 'draftModeActive',
  AllLocalesRequired = 'allLocalesRequired',
  CollectionAppeareance = 'collectionAppeareance',
  HasSingletonItem = 'hasSingletonItem',
  OriginalId = 'originalId',
  FieldsTags = 'fields___tags',
  FieldsId = 'fields___id',
  FieldsParentId = 'fields___parent___id',
  FieldsParentParentId = 'fields___parent___parent___id',
  FieldsParentParentChildren = 'fields___parent___parent___children',
  FieldsParentChildren = 'fields___parent___children',
  FieldsParentChildrenId = 'fields___parent___children___id',
  FieldsParentChildrenChildren = 'fields___parent___children___children',
  FieldsParentInternalContent = 'fields___parent___internal___content',
  FieldsParentInternalContentDigest = 'fields___parent___internal___contentDigest',
  FieldsParentInternalDescription = 'fields___parent___internal___description',
  FieldsParentInternalFieldOwners = 'fields___parent___internal___fieldOwners',
  FieldsParentInternalIgnoreType = 'fields___parent___internal___ignoreType',
  FieldsParentInternalMediaType = 'fields___parent___internal___mediaType',
  FieldsParentInternalOwner = 'fields___parent___internal___owner',
  FieldsParentInternalType = 'fields___parent___internal___type',
  FieldsChildren = 'fields___children',
  FieldsChildrenId = 'fields___children___id',
  FieldsChildrenParentId = 'fields___children___parent___id',
  FieldsChildrenParentChildren = 'fields___children___parent___children',
  FieldsChildrenChildren = 'fields___children___children',
  FieldsChildrenChildrenId = 'fields___children___children___id',
  FieldsChildrenChildrenChildren = 'fields___children___children___children',
  FieldsChildrenInternalContent = 'fields___children___internal___content',
  FieldsChildrenInternalContentDigest = 'fields___children___internal___contentDigest',
  FieldsChildrenInternalDescription = 'fields___children___internal___description',
  FieldsChildrenInternalFieldOwners = 'fields___children___internal___fieldOwners',
  FieldsChildrenInternalIgnoreType = 'fields___children___internal___ignoreType',
  FieldsChildrenInternalMediaType = 'fields___children___internal___mediaType',
  FieldsChildrenInternalOwner = 'fields___children___internal___owner',
  FieldsChildrenInternalType = 'fields___children___internal___type',
  FieldsInternalContent = 'fields___internal___content',
  FieldsInternalContentDigest = 'fields___internal___contentDigest',
  FieldsInternalDescription = 'fields___internal___description',
  FieldsInternalFieldOwners = 'fields___internal___fieldOwners',
  FieldsInternalIgnoreType = 'fields___internal___ignoreType',
  FieldsInternalMediaType = 'fields___internal___mediaType',
  FieldsInternalOwner = 'fields___internal___owner',
  FieldsInternalType = 'fields___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsModelFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsModelGroupConnection = {
  __typename?: 'DatoCmsModelGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsModelSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsModelFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSeoField = {
  __typename?: 'DatoCmsSeoField';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
  image?: Maybe<DatoCmsAsset>;
};

export type DatoCmsSeoFieldFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  twitterCard?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsAssetFilterInput>;
};

export type DatoCmsSeoMetaTags = Node & {
  __typename?: 'DatoCmsSeoMetaTags';
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSeoMetaTagsConnection = {
  __typename?: 'DatoCmsSeoMetaTagsConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
};

export type DatoCmsSeoMetaTagsConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsEdge = {
  __typename?: 'DatoCmsSeoMetaTagsEdge';
  next?: Maybe<DatoCmsSeoMetaTags>;
  node: DatoCmsSeoMetaTags;
  previous?: Maybe<DatoCmsSeoMetaTags>;
};

export enum DatoCmsSeoMetaTagsFieldsEnum {
  Tags = 'tags',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsSeoMetaTagsFilterInput = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsSeoMetaTagsGroupConnection = {
  __typename?: 'DatoCmsSeoMetaTagsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsSeoMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSeoMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSite = Node & {
  __typename?: 'DatoCmsSite';
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  domain?: Maybe<Scalars['String']>;
  internalDomain?: Maybe<Scalars['String']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  globalSeo?: Maybe<DatoCmsGlobalSeo>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSiteConnection = {
  __typename?: 'DatoCmsSiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsSiteGroupConnection>;
};

export type DatoCmsSiteConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteEdge = {
  __typename?: 'DatoCmsSiteEdge';
  next?: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous?: Maybe<DatoCmsSite>;
};

export enum DatoCmsSiteFieldsEnum {
  Name = 'name',
  Locale = 'locale',
  Locales = 'locales',
  Domain = 'domain',
  InternalDomain = 'internalDomain',
  NoIndex = 'noIndex',
  GlobalSeoSiteName = 'globalSeo___siteName',
  GlobalSeoTitleSuffix = 'globalSeo___titleSuffix',
  GlobalSeoTwitterAccount = 'globalSeo___twitterAccount',
  GlobalSeoFacebookPageUrl = 'globalSeo___facebookPageUrl',
  GlobalSeoFallbackSeoTitle = 'globalSeo___fallbackSeo___title',
  GlobalSeoFallbackSeoDescription = 'globalSeo___fallbackSeo___description',
  GlobalSeoFallbackSeoTwitterCard = 'globalSeo___fallbackSeo___twitterCard',
  GlobalSeoFallbackSeoImageSize = 'globalSeo___fallbackSeo___image___size',
  GlobalSeoFallbackSeoImageWidth = 'globalSeo___fallbackSeo___image___width',
  GlobalSeoFallbackSeoImageHeight = 'globalSeo___fallbackSeo___image___height',
  GlobalSeoFallbackSeoImagePath = 'globalSeo___fallbackSeo___image___path',
  GlobalSeoFallbackSeoImageFormat = 'globalSeo___fallbackSeo___image___format',
  GlobalSeoFallbackSeoImageIsImage = 'globalSeo___fallbackSeo___image___isImage',
  GlobalSeoFallbackSeoImageCreatedAt = 'globalSeo___fallbackSeo___image___createdAt',
  GlobalSeoFallbackSeoImageUrl = 'globalSeo___fallbackSeo___image___url',
  GlobalSeoFallbackSeoImageNotes = 'globalSeo___fallbackSeo___image___notes',
  GlobalSeoFallbackSeoImageAuthor = 'globalSeo___fallbackSeo___image___author',
  GlobalSeoFallbackSeoImageCopyright = 'globalSeo___fallbackSeo___image___copyright',
  GlobalSeoFallbackSeoImageOriginalId = 'globalSeo___fallbackSeo___image___originalId',
  GlobalSeoFallbackSeoImageTags = 'globalSeo___fallbackSeo___image___tags',
  GlobalSeoFallbackSeoImageSmartTags = 'globalSeo___fallbackSeo___image___smartTags',
  GlobalSeoFallbackSeoImageFilename = 'globalSeo___fallbackSeo___image___filename',
  GlobalSeoFallbackSeoImageBasename = 'globalSeo___fallbackSeo___image___basename',
  GlobalSeoFallbackSeoImageExifInfo = 'globalSeo___fallbackSeo___image___exifInfo',
  GlobalSeoFallbackSeoImageMimeType = 'globalSeo___fallbackSeo___image___mimeType',
  GlobalSeoFallbackSeoImageColors = 'globalSeo___fallbackSeo___image___colors',
  GlobalSeoFallbackSeoImageBlurhash = 'globalSeo___fallbackSeo___image___blurhash',
  GlobalSeoFallbackSeoImageId = 'globalSeo___fallbackSeo___image___id',
  GlobalSeoFallbackSeoImageChildren = 'globalSeo___fallbackSeo___image___children',
  FaviconMetaTagsTags = 'faviconMetaTags___tags',
  FaviconMetaTagsId = 'faviconMetaTags___id',
  FaviconMetaTagsParentId = 'faviconMetaTags___parent___id',
  FaviconMetaTagsParentParentId = 'faviconMetaTags___parent___parent___id',
  FaviconMetaTagsParentParentChildren = 'faviconMetaTags___parent___parent___children',
  FaviconMetaTagsParentChildren = 'faviconMetaTags___parent___children',
  FaviconMetaTagsParentChildrenId = 'faviconMetaTags___parent___children___id',
  FaviconMetaTagsParentChildrenChildren = 'faviconMetaTags___parent___children___children',
  FaviconMetaTagsParentInternalContent = 'faviconMetaTags___parent___internal___content',
  FaviconMetaTagsParentInternalContentDigest = 'faviconMetaTags___parent___internal___contentDigest',
  FaviconMetaTagsParentInternalDescription = 'faviconMetaTags___parent___internal___description',
  FaviconMetaTagsParentInternalFieldOwners = 'faviconMetaTags___parent___internal___fieldOwners',
  FaviconMetaTagsParentInternalIgnoreType = 'faviconMetaTags___parent___internal___ignoreType',
  FaviconMetaTagsParentInternalMediaType = 'faviconMetaTags___parent___internal___mediaType',
  FaviconMetaTagsParentInternalOwner = 'faviconMetaTags___parent___internal___owner',
  FaviconMetaTagsParentInternalType = 'faviconMetaTags___parent___internal___type',
  FaviconMetaTagsChildren = 'faviconMetaTags___children',
  FaviconMetaTagsChildrenId = 'faviconMetaTags___children___id',
  FaviconMetaTagsChildrenParentId = 'faviconMetaTags___children___parent___id',
  FaviconMetaTagsChildrenParentChildren = 'faviconMetaTags___children___parent___children',
  FaviconMetaTagsChildrenChildren = 'faviconMetaTags___children___children',
  FaviconMetaTagsChildrenChildrenId = 'faviconMetaTags___children___children___id',
  FaviconMetaTagsChildrenChildrenChildren = 'faviconMetaTags___children___children___children',
  FaviconMetaTagsChildrenInternalContent = 'faviconMetaTags___children___internal___content',
  FaviconMetaTagsChildrenInternalContentDigest = 'faviconMetaTags___children___internal___contentDigest',
  FaviconMetaTagsChildrenInternalDescription = 'faviconMetaTags___children___internal___description',
  FaviconMetaTagsChildrenInternalFieldOwners = 'faviconMetaTags___children___internal___fieldOwners',
  FaviconMetaTagsChildrenInternalIgnoreType = 'faviconMetaTags___children___internal___ignoreType',
  FaviconMetaTagsChildrenInternalMediaType = 'faviconMetaTags___children___internal___mediaType',
  FaviconMetaTagsChildrenInternalOwner = 'faviconMetaTags___children___internal___owner',
  FaviconMetaTagsChildrenInternalType = 'faviconMetaTags___children___internal___type',
  FaviconMetaTagsInternalContent = 'faviconMetaTags___internal___content',
  FaviconMetaTagsInternalContentDigest = 'faviconMetaTags___internal___contentDigest',
  FaviconMetaTagsInternalDescription = 'faviconMetaTags___internal___description',
  FaviconMetaTagsInternalFieldOwners = 'faviconMetaTags___internal___fieldOwners',
  FaviconMetaTagsInternalIgnoreType = 'faviconMetaTags___internal___ignoreType',
  FaviconMetaTagsInternalMediaType = 'faviconMetaTags___internal___mediaType',
  FaviconMetaTagsInternalOwner = 'faviconMetaTags___internal___owner',
  FaviconMetaTagsInternalType = 'faviconMetaTags___internal___type',
  OriginalId = 'originalId',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsSiteFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsSiteGroupConnection = {
  __typename?: 'DatoCmsSiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsSiteSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSocialProfile = Node & {
  __typename?: 'DatoCmsSocialProfile';
  profileType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSocialProfileConnection = {
  __typename?: 'DatoCmsSocialProfileConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSocialProfileEdge>;
  nodes: Array<DatoCmsSocialProfile>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsSocialProfileGroupConnection>;
};

export type DatoCmsSocialProfileConnectionDistinctArgs = {
  field: DatoCmsSocialProfileFieldsEnum;
};

export type DatoCmsSocialProfileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsSocialProfileFieldsEnum;
};

export type DatoCmsSocialProfileEdge = {
  __typename?: 'DatoCmsSocialProfileEdge';
  next?: Maybe<DatoCmsSocialProfile>;
  node: DatoCmsSocialProfile;
  previous?: Maybe<DatoCmsSocialProfile>;
};

export enum DatoCmsSocialProfileFieldsEnum {
  ProfileType = 'profileType',
  Url = 'url',
  Slug = 'slug',
  Position = 'position',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsSocialProfileFilterInput = {
  profileType?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsSocialProfileGroupConnection = {
  __typename?: 'DatoCmsSocialProfileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSocialProfileEdge>;
  nodes: Array<DatoCmsSocialProfile>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsSocialProfileSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSocialProfileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsTextNode = Node & {
  __typename?: 'DatoCmsTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type DatoCmsTextNodeConnection = {
  __typename?: 'DatoCmsTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
};

export type DatoCmsTextNodeConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeEdge = {
  __typename?: 'DatoCmsTextNodeEdge';
  next?: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous?: Maybe<DatoCmsTextNode>;
};

export enum DatoCmsTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
}

export type DatoCmsTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type DatoCmsTextNodeGroupConnection = {
  __typename?: 'DatoCmsTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsVideoField = {
  __typename?: 'DatoCmsVideoField';
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type DatoCmsWork = Node & {
  __typename?: 'DatoCmsWork';
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  coverImage?: Maybe<DatoCmsFileField>;
  excerpt?: Maybe<Scalars['String']>;
  excerptNode?: Maybe<DatoCmsTextNode>;
  gallery?: Maybe<Array<Maybe<DatoCmsFileField>>>;
  description?: Maybe<Scalars['String']>;
  descriptionNode?: Maybe<DatoCmsTextNode>;
  seoSettings?: Maybe<DatoCmsSeoField>;
  position?: Maybe<Scalars['Int']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsWorkConnection = {
  __typename?: 'DatoCmsWorkConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsWorkEdge>;
  nodes: Array<DatoCmsWork>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsWorkGroupConnection>;
};

export type DatoCmsWorkConnectionDistinctArgs = {
  field: DatoCmsWorkFieldsEnum;
};

export type DatoCmsWorkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsWorkFieldsEnum;
};

export type DatoCmsWorkEdge = {
  __typename?: 'DatoCmsWorkEdge';
  next?: Maybe<DatoCmsWork>;
  node: DatoCmsWork;
  previous?: Maybe<DatoCmsWork>;
};

export enum DatoCmsWorkFieldsEnum {
  Title = 'title',
  Slug = 'slug',
  CoverImageSize = 'coverImage___size',
  CoverImageWidth = 'coverImage___width',
  CoverImageHeight = 'coverImage___height',
  CoverImagePath = 'coverImage___path',
  CoverImageFormat = 'coverImage___format',
  CoverImageIsImage = 'coverImage___isImage',
  CoverImageCreatedAt = 'coverImage___createdAt',
  CoverImageUrl = 'coverImage___url',
  CoverImageNotes = 'coverImage___notes',
  CoverImageAuthor = 'coverImage___author',
  CoverImageCopyright = 'coverImage___copyright',
  CoverImageOriginalId = 'coverImage___originalId',
  CoverImageTags = 'coverImage___tags',
  CoverImageSmartTags = 'coverImage___smartTags',
  CoverImageFilename = 'coverImage___filename',
  CoverImageBasename = 'coverImage___basename',
  CoverImageExifInfo = 'coverImage___exifInfo',
  CoverImageMimeType = 'coverImage___mimeType',
  CoverImageColors = 'coverImage___colors',
  CoverImageColorsRed = 'coverImage___colors___red',
  CoverImageColorsGreen = 'coverImage___colors___green',
  CoverImageColorsBlue = 'coverImage___colors___blue',
  CoverImageColorsAlpha = 'coverImage___colors___alpha',
  CoverImageColorsRgb = 'coverImage___colors___rgb',
  CoverImageColorsHex = 'coverImage___colors___hex',
  CoverImageBlurhash = 'coverImage___blurhash',
  CoverImageVideoMuxPlaybackId = 'coverImage___video___muxPlaybackId',
  CoverImageVideoFrameRate = 'coverImage___video___frameRate',
  CoverImageVideoDuration = 'coverImage___video___duration',
  CoverImageVideoStreamingUrl = 'coverImage___video___streamingUrl',
  CoverImageVideoThumbnailUrl = 'coverImage___video___thumbnailUrl',
  CoverImageVideoMp4Url = 'coverImage___video___mp4Url',
  CoverImageFluidBase64 = 'coverImage___fluid___base64',
  CoverImageFluidTracedSvg = 'coverImage___fluid___tracedSVG',
  CoverImageFluidAspectRatio = 'coverImage___fluid___aspectRatio',
  CoverImageFluidWidth = 'coverImage___fluid___width',
  CoverImageFluidHeight = 'coverImage___fluid___height',
  CoverImageFluidSrc = 'coverImage___fluid___src',
  CoverImageFluidSrcSet = 'coverImage___fluid___srcSet',
  CoverImageFluidSizes = 'coverImage___fluid___sizes',
  CoverImageSizesBase64 = 'coverImage___sizes___base64',
  CoverImageSizesTracedSvg = 'coverImage___sizes___tracedSVG',
  CoverImageSizesAspectRatio = 'coverImage___sizes___aspectRatio',
  CoverImageSizesWidth = 'coverImage___sizes___width',
  CoverImageSizesHeight = 'coverImage___sizes___height',
  CoverImageSizesSrc = 'coverImage___sizes___src',
  CoverImageSizesSrcSet = 'coverImage___sizes___srcSet',
  CoverImageSizesSizes = 'coverImage___sizes___sizes',
  CoverImageFixedBase64 = 'coverImage___fixed___base64',
  CoverImageFixedTracedSvg = 'coverImage___fixed___tracedSVG',
  CoverImageFixedAspectRatio = 'coverImage___fixed___aspectRatio',
  CoverImageFixedWidth = 'coverImage___fixed___width',
  CoverImageFixedHeight = 'coverImage___fixed___height',
  CoverImageFixedSrc = 'coverImage___fixed___src',
  CoverImageFixedSrcSet = 'coverImage___fixed___srcSet',
  CoverImageFixedSizes = 'coverImage___fixed___sizes',
  CoverImageResolutionsBase64 = 'coverImage___resolutions___base64',
  CoverImageResolutionsTracedSvg = 'coverImage___resolutions___tracedSVG',
  CoverImageResolutionsAspectRatio = 'coverImage___resolutions___aspectRatio',
  CoverImageResolutionsWidth = 'coverImage___resolutions___width',
  CoverImageResolutionsHeight = 'coverImage___resolutions___height',
  CoverImageResolutionsSrc = 'coverImage___resolutions___src',
  CoverImageResolutionsSrcSet = 'coverImage___resolutions___srcSet',
  CoverImageResolutionsSizes = 'coverImage___resolutions___sizes',
  CoverImageAlt = 'coverImage___alt',
  CoverImageTitle = 'coverImage___title',
  CoverImageCustomData = 'coverImage___customData',
  Excerpt = 'excerpt',
  ExcerptNodeId = 'excerptNode___id',
  ExcerptNodeParentId = 'excerptNode___parent___id',
  ExcerptNodeParentParentId = 'excerptNode___parent___parent___id',
  ExcerptNodeParentParentChildren = 'excerptNode___parent___parent___children',
  ExcerptNodeParentChildren = 'excerptNode___parent___children',
  ExcerptNodeParentChildrenId = 'excerptNode___parent___children___id',
  ExcerptNodeParentChildrenChildren = 'excerptNode___parent___children___children',
  ExcerptNodeParentInternalContent = 'excerptNode___parent___internal___content',
  ExcerptNodeParentInternalContentDigest = 'excerptNode___parent___internal___contentDigest',
  ExcerptNodeParentInternalDescription = 'excerptNode___parent___internal___description',
  ExcerptNodeParentInternalFieldOwners = 'excerptNode___parent___internal___fieldOwners',
  ExcerptNodeParentInternalIgnoreType = 'excerptNode___parent___internal___ignoreType',
  ExcerptNodeParentInternalMediaType = 'excerptNode___parent___internal___mediaType',
  ExcerptNodeParentInternalOwner = 'excerptNode___parent___internal___owner',
  ExcerptNodeParentInternalType = 'excerptNode___parent___internal___type',
  ExcerptNodeChildren = 'excerptNode___children',
  ExcerptNodeChildrenId = 'excerptNode___children___id',
  ExcerptNodeChildrenParentId = 'excerptNode___children___parent___id',
  ExcerptNodeChildrenParentChildren = 'excerptNode___children___parent___children',
  ExcerptNodeChildrenChildren = 'excerptNode___children___children',
  ExcerptNodeChildrenChildrenId = 'excerptNode___children___children___id',
  ExcerptNodeChildrenChildrenChildren = 'excerptNode___children___children___children',
  ExcerptNodeChildrenInternalContent = 'excerptNode___children___internal___content',
  ExcerptNodeChildrenInternalContentDigest = 'excerptNode___children___internal___contentDigest',
  ExcerptNodeChildrenInternalDescription = 'excerptNode___children___internal___description',
  ExcerptNodeChildrenInternalFieldOwners = 'excerptNode___children___internal___fieldOwners',
  ExcerptNodeChildrenInternalIgnoreType = 'excerptNode___children___internal___ignoreType',
  ExcerptNodeChildrenInternalMediaType = 'excerptNode___children___internal___mediaType',
  ExcerptNodeChildrenInternalOwner = 'excerptNode___children___internal___owner',
  ExcerptNodeChildrenInternalType = 'excerptNode___children___internal___type',
  ExcerptNodeInternalContent = 'excerptNode___internal___content',
  ExcerptNodeInternalContentDigest = 'excerptNode___internal___contentDigest',
  ExcerptNodeInternalDescription = 'excerptNode___internal___description',
  ExcerptNodeInternalFieldOwners = 'excerptNode___internal___fieldOwners',
  ExcerptNodeInternalIgnoreType = 'excerptNode___internal___ignoreType',
  ExcerptNodeInternalMediaType = 'excerptNode___internal___mediaType',
  ExcerptNodeInternalOwner = 'excerptNode___internal___owner',
  ExcerptNodeInternalType = 'excerptNode___internal___type',
  ExcerptNodeChildMarkdownRemarkId = 'excerptNode___childMarkdownRemark___id',
  ExcerptNodeChildMarkdownRemarkFrontmatterTitle = 'excerptNode___childMarkdownRemark___frontmatter___title',
  ExcerptNodeChildMarkdownRemarkExcerpt = 'excerptNode___childMarkdownRemark___excerpt',
  ExcerptNodeChildMarkdownRemarkRawMarkdownBody = 'excerptNode___childMarkdownRemark___rawMarkdownBody',
  ExcerptNodeChildMarkdownRemarkHtml = 'excerptNode___childMarkdownRemark___html',
  ExcerptNodeChildMarkdownRemarkHtmlAst = 'excerptNode___childMarkdownRemark___htmlAst',
  ExcerptNodeChildMarkdownRemarkExcerptAst = 'excerptNode___childMarkdownRemark___excerptAst',
  ExcerptNodeChildMarkdownRemarkHeadings = 'excerptNode___childMarkdownRemark___headings',
  ExcerptNodeChildMarkdownRemarkHeadingsValue = 'excerptNode___childMarkdownRemark___headings___value',
  ExcerptNodeChildMarkdownRemarkHeadingsDepth = 'excerptNode___childMarkdownRemark___headings___depth',
  ExcerptNodeChildMarkdownRemarkTimeToRead = 'excerptNode___childMarkdownRemark___timeToRead',
  ExcerptNodeChildMarkdownRemarkTableOfContents = 'excerptNode___childMarkdownRemark___tableOfContents',
  ExcerptNodeChildMarkdownRemarkWordCountParagraphs = 'excerptNode___childMarkdownRemark___wordCount___paragraphs',
  ExcerptNodeChildMarkdownRemarkWordCountSentences = 'excerptNode___childMarkdownRemark___wordCount___sentences',
  ExcerptNodeChildMarkdownRemarkWordCountWords = 'excerptNode___childMarkdownRemark___wordCount___words',
  ExcerptNodeChildMarkdownRemarkParentId = 'excerptNode___childMarkdownRemark___parent___id',
  ExcerptNodeChildMarkdownRemarkParentChildren = 'excerptNode___childMarkdownRemark___parent___children',
  ExcerptNodeChildMarkdownRemarkChildren = 'excerptNode___childMarkdownRemark___children',
  ExcerptNodeChildMarkdownRemarkChildrenId = 'excerptNode___childMarkdownRemark___children___id',
  ExcerptNodeChildMarkdownRemarkChildrenChildren = 'excerptNode___childMarkdownRemark___children___children',
  ExcerptNodeChildMarkdownRemarkInternalContent = 'excerptNode___childMarkdownRemark___internal___content',
  ExcerptNodeChildMarkdownRemarkInternalContentDigest = 'excerptNode___childMarkdownRemark___internal___contentDigest',
  ExcerptNodeChildMarkdownRemarkInternalDescription = 'excerptNode___childMarkdownRemark___internal___description',
  ExcerptNodeChildMarkdownRemarkInternalFieldOwners = 'excerptNode___childMarkdownRemark___internal___fieldOwners',
  ExcerptNodeChildMarkdownRemarkInternalIgnoreType = 'excerptNode___childMarkdownRemark___internal___ignoreType',
  ExcerptNodeChildMarkdownRemarkInternalMediaType = 'excerptNode___childMarkdownRemark___internal___mediaType',
  ExcerptNodeChildMarkdownRemarkInternalOwner = 'excerptNode___childMarkdownRemark___internal___owner',
  ExcerptNodeChildMarkdownRemarkInternalType = 'excerptNode___childMarkdownRemark___internal___type',
  Gallery = 'gallery',
  GallerySize = 'gallery___size',
  GalleryWidth = 'gallery___width',
  GalleryHeight = 'gallery___height',
  GalleryPath = 'gallery___path',
  GalleryFormat = 'gallery___format',
  GalleryIsImage = 'gallery___isImage',
  GalleryCreatedAt = 'gallery___createdAt',
  GalleryUrl = 'gallery___url',
  GalleryNotes = 'gallery___notes',
  GalleryAuthor = 'gallery___author',
  GalleryCopyright = 'gallery___copyright',
  GalleryOriginalId = 'gallery___originalId',
  GalleryTags = 'gallery___tags',
  GallerySmartTags = 'gallery___smartTags',
  GalleryFilename = 'gallery___filename',
  GalleryBasename = 'gallery___basename',
  GalleryExifInfo = 'gallery___exifInfo',
  GalleryMimeType = 'gallery___mimeType',
  GalleryColors = 'gallery___colors',
  GalleryColorsRed = 'gallery___colors___red',
  GalleryColorsGreen = 'gallery___colors___green',
  GalleryColorsBlue = 'gallery___colors___blue',
  GalleryColorsAlpha = 'gallery___colors___alpha',
  GalleryColorsRgb = 'gallery___colors___rgb',
  GalleryColorsHex = 'gallery___colors___hex',
  GalleryBlurhash = 'gallery___blurhash',
  GalleryVideoMuxPlaybackId = 'gallery___video___muxPlaybackId',
  GalleryVideoFrameRate = 'gallery___video___frameRate',
  GalleryVideoDuration = 'gallery___video___duration',
  GalleryVideoStreamingUrl = 'gallery___video___streamingUrl',
  GalleryVideoThumbnailUrl = 'gallery___video___thumbnailUrl',
  GalleryVideoMp4Url = 'gallery___video___mp4Url',
  GalleryFluidBase64 = 'gallery___fluid___base64',
  GalleryFluidTracedSvg = 'gallery___fluid___tracedSVG',
  GalleryFluidAspectRatio = 'gallery___fluid___aspectRatio',
  GalleryFluidWidth = 'gallery___fluid___width',
  GalleryFluidHeight = 'gallery___fluid___height',
  GalleryFluidSrc = 'gallery___fluid___src',
  GalleryFluidSrcSet = 'gallery___fluid___srcSet',
  GalleryFluidSizes = 'gallery___fluid___sizes',
  GallerySizesBase64 = 'gallery___sizes___base64',
  GallerySizesTracedSvg = 'gallery___sizes___tracedSVG',
  GallerySizesAspectRatio = 'gallery___sizes___aspectRatio',
  GallerySizesWidth = 'gallery___sizes___width',
  GallerySizesHeight = 'gallery___sizes___height',
  GallerySizesSrc = 'gallery___sizes___src',
  GallerySizesSrcSet = 'gallery___sizes___srcSet',
  GallerySizesSizes = 'gallery___sizes___sizes',
  GalleryFixedBase64 = 'gallery___fixed___base64',
  GalleryFixedTracedSvg = 'gallery___fixed___tracedSVG',
  GalleryFixedAspectRatio = 'gallery___fixed___aspectRatio',
  GalleryFixedWidth = 'gallery___fixed___width',
  GalleryFixedHeight = 'gallery___fixed___height',
  GalleryFixedSrc = 'gallery___fixed___src',
  GalleryFixedSrcSet = 'gallery___fixed___srcSet',
  GalleryFixedSizes = 'gallery___fixed___sizes',
  GalleryResolutionsBase64 = 'gallery___resolutions___base64',
  GalleryResolutionsTracedSvg = 'gallery___resolutions___tracedSVG',
  GalleryResolutionsAspectRatio = 'gallery___resolutions___aspectRatio',
  GalleryResolutionsWidth = 'gallery___resolutions___width',
  GalleryResolutionsHeight = 'gallery___resolutions___height',
  GalleryResolutionsSrc = 'gallery___resolutions___src',
  GalleryResolutionsSrcSet = 'gallery___resolutions___srcSet',
  GalleryResolutionsSizes = 'gallery___resolutions___sizes',
  GalleryAlt = 'gallery___alt',
  GalleryTitle = 'gallery___title',
  GalleryCustomData = 'gallery___customData',
  Description = 'description',
  DescriptionNodeId = 'descriptionNode___id',
  DescriptionNodeParentId = 'descriptionNode___parent___id',
  DescriptionNodeParentParentId = 'descriptionNode___parent___parent___id',
  DescriptionNodeParentParentChildren = 'descriptionNode___parent___parent___children',
  DescriptionNodeParentChildren = 'descriptionNode___parent___children',
  DescriptionNodeParentChildrenId = 'descriptionNode___parent___children___id',
  DescriptionNodeParentChildrenChildren = 'descriptionNode___parent___children___children',
  DescriptionNodeParentInternalContent = 'descriptionNode___parent___internal___content',
  DescriptionNodeParentInternalContentDigest = 'descriptionNode___parent___internal___contentDigest',
  DescriptionNodeParentInternalDescription = 'descriptionNode___parent___internal___description',
  DescriptionNodeParentInternalFieldOwners = 'descriptionNode___parent___internal___fieldOwners',
  DescriptionNodeParentInternalIgnoreType = 'descriptionNode___parent___internal___ignoreType',
  DescriptionNodeParentInternalMediaType = 'descriptionNode___parent___internal___mediaType',
  DescriptionNodeParentInternalOwner = 'descriptionNode___parent___internal___owner',
  DescriptionNodeParentInternalType = 'descriptionNode___parent___internal___type',
  DescriptionNodeChildren = 'descriptionNode___children',
  DescriptionNodeChildrenId = 'descriptionNode___children___id',
  DescriptionNodeChildrenParentId = 'descriptionNode___children___parent___id',
  DescriptionNodeChildrenParentChildren = 'descriptionNode___children___parent___children',
  DescriptionNodeChildrenChildren = 'descriptionNode___children___children',
  DescriptionNodeChildrenChildrenId = 'descriptionNode___children___children___id',
  DescriptionNodeChildrenChildrenChildren = 'descriptionNode___children___children___children',
  DescriptionNodeChildrenInternalContent = 'descriptionNode___children___internal___content',
  DescriptionNodeChildrenInternalContentDigest = 'descriptionNode___children___internal___contentDigest',
  DescriptionNodeChildrenInternalDescription = 'descriptionNode___children___internal___description',
  DescriptionNodeChildrenInternalFieldOwners = 'descriptionNode___children___internal___fieldOwners',
  DescriptionNodeChildrenInternalIgnoreType = 'descriptionNode___children___internal___ignoreType',
  DescriptionNodeChildrenInternalMediaType = 'descriptionNode___children___internal___mediaType',
  DescriptionNodeChildrenInternalOwner = 'descriptionNode___children___internal___owner',
  DescriptionNodeChildrenInternalType = 'descriptionNode___children___internal___type',
  DescriptionNodeInternalContent = 'descriptionNode___internal___content',
  DescriptionNodeInternalContentDigest = 'descriptionNode___internal___contentDigest',
  DescriptionNodeInternalDescription = 'descriptionNode___internal___description',
  DescriptionNodeInternalFieldOwners = 'descriptionNode___internal___fieldOwners',
  DescriptionNodeInternalIgnoreType = 'descriptionNode___internal___ignoreType',
  DescriptionNodeInternalMediaType = 'descriptionNode___internal___mediaType',
  DescriptionNodeInternalOwner = 'descriptionNode___internal___owner',
  DescriptionNodeInternalType = 'descriptionNode___internal___type',
  DescriptionNodeChildMarkdownRemarkId = 'descriptionNode___childMarkdownRemark___id',
  DescriptionNodeChildMarkdownRemarkFrontmatterTitle = 'descriptionNode___childMarkdownRemark___frontmatter___title',
  DescriptionNodeChildMarkdownRemarkExcerpt = 'descriptionNode___childMarkdownRemark___excerpt',
  DescriptionNodeChildMarkdownRemarkRawMarkdownBody = 'descriptionNode___childMarkdownRemark___rawMarkdownBody',
  DescriptionNodeChildMarkdownRemarkHtml = 'descriptionNode___childMarkdownRemark___html',
  DescriptionNodeChildMarkdownRemarkHtmlAst = 'descriptionNode___childMarkdownRemark___htmlAst',
  DescriptionNodeChildMarkdownRemarkExcerptAst = 'descriptionNode___childMarkdownRemark___excerptAst',
  DescriptionNodeChildMarkdownRemarkHeadings = 'descriptionNode___childMarkdownRemark___headings',
  DescriptionNodeChildMarkdownRemarkHeadingsValue = 'descriptionNode___childMarkdownRemark___headings___value',
  DescriptionNodeChildMarkdownRemarkHeadingsDepth = 'descriptionNode___childMarkdownRemark___headings___depth',
  DescriptionNodeChildMarkdownRemarkTimeToRead = 'descriptionNode___childMarkdownRemark___timeToRead',
  DescriptionNodeChildMarkdownRemarkTableOfContents = 'descriptionNode___childMarkdownRemark___tableOfContents',
  DescriptionNodeChildMarkdownRemarkWordCountParagraphs = 'descriptionNode___childMarkdownRemark___wordCount___paragraphs',
  DescriptionNodeChildMarkdownRemarkWordCountSentences = 'descriptionNode___childMarkdownRemark___wordCount___sentences',
  DescriptionNodeChildMarkdownRemarkWordCountWords = 'descriptionNode___childMarkdownRemark___wordCount___words',
  DescriptionNodeChildMarkdownRemarkParentId = 'descriptionNode___childMarkdownRemark___parent___id',
  DescriptionNodeChildMarkdownRemarkParentChildren = 'descriptionNode___childMarkdownRemark___parent___children',
  DescriptionNodeChildMarkdownRemarkChildren = 'descriptionNode___childMarkdownRemark___children',
  DescriptionNodeChildMarkdownRemarkChildrenId = 'descriptionNode___childMarkdownRemark___children___id',
  DescriptionNodeChildMarkdownRemarkChildrenChildren = 'descriptionNode___childMarkdownRemark___children___children',
  DescriptionNodeChildMarkdownRemarkInternalContent = 'descriptionNode___childMarkdownRemark___internal___content',
  DescriptionNodeChildMarkdownRemarkInternalContentDigest = 'descriptionNode___childMarkdownRemark___internal___contentDigest',
  DescriptionNodeChildMarkdownRemarkInternalDescription = 'descriptionNode___childMarkdownRemark___internal___description',
  DescriptionNodeChildMarkdownRemarkInternalFieldOwners = 'descriptionNode___childMarkdownRemark___internal___fieldOwners',
  DescriptionNodeChildMarkdownRemarkInternalIgnoreType = 'descriptionNode___childMarkdownRemark___internal___ignoreType',
  DescriptionNodeChildMarkdownRemarkInternalMediaType = 'descriptionNode___childMarkdownRemark___internal___mediaType',
  DescriptionNodeChildMarkdownRemarkInternalOwner = 'descriptionNode___childMarkdownRemark___internal___owner',
  DescriptionNodeChildMarkdownRemarkInternalType = 'descriptionNode___childMarkdownRemark___internal___type',
  SeoSettingsTitle = 'seoSettings___title',
  SeoSettingsDescription = 'seoSettings___description',
  SeoSettingsTwitterCard = 'seoSettings___twitterCard',
  SeoSettingsImageSize = 'seoSettings___image___size',
  SeoSettingsImageWidth = 'seoSettings___image___width',
  SeoSettingsImageHeight = 'seoSettings___image___height',
  SeoSettingsImagePath = 'seoSettings___image___path',
  SeoSettingsImageFormat = 'seoSettings___image___format',
  SeoSettingsImageIsImage = 'seoSettings___image___isImage',
  SeoSettingsImageCreatedAt = 'seoSettings___image___createdAt',
  SeoSettingsImageUrl = 'seoSettings___image___url',
  SeoSettingsImageNotes = 'seoSettings___image___notes',
  SeoSettingsImageAuthor = 'seoSettings___image___author',
  SeoSettingsImageCopyright = 'seoSettings___image___copyright',
  SeoSettingsImageOriginalId = 'seoSettings___image___originalId',
  SeoSettingsImageTags = 'seoSettings___image___tags',
  SeoSettingsImageSmartTags = 'seoSettings___image___smartTags',
  SeoSettingsImageFilename = 'seoSettings___image___filename',
  SeoSettingsImageBasename = 'seoSettings___image___basename',
  SeoSettingsImageExifInfo = 'seoSettings___image___exifInfo',
  SeoSettingsImageMimeType = 'seoSettings___image___mimeType',
  SeoSettingsImageColors = 'seoSettings___image___colors',
  SeoSettingsImageColorsRed = 'seoSettings___image___colors___red',
  SeoSettingsImageColorsGreen = 'seoSettings___image___colors___green',
  SeoSettingsImageColorsBlue = 'seoSettings___image___colors___blue',
  SeoSettingsImageColorsAlpha = 'seoSettings___image___colors___alpha',
  SeoSettingsImageColorsRgb = 'seoSettings___image___colors___rgb',
  SeoSettingsImageColorsHex = 'seoSettings___image___colors___hex',
  SeoSettingsImageBlurhash = 'seoSettings___image___blurhash',
  SeoSettingsImageVideoMuxPlaybackId = 'seoSettings___image___video___muxPlaybackId',
  SeoSettingsImageVideoFrameRate = 'seoSettings___image___video___frameRate',
  SeoSettingsImageVideoDuration = 'seoSettings___image___video___duration',
  SeoSettingsImageVideoStreamingUrl = 'seoSettings___image___video___streamingUrl',
  SeoSettingsImageVideoThumbnailUrl = 'seoSettings___image___video___thumbnailUrl',
  SeoSettingsImageVideoMp4Url = 'seoSettings___image___video___mp4Url',
  SeoSettingsImageFluidBase64 = 'seoSettings___image___fluid___base64',
  SeoSettingsImageFluidTracedSvg = 'seoSettings___image___fluid___tracedSVG',
  SeoSettingsImageFluidAspectRatio = 'seoSettings___image___fluid___aspectRatio',
  SeoSettingsImageFluidWidth = 'seoSettings___image___fluid___width',
  SeoSettingsImageFluidHeight = 'seoSettings___image___fluid___height',
  SeoSettingsImageFluidSrc = 'seoSettings___image___fluid___src',
  SeoSettingsImageFluidSrcSet = 'seoSettings___image___fluid___srcSet',
  SeoSettingsImageFluidSizes = 'seoSettings___image___fluid___sizes',
  SeoSettingsImageSizesBase64 = 'seoSettings___image___sizes___base64',
  SeoSettingsImageSizesTracedSvg = 'seoSettings___image___sizes___tracedSVG',
  SeoSettingsImageSizesAspectRatio = 'seoSettings___image___sizes___aspectRatio',
  SeoSettingsImageSizesWidth = 'seoSettings___image___sizes___width',
  SeoSettingsImageSizesHeight = 'seoSettings___image___sizes___height',
  SeoSettingsImageSizesSrc = 'seoSettings___image___sizes___src',
  SeoSettingsImageSizesSrcSet = 'seoSettings___image___sizes___srcSet',
  SeoSettingsImageSizesSizes = 'seoSettings___image___sizes___sizes',
  SeoSettingsImageFixedBase64 = 'seoSettings___image___fixed___base64',
  SeoSettingsImageFixedTracedSvg = 'seoSettings___image___fixed___tracedSVG',
  SeoSettingsImageFixedAspectRatio = 'seoSettings___image___fixed___aspectRatio',
  SeoSettingsImageFixedWidth = 'seoSettings___image___fixed___width',
  SeoSettingsImageFixedHeight = 'seoSettings___image___fixed___height',
  SeoSettingsImageFixedSrc = 'seoSettings___image___fixed___src',
  SeoSettingsImageFixedSrcSet = 'seoSettings___image___fixed___srcSet',
  SeoSettingsImageFixedSizes = 'seoSettings___image___fixed___sizes',
  SeoSettingsImageResolutionsBase64 = 'seoSettings___image___resolutions___base64',
  SeoSettingsImageResolutionsTracedSvg = 'seoSettings___image___resolutions___tracedSVG',
  SeoSettingsImageResolutionsAspectRatio = 'seoSettings___image___resolutions___aspectRatio',
  SeoSettingsImageResolutionsWidth = 'seoSettings___image___resolutions___width',
  SeoSettingsImageResolutionsHeight = 'seoSettings___image___resolutions___height',
  SeoSettingsImageResolutionsSrc = 'seoSettings___image___resolutions___src',
  SeoSettingsImageResolutionsSrcSet = 'seoSettings___image___resolutions___srcSet',
  SeoSettingsImageResolutionsSizes = 'seoSettings___image___resolutions___sizes',
  SeoSettingsImageId = 'seoSettings___image___id',
  SeoSettingsImageParentId = 'seoSettings___image___parent___id',
  SeoSettingsImageParentChildren = 'seoSettings___image___parent___children',
  SeoSettingsImageChildren = 'seoSettings___image___children',
  SeoSettingsImageChildrenId = 'seoSettings___image___children___id',
  SeoSettingsImageChildrenChildren = 'seoSettings___image___children___children',
  SeoSettingsImageInternalContent = 'seoSettings___image___internal___content',
  SeoSettingsImageInternalContentDigest = 'seoSettings___image___internal___contentDigest',
  SeoSettingsImageInternalDescription = 'seoSettings___image___internal___description',
  SeoSettingsImageInternalFieldOwners = 'seoSettings___image___internal___fieldOwners',
  SeoSettingsImageInternalIgnoreType = 'seoSettings___image___internal___ignoreType',
  SeoSettingsImageInternalMediaType = 'seoSettings___image___internal___mediaType',
  SeoSettingsImageInternalOwner = 'seoSettings___image___internal___owner',
  SeoSettingsImageInternalType = 'seoSettings___image___internal___type',
  Position = 'position',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DatoCmsWorkFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  coverImage?: Maybe<DatoCmsFileFieldFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptNode?: Maybe<DatoCmsTextNodeFilterInput>;
  gallery?: Maybe<DatoCmsFileFieldFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionNode?: Maybe<DatoCmsTextNodeFilterInput>;
  seoSettings?: Maybe<DatoCmsSeoFieldFilterInput>;
  position?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsWorkGroupConnection = {
  __typename?: 'DatoCmsWorkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsWorkEdge>;
  nodes: Array<DatoCmsWork>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsWorkSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsWorkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  datoCmsSeoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  allDatoCmsSeoMetaTags: DatoCmsSeoMetaTagsConnection;
  datoCmsTextNode?: Maybe<DatoCmsTextNode>;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  datoCmsHome?: Maybe<DatoCmsHome>;
  allDatoCmsHome: DatoCmsHomeConnection;
  datoCmsSocialProfile?: Maybe<DatoCmsSocialProfile>;
  allDatoCmsSocialProfile: DatoCmsSocialProfileConnection;
  datoCmsAboutPage?: Maybe<DatoCmsAboutPage>;
  allDatoCmsAboutPage: DatoCmsAboutPageConnection;
  datoCmsWork?: Maybe<DatoCmsWork>;
  allDatoCmsWork: DatoCmsWorkConnection;
  datoCmsAsset?: Maybe<DatoCmsAsset>;
  allDatoCmsAsset: DatoCmsAssetConnection;
  datoCmsSite?: Maybe<DatoCmsSite>;
  allDatoCmsSite: DatoCmsSiteConnection;
  datoCmsFaviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  allDatoCmsFaviconMetaTags: DatoCmsFaviconMetaTagsConnection;
  datoCmsField?: Maybe<DatoCmsField>;
  allDatoCmsField: DatoCmsFieldConnection;
  datoCmsModel?: Maybe<DatoCmsModel>;
  allDatoCmsModel: DatoCmsModelConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsSeoMetaTagsArgs = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsSeoMetaTagsArgs = {
  filter?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  sort?: Maybe<DatoCmsSeoMetaTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type QueryAllDatoCmsTextNodeArgs = {
  filter?: Maybe<DatoCmsTextNodeFilterInput>;
  sort?: Maybe<DatoCmsTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsHomeArgs = {
  introText?: Maybe<StringQueryOperatorInput>;
  introTextNode?: Maybe<DatoCmsTextNodeFilterInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  seoSettings?: Maybe<DatoCmsSeoFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsHomeArgs = {
  filter?: Maybe<DatoCmsHomeFilterInput>;
  sort?: Maybe<DatoCmsHomeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsSocialProfileArgs = {
  profileType?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsSocialProfileArgs = {
  filter?: Maybe<DatoCmsSocialProfileFilterInput>;
  sort?: Maybe<DatoCmsSocialProfileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsAboutPageArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<DatoCmsFileFieldFilterInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  bioNode?: Maybe<DatoCmsTextNodeFilterInput>;
  seoSettings?: Maybe<DatoCmsSeoFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsAboutPageArgs = {
  filter?: Maybe<DatoCmsAboutPageFilterInput>;
  sort?: Maybe<DatoCmsAboutPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsWorkArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  coverImage?: Maybe<DatoCmsFileFieldFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptNode?: Maybe<DatoCmsTextNodeFilterInput>;
  gallery?: Maybe<DatoCmsFileFieldFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionNode?: Maybe<DatoCmsTextNodeFilterInput>;
  seoSettings?: Maybe<DatoCmsSeoFieldFilterInput>;
  position?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsWorkArgs = {
  filter?: Maybe<DatoCmsWorkFilterInput>;
  sort?: Maybe<DatoCmsWorkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsAssetArgs = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsAssetArgs = {
  filter?: Maybe<DatoCmsAssetFilterInput>;
  sort?: Maybe<DatoCmsAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsSiteArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsSiteArgs = {
  filter?: Maybe<DatoCmsSiteFilterInput>;
  sort?: Maybe<DatoCmsSiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsFaviconMetaTagsArgs = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsFaviconMetaTagsArgs = {
  filter?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  sort?: Maybe<DatoCmsFaviconMetaTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsFieldArgs = {
  label?: Maybe<StringQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsFieldArgs = {
  filter?: Maybe<DatoCmsFieldFilterInput>;
  sort?: Maybe<DatoCmsFieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDatoCmsModelArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDatoCmsModelArgs = {
  filter?: Maybe<DatoCmsModelFilterInput>;
  sort?: Maybe<DatoCmsModelSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsWidth = 'pluginCreator___pluginOptions___width',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsApiToken = 'pluginCreator___pluginOptions___apiToken',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsDsn = 'pluginCreator___pluginOptions___dsn',
  PluginCreatorPluginOptionsEnvironment = 'pluginCreator___pluginOptions___environment',
  PluginCreatorPluginOptionsEnabled = 'pluginCreator___pluginOptions___enabled',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsWidth = 'pluginOptions___width',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsApiToken = 'pluginOptions___apiToken',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsDsn = 'pluginOptions___dsn',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsEnabled = 'pluginOptions___enabled',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  isTSX?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  apiToken?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  dsn?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  apiToken?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  dsn?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  enabled?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type GatsbyDatoCmsResolutionsFragment = { __typename?: 'DatoCmsFixed' } & Pick<
  DatoCmsFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyDatoCmsResolutions_TracedSvgFragment = { __typename?: 'DatoCmsFixed' } & Pick<
  DatoCmsFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyDatoCmsResolutions_NoBase64Fragment = { __typename?: 'DatoCmsFixed' } & Pick<
  DatoCmsFixed,
  'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyDatoCmsSizesFragment = { __typename?: 'DatoCmsFluid' } & Pick<
  DatoCmsFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyDatoCmsSizes_TracedSvgFragment = { __typename?: 'DatoCmsFluid' } & Pick<
  DatoCmsFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyDatoCmsSizes_NoBase64Fragment = { __typename?: 'DatoCmsFluid' } & Pick<
  DatoCmsFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyDatoCmsFixedFragment = { __typename?: 'DatoCmsFixed' } & Pick<
  DatoCmsFixed,
  'base64' | 'width' | 'height' | 'aspectRatio' | 'src' | 'srcSet'
>;

export type GatsbyDatoCmsFixed_TracedSvgFragment = { __typename?: 'DatoCmsFixed' } & Pick<
  DatoCmsFixed,
  'tracedSVG' | 'width' | 'height' | 'aspectRatio' | 'src' | 'srcSet'
>;

export type GatsbyDatoCmsFixed_NoBase64Fragment = { __typename?: 'DatoCmsFixed' } & Pick<
  DatoCmsFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'aspectRatio'
>;

export type GatsbyDatoCmsFluidFragment = { __typename?: 'DatoCmsFluid' } & Pick<
  DatoCmsFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyDatoCmsFluid_TracedSvgFragment = { __typename?: 'DatoCmsFluid' } & Pick<
  DatoCmsFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyDatoCmsFluid_NoBase64Fragment = { __typename?: 'DatoCmsFluid' } & Pick<
  DatoCmsFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyDatoCmsFaviconMetaTagsFragment = { __typename?: 'DatoCmsFaviconMetaTags' } & Pick<
  DatoCmsFaviconMetaTags,
  'tags'
>;

export type GatsbyDatoCmsSeoMetaTagsFragment = { __typename?: 'DatoCmsSeoMetaTags' } & Pick<
  DatoCmsSeoMetaTags,
  'tags'
>;

export type PagesQueryQueryVariables = {};

export type PagesQueryQuery = { __typename?: 'Query' } & {
  allSitePage: { __typename?: 'SitePageConnection' } & {
    nodes: Array<{ __typename?: 'SitePage' } & Pick<SitePage, 'path'>>;
  };
};

export type AssetQueryQueryVariables = {};

export type AssetQueryQuery = { __typename?: 'Query' } & {
  allDatoCmsAsset?: { __typename?: 'DatoCmsAssetConnection' } & {
    edges: Array<
      { __typename?: 'DatoCmsAssetEdge' } & {
        node: { __typename?: 'DatoCmsAsset' } & Pick<DatoCmsAsset, 'id' | 'tags'> & {
            fixed?: Maybe<
              { __typename?: 'DatoCmsFixed' } & Pick<DatoCmsFixed, 'src'> & GatsbyDatoCmsFixedFragment
            >;
            fluid?: Maybe<
              { __typename?: 'DatoCmsFluid' } & Pick<DatoCmsFluid, 'src'> & GatsbyDatoCmsFluidFragment
            >;
          };
      }
    >;
  };
};

export type LayoutQueryQueryVariables = {};

export type LayoutQueryQuery = { __typename?: 'Query' } & {
  datoCmsSite?: Maybe<
    { __typename?: 'DatoCmsSite' } & {
      globalSeo?: Maybe<{ __typename?: 'DatoCmsGlobalSeo' } & Pick<DatoCmsGlobalSeo, 'siteName'>>;
      faviconMetaTags?: Maybe<
        { __typename?: 'DatoCmsFaviconMetaTags' } & GatsbyDatoCmsFaviconMetaTagsFragment
      >;
    }
  >;
  datoCmsHome?: Maybe<
    { __typename?: 'DatoCmsHome' } & Pick<DatoCmsHome, 'copyright'> & {
        seoMetaTags?: Maybe<{ __typename?: 'DatoCmsSeoMetaTags' } & GatsbyDatoCmsSeoMetaTagsFragment>;
        introTextNode?: Maybe<
          { __typename?: 'DatoCmsTextNode' } & {
            childMarkdownRemark?: Maybe<{ __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'html'>>;
          }
        >;
      }
  >;
  allDatoCmsSocialProfile?: { __typename?: 'DatoCmsSocialProfileConnection' } & {
    edges: Array<
      { __typename?: 'DatoCmsSocialProfileEdge' } & {
        node: { __typename?: 'DatoCmsSocialProfile' } & Pick<DatoCmsSocialProfile, 'profileType' | 'url'>;
      }
    >;
  };
};

export type AboutQueryQueryVariables = {};

export type AboutQueryQuery = { __typename?: 'Query' } & {
  about?: Maybe<
    { __typename?: 'DatoCmsAboutPage' } & Pick<DatoCmsAboutPage, 'title' | 'subtitle'> & {
        seoMetaTags?: Maybe<{ __typename?: 'DatoCmsSeoMetaTags' } & GatsbyDatoCmsSeoMetaTagsFragment>;
        bioNode?: Maybe<
          { __typename?: 'DatoCmsTextNode' } & {
            childMarkdownRemark?: Maybe<{ __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'html'>>;
          }
        >;
      }
  >;
};
