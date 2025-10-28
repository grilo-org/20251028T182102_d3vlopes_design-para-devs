/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
	Date: { input: any; output: any };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
	DateTime: { input: any; output: any };
	Hex: { input: any; output: any };
	/** Raw JSON value */
	Json: { input: any; output: any };
	/** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
	Long: { input: any; output: any };
	RGBAHue: { input: any; output: any };
	RGBATransparency: { input: any; output: any };
	/** Slate-compatible RichText AST */
	RichTextAST: { input: any; output: any };
};

export type Accordion = Entity & {
	__typename?: 'Accordion';
	content: Scalars['String']['output'];
	/** The unique identifier */
	id: Scalars['ID']['output'];
	/** System stage field */
	stage: Stage;
	title: Scalars['String']['output'];
};

export type AccordionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AccordionWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccordionConnection = {
	__typename?: 'AccordionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AccordionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AccordionCreateInput = {
	content: Scalars['String']['input'];
	title: Scalars['String']['input'];
};

export type AccordionCreateManyInlineInput = {
	/** Create and connect multiple existing Accordion documents */
	create?: InputMaybe<Array<AccordionCreateInput>>;
};

export type AccordionCreateOneInlineInput = {
	/** Create and connect one Accordion document */
	create?: InputMaybe<AccordionCreateInput>;
};

export type AccordionCreateWithPositionInput = {
	/** Document to create */
	data: AccordionCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AccordionEdge = {
	__typename?: 'AccordionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Accordion;
};

/** Identifies documents */
export type AccordionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AccordionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AccordionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AccordionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	content?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	content_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	content_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	content_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	content_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	content_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum AccordionOrderByInput {
	ContentAsc = 'content_ASC',
	ContentDesc = 'content_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
}

export type AccordionParent = ChaptersSection | FaqSection;

export type AccordionParentConnectInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionConnectInput>;
	FaqSection?: InputMaybe<FaqSectionConnectInput>;
};

export type AccordionParentCreateInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionCreateInput>;
	FaqSection?: InputMaybe<FaqSectionCreateInput>;
};

export type AccordionParentCreateManyInlineInput = {
	/** Connect multiple existing AccordionParent documents */
	connect?: InputMaybe<Array<AccordionParentWhereUniqueInput>>;
	/** Create and connect multiple existing AccordionParent documents */
	create?: InputMaybe<Array<AccordionParentCreateInput>>;
};

export type AccordionParentCreateOneInlineInput = {
	/** Connect one existing AccordionParent document */
	connect?: InputMaybe<AccordionParentWhereUniqueInput>;
	/** Create and connect one AccordionParent document */
	create?: InputMaybe<AccordionParentCreateInput>;
};

export type AccordionParentUpdateInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionUpdateInput>;
	FaqSection?: InputMaybe<FaqSectionUpdateInput>;
};

export type AccordionParentUpdateManyInlineInput = {
	/** Connect multiple existing AccordionParent documents */
	connect?: InputMaybe<Array<AccordionParentConnectInput>>;
	/** Create and connect multiple AccordionParent documents */
	create?: InputMaybe<Array<AccordionParentCreateInput>>;
	/** Delete multiple AccordionParent documents */
	delete?: InputMaybe<Array<AccordionParentWhereUniqueInput>>;
	/** Disconnect multiple AccordionParent documents */
	disconnect?: InputMaybe<Array<AccordionParentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing AccordionParent documents */
	set?: InputMaybe<Array<AccordionParentWhereUniqueInput>>;
	/** Update multiple AccordionParent documents */
	update?: InputMaybe<Array<AccordionParentUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple AccordionParent documents */
	upsert?: InputMaybe<Array<AccordionParentUpsertWithNestedWhereUniqueInput>>;
};

export type AccordionParentUpdateManyWithNestedWhereInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionUpdateManyWithNestedWhereInput>;
	FaqSection?: InputMaybe<FaqSectionUpdateManyWithNestedWhereInput>;
};

export type AccordionParentUpdateOneInlineInput = {
	/** Connect existing AccordionParent document */
	connect?: InputMaybe<AccordionParentWhereUniqueInput>;
	/** Create and connect one AccordionParent document */
	create?: InputMaybe<AccordionParentCreateInput>;
	/** Delete currently connected AccordionParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected AccordionParent document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single AccordionParent document */
	update?: InputMaybe<AccordionParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single AccordionParent document */
	upsert?: InputMaybe<AccordionParentUpsertWithNestedWhereUniqueInput>;
};

export type AccordionParentUpdateWithNestedWhereUniqueInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionUpdateWithNestedWhereUniqueInput>;
	FaqSection?: InputMaybe<FaqSectionUpdateWithNestedWhereUniqueInput>;
};

export type AccordionParentUpsertWithNestedWhereUniqueInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionUpsertWithNestedWhereUniqueInput>;
	FaqSection?: InputMaybe<FaqSectionUpsertWithNestedWhereUniqueInput>;
};

export type AccordionParentWhereInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionWhereInput>;
	FaqSection?: InputMaybe<FaqSectionWhereInput>;
};

export type AccordionParentWhereUniqueInput = {
	ChaptersSection?: InputMaybe<ChaptersSectionWhereUniqueInput>;
	FaqSection?: InputMaybe<FaqSectionWhereUniqueInput>;
};

export type AccordionUpdateInput = {
	content?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionUpdateManyInlineInput = {
	/** Create and connect multiple Accordion component instances */
	create?: InputMaybe<Array<AccordionCreateWithPositionInput>>;
	/** Delete multiple Accordion documents */
	delete?: InputMaybe<Array<AccordionWhereUniqueInput>>;
	/** Update multiple Accordion component instances */
	update?: InputMaybe<
		Array<AccordionUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple Accordion component instances */
	upsert?: InputMaybe<
		Array<AccordionUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type AccordionUpdateManyInput = {
	content?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AccordionUpdateManyInput;
	/** Document search */
	where: AccordionWhereInput;
};

export type AccordionUpdateOneInlineInput = {
	/** Create and connect one Accordion document */
	create?: InputMaybe<AccordionCreateInput>;
	/** Delete currently connected Accordion document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Accordion document */
	update?: InputMaybe<AccordionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Accordion document */
	upsert?: InputMaybe<AccordionUpsertWithNestedWhereUniqueInput>;
};

export type AccordionUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<AccordionUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: AccordionWhereUniqueInput;
};

export type AccordionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AccordionUpdateInput;
	/** Unique document search */
	where: AccordionWhereUniqueInput;
};

export type AccordionUpsertInput = {
	/** Create document if it didn't exist */
	create: AccordionCreateInput;
	/** Update document if it exists */
	update: AccordionUpdateInput;
};

export type AccordionUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<AccordionUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: AccordionWhereUniqueInput;
};

export type AccordionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AccordionUpsertInput;
	/** Unique document search */
	where: AccordionWhereUniqueInput;
};

/** Identifies documents */
export type AccordionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AccordionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AccordionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AccordionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	content?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	content_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	content_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	content_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	content_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	content_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Accordion record uniquely */
export type AccordionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Aggregate = {
	__typename?: 'Aggregate';
	count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity &
	Node & {
		__typename?: 'Asset';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<Asset>;
		/** The file name */
		fileName: Scalars['String']['output'];
		/** The file handle */
		handle: Scalars['String']['output'];
		/** The height of the file */
		height?: Maybe<Scalars['Float']['output']>;
		/** List of Asset versions */
		history: Array<Version>;
		iconBonus: Array<Bonus>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		imageDescription?: Maybe<Scalars['String']['output']>;
		imageIcon: Array<Icon>;
		/** System Locale field */
		locale: Locale;
		/** Get the other localizations for this document */
		localizations: Array<Asset>;
		/** The mime type of the file */
		mimeType?: Maybe<Scalars['String']['output']>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** The file size */
		size?: Maybe<Scalars['Float']['output']>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
		/** Get the url for the asset with provided transformations applied. */
		url: Scalars['String']['output'];
		videoThumbnailProjectSection: Array<ProjectSection>;
		/** The file width */
		width?: Maybe<Scalars['Float']['output']>;
	};

/** Asset system model */
export type AssetCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetIconBonusArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<BonusOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BonusWhereInput>;
};

/** Asset system model */
export type AssetImageIconArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<IconOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<IconWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
	transformation?: InputMaybe<AssetTransformationInput>;
};

/** Asset system model */
export type AssetVideoThumbnailProjectSectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ProjectSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ProjectSectionWhereInput>;
};

export type AssetConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
	__typename?: 'AssetConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AssetEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AssetCreateInput = {
	bookImageHero?: InputMaybe<HeroCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	fileName: Scalars['String']['input'];
	handle: Scalars['String']['input'];
	height?: InputMaybe<Scalars['Float']['input']>;
	iconBonus?: InputMaybe<BonusCreateManyInlineInput>;
	iconSocial?: InputMaybe<SocialCreateManyInlineInput>;
	imageCheckoutSection?: InputMaybe<CheckoutSectionCreateManyInlineInput>;
	imageDescription?: InputMaybe<Scalars['String']['input']>;
	imageIcon?: InputMaybe<IconCreateManyInlineInput>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<AssetCreateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	photoAuthorSection?: InputMaybe<AuthorSectionCreateManyInlineInput>;
	previewsPreviewSection?: InputMaybe<PreviewSectionCreateManyInlineInput>;
	size?: InputMaybe<Scalars['Float']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	videoThumbnailProjectSection?: InputMaybe<ProjectSectionCreateManyInlineInput>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	fileName: Scalars['String']['input'];
	handle: Scalars['String']['input'];
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
	/** Localization input */
	data: AssetCreateLocalizationDataInput;
	locale: Locale;
};

export type AssetCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Create and connect multiple existing Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
	/** Connect one existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
	__typename?: 'AssetEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	iconBonus_every?: InputMaybe<BonusWhereInput>;
	iconBonus_none?: InputMaybe<BonusWhereInput>;
	iconBonus_some?: InputMaybe<BonusWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	imageDescription?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	imageDescription_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	imageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	imageDescription_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** Any other value that exists and is not equal to the given value. */
	imageDescription_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	imageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	imageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	imageDescription_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	imageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	imageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
	imageIcon_every?: InputMaybe<IconWhereInput>;
	imageIcon_none?: InputMaybe<IconWhereInput>;
	imageIcon_some?: InputMaybe<IconWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
	videoThumbnailProjectSection_every?: InputMaybe<ProjectSectionWhereInput>;
	videoThumbnailProjectSection_none?: InputMaybe<ProjectSectionWhereInput>;
	videoThumbnailProjectSection_some?: InputMaybe<ProjectSectionWhereInput>;
};

export enum AssetOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	FileNameAsc = 'fileName_ASC',
	FileNameDesc = 'fileName_DESC',
	HandleAsc = 'handle_ASC',
	HandleDesc = 'handle_DESC',
	HeightAsc = 'height_ASC',
	HeightDesc = 'height_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	ImageDescriptionAsc = 'imageDescription_ASC',
	ImageDescriptionDesc = 'imageDescription_DESC',
	MimeTypeAsc = 'mimeType_ASC',
	MimeTypeDesc = 'mimeType_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	WidthAsc = 'width_ASC',
	WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
	document?: InputMaybe<DocumentTransformationInput>;
	image?: InputMaybe<ImageTransformationInput>;
	/** Pass true if you want to validate the passed transformation parameters */
	validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
	bookImageHero?: InputMaybe<HeroUpdateManyInlineInput>;
	fileName?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	iconBonus?: InputMaybe<BonusUpdateManyInlineInput>;
	iconSocial?: InputMaybe<SocialUpdateManyInlineInput>;
	imageCheckoutSection?: InputMaybe<CheckoutSectionUpdateManyInlineInput>;
	imageDescription?: InputMaybe<Scalars['String']['input']>;
	imageIcon?: InputMaybe<IconUpdateManyInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	photoAuthorSection?: InputMaybe<AuthorSectionUpdateManyInlineInput>;
	previewsPreviewSection?: InputMaybe<PreviewSectionUpdateManyInlineInput>;
	size?: InputMaybe<Scalars['Float']['input']>;
	videoThumbnailProjectSection?: InputMaybe<ProjectSectionUpdateManyInlineInput>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
	data: AssetUpdateLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetConnectInput>>;
	/** Create and connect multiple Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
	/** Delete multiple Asset documents */
	delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Disconnect multiple Asset documents */
	disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Asset documents */
	set?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Update multiple Asset documents */
	update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Asset documents */
	upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	imageDescription?: InputMaybe<Scalars['String']['input']>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
	data: AssetUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AssetUpdateManyInput;
	/** Document search */
	where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
	/** Connect existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
	/** Delete currently connected Asset document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Asset document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Asset document */
	update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Asset document */
	upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AssetUpdateInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
	/** Create document if it didn't exist */
	create: AssetCreateInput;
	/** Update document if it exists */
	update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
	create: AssetCreateLocalizationDataInput;
	locale: Locale;
	update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AssetUpsertInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	fileName?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	fileName_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	fileName_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	handle_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	handle_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	handle_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	handle_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	handle_starts_with?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	height_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	height_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	height_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	height_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	height_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	iconBonus_every?: InputMaybe<BonusWhereInput>;
	iconBonus_none?: InputMaybe<BonusWhereInput>;
	iconBonus_some?: InputMaybe<BonusWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	imageDescription?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	imageDescription_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	imageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	imageDescription_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** Any other value that exists and is not equal to the given value. */
	imageDescription_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	imageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	imageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	imageDescription_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	imageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	imageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
	imageIcon_every?: InputMaybe<IconWhereInput>;
	imageIcon_none?: InputMaybe<IconWhereInput>;
	imageIcon_some?: InputMaybe<IconWhereInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	mimeType_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	mimeType_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	size?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	size_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	size_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	size_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	size_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	size_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
	videoThumbnailProjectSection_every?: InputMaybe<ProjectSectionWhereInput>;
	videoThumbnailProjectSection_none?: InputMaybe<ProjectSectionWhereInput>;
	videoThumbnailProjectSection_some?: InputMaybe<ProjectSectionWhereInput>;
	width?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	width_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	width_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	width_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	width_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	width_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthorSection = Entity & {
	__typename?: 'AuthorSection';
	description: Scalars['String']['output'];
	expertise: Scalars['String']['output'];
	/** The unique identifier */
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	photo: Asset;
	sectionID: Scalars['String']['output'];
	socials: Array<Social>;
	/** System stage field */
	stage: Stage;
};

export type AuthorSectionPhotoArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type AuthorSectionSocialsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<SocialOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<SocialWhereInput>;
};

export type AuthorSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AuthorSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthorSectionConnection = {
	__typename?: 'AuthorSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AuthorSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AuthorSectionCreateInput = {
	description: Scalars['String']['input'];
	expertise: Scalars['String']['input'];
	name: Scalars['String']['input'];
	photo: AssetCreateOneInlineInput;
	sectionID: Scalars['String']['input'];
	socials?: InputMaybe<SocialCreateManyInlineInput>;
};

export type AuthorSectionCreateManyInlineInput = {
	/** Create and connect multiple existing AuthorSection documents */
	create?: InputMaybe<Array<AuthorSectionCreateInput>>;
};

export type AuthorSectionCreateOneInlineInput = {
	/** Create and connect one AuthorSection document */
	create?: InputMaybe<AuthorSectionCreateInput>;
};

export type AuthorSectionCreateWithPositionInput = {
	/** Document to create */
	data: AuthorSectionCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AuthorSectionEdge = {
	__typename?: 'AuthorSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: AuthorSection;
};

/** Identifies documents */
export type AuthorSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AuthorSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AuthorSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AuthorSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	expertise?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	expertise_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	expertise_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	expertise_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	expertise_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	expertise_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	expertise_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	expertise_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	expertise_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	expertise_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	photo?: InputMaybe<AssetWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	socials_every?: InputMaybe<SocialWhereInput>;
	socials_none?: InputMaybe<SocialWhereInput>;
	socials_some?: InputMaybe<SocialWhereInput>;
};

export enum AuthorSectionOrderByInput {
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ExpertiseAsc = 'expertise_ASC',
	ExpertiseDesc = 'expertise_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
}

export type AuthorSectionParent = LandingPage;

export type AuthorSectionParentConnectInput = {
	LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type AuthorSectionParentCreateInput = {
	LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type AuthorSectionParentCreateManyInlineInput = {
	/** Connect multiple existing AuthorSectionParent documents */
	connect?: InputMaybe<Array<AuthorSectionParentWhereUniqueInput>>;
	/** Create and connect multiple existing AuthorSectionParent documents */
	create?: InputMaybe<Array<AuthorSectionParentCreateInput>>;
};

export type AuthorSectionParentCreateOneInlineInput = {
	/** Connect one existing AuthorSectionParent document */
	connect?: InputMaybe<AuthorSectionParentWhereUniqueInput>;
	/** Create and connect one AuthorSectionParent document */
	create?: InputMaybe<AuthorSectionParentCreateInput>;
};

export type AuthorSectionParentUpdateInput = {
	LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type AuthorSectionParentUpdateManyInlineInput = {
	/** Connect multiple existing AuthorSectionParent documents */
	connect?: InputMaybe<Array<AuthorSectionParentConnectInput>>;
	/** Create and connect multiple AuthorSectionParent documents */
	create?: InputMaybe<Array<AuthorSectionParentCreateInput>>;
	/** Delete multiple AuthorSectionParent documents */
	delete?: InputMaybe<Array<AuthorSectionParentWhereUniqueInput>>;
	/** Disconnect multiple AuthorSectionParent documents */
	disconnect?: InputMaybe<Array<AuthorSectionParentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing AuthorSectionParent documents */
	set?: InputMaybe<Array<AuthorSectionParentWhereUniqueInput>>;
	/** Update multiple AuthorSectionParent documents */
	update?: InputMaybe<
		Array<AuthorSectionParentUpdateWithNestedWhereUniqueInput>
	>;
	/** Upsert multiple AuthorSectionParent documents */
	upsert?: InputMaybe<
		Array<AuthorSectionParentUpsertWithNestedWhereUniqueInput>
	>;
};

export type AuthorSectionParentUpdateManyWithNestedWhereInput = {
	LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type AuthorSectionParentUpdateOneInlineInput = {
	/** Connect existing AuthorSectionParent document */
	connect?: InputMaybe<AuthorSectionParentWhereUniqueInput>;
	/** Create and connect one AuthorSectionParent document */
	create?: InputMaybe<AuthorSectionParentCreateInput>;
	/** Delete currently connected AuthorSectionParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected AuthorSectionParent document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single AuthorSectionParent document */
	update?: InputMaybe<AuthorSectionParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single AuthorSectionParent document */
	upsert?: InputMaybe<AuthorSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type AuthorSectionParentUpdateWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type AuthorSectionParentUpsertWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type AuthorSectionParentWhereInput = {
	LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type AuthorSectionParentWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type AuthorSectionUpdateInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	expertise?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	photo?: InputMaybe<AssetUpdateOneInlineInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	socials?: InputMaybe<SocialUpdateManyInlineInput>;
};

export type AuthorSectionUpdateManyInlineInput = {
	/** Create and connect multiple AuthorSection component instances */
	create?: InputMaybe<Array<AuthorSectionCreateWithPositionInput>>;
	/** Delete multiple AuthorSection documents */
	delete?: InputMaybe<Array<AuthorSectionWhereUniqueInput>>;
	/** Update multiple AuthorSection component instances */
	update?: InputMaybe<
		Array<AuthorSectionUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple AuthorSection component instances */
	upsert?: InputMaybe<
		Array<AuthorSectionUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type AuthorSectionUpdateManyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	expertise?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AuthorSectionUpdateManyInput;
	/** Document search */
	where: AuthorSectionWhereInput;
};

export type AuthorSectionUpdateOneInlineInput = {
	/** Create and connect one AuthorSection document */
	create?: InputMaybe<AuthorSectionCreateInput>;
	/** Delete currently connected AuthorSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single AuthorSection document */
	update?: InputMaybe<AuthorSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single AuthorSection document */
	upsert?: InputMaybe<AuthorSectionUpsertWithNestedWhereUniqueInput>;
};

export type AuthorSectionUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<AuthorSectionUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: AuthorSectionWhereUniqueInput;
};

export type AuthorSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AuthorSectionUpdateInput;
	/** Unique document search */
	where: AuthorSectionWhereUniqueInput;
};

export type AuthorSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: AuthorSectionCreateInput;
	/** Update document if it exists */
	update: AuthorSectionUpdateInput;
};

export type AuthorSectionUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<AuthorSectionUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: AuthorSectionWhereUniqueInput;
};

export type AuthorSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AuthorSectionUpsertInput;
	/** Unique document search */
	where: AuthorSectionWhereUniqueInput;
};

/** Identifies documents */
export type AuthorSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AuthorSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AuthorSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AuthorSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	expertise?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	expertise_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	expertise_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	expertise_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	expertise_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	expertise_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	expertise_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	expertise_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	expertise_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	expertise_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	photo?: InputMaybe<AssetWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	socials_every?: InputMaybe<SocialWhereInput>;
	socials_none?: InputMaybe<SocialWhereInput>;
	socials_some?: InputMaybe<SocialWhereInput>;
};

