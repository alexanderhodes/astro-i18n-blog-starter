import { defaultLocale } from '@i18n/i18n';
import { slugifyStr } from '@utilities/slugify';

export const getPostPath = (locale:String, collection:String, slug:String)=>{
  const
		trueSlug = slug.slice(slug.indexOf('/') + 1), // remove /[locale]/ from start of slug
  	localeDirectory = locale === defaultLocale ? '' : `/${locale}`;
  return `${localeDirectory}/${collection}/${trueSlug}`
}
