<div class="">
	<h1
		class="
			f-w:700
			t-t:u
			l-h:d
			f:7
			l-s:l
			c:blue
			m-b:5
		"
	>The Beginning of the End of CSS</h1>

	<p class="m-b:1">Shed.css came about after I got tired of writing CSS. All of the CSS in the world has already been written, and there's no need to rewrite it in every one of our projects. After a bikeshedding session with  <a class="link" href="https://mobile.twitter.com/brnnbrn">@brnnbrn</a> & <a class="link" href="https://mobile.twitter.com/samselikoff">@samselikoff</a>, and <a class="link" href="http://mobile.twitter.com/vinspee">me</a>, we came up with a naming scheme we were satisfied with, and <a class="link" href="http://github.com/tedconf/shed-css">shed.css</a> was born.</p>

	<ul>
		<li><a href="//tedconf.github.io/shed-css/docs.html#essential-concepts" class="d:b m-b:5 link">What does shed accomplish?</a></li>
		<li><a href="//tedconf.github.io/shed-css/docs.html#examples" class="d:b m-b:5 link">What does it look like?</a></li>
	</ul>

	<h2
		class="
			f:5
			t-t:u
			m-b:1
		"
	>Use</h2>

	<h4><em>In a hurry? Clone <a class="link" href="https://github.com/VinSpee/shed-starter">this repo</a> to get going with a starter kit and skip all of the setup.</em></h4>

	<h3>First, install shed using <a href="http://www.nearform.com/nodecrunch/nodejs-sudo-free/" class="link">npm</a>.</h3>
	<pre class="language-bash"><code class="language-bash">❯ npm install --saveDev shed-css</code></pre>

	<p class="m-b:7">At this point, we come to a fork in the road. Choose one of these options:</p>

	<h4 class="f:3 c:blue a-i:m m-b:2"><div class="c:blue f-w:700 v-a:m f:4 t-t:u">🚳 Single Speed</div>— I just want to use it.</h4>
	<pre class="language-scss m-b:7"><code class="language-scss">@import "shed-css/dist/index.css";</code></pre>

	<h4 class="f:3 c:blue a-i:m m-b:2"><div class="c:blue f-w:700 v-a:m f:4 t-t:u">🖌 Fixie</div> — I want to customize the scale and fonts.</h4>
	<p class="m-b:3">As of now, shed is written in <a class="link" href="http://postcss.org/">PostCSS</a> using future css syntax. To customize the scale and fonts, you should install shed's peer dependencies (<a href="http://postcss.org">postcss</a> and <a href="http://cssnext.io/postcss" class="link">cssnext</a>) and add them to your build pipeline.</p>
	<h5 class="f:1 t-t:u">Install peer deps:</h5>
	<pre class="language-bash m-b:5"><code class="language-bash">npm ls 2>/dev/null | grep \"UNMET PEER DEPENDENCY\" | awk '{print $NF}' | xargs npm install -D</code></pre>

	<h5 class="f:1 t-t:u">Customize Variables:</h5>
	<pre class="language-css m-b:7"><code class="language-css">@import "shed-css/lib/index.css";

:root {
	/*
	 * These "z" values reflect the steps on the scale.
	 * Numbers prefixed with "dot" mean they're below
	 * the base font size.
	 */
	--z-dot1: .19381rem
	--z-dot2: .23257rem
	--z-dot3: .27908rem
	--z-dot4: .3349rem
	--z-dot5: .40188rem
	--z-dot6: .48225rem
	--z-dot7: .5787rem
	--z-dot8: .69444rem
	--z-dot9: .83333rem
	--z0: 0;
	--z1: 1rem
	--z2: 1.2rem
	--z3: 1.44rem
	--z4: 1.728rem
	--z5: 2.0736rem
	--z6: 2.48832rem
	--z7: 2.98598rem
	--z8: 3.58318rem
	--z9: 4.29982rem
	--z10: 5.15978rem

	/*
	 * These "f-f" values change the font family utilties
	 * in the "font family" section.
	 */
	--f-f-sans: sans-serif;
	--f-f-serif: serif;
	--f-f-mono: monospace;

	/*
	 * These "l-h" values change the line height utilties
	 * in the "line height" section. Unitless numbers recommended.
	 */
	--l-h--default: 1;
	--l-h--tight: 1.2;
	--l-h--normal: 1.5;
	--l-h--loose: 1.75;

	/*
	 * These "l-s" values change the letter spacing
	 * utilties in the "letter spacing" section.
	 * Em values recommended.
	 */
	--l-s--default: normal;
	--l-s--tight: -.04em;
	--l-s--normal: -.01em;
	--l-s--loose: .1em;
}</code></pre>
	<p class="m-b:1">
		Now, you might want to get your brand colors in there by <a class="link" href="//tedconf.github.io/shed-css/docs.html#custom-theme">creating a custom theme.</a>
	</p>

	<h4 class="f:3 c:blue a-i:m m-b:2"><div class="f:4 c:blue f-w:700 v-a:m t-t:u">🚲🏚 Trailblazer</div> — I demand complete control (pro-level bikeshedder)</h4>
	<a
		href="//tedconf.github.io/shed-css/docs.html#custom-theme"
		class="link d:i-b m-b:7"
	>See the full customization guide</a>

</div>