/** References AuthorSection record uniquely */
export type AuthorSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
	__typename?: 'BatchPayload';
	/** The number of nodes that have been affected by the Batch operation. */
	count: Scalars['Long']['output'];
};

export type Benefit = Entity &
	Node & {
		__typename?: 'Benefit';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		description: Scalars['String']['output'];
		/** Get the document in other stages */
		documentInStages: Array<Benefit>;
		/** List of Benefit versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type BenefitCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BenefitDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type BenefitHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type BenefitPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BenefitScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type BenefitUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BenefitConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: BenefitWhereUniqueInput;
};

/** A connection to a list of items. */
export type BenefitConnection = {
	__typename?: 'BenefitConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<BenefitEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type BenefitCreateInput = {
	clu1ukh7c052b07lr2uzsext0?: InputMaybe<BonusCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BenefitCreateManyInlineInput = {
	/** Connect multiple existing Benefit documents */
	connect?: InputMaybe<Array<BenefitWhereUniqueInput>>;
	/** Create and connect multiple existing Benefit documents */
	create?: InputMaybe<Array<BenefitCreateInput>>;
};

export type BenefitCreateOneInlineInput = {
	/** Connect one existing Benefit document */
	connect?: InputMaybe<BenefitWhereUniqueInput>;
	/** Create and connect one Benefit document */
	create?: InputMaybe<BenefitCreateInput>;
};

/** An edge in a connection. */
export type BenefitEdge = {
	__typename?: 'BenefitEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Benefit;
};

/** Identifies documents */
export type BenefitManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BenefitWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BenefitWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BenefitWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	documentInStages_every?: InputMaybe<BenefitWhereStageInput>;
	documentInStages_none?: InputMaybe<BenefitWhereStageInput>;
	documentInStages_some?: InputMaybe<BenefitWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BenefitOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type BenefitUpdateInput = {
	clu1ukh7c052b07lr2uzsext0?: InputMaybe<BonusUpdateManyInlineInput>;
	description?: InputMaybe<Scalars['String']['input']>;
};

export type BenefitUpdateManyInlineInput = {
	/** Connect multiple existing Benefit documents */
	connect?: InputMaybe<Array<BenefitConnectInput>>;
	/** Create and connect multiple Benefit documents */
	create?: InputMaybe<Array<BenefitCreateInput>>;
	/** Delete multiple Benefit documents */
	delete?: InputMaybe<Array<BenefitWhereUniqueInput>>;
	/** Disconnect multiple Benefit documents */
	disconnect?: InputMaybe<Array<BenefitWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Benefit documents */
	set?: InputMaybe<Array<BenefitWhereUniqueInput>>;
	/** Update multiple Benefit documents */
	update?: InputMaybe<Array<BenefitUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Benefit documents */
	upsert?: InputMaybe<Array<BenefitUpsertWithNestedWhereUniqueInput>>;
};

export type BenefitUpdateManyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
};

export type BenefitUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: BenefitUpdateManyInput;
	/** Document search */
	where: BenefitWhereInput;
};

export type BenefitUpdateOneInlineInput = {
	/** Connect existing Benefit document */
	connect?: InputMaybe<BenefitWhereUniqueInput>;
	/** Create and connect one Benefit document */
	create?: InputMaybe<BenefitCreateInput>;
	/** Delete currently connected Benefit document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Benefit document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Benefit document */
	update?: InputMaybe<BenefitUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Benefit document */
	upsert?: InputMaybe<BenefitUpsertWithNestedWhereUniqueInput>;
};

export type BenefitUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: BenefitUpdateInput;
	/** Unique document search */
	where: BenefitWhereUniqueInput;
};

export type BenefitUpsertInput = {
	/** Create document if it didn't exist */
	create: BenefitCreateInput;
	/** Update document if it exists */
	update: BenefitUpdateInput;
};

export type BenefitUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: BenefitUpsertInput;
	/** Unique document search */
	where: BenefitWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BenefitWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BenefitWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BenefitWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BenefitWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BenefitWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	documentInStages_every?: InputMaybe<BenefitWhereStageInput>;
	documentInStages_none?: InputMaybe<BenefitWhereStageInput>;
	documentInStages_some?: InputMaybe<BenefitWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BenefitWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BenefitWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BenefitWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BenefitWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<BenefitWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Benefit record uniquely */
export type BenefitWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Bonus = Entity &
	Node & {
		__typename?: 'Bonus';
		benefitTitle: Scalars['String']['output'];
		benefits: Array<Benefit>;
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		description: Scalars['String']['output'];
		/** Get the document in other stages */
		documentInStages: Array<Bonus>;
		/** List of Bonus versions */
		history: Array<Version>;
		icon: Asset;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		title: Scalars['String']['output'];
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type BonusBenefitsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<BenefitOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BenefitWhereInput>;
};

export type BonusCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BonusDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type BonusHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type BonusIconArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BonusPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BonusScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type BonusUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BonusConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: BonusWhereUniqueInput;
};

/** A connection to a list of items. */
export type BonusConnection = {
	__typename?: 'BonusConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<BonusEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type BonusCreateInput = {
	benefitTitle: Scalars['String']['input'];
	benefits?: InputMaybe<BenefitCreateManyInlineInput>;
	clu1uudjq05b207lrebcvbvv6?: InputMaybe<BonusSectionCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description: Scalars['String']['input'];
	icon: AssetCreateOneInlineInput;
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BonusCreateManyInlineInput = {
	/** Connect multiple existing Bonus documents */
	connect?: InputMaybe<Array<BonusWhereUniqueInput>>;
	/** Create and connect multiple existing Bonus documents */
	create?: InputMaybe<Array<BonusCreateInput>>;
};

export type BonusCreateOneInlineInput = {
	/** Connect one existing Bonus document */
	connect?: InputMaybe<BonusWhereUniqueInput>;
	/** Create and connect one Bonus document */
	create?: InputMaybe<BonusCreateInput>;
};

/** An edge in a connection. */
export type BonusEdge = {
	__typename?: 'BonusEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Bonus;
};

/** Identifies documents */
export type BonusManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BonusWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BonusWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BonusWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	benefitTitle?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	benefitTitle_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	benefitTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	benefitTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	benefitTitle_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	benefitTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	benefitTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	benefitTitle_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	benefitTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	benefitTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
	benefits_every?: InputMaybe<BenefitWhereInput>;
	benefits_none?: InputMaybe<BenefitWhereInput>;
	benefits_some?: InputMaybe<BenefitWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	documentInStages_every?: InputMaybe<BonusWhereStageInput>;
	documentInStages_none?: InputMaybe<BonusWhereStageInput>;
	documentInStages_some?: InputMaybe<BonusWhereStageInput>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BonusOrderByInput {
	BenefitTitleAsc = 'benefitTitle_ASC',
	BenefitTitleDesc = 'benefitTitle_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type BonusSection = Entity &
	Node & {
		__typename?: 'BonusSection';
		bonuses: Array<Bonus>;
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<BonusSection>;
		/** List of BonusSection versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		sectionID: Scalars['String']['output'];
		/** System stage field */
		stage: Stage;
		title: Scalars['String']['output'];
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type BonusSectionBonusesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<BonusOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BonusWhereInput>;
};

export type BonusSectionCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BonusSectionDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type BonusSectionHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type BonusSectionPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BonusSectionScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type BonusSectionUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type BonusSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: BonusSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type BonusSectionConnection = {
	__typename?: 'BonusSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<BonusSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type BonusSectionCreateInput = {
	bonuses?: InputMaybe<BonusCreateManyInlineInput>;
	clu1um83e056q07lreca56a9g?: InputMaybe<LandingPageCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	sectionID: Scalars['String']['input'];
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BonusSectionCreateManyInlineInput = {
	/** Connect multiple existing BonusSection documents */
	connect?: InputMaybe<Array<BonusSectionWhereUniqueInput>>;
	/** Create and connect multiple existing BonusSection documents */
	create?: InputMaybe<Array<BonusSectionCreateInput>>;
};

export type BonusSectionCreateOneInlineInput = {
	/** Connect one existing BonusSection document */
	connect?: InputMaybe<BonusSectionWhereUniqueInput>;
	/** Create and connect one BonusSection document */
	create?: InputMaybe<BonusSectionCreateInput>;
};

/** An edge in a connection. */
export type BonusSectionEdge = {
	__typename?: 'BonusSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: BonusSection;
};

/** Identifies documents */
export type BonusSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BonusSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BonusSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BonusSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	bonuses_every?: InputMaybe<BonusWhereInput>;
	bonuses_none?: InputMaybe<BonusWhereInput>;
	bonuses_some?: InputMaybe<BonusWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<BonusSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<BonusSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<BonusSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BonusSectionOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type BonusSectionUpdateInput = {
	bonuses?: InputMaybe<BonusUpdateManyInlineInput>;
	clu1um83e056q07lreca56a9g?: InputMaybe<LandingPageUpdateManyInlineInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type BonusSectionUpdateManyInlineInput = {
	/** Connect multiple existing BonusSection documents */
	connect?: InputMaybe<Array<BonusSectionConnectInput>>;
	/** Create and connect multiple BonusSection documents */
	create?: InputMaybe<Array<BonusSectionCreateInput>>;
	/** Delete multiple BonusSection documents */
	delete?: InputMaybe<Array<BonusSectionWhereUniqueInput>>;
	/** Disconnect multiple BonusSection documents */
	disconnect?: InputMaybe<Array<BonusSectionWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing BonusSection documents */
	set?: InputMaybe<Array<BonusSectionWhereUniqueInput>>;
	/** Update multiple BonusSection documents */
	update?: InputMaybe<Array<BonusSectionUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple BonusSection documents */
	upsert?: InputMaybe<Array<BonusSectionUpsertWithNestedWhereUniqueInput>>;
};

export type BonusSectionUpdateManyInput = {
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type BonusSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: BonusSectionUpdateManyInput;
	/** Document search */
	where: BonusSectionWhereInput;
};

export type BonusSectionUpdateOneInlineInput = {
	/** Connect existing BonusSection document */
	connect?: InputMaybe<BonusSectionWhereUniqueInput>;
	/** Create and connect one BonusSection document */
	create?: InputMaybe<BonusSectionCreateInput>;
	/** Delete currently connected BonusSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected BonusSection document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single BonusSection document */
	update?: InputMaybe<BonusSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single BonusSection document */
	upsert?: InputMaybe<BonusSectionUpsertWithNestedWhereUniqueInput>;
};

export type BonusSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: BonusSectionUpdateInput;
	/** Unique document search */
	where: BonusSectionWhereUniqueInput;
};

export type BonusSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: BonusSectionCreateInput;
	/** Update document if it exists */
	update: BonusSectionUpdateInput;
};

export type BonusSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: BonusSectionUpsertInput;
	/** Unique document search */
	where: BonusSectionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BonusSectionWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BonusSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BonusSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BonusSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BonusSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	bonuses_every?: InputMaybe<BonusWhereInput>;
	bonuses_none?: InputMaybe<BonusWhereInput>;
	bonuses_some?: InputMaybe<BonusWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<BonusSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<BonusSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<BonusSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BonusSectionWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BonusSectionWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BonusSectionWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BonusSectionWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<BonusSectionWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References BonusSection record uniquely */
export type BonusSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type BonusUpdateInput = {
	benefitTitle?: InputMaybe<Scalars['String']['input']>;
	benefits?: InputMaybe<BenefitUpdateManyInlineInput>;
	clu1uudjq05b207lrebcvbvv6?: InputMaybe<BonusSectionUpdateManyInlineInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	icon?: InputMaybe<AssetUpdateOneInlineInput>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type BonusUpdateManyInlineInput = {
	/** Connect multiple existing Bonus documents */
	connect?: InputMaybe<Array<BonusConnectInput>>;
	/** Create and connect multiple Bonus documents */
	create?: InputMaybe<Array<BonusCreateInput>>;
	/** Delete multiple Bonus documents */
	delete?: InputMaybe<Array<BonusWhereUniqueInput>>;
	/** Disconnect multiple Bonus documents */
	disconnect?: InputMaybe<Array<BonusWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Bonus documents */
	set?: InputMaybe<Array<BonusWhereUniqueInput>>;
	/** Update multiple Bonus documents */
	update?: InputMaybe<Array<BonusUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Bonus documents */
	upsert?: InputMaybe<Array<BonusUpsertWithNestedWhereUniqueInput>>;
};

export type BonusUpdateManyInput = {
	benefitTitle?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type BonusUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: BonusUpdateManyInput;
	/** Document search */
	where: BonusWhereInput;
};

export type BonusUpdateOneInlineInput = {
	/** Connect existing Bonus document */
	connect?: InputMaybe<BonusWhereUniqueInput>;
	/** Create and connect one Bonus document */
	create?: InputMaybe<BonusCreateInput>;
	/** Delete currently connected Bonus document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Bonus document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Bonus document */
	update?: InputMaybe<BonusUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Bonus document */
	upsert?: InputMaybe<BonusUpsertWithNestedWhereUniqueInput>;
};

export type BonusUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: BonusUpdateInput;
	/** Unique document search */
	where: BonusWhereUniqueInput;
};

export type BonusUpsertInput = {
	/** Create document if it didn't exist */
	create: BonusCreateInput;
	/** Update document if it exists */
	update: BonusUpdateInput;
};

export type BonusUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: BonusUpsertInput;
	/** Unique document search */
	where: BonusWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BonusWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BonusWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BonusWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BonusWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BonusWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	benefitTitle?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	benefitTitle_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	benefitTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	benefitTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	benefitTitle_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	benefitTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	benefitTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	benefitTitle_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	benefitTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	benefitTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
	benefits_every?: InputMaybe<BenefitWhereInput>;
	benefits_none?: InputMaybe<BenefitWhereInput>;
	benefits_some?: InputMaybe<BenefitWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	documentInStages_every?: InputMaybe<BonusWhereStageInput>;
	documentInStages_none?: InputMaybe<BonusWhereStageInput>;
	documentInStages_some?: InputMaybe<BonusWhereStageInput>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BonusWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BonusWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BonusWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BonusWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<BonusWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Bonus record uniquely */
export type BonusWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Button = Entity & {
	__typename?: 'Button';
	/** The unique identifier */
	id: Scalars['ID']['output'];
	/** System stage field */
	stage: Stage;
	target: Scalars['String']['output'];
	text: Scalars['String']['output'];
};

export type ButtonConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ButtonWhereUniqueInput;
};

/** A connection to a list of items. */
export type ButtonConnection = {
	__typename?: 'ButtonConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ButtonEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ButtonCreateInput = {
	target: Scalars['String']['input'];
	text: Scalars['String']['input'];
};

export type ButtonCreateManyInlineInput = {
	/** Create and connect multiple existing Button documents */
	create?: InputMaybe<Array<ButtonCreateInput>>;
};

export type ButtonCreateOneInlineInput = {
	/** Create and connect one Button document */
	create?: InputMaybe<ButtonCreateInput>;
};

export type ButtonCreateWithPositionInput = {
	/** Document to create */
	data: ButtonCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ButtonEdge = {
	__typename?: 'ButtonEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Button;
};

/** Identifies documents */
export type ButtonManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ButtonWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ButtonWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ButtonWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	target?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	target_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	target_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	target_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	target_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	target_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	target_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	target_starts_with?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	text_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	text_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	text_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	text_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	text_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ButtonOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	TargetAsc = 'target_ASC',
	TargetDesc = 'target_DESC',
	TextAsc = 'text_ASC',
	TextDesc = 'text_DESC',
}

export type ButtonParent = CheckoutSection | Hero;

export type ButtonParentConnectInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionConnectInput>;
	Hero?: InputMaybe<HeroConnectInput>;
};

export type ButtonParentCreateInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionCreateInput>;
	Hero?: InputMaybe<HeroCreateInput>;
};

export type ButtonParentCreateManyInlineInput = {
	/** Create and connect multiple existing ButtonParent documents */
	create?: InputMaybe<Array<ButtonParentCreateInput>>;
};

export type ButtonParentCreateOneInlineInput = {
	/** Create and connect one ButtonParent document */
	create?: InputMaybe<ButtonParentCreateInput>;
};

export type ButtonParentCreateWithPositionInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionCreateWithPositionInput>;
	Hero?: InputMaybe<HeroCreateWithPositionInput>;
};

export type ButtonParentUpdateInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionUpdateInput>;
	Hero?: InputMaybe<HeroUpdateInput>;
};

export type ButtonParentUpdateManyInlineInput = {
	/** Create and connect multiple ButtonParent component instances */
	create?: InputMaybe<Array<ButtonParentCreateWithPositionInput>>;
	/** Delete multiple ButtonParent documents */
	delete?: InputMaybe<Array<ButtonParentWhereUniqueInput>>;
	/** Update multiple ButtonParent component instances */
	update?: InputMaybe<
		Array<ButtonParentUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple ButtonParent component instances */
	upsert?: InputMaybe<
		Array<ButtonParentUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type ButtonParentUpdateManyWithNestedWhereInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionUpdateManyWithNestedWhereInput>;
	Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
};

export type ButtonParentUpdateOneInlineInput = {
	/** Create and connect one ButtonParent document */
	create?: InputMaybe<ButtonParentCreateInput>;
	/** Delete currently connected ButtonParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single ButtonParent document */
	update?: InputMaybe<ButtonParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ButtonParent document */
	upsert?: InputMaybe<ButtonParentUpsertWithNestedWhereUniqueInput>;
};

export type ButtonParentUpdateWithNestedWhereUniqueAndPositionInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionUpdateWithNestedWhereUniqueAndPositionInput>;
	Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ButtonParentUpdateWithNestedWhereUniqueInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionUpdateWithNestedWhereUniqueInput>;
	Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
};

export type ButtonParentUpsertWithNestedWhereUniqueAndPositionInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionUpsertWithNestedWhereUniqueAndPositionInput>;
	Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ButtonParentUpsertWithNestedWhereUniqueInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionUpsertWithNestedWhereUniqueInput>;
	Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type ButtonParentWhereInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionWhereInput>;
	Hero?: InputMaybe<HeroWhereInput>;
};

export type ButtonParentWhereUniqueInput = {
	CheckoutSection?: InputMaybe<CheckoutSectionWhereUniqueInput>;
	Hero?: InputMaybe<HeroWhereUniqueInput>;
};

export type ButtonUpdateInput = {
	target?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateManyInlineInput = {
	/** Create and connect multiple Button component instances */
	create?: InputMaybe<Array<ButtonCreateWithPositionInput>>;
	/** Delete multiple Button documents */
	delete?: InputMaybe<Array<ButtonWhereUniqueInput>>;
	/** Update multiple Button component instances */
	update?: InputMaybe<Array<ButtonUpdateWithNestedWhereUniqueAndPositionInput>>;
	/** Upsert multiple Button component instances */
	upsert?: InputMaybe<Array<ButtonUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ButtonUpdateManyInput = {
	target?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ButtonUpdateManyInput;
	/** Document search */
	where: ButtonWhereInput;
};

export type ButtonUpdateOneInlineInput = {
	/** Create and connect one Button document */
	create?: InputMaybe<ButtonCreateInput>;
	/** Delete currently connected Button document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Button document */
	update?: InputMaybe<ButtonUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Button document */
	upsert?: InputMaybe<ButtonUpsertWithNestedWhereUniqueInput>;
};

export type ButtonUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<ButtonUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: ButtonWhereUniqueInput;
};

export type ButtonUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ButtonUpdateInput;
	/** Unique document search */
	where: ButtonWhereUniqueInput;
};

export type ButtonUpsertInput = {
	/** Create document if it didn't exist */
	create: ButtonCreateInput;
	/** Update document if it exists */
	update: ButtonUpdateInput;
};

export type ButtonUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<ButtonUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: ButtonWhereUniqueInput;
};

export type ButtonUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ButtonUpsertInput;
	/** Unique document search */
	where: ButtonWhereUniqueInput;
};

/** Identifies documents */
export type ButtonWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ButtonWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ButtonWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ButtonWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	target?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	target_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	target_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	target_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	target_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	target_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	target_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	target_starts_with?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	text_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	text_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	text_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	text_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	text_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Button record uniquely */
export type ButtonWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ButtonsType {
	Primary = 'primary',
	Secondary = 'secondary',
}

export type ChaptersSection = Entity & {
	__typename?: 'ChaptersSection';
	chapters: Array<Accordion>;
	/** The unique identifier */
	id: Scalars['ID']['output'];
	sectionID: Scalars['String']['output'];
	/** System stage field */
	stage: Stage;
	title: Scalars['String']['output'];
};

export type ChaptersSectionChaptersArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AccordionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AccordionWhereInput>;
};

export type ChaptersSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ChaptersSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ChaptersSectionConnection = {
	__typename?: 'ChaptersSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ChaptersSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ChaptersSectionCreateInput = {
	chapters?: InputMaybe<AccordionCreateManyInlineInput>;
	sectionID: Scalars['String']['input'];
	title: Scalars['String']['input'];
};

export type ChaptersSectionCreateManyInlineInput = {
	/** Create and connect multiple existing ChaptersSection documents */
	create?: InputMaybe<Array<ChaptersSectionCreateInput>>;
};

