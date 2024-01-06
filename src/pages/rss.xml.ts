import rss from '@astrojs/rss';
import { siteTitle } from '../consts';
import { uiStrings } from '@i18n/uiStrings';
import { defaultLocale } from '@i18n/i18n';
import { getPostsToRenderInRSS } from '@utilities/getPostsToRenderInRSS';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context){
	const postsToRender = await getPostsToRenderInRSS(context, '', 'blog')

	return rss({
		title: siteTitle,
		description: uiStrings.siteDescription[defaultLocale],
		site: context.site,
		items: postsToRender.map((post) => ({
      link: post.link,
			content: sanitizeHtml(parser.render(post.body)),
			...post
    })),
	});
}
