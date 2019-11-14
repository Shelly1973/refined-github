import './jump-to-bottom-link.css';
import React from 'dom-chef';
import select from 'select-dom';
import features from '../libs/features';
import observeElement from '../libs/simplified-element-observer';
import * as pageDetect from '../libs/page-detect';

function add(): void | false {
	const meta = select('.gh-header-meta > .TableObject-item--primary');
	if (!meta || select.exists('#rgh-jump-to-bottom-link')) {
		return;
	}

	meta.append(
		' · ',
		<a href="#partial-timeline" id="rgh-jump-to-bottom-link">Jump to bottom</a>
	);
}

function init(): void | false {
	// The issue header changes when new comments are added or the issue status changes
	observeElement('.js-issues-results', add);
}

features.add({
	id: __filebasename,
	description: 'Jump To Bottom',
	screenshot: 'https://user-images.githubusercontent.com/1402241/62036664-6d0e6880-b21c-11e9-9270-4ae30cc10de2.png'
}, {
	include: [
		pageDetect.isIssue,
		pageDetect.isPRConversation
	],
	init
});