export type ChaptersSectionCreateOneInlineInput = {
	/** Create and connect one ChaptersSection document */
	create?: InputMaybe<ChaptersSectionCreateInput>;
};

export type ChaptersSectionCreateWithPositionInput = {
	/** Document to create */
	data: ChaptersSectionCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ChaptersSectionEdge = {
	__typename?: 'ChaptersSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ChaptersSection;
};

/** Identifies documents */
export type ChaptersSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ChaptersSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ChaptersSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ChaptersSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	chapters_every?: InputMaybe<AccordionWhereInput>;
	chapters_none?: InputMaybe<AccordionWhereInput>;
	chapters_some?: InputMaybe<AccordionWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ChaptersSectionOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
}

export type ChaptersSectionParent = LandingPage;

export type ChaptersSectionParentConnectInput = {
	LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type ChaptersSectionParentCreateInput = {
	LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type ChaptersSectionParentCreateManyInlineInput = {
	/** Connect multiple existing ChaptersSectionParent documents */
	connect?: InputMaybe<Array<ChaptersSectionParentWhereUniqueInput>>;
	/** Create and connect multiple existing ChaptersSectionParent documents */
	create?: InputMaybe<Array<ChaptersSectionParentCreateInput>>;
};

export type ChaptersSectionParentCreateOneInlineInput = {
	/** Connect one existing ChaptersSectionParent document */
	connect?: InputMaybe<ChaptersSectionParentWhereUniqueInput>;
	/** Create and connect one ChaptersSectionParent document */
	create?: InputMaybe<ChaptersSectionParentCreateInput>;
};

export type ChaptersSectionParentUpdateInput = {
	LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type ChaptersSectionParentUpdateManyInlineInput = {
	/** Connect multiple existing ChaptersSectionParent documents */
	connect?: InputMaybe<Array<ChaptersSectionParentConnectInput>>;
	/** Create and connect multiple ChaptersSectionParent documents */
	create?: InputMaybe<Array<ChaptersSectionParentCreateInput>>;
	/** Delete multiple ChaptersSectionParent documents */
	delete?: InputMaybe<Array<ChaptersSectionParentWhereUniqueInput>>;
	/** Disconnect multiple ChaptersSectionParent documents */
	disconnect?: InputMaybe<Array<ChaptersSectionParentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ChaptersSectionParent documents */
	set?: InputMaybe<Array<ChaptersSectionParentWhereUniqueInput>>;
	/** Update multiple ChaptersSectionParent documents */
	update?: InputMaybe<
		Array<ChaptersSectionParentUpdateWithNestedWhereUniqueInput>
	>;
	/** Upsert multiple ChaptersSectionParent documents */
	upsert?: InputMaybe<
		Array<ChaptersSectionParentUpsertWithNestedWhereUniqueInput>
	>;
};

export type ChaptersSectionParentUpdateManyWithNestedWhereInput = {
	LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type ChaptersSectionParentUpdateOneInlineInput = {
	/** Connect existing ChaptersSectionParent document */
	connect?: InputMaybe<ChaptersSectionParentWhereUniqueInput>;
	/** Create and connect one ChaptersSectionParent document */
	create?: InputMaybe<ChaptersSectionParentCreateInput>;
	/** Delete currently connected ChaptersSectionParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected ChaptersSectionParent document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single ChaptersSectionParent document */
	update?: InputMaybe<ChaptersSectionParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ChaptersSectionParent document */
	upsert?: InputMaybe<ChaptersSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type ChaptersSectionParentUpdateWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type ChaptersSectionParentUpsertWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type ChaptersSectionParentWhereInput = {
	LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type ChaptersSectionParentWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type ChaptersSectionUpdateInput = {
	chapters?: InputMaybe<AccordionUpdateManyInlineInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ChaptersSectionUpdateManyInlineInput = {
	/** Create and connect multiple ChaptersSection component instances */
	create?: InputMaybe<Array<ChaptersSectionCreateWithPositionInput>>;
	/** Delete multiple ChaptersSection documents */
	delete?: InputMaybe<Array<ChaptersSectionWhereUniqueInput>>;
	/** Update multiple ChaptersSection component instances */
	update?: InputMaybe<
		Array<ChaptersSectionUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple ChaptersSection component instances */
	upsert?: InputMaybe<
		Array<ChaptersSectionUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type ChaptersSectionUpdateManyInput = {
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ChaptersSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ChaptersSectionUpdateManyInput;
	/** Document search */
	where: ChaptersSectionWhereInput;
};

export type ChaptersSectionUpdateOneInlineInput = {
	/** Create and connect one ChaptersSection document */
	create?: InputMaybe<ChaptersSectionCreateInput>;
	/** Delete currently connected ChaptersSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single ChaptersSection document */
	update?: InputMaybe<ChaptersSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ChaptersSection document */
	upsert?: InputMaybe<ChaptersSectionUpsertWithNestedWhereUniqueInput>;
};

export type ChaptersSectionUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<ChaptersSectionUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: ChaptersSectionWhereUniqueInput;
};

export type ChaptersSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ChaptersSectionUpdateInput;
	/** Unique document search */
	where: ChaptersSectionWhereUniqueInput;
};

export type ChaptersSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: ChaptersSectionCreateInput;
	/** Update document if it exists */
	update: ChaptersSectionUpdateInput;
};

export type ChaptersSectionUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<ChaptersSectionUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: ChaptersSectionWhereUniqueInput;
};

export type ChaptersSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ChaptersSectionUpsertInput;
	/** Unique document search */
	where: ChaptersSectionWhereUniqueInput;
};

/** Identifies documents */
export type ChaptersSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ChaptersSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ChaptersSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ChaptersSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	chapters_every?: InputMaybe<AccordionWhereInput>;
	chapters_none?: InputMaybe<AccordionWhereInput>;
	chapters_some?: InputMaybe<AccordionWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References ChaptersSection record uniquely */
export type ChaptersSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type CheckoutSection = Entity & {
	__typename?: 'CheckoutSection';
	button: Button;
	icons: Array<Icon>;
	/** The unique identifier */
	id: Scalars['ID']['output'];
	image: Asset;
	originalPrice: Scalars['String']['output'];
	salePrice: Scalars['String']['output'];
	sectionID: Scalars['String']['output'];
	/** System stage field */
	stage: Stage;
	title: Scalars['String']['output'];
};

export type CheckoutSectionButtonArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type CheckoutSectionIconsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<IconOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<IconWhereInput>;
};

export type CheckoutSectionImageArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type CheckoutSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CheckoutSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CheckoutSectionConnection = {
	__typename?: 'CheckoutSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<CheckoutSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type CheckoutSectionCreateInput = {
	button: ButtonCreateOneInlineInput;
	icons?: InputMaybe<IconCreateManyInlineInput>;
	image: AssetCreateOneInlineInput;
	originalPrice: Scalars['String']['input'];
	salePrice: Scalars['String']['input'];
	sectionID: Scalars['String']['input'];
	title: Scalars['String']['input'];
};

export type CheckoutSectionCreateManyInlineInput = {
	/** Create and connect multiple existing CheckoutSection documents */
	create?: InputMaybe<Array<CheckoutSectionCreateInput>>;
};

export type CheckoutSectionCreateOneInlineInput = {
	/** Create and connect one CheckoutSection document */
	create?: InputMaybe<CheckoutSectionCreateInput>;
};

export type CheckoutSectionCreateWithPositionInput = {
	/** Document to create */
	data: CheckoutSectionCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CheckoutSectionEdge = {
	__typename?: 'CheckoutSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: CheckoutSection;
};

/** Identifies documents */
export type CheckoutSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CheckoutSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CheckoutSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CheckoutSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	button?: InputMaybe<ButtonWhereInput>;
	icons_every?: InputMaybe<IconWhereInput>;
	icons_none?: InputMaybe<IconWhereInput>;
	icons_some?: InputMaybe<IconWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	image?: InputMaybe<AssetWhereInput>;
	originalPrice?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	originalPrice_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	originalPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	originalPrice_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	originalPrice_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	originalPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	originalPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	originalPrice_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	originalPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	originalPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
	salePrice?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	salePrice_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	salePrice_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	salePrice_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	salePrice_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	salePrice_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	salePrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	salePrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	salePrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	salePrice_starts_with?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum CheckoutSectionOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	OriginalPriceAsc = 'originalPrice_ASC',
	OriginalPriceDesc = 'originalPrice_DESC',
	SalePriceAsc = 'salePrice_ASC',
	SalePriceDesc = 'salePrice_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
}

export type CheckoutSectionParent = LandingPage;

export type CheckoutSectionParentConnectInput = {
	LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type CheckoutSectionParentCreateInput = {
	LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type CheckoutSectionParentCreateManyInlineInput = {
	/** Connect multiple existing CheckoutSectionParent documents */
	connect?: InputMaybe<Array<CheckoutSectionParentWhereUniqueInput>>;
	/** Create and connect multiple existing CheckoutSectionParent documents */
	create?: InputMaybe<Array<CheckoutSectionParentCreateInput>>;
};

export type CheckoutSectionParentCreateOneInlineInput = {
	/** Connect one existing CheckoutSectionParent document */
	connect?: InputMaybe<CheckoutSectionParentWhereUniqueInput>;
	/** Create and connect one CheckoutSectionParent document */
	create?: InputMaybe<CheckoutSectionParentCreateInput>;
};

export type CheckoutSectionParentUpdateInput = {
	LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type CheckoutSectionParentUpdateManyInlineInput = {
	/** Connect multiple existing CheckoutSectionParent documents */
	connect?: InputMaybe<Array<CheckoutSectionParentConnectInput>>;
	/** Create and connect multiple CheckoutSectionParent documents */
	create?: InputMaybe<Array<CheckoutSectionParentCreateInput>>;
	/** Delete multiple CheckoutSectionParent documents */
	delete?: InputMaybe<Array<CheckoutSectionParentWhereUniqueInput>>;
	/** Disconnect multiple CheckoutSectionParent documents */
	disconnect?: InputMaybe<Array<CheckoutSectionParentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing CheckoutSectionParent documents */
	set?: InputMaybe<Array<CheckoutSectionParentWhereUniqueInput>>;
	/** Update multiple CheckoutSectionParent documents */
	update?: InputMaybe<
		Array<CheckoutSectionParentUpdateWithNestedWhereUniqueInput>
	>;
	/** Upsert multiple CheckoutSectionParent documents */
	upsert?: InputMaybe<
		Array<CheckoutSectionParentUpsertWithNestedWhereUniqueInput>
	>;
};

export type CheckoutSectionParentUpdateManyWithNestedWhereInput = {
	LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type CheckoutSectionParentUpdateOneInlineInput = {
	/** Connect existing CheckoutSectionParent document */
	connect?: InputMaybe<CheckoutSectionParentWhereUniqueInput>;
	/** Create and connect one CheckoutSectionParent document */
	create?: InputMaybe<CheckoutSectionParentCreateInput>;
	/** Delete currently connected CheckoutSectionParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected CheckoutSectionParent document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single CheckoutSectionParent document */
	update?: InputMaybe<CheckoutSectionParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single CheckoutSectionParent document */
	upsert?: InputMaybe<CheckoutSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type CheckoutSectionParentUpdateWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type CheckoutSectionParentUpsertWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type CheckoutSectionParentWhereInput = {
	LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type CheckoutSectionParentWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type CheckoutSectionUpdateInput = {
	button?: InputMaybe<ButtonUpdateOneInlineInput>;
	icons?: InputMaybe<IconUpdateManyInlineInput>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	originalPrice?: InputMaybe<Scalars['String']['input']>;
	salePrice?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type CheckoutSectionUpdateManyInlineInput = {
	/** Create and connect multiple CheckoutSection component instances */
	create?: InputMaybe<Array<CheckoutSectionCreateWithPositionInput>>;
	/** Delete multiple CheckoutSection documents */
	delete?: InputMaybe<Array<CheckoutSectionWhereUniqueInput>>;
	/** Update multiple CheckoutSection component instances */
	update?: InputMaybe<
		Array<CheckoutSectionUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple CheckoutSection component instances */
	upsert?: InputMaybe<
		Array<CheckoutSectionUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type CheckoutSectionUpdateManyInput = {
	originalPrice?: InputMaybe<Scalars['String']['input']>;
	salePrice?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type CheckoutSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CheckoutSectionUpdateManyInput;
	/** Document search */
	where: CheckoutSectionWhereInput;
};

export type CheckoutSectionUpdateOneInlineInput = {
	/** Create and connect one CheckoutSection document */
	create?: InputMaybe<CheckoutSectionCreateInput>;
	/** Delete currently connected CheckoutSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single CheckoutSection document */
	update?: InputMaybe<CheckoutSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single CheckoutSection document */
	upsert?: InputMaybe<CheckoutSectionUpsertWithNestedWhereUniqueInput>;
};

export type CheckoutSectionUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<CheckoutSectionUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: CheckoutSectionWhereUniqueInput;
};

export type CheckoutSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CheckoutSectionUpdateInput;
	/** Unique document search */
	where: CheckoutSectionWhereUniqueInput;
};

export type CheckoutSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: CheckoutSectionCreateInput;
	/** Update document if it exists */
	update: CheckoutSectionUpdateInput;
};

export type CheckoutSectionUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<CheckoutSectionUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: CheckoutSectionWhereUniqueInput;
};

export type CheckoutSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CheckoutSectionUpsertInput;
	/** Unique document search */
	where: CheckoutSectionWhereUniqueInput;
};

/** Identifies documents */
export type CheckoutSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CheckoutSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CheckoutSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CheckoutSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	button?: InputMaybe<ButtonWhereInput>;
	icons_every?: InputMaybe<IconWhereInput>;
	icons_none?: InputMaybe<IconWhereInput>;
	icons_some?: InputMaybe<IconWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	image?: InputMaybe<AssetWhereInput>;
	originalPrice?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	originalPrice_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	originalPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	originalPrice_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	originalPrice_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	originalPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	originalPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	originalPrice_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	originalPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	originalPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
	salePrice?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	salePrice_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	salePrice_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	salePrice_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	salePrice_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	salePrice_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	salePrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	salePrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	salePrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	salePrice_starts_with?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References CheckoutSection record uniquely */
export type CheckoutSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
	__typename?: 'Color';
	css: Scalars['String']['output'];
	hex: Scalars['Hex']['output'];
	rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
	hex?: InputMaybe<Scalars['Hex']['input']>;
	rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
	/** Connect document after specified document */
	after?: InputMaybe<Scalars['ID']['input']>;
	/** Connect document before specified document */
	before?: InputMaybe<Scalars['ID']['input']>;
	/** Connect document at last position */
	end?: InputMaybe<Scalars['Boolean']['input']>;
	/** Connect document at first position */
	start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
	Doc = 'doc',
	Docx = 'docx',
	Html = 'html',
	Jpg = 'jpg',
	Odp = 'odp',
	Ods = 'ods',
	Odt = 'odt',
	Pdf = 'pdf',
	Png = 'png',
	Ppt = 'ppt',
	Pptx = 'pptx',
	Svg = 'svg',
	Txt = 'txt',
	Webp = 'webp',
	Xls = 'xls',
	Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
	/**
	 * Transforms a document into a desired file type.
	 * See this matrix for format support:
	 *
	 * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
	 * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
	 * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
	 * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
	 * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
	 * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
	 * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
	 * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
	 * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
	 * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
	 * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * SVG:	jpg, odp, ods, odt, pdf, png, and webp
	 * HTML:	jpg, odt, pdf, svg, txt, and webp
	 * TXT:	jpg, html, odt, pdf, svg, and webp
	 */
	format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
	/** Changes the output for the file. */
	output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
	__typename?: 'DocumentVersion';
	createdAt: Scalars['DateTime']['output'];
	data?: Maybe<Scalars['Json']['output']>;
	id: Scalars['ID']['output'];
	revision: Scalars['Int']['output'];
	stage: Stage;
};

/** An object with an ID */
export type Entity = {
	/** The id of the object. */
	id: Scalars['ID']['output'];
	/** The Stage of an object */
	stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
	Accordion = 'Accordion',
	/** Asset system model */
	Asset = 'Asset',
	AuthorSection = 'AuthorSection',
	Benefit = 'Benefit',
	Bonus = 'Bonus',
	BonusSection = 'BonusSection',
	Button = 'Button',
	ChaptersSection = 'ChaptersSection',
	CheckoutSection = 'CheckoutSection',
	FaqSection = 'FaqSection',
	Footer = 'Footer',
	Hero = 'Hero',
	Icon = 'Icon',
	IntroSection = 'IntroSection',
	LandingPage = 'LandingPage',
	PreviewSection = 'PreviewSection',
	ProjectSection = 'ProjectSection',
	RememberCheckoutSection = 'RememberCheckoutSection',
	/** Scheduled Operation system model */
	ScheduledOperation = 'ScheduledOperation',
	/** Scheduled Release system model */
	ScheduledRelease = 'ScheduledRelease',
	Social = 'Social',
	Stat = 'Stat',
	/** User system model */
	User = 'User',
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
	/** The ID of an object */
	id: Scalars['ID']['input'];
	locale?: InputMaybe<Locale>;
	stage: Stage;
	/** The Type name of an object */
	typename: EntityTypeName;
};

export type FaqSection = Entity &
	Node & {
		__typename?: 'FaqSection';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<FaqSection>;
		/** List of FaqSection versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		questions: Array<Accordion>;
		scheduledIn: Array<ScheduledOperation>;
		sectionID: Scalars['String']['output'];
		/** System stage field */
		stage: Stage;
		title: Scalars['String']['output'];
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type FaqSectionCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type FaqSectionDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type FaqSectionHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type FaqSectionPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type FaqSectionQuestionsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AccordionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AccordionWhereInput>;
};

export type FaqSectionScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type FaqSectionUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type FaqSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: FaqSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqSectionConnection = {
	__typename?: 'FaqSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<FaqSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type FaqSectionCreateInput = {
	clu307kwr01tf07lr2c2gh2ce?: InputMaybe<LandingPageCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	questions?: InputMaybe<AccordionCreateManyInlineInput>;
	sectionID: Scalars['String']['input'];
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FaqSectionCreateManyInlineInput = {
	/** Connect multiple existing FaqSection documents */
	connect?: InputMaybe<Array<FaqSectionWhereUniqueInput>>;
	/** Create and connect multiple existing FaqSection documents */
	create?: InputMaybe<Array<FaqSectionCreateInput>>;
};

export type FaqSectionCreateOneInlineInput = {
	/** Connect one existing FaqSection document */
	connect?: InputMaybe<FaqSectionWhereUniqueInput>;
	/** Create and connect one FaqSection document */
	create?: InputMaybe<FaqSectionCreateInput>;
};

/** An edge in a connection. */
export type FaqSectionEdge = {
	__typename?: 'FaqSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: FaqSection;
};

/** Identifies documents */
export type FaqSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FaqSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FaqSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FaqSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<FaqSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<FaqSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<FaqSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	questions_every?: InputMaybe<AccordionWhereInput>;
	questions_none?: InputMaybe<AccordionWhereInput>;
	questions_some?: InputMaybe<AccordionWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FaqSectionOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type FaqSectionUpdateInput = {
	clu307kwr01tf07lr2c2gh2ce?: InputMaybe<LandingPageUpdateManyInlineInput>;
	questions?: InputMaybe<AccordionUpdateManyInlineInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type FaqSectionUpdateManyInlineInput = {
	/** Connect multiple existing FaqSection documents */
	connect?: InputMaybe<Array<FaqSectionConnectInput>>;
	/** Create and connect multiple FaqSection documents */
	create?: InputMaybe<Array<FaqSectionCreateInput>>;
	/** Delete multiple FaqSection documents */
	delete?: InputMaybe<Array<FaqSectionWhereUniqueInput>>;
	/** Disconnect multiple FaqSection documents */
	disconnect?: InputMaybe<Array<FaqSectionWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing FaqSection documents */
	set?: InputMaybe<Array<FaqSectionWhereUniqueInput>>;
	/** Update multiple FaqSection documents */
	update?: InputMaybe<Array<FaqSectionUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple FaqSection documents */
	upsert?: InputMaybe<Array<FaqSectionUpsertWithNestedWhereUniqueInput>>;
};

export type FaqSectionUpdateManyInput = {
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type FaqSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: FaqSectionUpdateManyInput;
	/** Document search */
	where: FaqSectionWhereInput;
};

export type FaqSectionUpdateOneInlineInput = {
	/** Connect existing FaqSection document */
	connect?: InputMaybe<FaqSectionWhereUniqueInput>;
	/** Create and connect one FaqSection document */
	create?: InputMaybe<FaqSectionCreateInput>;
	/** Delete currently connected FaqSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected FaqSection document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single FaqSection document */
	update?: InputMaybe<FaqSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single FaqSection document */
	upsert?: InputMaybe<FaqSectionUpsertWithNestedWhereUniqueInput>;
};

export type FaqSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: FaqSectionUpdateInput;
	/** Unique document search */
	where: FaqSectionWhereUniqueInput;
};

export type FaqSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: FaqSectionCreateInput;
	/** Update document if it exists */
	update: FaqSectionUpdateInput;
};

export type FaqSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: FaqSectionUpsertInput;
	/** Unique document search */
	where: FaqSectionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FaqSectionWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FaqSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FaqSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FaqSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FaqSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<FaqSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<FaqSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<FaqSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	questions_every?: InputMaybe<AccordionWhereInput>;
	questions_none?: InputMaybe<AccordionWhereInput>;
	questions_some?: InputMaybe<AccordionWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FaqSectionWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FaqSectionWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FaqSectionWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FaqSectionWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<FaqSectionWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References FaqSection record uniquely */
export type FaqSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Footer = Entity &
	Node & {
		__typename?: 'Footer';
		authorCopyright: Scalars['String']['output'];
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<Footer>;
		/** List of Footer versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type FooterCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type FooterDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type FooterHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type FooterPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type FooterScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type FooterUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type FooterConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: FooterWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterConnection = {
	__typename?: 'FooterConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<FooterEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type FooterCreateInput = {
	authorCopyright: Scalars['String']['input'];
	clu30dwbi01wm07lrfppmgswi?: InputMaybe<LandingPageCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FooterCreateManyInlineInput = {
	/** Connect multiple existing Footer documents */
	connect?: InputMaybe<Array<FooterWhereUniqueInput>>;
	/** Create and connect multiple existing Footer documents */
	create?: InputMaybe<Array<FooterCreateInput>>;
};

export type FooterCreateOneInlineInput = {
	/** Connect one existing Footer document */
	connect?: InputMaybe<FooterWhereUniqueInput>;
	/** Create and connect one Footer document */
	create?: InputMaybe<FooterCreateInput>;
};

/** An edge in a connection. */
export type FooterEdge = {
	__typename?: 'FooterEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Footer;
};

/** Identifies documents */
export type FooterManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FooterWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FooterWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FooterWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	authorCopyright?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	authorCopyright_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	authorCopyright_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	authorCopyright_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** Any other value that exists and is not equal to the given value. */
	authorCopyright_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	authorCopyright_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	authorCopyright_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	authorCopyright_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	authorCopyright_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	authorCopyright_starts_with?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<FooterWhereStageInput>;
	documentInStages_none?: InputMaybe<FooterWhereStageInput>;
	documentInStages_some?: InputMaybe<FooterWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FooterOrderByInput {
	AuthorCopyrightAsc = 'authorCopyright_ASC',
	AuthorCopyrightDesc = 'authorCopyright_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type FooterUpdateInput = {
	authorCopyright?: InputMaybe<Scalars['String']['input']>;
	clu30dwbi01wm07lrfppmgswi?: InputMaybe<LandingPageUpdateManyInlineInput>;
};

export type FooterUpdateManyInlineInput = {
	/** Connect multiple existing Footer documents */
	connect?: InputMaybe<Array<FooterConnectInput>>;
	/** Create and connect multiple Footer documents */
	create?: InputMaybe<Array<FooterCreateInput>>;
	/** Delete multiple Footer documents */
	delete?: InputMaybe<Array<FooterWhereUniqueInput>>;
	/** Disconnect multiple Footer documents */
	disconnect?: InputMaybe<Array<FooterWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Footer documents */
	set?: InputMaybe<Array<FooterWhereUniqueInput>>;
	/** Update multiple Footer documents */
	update?: InputMaybe<Array<FooterUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Footer documents */
	upsert?: InputMaybe<Array<FooterUpsertWithNestedWhereUniqueInput>>;
};

export type FooterUpdateManyInput = {
	authorCopyright?: InputMaybe<Scalars['String']['input']>;
};

export type FooterUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: FooterUpdateManyInput;
	/** Document search */
	where: FooterWhereInput;
};

export type FooterUpdateOneInlineInput = {
	/** Connect existing Footer document */
	connect?: InputMaybe<FooterWhereUniqueInput>;
	/** Create and connect one Footer document */
	create?: InputMaybe<FooterCreateInput>;
	/** Delete currently connected Footer document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Footer document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Footer document */
	update?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Footer document */
	upsert?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>;
};

export type FooterUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: FooterUpdateInput;
	/** Unique document search */
	where: FooterWhereUniqueInput;
};

export type FooterUpsertInput = {
	/** Create document if it didn't exist */
	create: FooterCreateInput;
	/** Update document if it exists */
	update: FooterUpdateInput;
};

export type FooterUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: FooterUpsertInput;
	/** Unique document search */
	where: FooterWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FooterWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FooterWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FooterWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FooterWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FooterWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	authorCopyright?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	authorCopyright_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	authorCopyright_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	authorCopyright_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** Any other value that exists and is not equal to the given value. */
	authorCopyright_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	authorCopyright_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	authorCopyright_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	authorCopyright_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	authorCopyright_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	authorCopyright_starts_with?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<FooterWhereStageInput>;
	documentInStages_none?: InputMaybe<FooterWhereStageInput>;
	documentInStages_some?: InputMaybe<FooterWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FooterWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FooterWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FooterWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FooterWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<FooterWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Footer record uniquely */
export type FooterWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Hero = Entity & {
	__typename?: 'Hero';
	bookImage: Asset;
	buttons: Array<Button>;
	description: Scalars['String']['output'];
	/** The unique identifier */
	id: Scalars['ID']['output'];
	/** System stage field */
	stage: Stage;
	title: RichText;
};

export type HeroBookImageArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type HeroButtonsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ButtonOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ButtonWhereInput>;
};

export type HeroConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
	__typename?: 'HeroConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<HeroEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type HeroCreateInput = {
	bookImage: AssetCreateOneInlineInput;
	buttons?: InputMaybe<ButtonCreateManyInlineInput>;
	description: Scalars['String']['input'];
	title: Scalars['RichTextAST']['input'];
};

