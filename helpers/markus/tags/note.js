var formatParagraphs = require('paragraphs')

module.exports = (new function() {
	var defaultTitles = {
		note: 'Please note:',
		warning: 'Warning:',
		tip: 'Did you know?'
	};

	return {
		'note,warning,tip': {
			attribute: 'title',

			render: function(content, param, encode) {
				var title = this.attributes.title || defaultTitles[this.name];
				return '<div class="note"><b>' + encode(title) + '</b>' + formatParagraphs(content) + '<div class="text-end"></div></div>';
			}
		}
	};
});