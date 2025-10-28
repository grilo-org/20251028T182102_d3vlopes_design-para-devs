import sanitizeHtml from 'sanitize-html';

export function sanitizeHTMLWrapper(html: string) {
	const clearHTML = sanitizeHtml(html);

	return clearHTML;
}