export type HeroCreateManyInlineInput = {
	/** Create and connect multiple existing Hero documents */
	create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
	/** Create and connect one Hero document */
	create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
	/** Document to create */
	data: HeroCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
	__typename?: 'HeroEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<HeroWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<HeroWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<HeroWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	bookImage?: InputMaybe<AssetWhereInput>;
	buttons_every?: InputMaybe<ButtonWhereInput>;
	buttons_none?: InputMaybe<ButtonWhereInput>;
	buttons_some?: InputMaybe<ButtonWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum HeroOrderByInput {
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

export type HeroParent = LandingPage;

export type HeroParentConnectInput = {
	LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type HeroParentCreateInput = {
	LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
	/** Connect multiple existing HeroParent documents */
	connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
	/** Create and connect multiple existing HeroParent documents */
	create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
	/** Connect one existing HeroParent document */
	connect?: InputMaybe<HeroParentWhereUniqueInput>;
	/** Create and connect one HeroParent document */
	create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
	LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
	/** Connect multiple existing HeroParent documents */
	connect?: InputMaybe<Array<HeroParentConnectInput>>;
	/** Create and connect multiple HeroParent documents */
	create?: InputMaybe<Array<HeroParentCreateInput>>;
	/** Delete multiple HeroParent documents */
	delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
	/** Disconnect multiple HeroParent documents */
	disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing HeroParent documents */
	set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
	/** Update multiple HeroParent documents */
	update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple HeroParent documents */
	upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
	LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
	/** Connect existing HeroParent document */
	connect?: InputMaybe<HeroParentWhereUniqueInput>;
	/** Create and connect one HeroParent document */
	create?: InputMaybe<HeroParentCreateInput>;
	/** Delete currently connected HeroParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected HeroParent document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single HeroParent document */
	update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single HeroParent document */
	upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
	LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type HeroParentWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type HeroUpdateInput = {
	bookImage?: InputMaybe<AssetUpdateOneInlineInput>;
	buttons?: InputMaybe<ButtonUpdateManyInlineInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type HeroUpdateManyInlineInput = {
	/** Create and connect multiple Hero component instances */
	create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
	/** Delete multiple Hero documents */
	delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
	/** Update multiple Hero component instances */
	update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
	/** Upsert multiple Hero component instances */
	upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: HeroUpdateManyInput;
	/** Document search */
	where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
	/** Create and connect one Hero document */
	create?: InputMaybe<HeroCreateInput>;
	/** Delete currently connected Hero document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Hero document */
	update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Hero document */
	upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<HeroUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: HeroUpdateInput;
	/** Unique document search */
	where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
	/** Create document if it didn't exist */
	create: HeroCreateInput;
	/** Update document if it exists */
	update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<HeroUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: HeroUpsertInput;
	/** Unique document search */
	where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<HeroWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<HeroWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<HeroWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	bookImage?: InputMaybe<AssetWhereInput>;
	buttons_every?: InputMaybe<ButtonWhereInput>;
	buttons_none?: InputMaybe<ButtonWhereInput>;
	buttons_some?: InputMaybe<ButtonWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Icon = Entity &
	Node & {
		__typename?: 'Icon';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<Icon>;
		/** List of Icon versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		image: Asset;
		name: Scalars['String']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type IconCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type IconDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type IconHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type IconImageArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type IconPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type IconScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type IconUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type IconConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: IconWhereUniqueInput;
};

/** A connection to a list of items. */
export type IconConnection = {
	__typename?: 'IconConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<IconEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type IconCreateInput = {
	clu1tvv1c04mg07lr1hdh9304?: InputMaybe<CheckoutSectionCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	image: AssetCreateOneInlineInput;
	name: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IconCreateManyInlineInput = {
	/** Connect multiple existing Icon documents */
	connect?: InputMaybe<Array<IconWhereUniqueInput>>;
	/** Create and connect multiple existing Icon documents */
	create?: InputMaybe<Array<IconCreateInput>>;
};

export type IconCreateOneInlineInput = {
	/** Connect one existing Icon document */
	connect?: InputMaybe<IconWhereUniqueInput>;
	/** Create and connect one Icon document */
	create?: InputMaybe<IconCreateInput>;
};

/** An edge in a connection. */
export type IconEdge = {
	__typename?: 'IconEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Icon;
};

/** Identifies documents */
export type IconManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<IconWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<IconWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<IconWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<IconWhereStageInput>;
	documentInStages_none?: InputMaybe<IconWhereStageInput>;
	documentInStages_some?: InputMaybe<IconWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	image?: InputMaybe<AssetWhereInput>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum IconOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type IconUpdateInput = {
	clu1tvv1c04mg07lr1hdh9304?: InputMaybe<CheckoutSectionUpdateManyInlineInput>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type IconUpdateManyInlineInput = {
	/** Connect multiple existing Icon documents */
	connect?: InputMaybe<Array<IconConnectInput>>;
	/** Create and connect multiple Icon documents */
	create?: InputMaybe<Array<IconCreateInput>>;
	/** Delete multiple Icon documents */
	delete?: InputMaybe<Array<IconWhereUniqueInput>>;
	/** Disconnect multiple Icon documents */
	disconnect?: InputMaybe<Array<IconWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Icon documents */
	set?: InputMaybe<Array<IconWhereUniqueInput>>;
	/** Update multiple Icon documents */
	update?: InputMaybe<Array<IconUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Icon documents */
	upsert?: InputMaybe<Array<IconUpsertWithNestedWhereUniqueInput>>;
};

export type IconUpdateManyInput = {
	name?: InputMaybe<Scalars['String']['input']>;
};

export type IconUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: IconUpdateManyInput;
	/** Document search */
	where: IconWhereInput;
};

export type IconUpdateOneInlineInput = {
	/** Connect existing Icon document */
	connect?: InputMaybe<IconWhereUniqueInput>;
	/** Create and connect one Icon document */
	create?: InputMaybe<IconCreateInput>;
	/** Delete currently connected Icon document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Icon document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Icon document */
	update?: InputMaybe<IconUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Icon document */
	upsert?: InputMaybe<IconUpsertWithNestedWhereUniqueInput>;
};

export type IconUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: IconUpdateInput;
	/** Unique document search */
	where: IconWhereUniqueInput;
};

export type IconUpsertInput = {
	/** Create document if it didn't exist */
	create: IconCreateInput;
	/** Update document if it exists */
	update: IconUpdateInput;
};

export type IconUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: IconUpsertInput;
	/** Unique document search */
	where: IconWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type IconWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type IconWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<IconWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<IconWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<IconWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<IconWhereStageInput>;
	documentInStages_none?: InputMaybe<IconWhereStageInput>;
	documentInStages_some?: InputMaybe<IconWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	image?: InputMaybe<AssetWhereInput>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type IconWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<IconWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<IconWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<IconWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<IconWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Icon record uniquely */
export type IconWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageFit {
	/** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
	Clip = 'clip',
	/** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
	Crop = 'crop',
	/** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
	Max = 'max',
	/** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
	Scale = 'scale',
}

export type ImageResizeInput = {
	/** The default value for the fit parameter is fit:clip. */
	fit?: InputMaybe<ImageFit>;
	/** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	height?: InputMaybe<Scalars['Int']['input']>;
	/** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
	/** Resizes the image */
	resize?: InputMaybe<ImageResizeInput>;
};

export type IntroSection = Entity & {
	__typename?: 'IntroSection';
	/** The unique identifier */
	id: Scalars['ID']['output'];
	sectionID: Scalars['String']['output'];
	/** System stage field */
	stage: Stage;
	stats: Array<Stat>;
	title: Scalars['String']['output'];
};

export type IntroSectionStatsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<StatOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<StatWhereInput>;
};

export type IntroSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: IntroSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type IntroSectionConnection = {
	__typename?: 'IntroSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<IntroSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type IntroSectionCreateInput = {
	sectionID: Scalars['String']['input'];
	stats?: InputMaybe<StatCreateManyInlineInput>;
	title: Scalars['String']['input'];
};

export type IntroSectionCreateManyInlineInput = {
	/** Create and connect multiple existing IntroSection documents */
	create?: InputMaybe<Array<IntroSectionCreateInput>>;
};

export type IntroSectionCreateOneInlineInput = {
	/** Create and connect one IntroSection document */
	create?: InputMaybe<IntroSectionCreateInput>;
};

export type IntroSectionCreateWithPositionInput = {
	/** Document to create */
	data: IntroSectionCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type IntroSectionEdge = {
	__typename?: 'IntroSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: IntroSection;
};

/** Identifies documents */
export type IntroSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<IntroSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<IntroSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<IntroSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	stats_every?: InputMaybe<StatWhereInput>;
	stats_none?: InputMaybe<StatWhereInput>;
	stats_some?: InputMaybe<StatWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum IntroSectionOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
}

export type IntroSectionParent = LandingPage;

export type IntroSectionParentConnectInput = {
	LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type IntroSectionParentCreateInput = {
	LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type IntroSectionParentCreateManyInlineInput = {
	/** Connect multiple existing IntroSectionParent documents */
	connect?: InputMaybe<Array<IntroSectionParentWhereUniqueInput>>;
	/** Create and connect multiple existing IntroSectionParent documents */
	create?: InputMaybe<Array<IntroSectionParentCreateInput>>;
};

export type IntroSectionParentCreateOneInlineInput = {
	/** Connect one existing IntroSectionParent document */
	connect?: InputMaybe<IntroSectionParentWhereUniqueInput>;
	/** Create and connect one IntroSectionParent document */
	create?: InputMaybe<IntroSectionParentCreateInput>;
};

export type IntroSectionParentUpdateInput = {
	LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type IntroSectionParentUpdateManyInlineInput = {
	/** Connect multiple existing IntroSectionParent documents */
	connect?: InputMaybe<Array<IntroSectionParentConnectInput>>;
	/** Create and connect multiple IntroSectionParent documents */
	create?: InputMaybe<Array<IntroSectionParentCreateInput>>;
	/** Delete multiple IntroSectionParent documents */
	delete?: InputMaybe<Array<IntroSectionParentWhereUniqueInput>>;
	/** Disconnect multiple IntroSectionParent documents */
	disconnect?: InputMaybe<Array<IntroSectionParentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing IntroSectionParent documents */
	set?: InputMaybe<Array<IntroSectionParentWhereUniqueInput>>;
	/** Update multiple IntroSectionParent documents */
	update?: InputMaybe<
		Array<IntroSectionParentUpdateWithNestedWhereUniqueInput>
	>;
	/** Upsert multiple IntroSectionParent documents */
	upsert?: InputMaybe<
		Array<IntroSectionParentUpsertWithNestedWhereUniqueInput>
	>;
};

export type IntroSectionParentUpdateManyWithNestedWhereInput = {
	LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type IntroSectionParentUpdateOneInlineInput = {
	/** Connect existing IntroSectionParent document */
	connect?: InputMaybe<IntroSectionParentWhereUniqueInput>;
	/** Create and connect one IntroSectionParent document */
	create?: InputMaybe<IntroSectionParentCreateInput>;
	/** Delete currently connected IntroSectionParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected IntroSectionParent document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single IntroSectionParent document */
	update?: InputMaybe<IntroSectionParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single IntroSectionParent document */
	upsert?: InputMaybe<IntroSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type IntroSectionParentUpdateWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type IntroSectionParentUpsertWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type IntroSectionParentWhereInput = {
	LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type IntroSectionParentWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type IntroSectionUpdateInput = {
	sectionID?: InputMaybe<Scalars['String']['input']>;
	stats?: InputMaybe<StatUpdateManyInlineInput>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type IntroSectionUpdateManyInlineInput = {
	/** Create and connect multiple IntroSection component instances */
	create?: InputMaybe<Array<IntroSectionCreateWithPositionInput>>;
	/** Delete multiple IntroSection documents */
	delete?: InputMaybe<Array<IntroSectionWhereUniqueInput>>;
	/** Update multiple IntroSection component instances */
	update?: InputMaybe<
		Array<IntroSectionUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple IntroSection component instances */
	upsert?: InputMaybe<
		Array<IntroSectionUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type IntroSectionUpdateManyInput = {
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type IntroSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: IntroSectionUpdateManyInput;
	/** Document search */
	where: IntroSectionWhereInput;
};

export type IntroSectionUpdateOneInlineInput = {
	/** Create and connect one IntroSection document */
	create?: InputMaybe<IntroSectionCreateInput>;
	/** Delete currently connected IntroSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single IntroSection document */
	update?: InputMaybe<IntroSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single IntroSection document */
	upsert?: InputMaybe<IntroSectionUpsertWithNestedWhereUniqueInput>;
};

export type IntroSectionUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<IntroSectionUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: IntroSectionWhereUniqueInput;
};

export type IntroSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: IntroSectionUpdateInput;
	/** Unique document search */
	where: IntroSectionWhereUniqueInput;
};

export type IntroSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: IntroSectionCreateInput;
	/** Update document if it exists */
	update: IntroSectionUpdateInput;
};

export type IntroSectionUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<IntroSectionUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: IntroSectionWhereUniqueInput;
};

export type IntroSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: IntroSectionUpsertInput;
	/** Unique document search */
	where: IntroSectionWhereUniqueInput;
};

/** Identifies documents */
export type IntroSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<IntroSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<IntroSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<IntroSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	stats_every?: InputMaybe<StatWhereInput>;
	stats_none?: InputMaybe<StatWhereInput>;
	stats_some?: InputMaybe<StatWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References IntroSection record uniquely */
export type IntroSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type LandingPage = Entity &
	Node & {
		__typename?: 'LandingPage';
		authorSection: AuthorSection;
		bonusSection?: Maybe<BonusSection>;
		chaptersSection: ChaptersSection;
		checkoutSection: CheckoutSection;
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<LandingPage>;
		faqSection?: Maybe<FaqSection>;
		footer?: Maybe<Footer>;
		hero: Hero;
		/** List of LandingPage versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		introSection: IntroSection;
		previewSection: PreviewSection;
		projectSection?: Maybe<ProjectSection>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		rememberCheckoutSection?: Maybe<RememberCheckoutSection>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type LandingPageAuthorSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageBonusSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageChaptersSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageCheckoutSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type LandingPageFaqSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageFooterArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageHeroArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type LandingPageIntroSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPagePreviewSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageProjectSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPagePublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageRememberCheckoutSectionArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type LandingPageUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: LandingPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type LandingPageConnection = {
	__typename?: 'LandingPageConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<LandingPageEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type LandingPageCreateInput = {
	authorSection: AuthorSectionCreateOneInlineInput;
	bonusSection?: InputMaybe<BonusSectionCreateOneInlineInput>;
	chaptersSection: ChaptersSectionCreateOneInlineInput;
	checkoutSection: CheckoutSectionCreateOneInlineInput;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	faqSection?: InputMaybe<FaqSectionCreateOneInlineInput>;
	footer?: InputMaybe<FooterCreateOneInlineInput>;
	hero: HeroCreateOneInlineInput;
	introSection: IntroSectionCreateOneInlineInput;
	previewSection: PreviewSectionCreateOneInlineInput;
	projectSection?: InputMaybe<ProjectSectionCreateOneInlineInput>;
	rememberCheckoutSection?: InputMaybe<RememberCheckoutSectionCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingPageCreateManyInlineInput = {
	/** Connect multiple existing LandingPage documents */
	connect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
	/** Create and connect multiple existing LandingPage documents */
	create?: InputMaybe<Array<LandingPageCreateInput>>;
};

export type LandingPageCreateOneInlineInput = {
	/** Connect one existing LandingPage document */
	connect?: InputMaybe<LandingPageWhereUniqueInput>;
	/** Create and connect one LandingPage document */
	create?: InputMaybe<LandingPageCreateInput>;
};

/** An edge in a connection. */
export type LandingPageEdge = {
	__typename?: 'LandingPageEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: LandingPage;
};

/** Identifies documents */
export type LandingPageManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<LandingPageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<LandingPageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<LandingPageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	authorSection?: InputMaybe<AuthorSectionWhereInput>;
	bonusSection?: InputMaybe<BonusSectionWhereInput>;
	chaptersSection?: InputMaybe<ChaptersSectionWhereInput>;
	checkoutSection?: InputMaybe<CheckoutSectionWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
	documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
	documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
	faqSection?: InputMaybe<FaqSectionWhereInput>;
	footer?: InputMaybe<FooterWhereInput>;
	hero?: InputMaybe<HeroWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	introSection?: InputMaybe<IntroSectionWhereInput>;
	previewSection?: InputMaybe<PreviewSectionWhereInput>;
	projectSection?: InputMaybe<ProjectSectionWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rememberCheckoutSection?: InputMaybe<RememberCheckoutSectionWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LandingPageOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type LandingPageUpdateInput = {
	authorSection?: InputMaybe<AuthorSectionUpdateOneInlineInput>;
	bonusSection?: InputMaybe<BonusSectionUpdateOneInlineInput>;
	chaptersSection?: InputMaybe<ChaptersSectionUpdateOneInlineInput>;
	checkoutSection?: InputMaybe<CheckoutSectionUpdateOneInlineInput>;
	faqSection?: InputMaybe<FaqSectionUpdateOneInlineInput>;
	footer?: InputMaybe<FooterUpdateOneInlineInput>;
	hero?: InputMaybe<HeroUpdateOneInlineInput>;
	introSection?: InputMaybe<IntroSectionUpdateOneInlineInput>;
	previewSection?: InputMaybe<PreviewSectionUpdateOneInlineInput>;
	projectSection?: InputMaybe<ProjectSectionUpdateOneInlineInput>;
	rememberCheckoutSection?: InputMaybe<RememberCheckoutSectionUpdateOneInlineInput>;
};

export type LandingPageUpdateManyInlineInput = {
	/** Connect multiple existing LandingPage documents */
	connect?: InputMaybe<Array<LandingPageConnectInput>>;
	/** Create and connect multiple LandingPage documents */
	create?: InputMaybe<Array<LandingPageCreateInput>>;
	/** Delete multiple LandingPage documents */
	delete?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
	/** Disconnect multiple LandingPage documents */
	disconnect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing LandingPage documents */
	set?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
	/** Update multiple LandingPage documents */
	update?: InputMaybe<Array<LandingPageUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple LandingPage documents */
	upsert?: InputMaybe<Array<LandingPageUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPageUpdateManyInput = {
	/** No fields in updateMany data input */
	_?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: LandingPageUpdateManyInput;
	/** Document search */
	where: LandingPageWhereInput;
};

export type LandingPageUpdateOneInlineInput = {
	/** Connect existing LandingPage document */
	connect?: InputMaybe<LandingPageWhereUniqueInput>;
	/** Create and connect one LandingPage document */
	create?: InputMaybe<LandingPageCreateInput>;
	/** Delete currently connected LandingPage document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected LandingPage document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single LandingPage document */
	update?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
	/** Upsert single LandingPage document */
	upsert?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: LandingPageUpdateInput;
	/** Unique document search */
	where: LandingPageWhereUniqueInput;
};

export type LandingPageUpsertInput = {
	/** Create document if it didn't exist */
	create: LandingPageCreateInput;
	/** Update document if it exists */
	update: LandingPageUpdateInput;
};

export type LandingPageUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: LandingPageUpsertInput;
	/** Unique document search */
	where: LandingPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LandingPageWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LandingPageWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<LandingPageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<LandingPageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<LandingPageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	authorSection?: InputMaybe<AuthorSectionWhereInput>;
	bonusSection?: InputMaybe<BonusSectionWhereInput>;
	chaptersSection?: InputMaybe<ChaptersSectionWhereInput>;
	checkoutSection?: InputMaybe<CheckoutSectionWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
	documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
	documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
	faqSection?: InputMaybe<FaqSectionWhereInput>;
	footer?: InputMaybe<FooterWhereInput>;
	hero?: InputMaybe<HeroWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	introSection?: InputMaybe<IntroSectionWhereInput>;
	previewSection?: InputMaybe<PreviewSectionWhereInput>;
	projectSection?: InputMaybe<ProjectSectionWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rememberCheckoutSection?: InputMaybe<RememberCheckoutSectionWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LandingPageWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<LandingPageWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<LandingPageWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<LandingPageWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<LandingPageWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References LandingPage record uniquely */
export type LandingPageWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
	/** System locale */
	En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
	__typename?: 'Location';
	distance: Scalars['Float']['output'];
	latitude: Scalars['Float']['output'];
	longitude: Scalars['Float']['output'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
	from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
	latitude: Scalars['Float']['input'];
	longitude: Scalars['Float']['input'];
};

export type Mutation = {
	__typename?: 'Mutation';
	/**
	 * Create one asset
	 * @deprecated Asset mutations will be overhauled soon
	 */
	createAsset?: Maybe<Asset>;
	/** Create one benefit */
	createBenefit?: Maybe<Benefit>;
	/** Create one bonus */
	createBonus?: Maybe<Bonus>;
	/** Create one bonusSection */
	createBonusSection?: Maybe<BonusSection>;
	/** Create one faqSection */
	createFaqSection?: Maybe<FaqSection>;
	/** Create one footer */
	createFooter?: Maybe<Footer>;
	/** Create one icon */
	createIcon?: Maybe<Icon>;
	/** Create one landingPage */
	createLandingPage?: Maybe<LandingPage>;
	/** Create one projectSection */
	createProjectSection?: Maybe<ProjectSection>;
	/** Create one rememberCheckoutSection */
	createRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Create one scheduledRelease */
	createScheduledRelease?: Maybe<ScheduledRelease>;
	/** Delete one asset from _all_ existing stages. Returns deleted document. */
	deleteAsset?: Maybe<Asset>;
	/** Delete one benefit from _all_ existing stages. Returns deleted document. */
	deleteBenefit?: Maybe<Benefit>;
	/** Delete one bonus from _all_ existing stages. Returns deleted document. */
	deleteBonus?: Maybe<Bonus>;
	/** Delete one bonusSection from _all_ existing stages. Returns deleted document. */
	deleteBonusSection?: Maybe<BonusSection>;
	/** Delete one faqSection from _all_ existing stages. Returns deleted document. */
	deleteFaqSection?: Maybe<FaqSection>;
	/** Delete one footer from _all_ existing stages. Returns deleted document. */
	deleteFooter?: Maybe<Footer>;
	/** Delete one icon from _all_ existing stages. Returns deleted document. */
	deleteIcon?: Maybe<Icon>;
	/** Delete one landingPage from _all_ existing stages. Returns deleted document. */
	deleteLandingPage?: Maybe<LandingPage>;
	/**
	 * Delete many Asset documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
	 */
	deleteManyAssets: BatchPayload;
	/** Delete many Asset documents, return deleted documents */
	deleteManyAssetsConnection: AssetConnection;
	/**
	 * Delete many Benefit documents
	 * @deprecated Please use the new paginated many mutation (deleteManyBenefitsConnection)
	 */
	deleteManyBenefits: BatchPayload;
	/** Delete many Benefit documents, return deleted documents */
	deleteManyBenefitsConnection: BenefitConnection;
	/**
	 * Delete many BonusSection documents
	 * @deprecated Please use the new paginated many mutation (deleteManyBonusSectionsConnection)
	 */
	deleteManyBonusSections: BatchPayload;
	/** Delete many BonusSection documents, return deleted documents */
	deleteManyBonusSectionsConnection: BonusSectionConnection;
	/**
	 * Delete many Bonus documents
	 * @deprecated Please use the new paginated many mutation (deleteManyBonusesConnection)
	 */
	deleteManyBonuses: BatchPayload;
	/** Delete many Bonus documents, return deleted documents */
	deleteManyBonusesConnection: BonusConnection;
	/**
	 * Delete many FaqSection documents
	 * @deprecated Please use the new paginated many mutation (deleteManyFaqSectionsConnection)
	 */
	deleteManyFaqSections: BatchPayload;
	/** Delete many FaqSection documents, return deleted documents */
	deleteManyFaqSectionsConnection: FaqSectionConnection;
	/**
	 * Delete many Footer documents
	 * @deprecated Please use the new paginated many mutation (deleteManyFootersConnection)
	 */
	deleteManyFooters: BatchPayload;
	/** Delete many Footer documents, return deleted documents */
	deleteManyFootersConnection: FooterConnection;
	/**
	 * Delete many Icon documents
	 * @deprecated Please use the new paginated many mutation (deleteManyIconsConnection)
	 */
	deleteManyIcons: BatchPayload;
	/** Delete many Icon documents, return deleted documents */
	deleteManyIconsConnection: IconConnection;
	/**
	 * Delete many LandingPage documents
	 * @deprecated Please use the new paginated many mutation (deleteManyLandingPagesConnection)
	 */
	deleteManyLandingPages: BatchPayload;
	/** Delete many LandingPage documents, return deleted documents */
	deleteManyLandingPagesConnection: LandingPageConnection;
	/**
	 * Delete many ProjectSection documents
	 * @deprecated Please use the new paginated many mutation (deleteManyProjectSectionsConnection)
	 */
	deleteManyProjectSections: BatchPayload;
	/** Delete many ProjectSection documents, return deleted documents */
	deleteManyProjectSectionsConnection: ProjectSectionConnection;
	/**
	 * Delete many RememberCheckoutSection documents
	 * @deprecated Please use the new paginated many mutation (deleteManyRememberCheckoutSectionsConnection)
	 */
	deleteManyRememberCheckoutSections: BatchPayload;
	/** Delete many RememberCheckoutSection documents, return deleted documents */
	deleteManyRememberCheckoutSectionsConnection: RememberCheckoutSectionConnection;
	/** Delete one projectSection from _all_ existing stages. Returns deleted document. */
	deleteProjectSection?: Maybe<ProjectSection>;
	/** Delete one rememberCheckoutSection from _all_ existing stages. Returns deleted document. */
	deleteRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Delete and return scheduled operation */
	deleteScheduledOperation?: Maybe<ScheduledOperation>;
	/** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
	deleteScheduledRelease?: Maybe<ScheduledRelease>;
	/** Publish one asset */
	publishAsset?: Maybe<Asset>;
	/** Publish one benefit */
	publishBenefit?: Maybe<Benefit>;
	/** Publish one bonus */
	publishBonus?: Maybe<Bonus>;
	/** Publish one bonusSection */
	publishBonusSection?: Maybe<BonusSection>;
	/** Publish one faqSection */
	publishFaqSection?: Maybe<FaqSection>;
	/** Publish one footer */
	publishFooter?: Maybe<Footer>;
	/** Publish one icon */
	publishIcon?: Maybe<Icon>;
	/** Publish one landingPage */
	publishLandingPage?: Maybe<LandingPage>;
	/**
	 * Publish many Asset documents
	 * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
	 */
	publishManyAssets: BatchPayload;
	/** Publish many Asset documents */
	publishManyAssetsConnection: AssetConnection;
	/**
	 * Publish many Benefit documents
	 * @deprecated Please use the new paginated many mutation (publishManyBenefitsConnection)
	 */
	publishManyBenefits: BatchPayload;
	/** Publish many Benefit documents */
	publishManyBenefitsConnection: BenefitConnection;
	/**
	 * Publish many BonusSection documents
	 * @deprecated Please use the new paginated many mutation (publishManyBonusSectionsConnection)
	 */
	publishManyBonusSections: BatchPayload;
	/** Publish many BonusSection documents */
	publishManyBonusSectionsConnection: BonusSectionConnection;
	/**
	 * Publish many Bonus documents
	 * @deprecated Please use the new paginated many mutation (publishManyBonusesConnection)
	 */
	publishManyBonuses: BatchPayload;
	/** Publish many Bonus documents */
	publishManyBonusesConnection: BonusConnection;
	/**
	 * Publish many FaqSection documents
	 * @deprecated Please use the new paginated many mutation (publishManyFaqSectionsConnection)
	 */
	publishManyFaqSections: BatchPayload;
	/** Publish many FaqSection documents */
	publishManyFaqSectionsConnection: FaqSectionConnection;
	/**
	 * Publish many Footer documents
	 * @deprecated Please use the new paginated many mutation (publishManyFootersConnection)
	 */
	publishManyFooters: BatchPayload;
	/** Publish many Footer documents */
	publishManyFootersConnection: FooterConnection;
	/**
	 * Publish many Icon documents
	 * @deprecated Please use the new paginated many mutation (publishManyIconsConnection)
	 */
	publishManyIcons: BatchPayload;
	/** Publish many Icon documents */
	publishManyIconsConnection: IconConnection;
	/**
	 * Publish many LandingPage documents
	 * @deprecated Please use the new paginated many mutation (publishManyLandingPagesConnection)
	 */
	publishManyLandingPages: BatchPayload;
	/** Publish many LandingPage documents */
	publishManyLandingPagesConnection: LandingPageConnection;
	/**
	 * Publish many ProjectSection documents
	 * @deprecated Please use the new paginated many mutation (publishManyProjectSectionsConnection)
	 */
	publishManyProjectSections: BatchPayload;
	/** Publish many ProjectSection documents */
	publishManyProjectSectionsConnection: ProjectSectionConnection;
	/**
	 * Publish many RememberCheckoutSection documents
	 * @deprecated Please use the new paginated many mutation (publishManyRememberCheckoutSectionsConnection)
	 */
	publishManyRememberCheckoutSections: BatchPayload;
	/** Publish many RememberCheckoutSection documents */
	publishManyRememberCheckoutSectionsConnection: RememberCheckoutSectionConnection;
	/** Publish one projectSection */
	publishProjectSection?: Maybe<ProjectSection>;
	/** Publish one rememberCheckoutSection */
	publishRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Schedule to publish one asset */
	schedulePublishAsset?: Maybe<Asset>;
	/** Schedule to publish one benefit */
	schedulePublishBenefit?: Maybe<Benefit>;
	/** Schedule to publish one bonus */
	schedulePublishBonus?: Maybe<Bonus>;
	/** Schedule to publish one bonusSection */
	schedulePublishBonusSection?: Maybe<BonusSection>;
	/** Schedule to publish one faqSection */
	schedulePublishFaqSection?: Maybe<FaqSection>;
	/** Schedule to publish one footer */
	schedulePublishFooter?: Maybe<Footer>;
	/** Schedule to publish one icon */
	schedulePublishIcon?: Maybe<Icon>;
	/** Schedule to publish one landingPage */
	schedulePublishLandingPage?: Maybe<LandingPage>;
	/** Schedule to publish one projectSection */
	schedulePublishProjectSection?: Maybe<ProjectSection>;
	/** Schedule to publish one rememberCheckoutSection */
	schedulePublishRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAsset?: Maybe<Asset>;
	/** Unpublish one benefit from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishBenefit?: Maybe<Benefit>;
	/** Unpublish one bonus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishBonus?: Maybe<Bonus>;
	/** Unpublish one bonusSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishBonusSection?: Maybe<BonusSection>;
	/** Unpublish one faqSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishFaqSection?: Maybe<FaqSection>;
	/** Unpublish one footer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishFooter?: Maybe<Footer>;
	/** Unpublish one icon from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishIcon?: Maybe<Icon>;
	/** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishLandingPage?: Maybe<LandingPage>;
	/** Unpublish one projectSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishProjectSection?: Maybe<ProjectSection>;
	/** Unpublish one rememberCheckoutSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAsset?: Maybe<Asset>;
	/** Unpublish one benefit from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishBenefit?: Maybe<Benefit>;
	/** Unpublish one bonus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishBonus?: Maybe<Bonus>;
	/** Unpublish one bonusSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishBonusSection?: Maybe<BonusSection>;
	/** Unpublish one faqSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishFaqSection?: Maybe<FaqSection>;
	/** Unpublish one footer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishFooter?: Maybe<Footer>;
	/** Unpublish one icon from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishIcon?: Maybe<Icon>;
	/** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishLandingPage?: Maybe<LandingPage>;
	/**
	 * Unpublish many Asset documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
	 */
	unpublishManyAssets: BatchPayload;
	/** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAssetsConnection: AssetConnection;
	/**
	 * Unpublish many Benefit documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyBenefitsConnection)
	 */
	unpublishManyBenefits: BatchPayload;
	/** Find many Benefit documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyBenefitsConnection: BenefitConnection;
	/**
	 * Unpublish many BonusSection documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyBonusSectionsConnection)
	 */
	unpublishManyBonusSections: BatchPayload;
	/** Find many BonusSection documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyBonusSectionsConnection: BonusSectionConnection;
	/**
	 * Unpublish many Bonus documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyBonusesConnection)
	 */
	unpublishManyBonuses: BatchPayload;
	/** Find many Bonus documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyBonusesConnection: BonusConnection;
	/**
	 * Unpublish many FaqSection documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyFaqSectionsConnection)
	 */
	unpublishManyFaqSections: BatchPayload;
	/** Find many FaqSection documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyFaqSectionsConnection: FaqSectionConnection;
	/**
	 * Unpublish many Footer documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyFootersConnection)
	 */
	unpublishManyFooters: BatchPayload;
	/** Find many Footer documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyFootersConnection: FooterConnection;
	/**
	 * Unpublish many Icon documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyIconsConnection)
	 */
	unpublishManyIcons: BatchPayload;
	/** Find many Icon documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyIconsConnection: IconConnection;
	/**
	 * Unpublish many LandingPage documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyLandingPagesConnection)
	 */
	unpublishManyLandingPages: BatchPayload;
	/** Find many LandingPage documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyLandingPagesConnection: LandingPageConnection;
	/**
	 * Unpublish many ProjectSection documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyProjectSectionsConnection)
	 */
	unpublishManyProjectSections: BatchPayload;
	/** Find many ProjectSection documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyProjectSectionsConnection: ProjectSectionConnection;
	/**
	 * Unpublish many RememberCheckoutSection documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyRememberCheckoutSectionsConnection)
	 */
	unpublishManyRememberCheckoutSections: BatchPayload;
	/** Find many RememberCheckoutSection documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyRememberCheckoutSectionsConnection: RememberCheckoutSectionConnection;
	/** Unpublish one projectSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishProjectSection?: Maybe<ProjectSection>;
	/** Unpublish one rememberCheckoutSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Update one asset */
	updateAsset?: Maybe<Asset>;
	/** Update one benefit */
	updateBenefit?: Maybe<Benefit>;
	/** Update one bonus */
	updateBonus?: Maybe<Bonus>;
	/** Update one bonusSection */
	updateBonusSection?: Maybe<BonusSection>;
	/** Update one faqSection */
	updateFaqSection?: Maybe<FaqSection>;
	/** Update one footer */
	updateFooter?: Maybe<Footer>;
	/** Update one icon */
	updateIcon?: Maybe<Icon>;
	/** Update one landingPage */
	updateLandingPage?: Maybe<LandingPage>;
	/**
	 * Update many assets
	 * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
	 */
	updateManyAssets: BatchPayload;
	/** Update many Asset documents */
	updateManyAssetsConnection: AssetConnection;
	/**
	 * Update many benefits
	 * @deprecated Please use the new paginated many mutation (updateManyBenefitsConnection)
	 */
	updateManyBenefits: BatchPayload;
	/** Update many Benefit documents */
	updateManyBenefitsConnection: BenefitConnection;
	/**
	 * Update many bonusSections
	 * @deprecated Please use the new paginated many mutation (updateManyBonusSectionsConnection)
	 */
	updateManyBonusSections: BatchPayload;
	/** Update many BonusSection documents */
	updateManyBonusSectionsConnection: BonusSectionConnection;
	/**
	 * Update many bonuses
	 * @deprecated Please use the new paginated many mutation (updateManyBonusesConnection)
	 */
	updateManyBonuses: BatchPayload;
	/** Update many Bonus documents */
	updateManyBonusesConnection: BonusConnection;
	/**
	 * Update many faqSections
	 * @deprecated Please use the new paginated many mutation (updateManyFaqSectionsConnection)
	 */
	updateManyFaqSections: BatchPayload;
	/** Update many FaqSection documents */
	updateManyFaqSectionsConnection: FaqSectionConnection;
	/**
	 * Update many footers
	 * @deprecated Please use the new paginated many mutation (updateManyFootersConnection)
	 */
	updateManyFooters: BatchPayload;
	/** Update many Footer documents */
	updateManyFootersConnection: FooterConnection;
	/**
	 * Update many icons
	 * @deprecated Please use the new paginated many mutation (updateManyIconsConnection)
	 */
	updateManyIcons: BatchPayload;
	/** Update many Icon documents */
	updateManyIconsConnection: IconConnection;
	/**
	 * Update many landingPages
	 * @deprecated Please use the new paginated many mutation (updateManyLandingPagesConnection)
	 */
	updateManyLandingPages: BatchPayload;
	/** Update many LandingPage documents */
	updateManyLandingPagesConnection: LandingPageConnection;
	/**
	 * Update many projectSections
	 * @deprecated Please use the new paginated many mutation (updateManyProjectSectionsConnection)
	 */
	updateManyProjectSections: BatchPayload;
	/** Update many ProjectSection documents */
	updateManyProjectSectionsConnection: ProjectSectionConnection;
	/**
	 * Update many rememberCheckoutSections
	 * @deprecated Please use the new paginated many mutation (updateManyRememberCheckoutSectionsConnection)
	 */
	updateManyRememberCheckoutSections: BatchPayload;
	/** Update many RememberCheckoutSection documents */
	updateManyRememberCheckoutSectionsConnection: RememberCheckoutSectionConnection;
	/** Update one projectSection */
	updateProjectSection?: Maybe<ProjectSection>;
	/** Update one rememberCheckoutSection */
	updateRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Update one scheduledRelease */
	updateScheduledRelease?: Maybe<ScheduledRelease>;
	/** Upsert one asset */
	upsertAsset?: Maybe<Asset>;
	/** Upsert one benefit */
	upsertBenefit?: Maybe<Benefit>;
	/** Upsert one bonus */
	upsertBonus?: Maybe<Bonus>;
	/** Upsert one bonusSection */
	upsertBonusSection?: Maybe<BonusSection>;
	/** Upsert one faqSection */
	upsertFaqSection?: Maybe<FaqSection>;
	/** Upsert one footer */
	upsertFooter?: Maybe<Footer>;
	/** Upsert one icon */
	upsertIcon?: Maybe<Icon>;
	/** Upsert one landingPage */
	upsertLandingPage?: Maybe<LandingPage>;
	/** Upsert one projectSection */
	upsertProjectSection?: Maybe<ProjectSection>;
	/** Upsert one rememberCheckoutSection */
	upsertRememberCheckoutSection?: Maybe<RememberCheckoutSection>;
};

export type MutationCreateAssetArgs = {
	data: AssetCreateInput;
};

export type MutationCreateBenefitArgs = {
	data: BenefitCreateInput;
};

export type MutationCreateBonusArgs = {
	data: BonusCreateInput;
};

export type MutationCreateBonusSectionArgs = {
	data: BonusSectionCreateInput;
};

export type MutationCreateFaqSectionArgs = {
	data: FaqSectionCreateInput;
};

export type MutationCreateFooterArgs = {
	data: FooterCreateInput;
};

export type MutationCreateIconArgs = {
	data: IconCreateInput;
};

export type MutationCreateLandingPageArgs = {
	data: LandingPageCreateInput;
};

export type MutationCreateProjectSectionArgs = {
	data: ProjectSectionCreateInput;
};

export type MutationCreateRememberCheckoutSectionArgs = {
	data: RememberCheckoutSectionCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
	data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAssetArgs = {
	where: AssetWhereUniqueInput;
};

export type MutationDeleteBenefitArgs = {
	where: BenefitWhereUniqueInput;
};

export type MutationDeleteBonusArgs = {
	where: BonusWhereUniqueInput;
};

export type MutationDeleteBonusSectionArgs = {
	where: BonusSectionWhereUniqueInput;
};

export type MutationDeleteFaqSectionArgs = {
	where: FaqSectionWhereUniqueInput;
};

export type MutationDeleteFooterArgs = {
	where: FooterWhereUniqueInput;
};

export type MutationDeleteIconArgs = {
	where: IconWhereUniqueInput;
};

export type MutationDeleteLandingPageArgs = {
	where: LandingPageWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyBenefitsArgs = {
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationDeleteManyBenefitsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationDeleteManyBonusSectionsArgs = {
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationDeleteManyBonusSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationDeleteManyBonusesArgs = {
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationDeleteManyBonusesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationDeleteManyFaqSectionsArgs = {
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationDeleteManyFaqSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationDeleteManyFootersArgs = {
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationDeleteManyFootersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationDeleteManyIconsArgs = {
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationDeleteManyIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationDeleteManyLandingPagesArgs = {
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationDeleteManyLandingPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationDeleteManyProjectSectionsArgs = {
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationDeleteManyProjectSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationDeleteManyRememberCheckoutSectionsArgs = {
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationDeleteManyRememberCheckoutSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationDeleteProjectSectionArgs = {
	where: ProjectSectionWhereUniqueInput;
};

export type MutationDeleteRememberCheckoutSectionArgs = {
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
	where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishBenefitArgs = {
	to?: Array<Stage>;
	where: BenefitWhereUniqueInput;
};

export type MutationPublishBonusArgs = {
	to?: Array<Stage>;
	where: BonusWhereUniqueInput;
};

export type MutationPublishBonusSectionArgs = {
	to?: Array<Stage>;
	where: BonusSectionWhereUniqueInput;
};

export type MutationPublishFaqSectionArgs = {
	to?: Array<Stage>;
	where: FaqSectionWhereUniqueInput;
};

export type MutationPublishFooterArgs = {
	to?: Array<Stage>;
	where: FooterWhereUniqueInput;
};

export type MutationPublishIconArgs = {
	to?: Array<Stage>;
	where: IconWhereUniqueInput;
};

export type MutationPublishLandingPageArgs = {
	to?: Array<Stage>;
	where: LandingPageWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyBenefitsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationPublishManyBenefitsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationPublishManyBonusSectionsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationPublishManyBonusSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationPublishManyBonusesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationPublishManyBonusesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationPublishManyFaqSectionsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationPublishManyFaqSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationPublishManyFootersArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationPublishManyFootersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationPublishManyIconsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationPublishManyIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationPublishManyLandingPagesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationPublishManyLandingPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationPublishManyProjectSectionsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationPublishManyProjectSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationPublishManyRememberCheckoutSectionsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationPublishManyRememberCheckoutSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationPublishProjectSectionArgs = {
	to?: Array<Stage>;
	where: ProjectSectionWhereUniqueInput;
};

export type MutationPublishRememberCheckoutSectionArgs = {
	to?: Array<Stage>;
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSchedulePublishBenefitArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: BenefitWhereUniqueInput;
};

export type MutationSchedulePublishBonusArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: BonusWhereUniqueInput;
};

export type MutationSchedulePublishBonusSectionArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: BonusSectionWhereUniqueInput;
};

export type MutationSchedulePublishFaqSectionArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: FaqSectionWhereUniqueInput;
};

export type MutationSchedulePublishFooterArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: FooterWhereUniqueInput;
};

export type MutationSchedulePublishIconArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: IconWhereUniqueInput;
};

export type MutationSchedulePublishLandingPageArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: LandingPageWhereUniqueInput;
};

export type MutationSchedulePublishProjectSectionArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: ProjectSectionWhereUniqueInput;
};

export type MutationSchedulePublishRememberCheckoutSectionArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishBenefitArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: BenefitWhereUniqueInput;
};

export type MutationScheduleUnpublishBonusArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: BonusWhereUniqueInput;
};

export type MutationScheduleUnpublishBonusSectionArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: BonusSectionWhereUniqueInput;
};

export type MutationScheduleUnpublishFaqSectionArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: FaqSectionWhereUniqueInput;
};

export type MutationScheduleUnpublishFooterArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: FooterWhereUniqueInput;
};

export type MutationScheduleUnpublishIconArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: IconWhereUniqueInput;
};

export type MutationScheduleUnpublishLandingPageArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: LandingPageWhereUniqueInput;
};

export type MutationScheduleUnpublishProjectSectionArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: ProjectSectionWhereUniqueInput;
};

export type MutationScheduleUnpublishRememberCheckoutSectionArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: AssetWhereUniqueInput;
};

export type MutationUnpublishBenefitArgs = {
	from?: Array<Stage>;
	where: BenefitWhereUniqueInput;
};

export type MutationUnpublishBonusArgs = {
	from?: Array<Stage>;
	where: BonusWhereUniqueInput;
};

export type MutationUnpublishBonusSectionArgs = {
	from?: Array<Stage>;
	where: BonusSectionWhereUniqueInput;
};

export type MutationUnpublishFaqSectionArgs = {
	from?: Array<Stage>;
	where: FaqSectionWhereUniqueInput;
};

export type MutationUnpublishFooterArgs = {
	from?: Array<Stage>;
	where: FooterWhereUniqueInput;
};

export type MutationUnpublishIconArgs = {
	from?: Array<Stage>;
	where: IconWhereUniqueInput;
};

export type MutationUnpublishLandingPageArgs = {
	from?: Array<Stage>;
	where: LandingPageWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyBenefitsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationUnpublishManyBenefitsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationUnpublishManyBonusSectionsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationUnpublishManyBonusSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationUnpublishManyBonusesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationUnpublishManyBonusesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationUnpublishManyFaqSectionsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationUnpublishManyFaqSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationUnpublishManyFootersArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationUnpublishManyFootersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationUnpublishManyIconsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationUnpublishManyIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationUnpublishManyLandingPagesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUnpublishManyLandingPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUnpublishManyProjectSectionsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationUnpublishManyProjectSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationUnpublishManyRememberCheckoutSectionsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationUnpublishManyRememberCheckoutSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationUnpublishProjectSectionArgs = {
	from?: Array<Stage>;
	where: ProjectSectionWhereUniqueInput;
};

export type MutationUnpublishRememberCheckoutSectionArgs = {
	from?: Array<Stage>;
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
	data: AssetUpdateInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpdateBenefitArgs = {
	data: BenefitUpdateInput;
	where: BenefitWhereUniqueInput;
};

export type MutationUpdateBonusArgs = {
	data: BonusUpdateInput;
	where: BonusWhereUniqueInput;
};

export type MutationUpdateBonusSectionArgs = {
	data: BonusSectionUpdateInput;
	where: BonusSectionWhereUniqueInput;
};

export type MutationUpdateFaqSectionArgs = {
	data: FaqSectionUpdateInput;
	where: FaqSectionWhereUniqueInput;
};

export type MutationUpdateFooterArgs = {
	data: FooterUpdateInput;
	where: FooterWhereUniqueInput;
};

export type MutationUpdateIconArgs = {
	data: IconUpdateInput;
	where: IconWhereUniqueInput;
};

export type MutationUpdateLandingPageArgs = {
	data: LandingPageUpdateInput;
	where: LandingPageWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
	data: AssetUpdateManyInput;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: AssetUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyBenefitsArgs = {
	data: BenefitUpdateManyInput;
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationUpdateManyBenefitsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: BenefitUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BenefitManyWhereInput>;
};

export type MutationUpdateManyBonusSectionsArgs = {
	data: BonusSectionUpdateManyInput;
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationUpdateManyBonusSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: BonusSectionUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BonusSectionManyWhereInput>;
};

export type MutationUpdateManyBonusesArgs = {
	data: BonusUpdateManyInput;
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationUpdateManyBonusesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: BonusUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<BonusManyWhereInput>;
};

export type MutationUpdateManyFaqSectionsArgs = {
	data: FaqSectionUpdateManyInput;
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationUpdateManyFaqSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: FaqSectionUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<FaqSectionManyWhereInput>;
};

export type MutationUpdateManyFootersArgs = {
	data: FooterUpdateManyInput;
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationUpdateManyFootersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: FooterUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<FooterManyWhereInput>;
};

export type MutationUpdateManyIconsArgs = {
	data: IconUpdateManyInput;
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationUpdateManyIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: IconUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<IconManyWhereInput>;
};

export type MutationUpdateManyLandingPagesArgs = {
	data: LandingPageUpdateManyInput;
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUpdateManyLandingPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: LandingPageUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUpdateManyProjectSectionsArgs = {
	data: ProjectSectionUpdateManyInput;
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationUpdateManyProjectSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: ProjectSectionUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ProjectSectionManyWhereInput>;
};

export type MutationUpdateManyRememberCheckoutSectionsArgs = {
	data: RememberCheckoutSectionUpdateManyInput;
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationUpdateManyRememberCheckoutSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: RememberCheckoutSectionUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<RememberCheckoutSectionManyWhereInput>;
};

export type MutationUpdateProjectSectionArgs = {
	data: ProjectSectionUpdateInput;
	where: ProjectSectionWhereUniqueInput;
};

export type MutationUpdateRememberCheckoutSectionArgs = {
	data: RememberCheckoutSectionUpdateInput;
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
	data: ScheduledReleaseUpdateInput;
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
	upsert: AssetUpsertInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpsertBenefitArgs = {
	upsert: BenefitUpsertInput;
	where: BenefitWhereUniqueInput;
};

export type MutationUpsertBonusArgs = {
	upsert: BonusUpsertInput;
	where: BonusWhereUniqueInput;
};

export type MutationUpsertBonusSectionArgs = {
	upsert: BonusSectionUpsertInput;
	where: BonusSectionWhereUniqueInput;
};

export type MutationUpsertFaqSectionArgs = {
	upsert: FaqSectionUpsertInput;
	where: FaqSectionWhereUniqueInput;
};

export type MutationUpsertFooterArgs = {
	upsert: FooterUpsertInput;
	where: FooterWhereUniqueInput;
};

export type MutationUpsertIconArgs = {
	upsert: IconUpsertInput;
	where: IconWhereUniqueInput;
};

export type MutationUpsertLandingPageArgs = {
	upsert: LandingPageUpsertInput;
	where: LandingPageWhereUniqueInput;
};

export type MutationUpsertProjectSectionArgs = {
	upsert: ProjectSectionUpsertInput;
	where: ProjectSectionWhereUniqueInput;
};

export type MutationUpsertRememberCheckoutSectionArgs = {
	upsert: RememberCheckoutSectionUpsertInput;
	where: RememberCheckoutSectionWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
	/** The id of the object. */
	id: Scalars['ID']['output'];
	/** The Stage of an object */
	stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
	__typename?: 'PageInfo';
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']['output']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']['output'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']['output'];
	/** Number of items in the current page. */
	pageSize?: Maybe<Scalars['Int']['output']>;
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']['output']>;
};

export type PreviewSection = Entity & {
	__typename?: 'PreviewSection';
	/** The unique identifier */
	id: Scalars['ID']['output'];
	previews: Array<Asset>;
	sectionID: Scalars['String']['output'];
	/** System stage field */
	stage: Stage;
	title: Scalars['String']['output'];
};

export type PreviewSectionPreviewsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetWhereInput>;
};

export type PreviewSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: PreviewSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type PreviewSectionConnection = {
	__typename?: 'PreviewSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<PreviewSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type PreviewSectionCreateInput = {
	previews: AssetCreateManyInlineInput;
	sectionID: Scalars['String']['input'];
	title: Scalars['String']['input'];
};

export type PreviewSectionCreateManyInlineInput = {
	/** Create and connect multiple existing PreviewSection documents */
	create?: InputMaybe<Array<PreviewSectionCreateInput>>;
};

export type PreviewSectionCreateOneInlineInput = {
	/** Create and connect one PreviewSection document */
	create?: InputMaybe<PreviewSectionCreateInput>;
};

export type PreviewSectionCreateWithPositionInput = {
	/** Document to create */
	data: PreviewSectionCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PreviewSectionEdge = {
	__typename?: 'PreviewSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: PreviewSection;
};

/** Identifies documents */
export type PreviewSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<PreviewSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<PreviewSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<PreviewSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	previews_every?: InputMaybe<AssetWhereInput>;
	previews_none?: InputMaybe<AssetWhereInput>;
	previews_some?: InputMaybe<AssetWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PreviewSectionOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
}

export type PreviewSectionParent = LandingPage;

export type PreviewSectionParentConnectInput = {
	LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type PreviewSectionParentCreateInput = {
	LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type PreviewSectionParentCreateManyInlineInput = {
	/** Connect multiple existing PreviewSectionParent documents */
	connect?: InputMaybe<Array<PreviewSectionParentWhereUniqueInput>>;
	/** Create and connect multiple existing PreviewSectionParent documents */
	create?: InputMaybe<Array<PreviewSectionParentCreateInput>>;
};

export type PreviewSectionParentCreateOneInlineInput = {
	/** Connect one existing PreviewSectionParent document */
	connect?: InputMaybe<PreviewSectionParentWhereUniqueInput>;
	/** Create and connect one PreviewSectionParent document */
	create?: InputMaybe<PreviewSectionParentCreateInput>;
};

export type PreviewSectionParentUpdateInput = {
	LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type PreviewSectionParentUpdateManyInlineInput = {
	/** Connect multiple existing PreviewSectionParent documents */
	connect?: InputMaybe<Array<PreviewSectionParentConnectInput>>;
	/** Create and connect multiple PreviewSectionParent documents */
	create?: InputMaybe<Array<PreviewSectionParentCreateInput>>;
	/** Delete multiple PreviewSectionParent documents */
	delete?: InputMaybe<Array<PreviewSectionParentWhereUniqueInput>>;
	/** Disconnect multiple PreviewSectionParent documents */
	disconnect?: InputMaybe<Array<PreviewSectionParentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing PreviewSectionParent documents */
	set?: InputMaybe<Array<PreviewSectionParentWhereUniqueInput>>;
	/** Update multiple PreviewSectionParent documents */
	update?: InputMaybe<
		Array<PreviewSectionParentUpdateWithNestedWhereUniqueInput>
	>;
	/** Upsert multiple PreviewSectionParent documents */
	upsert?: InputMaybe<
		Array<PreviewSectionParentUpsertWithNestedWhereUniqueInput>
	>;
};

export type PreviewSectionParentUpdateManyWithNestedWhereInput = {
	LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type PreviewSectionParentUpdateOneInlineInput = {
	/** Connect existing PreviewSectionParent document */
	connect?: InputMaybe<PreviewSectionParentWhereUniqueInput>;
	/** Create and connect one PreviewSectionParent document */
	create?: InputMaybe<PreviewSectionParentCreateInput>;
	/** Delete currently connected PreviewSectionParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected PreviewSectionParent document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single PreviewSectionParent document */
	update?: InputMaybe<PreviewSectionParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single PreviewSectionParent document */
	upsert?: InputMaybe<PreviewSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type PreviewSectionParentUpdateWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type PreviewSectionParentUpsertWithNestedWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type PreviewSectionParentWhereInput = {
	LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type PreviewSectionParentWhereUniqueInput = {
	LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type PreviewSectionUpdateInput = {
	previews?: InputMaybe<AssetUpdateManyInlineInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type PreviewSectionUpdateManyInlineInput = {
	/** Create and connect multiple PreviewSection component instances */
	create?: InputMaybe<Array<PreviewSectionCreateWithPositionInput>>;
	/** Delete multiple PreviewSection documents */
	delete?: InputMaybe<Array<PreviewSectionWhereUniqueInput>>;
	/** Update multiple PreviewSection component instances */
	update?: InputMaybe<
		Array<PreviewSectionUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple PreviewSection component instances */
	upsert?: InputMaybe<
		Array<PreviewSectionUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type PreviewSectionUpdateManyInput = {
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type PreviewSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: PreviewSectionUpdateManyInput;
	/** Document search */
	where: PreviewSectionWhereInput;
};

export type PreviewSectionUpdateOneInlineInput = {
	/** Create and connect one PreviewSection document */
	create?: InputMaybe<PreviewSectionCreateInput>;
	/** Delete currently connected PreviewSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single PreviewSection document */
	update?: InputMaybe<PreviewSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single PreviewSection document */
	upsert?: InputMaybe<PreviewSectionUpsertWithNestedWhereUniqueInput>;
};

export type PreviewSectionUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<PreviewSectionUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: PreviewSectionWhereUniqueInput;
};

export type PreviewSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: PreviewSectionUpdateInput;
	/** Unique document search */
	where: PreviewSectionWhereUniqueInput;
};

export type PreviewSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: PreviewSectionCreateInput;
	/** Update document if it exists */
	update: PreviewSectionUpdateInput;
};

export type PreviewSectionUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<PreviewSectionUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: PreviewSectionWhereUniqueInput;
};

export type PreviewSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: PreviewSectionUpsertInput;
	/** Unique document search */
	where: PreviewSectionWhereUniqueInput;
};

/** Identifies documents */
export type PreviewSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<PreviewSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<PreviewSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<PreviewSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	previews_every?: InputMaybe<AssetWhereInput>;
	previews_none?: InputMaybe<AssetWhereInput>;
	previews_some?: InputMaybe<AssetWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References PreviewSection record uniquely */
export type PreviewSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProjectSection = Entity &
	Node & {
		__typename?: 'ProjectSection';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		description: Scalars['String']['output'];
		/** Get the document in other stages */
		documentInStages: Array<ProjectSection>;
		/** List of ProjectSection versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		sectionID: Scalars['String']['output'];
		/** System stage field */
		stage: Stage;
		title: Scalars['String']['output'];
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
		videoThumbnail: Asset;
		videoURL: Scalars['String']['output'];
	};

export type ProjectSectionCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ProjectSectionDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type ProjectSectionHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type ProjectSectionPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ProjectSectionScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProjectSectionUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ProjectSectionVideoThumbnailArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ProjectSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ProjectSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectSectionConnection = {
	__typename?: 'ProjectSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ProjectSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ProjectSectionCreateInput = {
	clu1u9psq04ui07lrbhxig0tb?: InputMaybe<LandingPageCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description: Scalars['String']['input'];
	sectionID: Scalars['String']['input'];
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	videoThumbnail: AssetCreateOneInlineInput;
	videoURL: Scalars['String']['input'];
};

export type ProjectSectionCreateManyInlineInput = {
	/** Connect multiple existing ProjectSection documents */
	connect?: InputMaybe<Array<ProjectSectionWhereUniqueInput>>;
	/** Create and connect multiple existing ProjectSection documents */
	create?: InputMaybe<Array<ProjectSectionCreateInput>>;
};

export type ProjectSectionCreateOneInlineInput = {
	/** Connect one existing ProjectSection document */
	connect?: InputMaybe<ProjectSectionWhereUniqueInput>;
	/** Create and connect one ProjectSection document */
	create?: InputMaybe<ProjectSectionCreateInput>;
};

/** An edge in a connection. */
export type ProjectSectionEdge = {
	__typename?: 'ProjectSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ProjectSection;
};

/** Identifies documents */
export type ProjectSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProjectSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProjectSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProjectSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	documentInStages_every?: InputMaybe<ProjectSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<ProjectSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<ProjectSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
	videoThumbnail?: InputMaybe<AssetWhereInput>;
	videoURL?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	videoURL_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	videoURL_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	videoURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	videoURL_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	videoURL_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	videoURL_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	videoURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	videoURL_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	videoURL_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectSectionOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	VideoUrlAsc = 'videoURL_ASC',
	VideoUrlDesc = 'videoURL_DESC',
}

export type ProjectSectionUpdateInput = {
	clu1u9psq04ui07lrbhxig0tb?: InputMaybe<LandingPageUpdateManyInlineInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	videoThumbnail?: InputMaybe<AssetUpdateOneInlineInput>;
	videoURL?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectSectionUpdateManyInlineInput = {
	/** Connect multiple existing ProjectSection documents */
	connect?: InputMaybe<Array<ProjectSectionConnectInput>>;
	/** Create and connect multiple ProjectSection documents */
	create?: InputMaybe<Array<ProjectSectionCreateInput>>;
	/** Delete multiple ProjectSection documents */
	delete?: InputMaybe<Array<ProjectSectionWhereUniqueInput>>;
	/** Disconnect multiple ProjectSection documents */
	disconnect?: InputMaybe<Array<ProjectSectionWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ProjectSection documents */
	set?: InputMaybe<Array<ProjectSectionWhereUniqueInput>>;
	/** Update multiple ProjectSection documents */
	update?: InputMaybe<Array<ProjectSectionUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ProjectSection documents */
	upsert?: InputMaybe<Array<ProjectSectionUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectSectionUpdateManyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	videoURL?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ProjectSectionUpdateManyInput;
	/** Document search */
	where: ProjectSectionWhereInput;
};

export type ProjectSectionUpdateOneInlineInput = {
	/** Connect existing ProjectSection document */
	connect?: InputMaybe<ProjectSectionWhereUniqueInput>;
	/** Create and connect one ProjectSection document */
	create?: InputMaybe<ProjectSectionCreateInput>;
	/** Delete currently connected ProjectSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected ProjectSection document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single ProjectSection document */
	update?: InputMaybe<ProjectSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ProjectSection document */
	upsert?: InputMaybe<ProjectSectionUpsertWithNestedWhereUniqueInput>;
};

export type ProjectSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ProjectSectionUpdateInput;
	/** Unique document search */
	where: ProjectSectionWhereUniqueInput;
};

export type ProjectSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: ProjectSectionCreateInput;
	/** Update document if it exists */
	update: ProjectSectionUpdateInput;
};

export type ProjectSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ProjectSectionUpsertInput;
	/** Unique document search */
	where: ProjectSectionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectSectionWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProjectSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProjectSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProjectSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProjectSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	documentInStages_every?: InputMaybe<ProjectSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<ProjectSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<ProjectSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
	videoThumbnail?: InputMaybe<AssetWhereInput>;
	videoURL?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	videoURL_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	videoURL_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	videoURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	videoURL_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	videoURL_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	videoURL_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	videoURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	videoURL_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	videoURL_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectSectionWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProjectSectionWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProjectSectionWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProjectSectionWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<ProjectSectionWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References ProjectSection record uniquely */
export type ProjectSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
	/** Locales to publish */
	locale: Locale;
	/** Stages to publish selected locales to */
	stages: Array<Stage>;
};

export type Query = {
	__typename?: 'Query';
	/** Retrieve a single asset */
	asset?: Maybe<Asset>;
	/** Retrieve document version */
	assetVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple assets */
	assets: Array<Asset>;
	/** Retrieve multiple assets using the Relay connection interface */
	assetsConnection: AssetConnection;
	/** Retrieve a single benefit */
	benefit?: Maybe<Benefit>;
	/** Retrieve document version */
	benefitVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple benefits */
	benefits: Array<Benefit>;
	/** Retrieve multiple benefits using the Relay connection interface */
	benefitsConnection: BenefitConnection;
	/** Retrieve a single bonus */
	bonus?: Maybe<Bonus>;
	/** Retrieve a single bonusSection */
	bonusSection?: Maybe<BonusSection>;
	/** Retrieve document version */
	bonusSectionVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple bonusSections */
	bonusSections: Array<BonusSection>;
	/** Retrieve multiple bonusSections using the Relay connection interface */
	bonusSectionsConnection: BonusSectionConnection;
	/** Retrieve document version */
	bonusVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple bonuses */
	bonuses: Array<Bonus>;
	/** Retrieve multiple bonuses using the Relay connection interface */
	bonusesConnection: BonusConnection;
	/** Fetches an object given its ID */
	entities?: Maybe<Array<Entity>>;
	/** Retrieve a single faqSection */
	faqSection?: Maybe<FaqSection>;
	/** Retrieve document version */
	faqSectionVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple faqSections */
	faqSections: Array<FaqSection>;
	/** Retrieve multiple faqSections using the Relay connection interface */
	faqSectionsConnection: FaqSectionConnection;
	/** Retrieve a single footer */
	footer?: Maybe<Footer>;
	/** Retrieve document version */
	footerVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple footers */
	footers: Array<Footer>;
	/** Retrieve multiple footers using the Relay connection interface */
	footersConnection: FooterConnection;
	/** Retrieve a single icon */
	icon?: Maybe<Icon>;
	/** Retrieve document version */
	iconVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple icons */
	icons: Array<Icon>;
	/** Retrieve multiple icons using the Relay connection interface */
	iconsConnection: IconConnection;
	/** Retrieve a single landingPage */
	landingPage?: Maybe<LandingPage>;
	/** Retrieve document version */
	landingPageVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple landingPages */
	landingPages: Array<LandingPage>;
	/** Retrieve multiple landingPages using the Relay connection interface */
	landingPagesConnection: LandingPageConnection;
	/** Fetches an object given its ID */
	node?: Maybe<Node>;
	/** Retrieve a single projectSection */
	projectSection?: Maybe<ProjectSection>;
	/** Retrieve document version */
	projectSectionVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple projectSections */
	projectSections: Array<ProjectSection>;
	/** Retrieve multiple projectSections using the Relay connection interface */
	projectSectionsConnection: ProjectSectionConnection;
	/** Retrieve a single rememberCheckoutSection */
	rememberCheckoutSection?: Maybe<RememberCheckoutSection>;
	/** Retrieve document version */
	rememberCheckoutSectionVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple rememberCheckoutSections */
	rememberCheckoutSections: Array<RememberCheckoutSection>;
	/** Retrieve multiple rememberCheckoutSections using the Relay connection interface */
	rememberCheckoutSectionsConnection: RememberCheckoutSectionConnection;
	/** Retrieve a single scheduledOperation */
	scheduledOperation?: Maybe<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations */
	scheduledOperations: Array<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations using the Relay connection interface */
	scheduledOperationsConnection: ScheduledOperationConnection;
	/** Retrieve a single scheduledRelease */
	scheduledRelease?: Maybe<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases */
	scheduledReleases: Array<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases using the Relay connection interface */
	scheduledReleasesConnection: ScheduledReleaseConnection;
	/** Retrieve a single user */
	user?: Maybe<User>;
	/** Retrieve multiple users */
	users: Array<User>;
	/** Retrieve multiple users using the Relay connection interface */
	usersConnection: UserConnection;
};

export type QueryAssetArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
	where: VersionWhereInput;
};

export type QueryAssetsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryBenefitArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: BenefitWhereUniqueInput;
};

export type QueryBenefitVersionArgs = {
	where: VersionWhereInput;
};

export type QueryBenefitsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BenefitOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<BenefitWhereInput>;
};

export type QueryBenefitsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BenefitOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<BenefitWhereInput>;
};

export type QueryBonusArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: BonusWhereUniqueInput;
};

export type QueryBonusSectionArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: BonusSectionWhereUniqueInput;
};

export type QueryBonusSectionVersionArgs = {
	where: VersionWhereInput;
};

export type QueryBonusSectionsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BonusSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<BonusSectionWhereInput>;
};

export type QueryBonusSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BonusSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<BonusSectionWhereInput>;
};

export type QueryBonusVersionArgs = {
	where: VersionWhereInput;
};

export type QueryBonusesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BonusOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<BonusWhereInput>;
};

export type QueryBonusesConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BonusOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<BonusWhereInput>;
};

export type QueryEntitiesArgs = {
	locales?: InputMaybe<Array<Locale>>;
	where: Array<EntityWhereInput>;
};

export type QueryFaqSectionArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: FaqSectionWhereUniqueInput;
};

export type QueryFaqSectionVersionArgs = {
	where: VersionWhereInput;
};

export type QueryFaqSectionsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<FaqSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<FaqSectionWhereInput>;
};

