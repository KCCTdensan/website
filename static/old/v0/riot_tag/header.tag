<header>
	<h1>神戸高専電子計算機部</h1>
	<h2><a href={ site_moved }>&lt;-- サイト移転のお知らせ --&gt;</a></h2>
	<ul id="menu">
		<li><a href={ index }>TOP</a>
		<li><a href="https://d3bu.net">新TOP</a>
		<li><a href={ activities }>活動</a>
		<li><a href={ works }>展示と作品</a>
		<li><a href={ applicant }>入部希望者の方へ</a>
           	<li><a href="https://github.com/KCCTdensan/"><img src={GitHubMark} id="GitHub"></a>
		<li><a href="http://www.kobe-kosen.ac.jp/">神戸高専のホームページ</a>
		<li><a href={ AdventC }>ブログ</a>
	</ul>

	this.index = opts.dir + "index.html"
	this.activities = opts.dir + "activities.html"
	this.works = opts.dir + "works.html"
	this.applicant = opts.dir + "applicant.html"
	this.GitHubMark = opts.dir + "GitHub-Mark.svg"
	this.AdventC = opts.dir + "AdventC.html"
	this.site_moved = this.index + "#site_moved"

	<style>
		header h1,
		header h2{text-align:center}
	</style>
</header>
