import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/* eslint-disable */
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'\n  query Main {\n    landingPages {\n      hero {\n        description\n        bookImage {\n          url\n          imageDescription\n        }\n        buttons {\n          target\n          text\n        }\n        title {\n          html\n        }\n      }\n      introSection {\n        title\n        sectionID\n        stats {\n          id\n          number\n          text\n        }\n      }\n      chaptersSection {\n        sectionID\n        title\n        chapters(first: 15) {\n          id\n          content\n          title\n        }\n      }\n      authorSection {\n        sectionID\n        name\n        description\n        expertise\n        photo {\n          url\n          imageDescription\n        }\n        socials {\n          id\n          url\n          name\n          icon {\n            url\n            imageDescription\n          }\n        }\n      }\n      previewSection {\n        sectionID\n        title\n        previews(first: 50) {\n          id\n          url\n          imageDescription\n        }\n      }\n      checkoutSection {\n        sectionID\n        title\n        salePrice\n        originalPrice\n        image {\n          url\n          imageDescription\n        }\n        icons {\n          id\n          name\n          image {\n            url\n            imageDescription\n          }\n        }\n        button {\n          text\n          target\n        }\n      }\n      projectSection {\n        sectionID\n        description\n        title\n        videoURL\n        videoThumbnail {\n          imageDescription\n          url\n        }\n      }\n      bonusSection {\n        sectionID\n        title\n        bonus: bonuses {\n          id\n          description\n          title\n          icon {\n            imageDescription\n            url\n          }\n          benefitTitle\n          benefits {\n            description\n            id\n          }\n        }\n      }\n      rememberCheckoutSection {\n        sectionID\n        title {\n          html\n        }\n        buttonText\n      }\n      faqSection {\n        sectionID\n        title\n        questions {\n          id\n          title\n          content\n        }\n      }\n      footer {\n        authorCopyright\n      }\n    }\n  }\n':
		types.MainDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query Main {\n    landingPages {\n      hero {\n        description\n        bookImage {\n          url\n          imageDescription\n        }\n        buttons {\n          target\n          text\n        }\n        title {\n          html\n        }\n      }\n      introSection {\n        title\n        sectionID\n        stats {\n          id\n          number\n          text\n        }\n      }\n      chaptersSection {\n        sectionID\n        title\n        chapters(first: 15) {\n          id\n          content\n          title\n        }\n      }\n      authorSection {\n        sectionID\n        name\n        description\n        expertise\n        photo {\n          url\n          imageDescription\n        }\n        socials {\n          id\n          url\n          name\n          icon {\n            url\n            imageDescription\n          }\n        }\n      }\n      previewSection {\n        sectionID\n        title\n        previews(first: 50) {\n          id\n          url\n          imageDescription\n        }\n      }\n      checkoutSection {\n        sectionID\n        title\n        salePrice\n        originalPrice\n        image {\n          url\n          imageDescription\n        }\n        icons {\n          id\n          name\n          image {\n            url\n            imageDescription\n          }\n        }\n        button {\n          text\n          target\n        }\n      }\n      projectSection {\n        sectionID\n        description\n        title\n        videoURL\n        videoThumbnail {\n          imageDescription\n          url\n        }\n      }\n      bonusSection {\n        sectionID\n        title\n        bonus: bonuses {\n          id\n          description\n          title\n          icon {\n            imageDescription\n            url\n          }\n          benefitTitle\n          benefits {\n            description\n            id\n          }\n        }\n      }\n      rememberCheckoutSection {\n        sectionID\n        title {\n          html\n        }\n        buttonText\n      }\n      faqSection {\n        sectionID\n        title\n        questions {\n          id\n          title\n          content\n        }\n      }\n      footer {\n        authorCopyright\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Main {\n    landingPages {\n      hero {\n        description\n        bookImage {\n          url\n          imageDescription\n        }\n        buttons {\n          target\n          text\n        }\n        title {\n          html\n        }\n      }\n      introSection {\n        title\n        sectionID\n        stats {\n          id\n          number\n          text\n        }\n      }\n      chaptersSection {\n        sectionID\n        title\n        chapters(first: 15) {\n          id\n          content\n          title\n        }\n      }\n      authorSection {\n        sectionID\n        name\n        description\n        expertise\n        photo {\n          url\n          imageDescription\n        }\n        socials {\n          id\n          url\n          name\n          icon {\n            url\n            imageDescription\n          }\n        }\n      }\n      previewSection {\n        sectionID\n        title\n        previews(first: 50) {\n          id\n          url\n          imageDescription\n        }\n      }\n      checkoutSection {\n        sectionID\n        title\n        salePrice\n        originalPrice\n        image {\n          url\n          imageDescription\n        }\n        icons {\n          id\n          name\n          image {\n            url\n            imageDescription\n          }\n        }\n        button {\n          text\n          target\n        }\n      }\n      projectSection {\n        sectionID\n        description\n        title\n        videoURL\n        videoThumbnail {\n          imageDescription\n          url\n        }\n      }\n      bonusSection {\n        sectionID\n        title\n        bonus: bonuses {\n          id\n          description\n          title\n          icon {\n            imageDescription\n            url\n          }\n          benefitTitle\n          benefits {\n            description\n            id\n          }\n        }\n      }\n      rememberCheckoutSection {\n        sectionID\n        title {\n          html\n        }\n        buttonText\n      }\n      faqSection {\n        sectionID\n        title\n        questions {\n          id\n          title\n          content\n        }\n      }\n      footer {\n        authorCopyright\n      }\n    }\n  }\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