export type QueryFaqSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<FaqSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<FaqSectionWhereInput>;
};

export type QueryFooterArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: FooterWhereUniqueInput;
};

export type QueryFooterVersionArgs = {
	where: VersionWhereInput;
};

export type QueryFootersArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<FooterOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<FooterWhereInput>;
};

export type QueryFootersConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<FooterOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<FooterWhereInput>;
};

export type QueryIconArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: IconWhereUniqueInput;
};

export type QueryIconVersionArgs = {
	where: VersionWhereInput;
};

export type QueryIconsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<IconOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<IconWhereInput>;
};

export type QueryIconsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<IconOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<IconWhereInput>;
};

export type QueryLandingPageArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: LandingPageWhereUniqueInput;
};

export type QueryLandingPageVersionArgs = {
	where: VersionWhereInput;
};

export type QueryLandingPagesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<LandingPageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<LandingPageWhereInput>;
};

export type QueryLandingPagesConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<LandingPageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<LandingPageWhereInput>;
};

export type QueryNodeArgs = {
	id: Scalars['ID']['input'];
	locales?: Array<Locale>;
	stage?: Stage;
};

export type QueryProjectSectionArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ProjectSectionWhereUniqueInput;
};

export type QueryProjectSectionVersionArgs = {
	where: VersionWhereInput;
};

