import type { MainQuery } from '@/api/generated/graphql';
import { GET_MAIN } from '@/api/queries';

import { GraphqlClientFacade } from '@/libs/graphql/graphql-request';

import { MainTemplateProps } from '@/presentation/templates/MainTemplate';

import * as mappers from '@/presentation/mappers';

export async function mapperData() {
	const api = await GraphqlClientFacade.request<MainQuery>(GET_MAIN);

	const data = api.landingPages[0];

	const rememberCheckoutData = {
		sectionID: data.rememberCheckoutSection!.sectionID,
		title: data.rememberCheckoutSection!.title,
		buttonText: data.rememberCheckoutSection!.buttonText,
		originalPrice: data.checkoutSection.originalPrice,
		salePrice: data.checkoutSection.salePrice,
		buttonTarget: data.checkoutSection.button.target,
		icons: data.checkoutSection.icons,
	};

	const mappedData: MainTemplateProps = {
		hero: mappers.HeroMapper.toDomain(data.hero),
		intro: mappers.IntroSectionMapper.toDomain(data.introSection),
		chapters: mappers.ChaptersSectionMapper.toDomain(data.chaptersSection),
		author: mappers.AuthorSectionMapper.toDomain(data.authorSection),
		preview: mappers.PreviewSectionMapper.toDomain(data.previewSection),
		checkout: mappers.CheckoutSectionMapper.toDomain(data.checkoutSection),
		project: mappers.ProjectSectionMapper.toDomain(data.projectSection!),
		bonus: mappers.BonusSectionMapper.toDomain(data.bonusSection!),
		rememberCheckout:
			mappers.RememberCheckoutSectionMapper.toDomain(rememberCheckoutData),
		faq: mappers.FaqSectionMapper.toDomain(data.faqSection!),
		footer: mappers.FooterMapper.toDomain(data.footer!),
	};

	return mappedData;
}
