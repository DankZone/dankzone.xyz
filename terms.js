var privacyMD = '';
fs.readFile(`${process.cwd()}${path.sep}dashboard${path.sep}public${path.sep}PRIVACY.md`, function(err, data) {
	if (err) {
		console.log(err);
		privacyMD = 'Error';
		return;
	}
	privacyMD = data.toString().replace(/\{\{botName\}\}/g, client.user.username).replace(/\{\{email\}\}/g, client.config.dashboard.legalTemplates.contactEmail);
	if (client.config.dashboard.secure !== 'true') {
		privacyMD = privacyMD.replace('Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.', '');
	}
});

var termsMD = '';
fs.readFile(`${process.cwd()}${path.sep}dashboard${path.sep}public${path.sep}TERMS.md`, function(err, data) {
	if (err) {
		console.log(err);
		privacyMD = 'Error';
		return;
	}
	termsMD = data.toString().replace(/\{\{botName\}\}/g, client.user.username).replace(/\{\{email\}\}/g, client.config.dashboard.legalTemplates.contactEmail);
});


app.get('/terms', function (req, res) {

	md.setOptions({
		renderer: new md.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: false
	});

	res.render(path.resolve(`views/terms.ejs`), {
		terms: md(termsMD),
	});
});

app.get('/privacy', function (req, res) {

		md.setOptions({
			renderer: new md.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: false,
			smartLists: true,
			smartypants: false
		});

		res.render(path.resolve(`views/privacypolicy.ejs`), {
			terms: md(termsMD),
		});
});