export type QueryProjectSectionsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ProjectSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ProjectSectionWhereInput>;
};

export type QueryProjectSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ProjectSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ProjectSectionWhereInput>;
};

export type QueryRememberCheckoutSectionArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type QueryRememberCheckoutSectionVersionArgs = {
	where: VersionWhereInput;
};

export type QueryRememberCheckoutSectionsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<RememberCheckoutSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<RememberCheckoutSectionWhereInput>;
};

export type QueryRememberCheckoutSectionsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<RememberCheckoutSectionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<RememberCheckoutSectionWhereInput>;
};

export type QueryScheduledOperationArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
	__typename?: 'RGBA';
	a: Scalars['RGBATransparency']['output'];
	b: Scalars['RGBAHue']['output'];
	g: Scalars['RGBAHue']['output'];
	r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
	a: Scalars['RGBATransparency']['input'];
	b: Scalars['RGBAHue']['input'];
	g: Scalars['RGBAHue']['input'];
	r: Scalars['RGBAHue']['input'];
};

export type RememberCheckoutSection = Entity &
	Node & {
		__typename?: 'RememberCheckoutSection';
		buttonText: Scalars['String']['output'];
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<RememberCheckoutSection>;
		/** List of RememberCheckoutSection versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		sectionID: Scalars['String']['output'];
		/** System stage field */
		stage: Stage;
		title: RichText;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type RememberCheckoutSectionCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type RememberCheckoutSectionDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type RememberCheckoutSectionHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type RememberCheckoutSectionPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type RememberCheckoutSectionScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type RememberCheckoutSectionUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type RememberCheckoutSectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: RememberCheckoutSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type RememberCheckoutSectionConnection = {
	__typename?: 'RememberCheckoutSectionConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<RememberCheckoutSectionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type RememberCheckoutSectionCreateInput = {
	buttonText: Scalars['String']['input'];
	clu301pjc01mm07lrhddc7hh2?: InputMaybe<LandingPageCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	sectionID: Scalars['String']['input'];
	title: Scalars['RichTextAST']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RememberCheckoutSectionCreateManyInlineInput = {
	/** Connect multiple existing RememberCheckoutSection documents */
	connect?: InputMaybe<Array<RememberCheckoutSectionWhereUniqueInput>>;
	/** Create and connect multiple existing RememberCheckoutSection documents */
	create?: InputMaybe<Array<RememberCheckoutSectionCreateInput>>;
};

export type RememberCheckoutSectionCreateOneInlineInput = {
	/** Connect one existing RememberCheckoutSection document */
	connect?: InputMaybe<RememberCheckoutSectionWhereUniqueInput>;
	/** Create and connect one RememberCheckoutSection document */
	create?: InputMaybe<RememberCheckoutSectionCreateInput>;
};

/** An edge in a connection. */
export type RememberCheckoutSectionEdge = {
	__typename?: 'RememberCheckoutSectionEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: RememberCheckoutSection;
};

/** Identifies documents */
export type RememberCheckoutSectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<RememberCheckoutSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<RememberCheckoutSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<RememberCheckoutSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	buttonText?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	buttonText_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	buttonText_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<RememberCheckoutSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<RememberCheckoutSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<RememberCheckoutSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RememberCheckoutSectionOrderByInput {
	ButtonTextAsc = 'buttonText_ASC',
	ButtonTextDesc = 'buttonText_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SectionIdAsc = 'sectionID_ASC',
	SectionIdDesc = 'sectionID_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type RememberCheckoutSectionUpdateInput = {
	buttonText?: InputMaybe<Scalars['String']['input']>;
	clu301pjc01mm07lrhddc7hh2?: InputMaybe<LandingPageUpdateManyInlineInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type RememberCheckoutSectionUpdateManyInlineInput = {
	/** Connect multiple existing RememberCheckoutSection documents */
	connect?: InputMaybe<Array<RememberCheckoutSectionConnectInput>>;
	/** Create and connect multiple RememberCheckoutSection documents */
	create?: InputMaybe<Array<RememberCheckoutSectionCreateInput>>;
	/** Delete multiple RememberCheckoutSection documents */
	delete?: InputMaybe<Array<RememberCheckoutSectionWhereUniqueInput>>;
	/** Disconnect multiple RememberCheckoutSection documents */
	disconnect?: InputMaybe<Array<RememberCheckoutSectionWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing RememberCheckoutSection documents */
	set?: InputMaybe<Array<RememberCheckoutSectionWhereUniqueInput>>;
	/** Update multiple RememberCheckoutSection documents */
	update?: InputMaybe<
		Array<RememberCheckoutSectionUpdateWithNestedWhereUniqueInput>
	>;
	/** Upsert multiple RememberCheckoutSection documents */
	upsert?: InputMaybe<
		Array<RememberCheckoutSectionUpsertWithNestedWhereUniqueInput>
	>;
};

export type RememberCheckoutSectionUpdateManyInput = {
	buttonText?: InputMaybe<Scalars['String']['input']>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type RememberCheckoutSectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: RememberCheckoutSectionUpdateManyInput;
	/** Document search */
	where: RememberCheckoutSectionWhereInput;
};

export type RememberCheckoutSectionUpdateOneInlineInput = {
	/** Connect existing RememberCheckoutSection document */
	connect?: InputMaybe<RememberCheckoutSectionWhereUniqueInput>;
	/** Create and connect one RememberCheckoutSection document */
	create?: InputMaybe<RememberCheckoutSectionCreateInput>;
	/** Delete currently connected RememberCheckoutSection document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected RememberCheckoutSection document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single RememberCheckoutSection document */
	update?: InputMaybe<RememberCheckoutSectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single RememberCheckoutSection document */
	upsert?: InputMaybe<RememberCheckoutSectionUpsertWithNestedWhereUniqueInput>;
};

export type RememberCheckoutSectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: RememberCheckoutSectionUpdateInput;
	/** Unique document search */
	where: RememberCheckoutSectionWhereUniqueInput;
};

export type RememberCheckoutSectionUpsertInput = {
	/** Create document if it didn't exist */
	create: RememberCheckoutSectionCreateInput;
	/** Update document if it exists */
	update: RememberCheckoutSectionUpdateInput;
};

export type RememberCheckoutSectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: RememberCheckoutSectionUpsertInput;
	/** Unique document search */
	where: RememberCheckoutSectionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type RememberCheckoutSectionWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type RememberCheckoutSectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<RememberCheckoutSectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<RememberCheckoutSectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<RememberCheckoutSectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	buttonText?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	buttonText_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	buttonText_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<RememberCheckoutSectionWhereStageInput>;
	documentInStages_none?: InputMaybe<RememberCheckoutSectionWhereStageInput>;
	documentInStages_some?: InputMaybe<RememberCheckoutSectionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	sectionID?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	sectionID_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	sectionID_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	sectionID_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	sectionID_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	sectionID_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	sectionID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	sectionID_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	sectionID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	sectionID_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type RememberCheckoutSectionWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<RememberCheckoutSectionWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<RememberCheckoutSectionWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<RememberCheckoutSectionWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<RememberCheckoutSectionWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References RememberCheckoutSection record uniquely */
export type RememberCheckoutSectionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
	__typename?: 'RichText';
	/** Returns HTMl representation */
	html: Scalars['String']['output'];
	/** Returns Markdown representation */
	markdown: Scalars['String']['output'];
	/** Returns AST representation */
	raw: Scalars['RichTextAST']['output'];
	/** Returns plain-text contents of RichText */
	text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
	Node & {
		__typename?: 'ScheduledOperation';
		affectedDocuments: Array<ScheduledOperationAffectedDocument>;
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Operation description */
		description?: Maybe<Scalars['String']['output']>;
		/** Get the document in other stages */
		documentInStages: Array<ScheduledOperation>;
		/** Operation error message */
		errorMessage?: Maybe<Scalars['String']['output']>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		/** Raw operation payload including all details, this field is subject to change */
		rawPayload: Scalars['Json']['output'];
		/** The release this operation is scheduled for */
		release?: Maybe<ScheduledRelease>;
		/** System stage field */
		stage: Stage;
		/** operation Status */
		status: ScheduledOperationStatus;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
	| Asset
	| Benefit
	| Bonus
	| BonusSection
	| FaqSection
	| Footer
	| Icon
	| LandingPage
	| ProjectSection
	| RememberCheckoutSection;

export type ScheduledOperationConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
	__typename?: 'ScheduledOperationConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledOperationEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
	/** Connect one existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
	__typename?: 'ScheduledOperationEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
	Canceled = 'CANCELED',
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
	/** Disconnect multiple ScheduledOperation documents */
	disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledOperation documents */
	set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
	/** Connect existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
	/** Disconnect currently connected ScheduledOperation document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
	Node & {
		__typename?: 'ScheduledRelease';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Release description */
		description?: Maybe<Scalars['String']['output']>;
		/** Get the document in other stages */
		documentInStages: Array<ScheduledRelease>;
		/** Release error message */
		errorMessage?: Maybe<Scalars['String']['output']>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** Whether scheduled release should be run */
		isActive: Scalars['Boolean']['output'];
		/** Whether scheduled release is implicit */
		isImplicit: Scalars['Boolean']['output'];
		/** Operations to run with this release */
		operations: Array<ScheduledOperation>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		/** Release date and time */
		releaseAt?: Maybe<Scalars['DateTime']['output']>;
		/** System stage field */
		stage: Stage;
		/** Release Status */
		status: ScheduledReleaseStatus;
		/** Release Title */
		title?: Maybe<Scalars['String']['output']>;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
	__typename?: 'ScheduledReleaseConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledReleaseEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Create and connect multiple existing ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
	/** Connect one existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
	__typename?: 'ScheduledReleaseEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	IsImplicitAsc = 'isImplicit_ASC',
	IsImplicitDesc = 'isImplicit_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	ReleaseAtAsc = 'releaseAt_ASC',
	ReleaseAtDesc = 'releaseAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
	/** Create and connect multiple ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
	/** Delete multiple ScheduledRelease documents */
	delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Disconnect multiple ScheduledRelease documents */
	disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledRelease documents */
	set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Update multiple ScheduledRelease documents */
	update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ScheduledRelease documents */
	upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ScheduledReleaseUpdateManyInput;
	/** Document search */
	where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
	/** Connect existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
	/** Delete currently connected ScheduledRelease document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected ScheduledRelease document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single ScheduledRelease document */
	update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ScheduledRelease document */
	upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ScheduledReleaseUpdateInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
	/** Create document if it didn't exist */
	create: ScheduledReleaseCreateInput;
	/** Update document if it exists */
	update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ScheduledReleaseUpsertInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Social = Entity & {
	__typename?: 'Social';
	icon: Asset;
	/** The unique identifier */
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	/** System stage field */
	stage: Stage;
	url: Scalars['String']['output'];
};

export type SocialIconArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type SocialConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: SocialWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialConnection = {
	__typename?: 'SocialConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<SocialEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type SocialCreateInput = {
	icon: AssetCreateOneInlineInput;
	name: Scalars['String']['input'];
	url: Scalars['String']['input'];
};

export type SocialCreateManyInlineInput = {
	/** Create and connect multiple existing Social documents */
	create?: InputMaybe<Array<SocialCreateInput>>;
};

export type SocialCreateOneInlineInput = {
	/** Create and connect one Social document */
	create?: InputMaybe<SocialCreateInput>;
};

export type SocialCreateWithPositionInput = {
	/** Document to create */
	data: SocialCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SocialEdge = {
	__typename?: 'SocialEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Social;
};

/** Identifies documents */
export type SocialManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<SocialWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<SocialWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<SocialWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	url_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	url_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	url_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	url_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SocialOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	UrlAsc = 'url_ASC',
	UrlDesc = 'url_DESC',
}

export type SocialParent = AuthorSection;

export type SocialParentConnectInput = {
	AuthorSection?: InputMaybe<AuthorSectionConnectInput>;
};

export type SocialParentCreateInput = {
	AuthorSection?: InputMaybe<AuthorSectionCreateInput>;
};

export type SocialParentCreateManyInlineInput = {
	/** Create and connect multiple existing SocialParent documents */
	create?: InputMaybe<Array<SocialParentCreateInput>>;
};

export type SocialParentCreateOneInlineInput = {
	/** Create and connect one SocialParent document */
	create?: InputMaybe<SocialParentCreateInput>;
};

export type SocialParentCreateWithPositionInput = {
	AuthorSection?: InputMaybe<AuthorSectionCreateWithPositionInput>;
};

export type SocialParentUpdateInput = {
	AuthorSection?: InputMaybe<AuthorSectionUpdateInput>;
};

export type SocialParentUpdateManyInlineInput = {
	/** Create and connect multiple SocialParent component instances */
	create?: InputMaybe<Array<SocialParentCreateWithPositionInput>>;
	/** Delete multiple SocialParent documents */
	delete?: InputMaybe<Array<SocialParentWhereUniqueInput>>;
	/** Update multiple SocialParent component instances */
	update?: InputMaybe<
		Array<SocialParentUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple SocialParent component instances */
	upsert?: InputMaybe<
		Array<SocialParentUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type SocialParentUpdateManyWithNestedWhereInput = {
	AuthorSection?: InputMaybe<AuthorSectionUpdateManyWithNestedWhereInput>;
};

export type SocialParentUpdateOneInlineInput = {
	/** Create and connect one SocialParent document */
	create?: InputMaybe<SocialParentCreateInput>;
	/** Delete currently connected SocialParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single SocialParent document */
	update?: InputMaybe<SocialParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single SocialParent document */
	upsert?: InputMaybe<SocialParentUpsertWithNestedWhereUniqueInput>;
};

export type SocialParentUpdateWithNestedWhereUniqueAndPositionInput = {
	AuthorSection?: InputMaybe<AuthorSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type SocialParentUpdateWithNestedWhereUniqueInput = {
	AuthorSection?: InputMaybe<AuthorSectionUpdateWithNestedWhereUniqueInput>;
};

export type SocialParentUpsertWithNestedWhereUniqueAndPositionInput = {
	AuthorSection?: InputMaybe<AuthorSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type SocialParentUpsertWithNestedWhereUniqueInput = {
	AuthorSection?: InputMaybe<AuthorSectionUpsertWithNestedWhereUniqueInput>;
};

export type SocialParentWhereInput = {
	AuthorSection?: InputMaybe<AuthorSectionWhereInput>;
};

export type SocialParentWhereUniqueInput = {
	AuthorSection?: InputMaybe<AuthorSectionWhereUniqueInput>;
};

export type SocialUpdateInput = {
	icon?: InputMaybe<AssetUpdateOneInlineInput>;
	name?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialUpdateManyInlineInput = {
	/** Create and connect multiple Social component instances */
	create?: InputMaybe<Array<SocialCreateWithPositionInput>>;
	/** Delete multiple Social documents */
	delete?: InputMaybe<Array<SocialWhereUniqueInput>>;
	/** Update multiple Social component instances */
	update?: InputMaybe<Array<SocialUpdateWithNestedWhereUniqueAndPositionInput>>;
	/** Upsert multiple Social component instances */
	upsert?: InputMaybe<Array<SocialUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SocialUpdateManyInput = {
	name?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: SocialUpdateManyInput;
	/** Document search */
	where: SocialWhereInput;
};

export type SocialUpdateOneInlineInput = {
	/** Create and connect one Social document */
	create?: InputMaybe<SocialCreateInput>;
	/** Delete currently connected Social document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Social document */
	update?: InputMaybe<SocialUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Social document */
	upsert?: InputMaybe<SocialUpsertWithNestedWhereUniqueInput>;
};

export type SocialUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<SocialUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: SocialWhereUniqueInput;
};

export type SocialUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: SocialUpdateInput;
	/** Unique document search */
	where: SocialWhereUniqueInput;
};

export type SocialUpsertInput = {
	/** Create document if it didn't exist */
	create: SocialCreateInput;
	/** Update document if it exists */
	update: SocialUpdateInput;
};

export type SocialUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<SocialUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: SocialWhereUniqueInput;
};

export type SocialUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: SocialUpsertInput;
	/** Unique document search */
	where: SocialWhereUniqueInput;
};

/** Identifies documents */
export type SocialWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<SocialWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<SocialWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<SocialWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	url_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	url_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	url_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	url_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Social record uniquely */
export type SocialWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
	/** The Draft is the default stage for all your content. */
	Draft = 'DRAFT',
	/** The Published stage is where you can publish your content to. */
	Published = 'PUBLISHED',
}

export type Stat = Entity & {
	__typename?: 'Stat';
	/** The unique identifier */
	id: Scalars['ID']['output'];
	number: Scalars['String']['output'];
	/** System stage field */
	stage: Stage;
	text: Scalars['String']['output'];
};

export type StatConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: StatWhereUniqueInput;
};

/** A connection to a list of items. */
export type StatConnection = {
	__typename?: 'StatConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<StatEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type StatCreateInput = {
	number: Scalars['String']['input'];
	text: Scalars['String']['input'];
};

export type StatCreateManyInlineInput = {
	/** Create and connect multiple existing Stat documents */
	create?: InputMaybe<Array<StatCreateInput>>;
};

export type StatCreateOneInlineInput = {
	/** Create and connect one Stat document */
	create?: InputMaybe<StatCreateInput>;
};

export type StatCreateWithPositionInput = {
	/** Document to create */
	data: StatCreateInput;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type StatEdge = {
	__typename?: 'StatEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Stat;
};

/** Identifies documents */
export type StatManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<StatWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<StatWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<StatWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	number?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	number_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	number_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	number_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	number_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	number_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	number_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	number_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	number_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	number_starts_with?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	text_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	text_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	text_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	text_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	text_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum StatOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NumberAsc = 'number_ASC',
	NumberDesc = 'number_DESC',
	TextAsc = 'text_ASC',
	TextDesc = 'text_DESC',
}

export type StatParent = IntroSection;

export type StatParentConnectInput = {
	IntroSection?: InputMaybe<IntroSectionConnectInput>;
};

export type StatParentCreateInput = {
	IntroSection?: InputMaybe<IntroSectionCreateInput>;
};

export type StatParentCreateManyInlineInput = {
	/** Create and connect multiple existing StatParent documents */
	create?: InputMaybe<Array<StatParentCreateInput>>;
};

export type StatParentCreateOneInlineInput = {
	/** Create and connect one StatParent document */
	create?: InputMaybe<StatParentCreateInput>;
};

export type StatParentCreateWithPositionInput = {
	IntroSection?: InputMaybe<IntroSectionCreateWithPositionInput>;
};

export type StatParentUpdateInput = {
	IntroSection?: InputMaybe<IntroSectionUpdateInput>;
};

export type StatParentUpdateManyInlineInput = {
	/** Create and connect multiple StatParent component instances */
	create?: InputMaybe<Array<StatParentCreateWithPositionInput>>;
	/** Delete multiple StatParent documents */
	delete?: InputMaybe<Array<StatParentWhereUniqueInput>>;
	/** Update multiple StatParent component instances */
	update?: InputMaybe<
		Array<StatParentUpdateWithNestedWhereUniqueAndPositionInput>
	>;
	/** Upsert multiple StatParent component instances */
	upsert?: InputMaybe<
		Array<StatParentUpsertWithNestedWhereUniqueAndPositionInput>
	>;
};

export type StatParentUpdateManyWithNestedWhereInput = {
	IntroSection?: InputMaybe<IntroSectionUpdateManyWithNestedWhereInput>;
};

export type StatParentUpdateOneInlineInput = {
	/** Create and connect one StatParent document */
	create?: InputMaybe<StatParentCreateInput>;
	/** Delete currently connected StatParent document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single StatParent document */
	update?: InputMaybe<StatParentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single StatParent document */
	upsert?: InputMaybe<StatParentUpsertWithNestedWhereUniqueInput>;
};

export type StatParentUpdateWithNestedWhereUniqueAndPositionInput = {
	IntroSection?: InputMaybe<IntroSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type StatParentUpdateWithNestedWhereUniqueInput = {
	IntroSection?: InputMaybe<IntroSectionUpdateWithNestedWhereUniqueInput>;
};

export type StatParentUpsertWithNestedWhereUniqueAndPositionInput = {
	IntroSection?: InputMaybe<IntroSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type StatParentUpsertWithNestedWhereUniqueInput = {
	IntroSection?: InputMaybe<IntroSectionUpsertWithNestedWhereUniqueInput>;
};

export type StatParentWhereInput = {
	IntroSection?: InputMaybe<IntroSectionWhereInput>;
};

export type StatParentWhereUniqueInput = {
	IntroSection?: InputMaybe<IntroSectionWhereUniqueInput>;
};

export type StatUpdateInput = {
	number?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateManyInlineInput = {
	/** Create and connect multiple Stat component instances */
	create?: InputMaybe<Array<StatCreateWithPositionInput>>;
	/** Delete multiple Stat documents */
	delete?: InputMaybe<Array<StatWhereUniqueInput>>;
	/** Update multiple Stat component instances */
	update?: InputMaybe<Array<StatUpdateWithNestedWhereUniqueAndPositionInput>>;
	/** Upsert multiple Stat component instances */
	upsert?: InputMaybe<Array<StatUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StatUpdateManyInput = {
	number?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: StatUpdateManyInput;
	/** Document search */
	where: StatWhereInput;
};

export type StatUpdateOneInlineInput = {
	/** Create and connect one Stat document */
	create?: InputMaybe<StatCreateInput>;
	/** Delete currently connected Stat document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Stat document */
	update?: InputMaybe<StatUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Stat document */
	upsert?: InputMaybe<StatUpsertWithNestedWhereUniqueInput>;
};

export type StatUpdateWithNestedWhereUniqueAndPositionInput = {
	/** Document to update */
	data?: InputMaybe<StatUpdateInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: StatWhereUniqueInput;
};

export type StatUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: StatUpdateInput;
	/** Unique document search */
	where: StatWhereUniqueInput;
};

export type StatUpsertInput = {
	/** Create document if it didn't exist */
	create: StatCreateInput;
	/** Update document if it exists */
	update: StatUpdateInput;
};

export type StatUpsertWithNestedWhereUniqueAndPositionInput = {
	/** Document to upsert */
	data?: InputMaybe<StatUpsertInput>;
	/** Position in the list of existing component instances, will default to appending at the end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Unique component instance search */
	where: StatWhereUniqueInput;
};

export type StatUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: StatUpsertInput;
	/** Unique document search */
	where: StatWhereUniqueInput;
};

/** Identifies documents */
export type StatWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<StatWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<StatWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<StatWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	number?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	number_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	number_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	number_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	number_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	number_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	number_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	number_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	number_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	number_starts_with?: InputMaybe<Scalars['String']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	text_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	text_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	text_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	text_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	text_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Stat record uniquely */
export type StatWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export enum SystemDateTimeFieldVariation {
	Base = 'BASE',
	Combined = 'COMBINED',
	Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
	/** Locales to unpublish */
	locale: Locale;
	/** Stages to unpublish selected locales from */
	stages: Array<Stage>;
};

/** User system model */
export type User = Entity &
	Node & {
		__typename?: 'User';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** Get the document in other stages */
		documentInStages: Array<User>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** Flag to determine if user is active or not */
		isActive: Scalars['Boolean']['output'];
		/** User Kind. Can be either MEMBER, PAT or PUBLIC */
		kind: UserKind;
		/** The username */
		name: Scalars['String']['output'];
		/** Profile Picture url */
		picture?: Maybe<Scalars['String']['output']>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
	};

/** User system model */
export type UserDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type UserConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
	__typename?: 'UserConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<UserEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
	/** Connect one existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
	__typename?: 'UserEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: User;
};

/** System User Kind */
export enum UserKind {
	AppToken = 'APP_TOKEN',
	Member = 'MEMBER',
	Pat = 'PAT',
	Public = 'PUBLIC',
	Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
};

export enum UserOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	KindAsc = 'kind_ASC',
	KindDesc = 'kind_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PictureAsc = 'picture_ASC',
	PictureDesc = 'picture_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserConnectInput>>;
	/** Disconnect multiple User documents */
	disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing User documents */
	set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
	/** Connect existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
	/** Disconnect currently connected User document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<UserWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
	__typename?: 'Version';
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	revision: Scalars['Int']['output'];
	stage: Stage;
};

export type VersionWhereInput = {
	id: Scalars['ID']['input'];
	revision: Scalars['Int']['input'];
	stage: Stage;
};

export enum _FilterKind {
	And = 'AND',
	Not = 'NOT',
	Or = 'OR',
	Contains = 'contains',
	ContainsAll = 'contains_all',
	ContainsNone = 'contains_none',
	ContainsSome = 'contains_some',
	EndsWith = 'ends_with',
	Eq = 'eq',
	EqNot = 'eq_not',
	Gt = 'gt',
	Gte = 'gte',
	In = 'in',
	JsonPathExists = 'json_path_exists',
	JsonValueRecursive = 'json_value_recursive',
	Lt = 'lt',
	Lte = 'lte',
	NotContains = 'not_contains',
	NotEndsWith = 'not_ends_with',
	NotIn = 'not_in',
	NotStartsWith = 'not_starts_with',
	RelationalEvery = 'relational_every',
	RelationalNone = 'relational_none',
	RelationalSingle = 'relational_single',
	RelationalSome = 'relational_some',
	Search = 'search',
	StartsWith = 'starts_with',
	UnionEmpty = 'union_empty',
	UnionEvery = 'union_every',
	UnionNone = 'union_none',
	UnionSingle = 'union_single',
	UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
	Enum = 'enum',
	Relation = 'relation',
	RichText = 'richText',
	RichTextWithEmbeds = 'richTextWithEmbeds',
	Scalar = 'scalar',
	Union = 'union',
	Virtual = 'virtual',
}

export enum _MutationKind {
	Create = 'create',
	Delete = 'delete',
	DeleteMany = 'deleteMany',
	Publish = 'publish',
	PublishMany = 'publishMany',
	SchedulePublish = 'schedulePublish',
	ScheduleUnpublish = 'scheduleUnpublish',
	Unpublish = 'unpublish',
	UnpublishMany = 'unpublishMany',
	Update = 'update',
	UpdateMany = 'updateMany',
	Upsert = 'upsert',
}

export enum _OrderDirection {
	Asc = 'asc',
	Desc = 'desc',
}

export enum _RelationInputCardinality {
	Many = 'many',
	One = 'one',
}

export enum _RelationInputKind {
	Create = 'create',
	Update = 'update',
}

export enum _RelationKind {
	Regular = 'regular',
	Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
	Base = 'base',
	Combined = 'combined',
	Localization = 'localization',
}

export type MainQueryVariables = Exact<{ [key: string]: never }>;

export type MainQuery = {
	__typename?: 'Query';
	landingPages: Array<{
		__typename?: 'LandingPage';
		hero: {
			__typename?: 'Hero';
			description: string;
			bookImage: {
				__typename?: 'Asset';
				url: string;
				imageDescription?: string | null;
			};
			buttons: Array<{ __typename?: 'Button'; target: string; text: string }>;
			title: { __typename?: 'RichText'; html: string };
		};
		introSection: {
			__typename?: 'IntroSection';
			title: string;
			sectionID: string;
			stats: Array<{
				__typename?: 'Stat';
				id: string;
				number: string;
				text: string;
			}>;
		};
		chaptersSection: {
			__typename?: 'ChaptersSection';
			sectionID: string;
			title: string;
			chapters: Array<{
				__typename?: 'Accordion';
				id: string;
				content: string;
				title: string;
			}>;
		};
		authorSection: {
			__typename?: 'AuthorSection';
			sectionID: string;
			name: string;
			description: string;
			expertise: string;
			photo: {
				__typename?: 'Asset';
				url: string;
				imageDescription?: string | null;
			};
			socials: Array<{
				__typename?: 'Social';
				id: string;
				url: string;
				name: string;
				icon: {
					__typename?: 'Asset';
					url: string;
					imageDescription?: string | null;
				};
			}>;
		};
		previewSection: {
			__typename?: 'PreviewSection';
			sectionID: string;
			title: string;
			previews: Array<{
				__typename?: 'Asset';
				id: string;
				url: string;
				imageDescription?: string | null;
			}>;
		};
		checkoutSection: {
			__typename?: 'CheckoutSection';
			sectionID: string;
			title: string;
			salePrice: string;
			originalPrice: string;
			image: {
				__typename?: 'Asset';
				url: string;
				imageDescription?: string | null;
			};
			icons: Array<{
				__typename?: 'Icon';
				id: string;
				name: string;
				image: {
					__typename?: 'Asset';
					url: string;
					imageDescription?: string | null;
				};
			}>;
			button: { __typename?: 'Button'; text: string; target: string };
		};
		projectSection?: {
			__typename?: 'ProjectSection';
			sectionID: string;
			description: string;
			title: string;
			videoURL: string;
			videoThumbnail: {
				__typename?: 'Asset';
				imageDescription?: string | null;
				url: string;
			};
		} | null;
		bonusSection?: {
			__typename?: 'BonusSection';
			sectionID: string;
			title: string;
			bonus: Array<{
				__typename?: 'Bonus';
				id: string;
				description: string;
				title: string;
				benefitTitle: string;
				icon: {
					__typename?: 'Asset';
					imageDescription?: string | null;
					url: string;
				};
				benefits: Array<{
					__typename?: 'Benefit';
					description: string;
					id: string;
				}>;
			}>;
		} | null;
		rememberCheckoutSection?: {
			__typename?: 'RememberCheckoutSection';
			sectionID: string;
			buttonText: string;
			title: { __typename?: 'RichText'; html: string };
		} | null;
		faqSection?: {
			__typename?: 'FaqSection';
			sectionID: string;
			title: string;
			questions: Array<{
				__typename?: 'Accordion';
				id: string;
				title: string;
				content: string;
			}>;
		} | null;
		footer?: { __typename?: 'Footer'; authorCopyright: string } | null;
	}>;
};

export const MainDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Main' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'landingPages' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'hero' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'description' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'bookImage' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'url' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'imageDescription' },
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'buttons' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'target' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'text' },
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'title' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'html' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'introSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'stats' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'number' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'text' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'chaptersSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'chapters' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'first' },
														value: { kind: 'IntValue', value: '15' },
													},
												],
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'content' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'title' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'authorSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'description' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'expertise' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'photo' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'url' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'imageDescription' },
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'socials' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'url' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'name' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'icon' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'url' },
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'imageDescription',
																		},
																	},
																],
															},
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'previewSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'previews' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'first' },
														value: { kind: 'IntValue', value: '50' },
													},
												],
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'url' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'imageDescription' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'checkoutSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'salePrice' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'originalPrice' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'image' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'url' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'imageDescription' },
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'icons' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'name' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'image' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'url' },
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'imageDescription',
																		},
																	},
																],
															},
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'button' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'text' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'target' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'projectSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'description' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'videoURL' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'videoThumbnail' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'imageDescription' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'url' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'bonusSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												alias: { kind: 'Name', value: 'bonus' },
												name: { kind: 'Name', value: 'bonuses' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'description' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'title' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'icon' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'imageDescription',
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'url' },
																	},
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'benefitTitle' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'benefits' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'description',
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'id' },
																	},
																],
															},
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'rememberCheckoutSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'title' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'html' },
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'buttonText' },
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'faqSection' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sectionID' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'questions' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'title' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'content' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'footer' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'authorCopyright' },
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<MainQuery, MainQueryVariables>;
