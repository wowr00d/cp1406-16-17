<html>
<head>
<title>Becoming a Benefactor - Barrier Reef Orchestra</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Cinzel|Lora' rel='stylesheet' type='text/css'>
<link href='gallery.css' rel="stylesheet" type="text/css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="pop/magnific-popup.css">
<script src="pop/jquery.magnific-popup.js"></script>  
</head>

<body>
<script> 
$(document).ready(function(){
    $("#mm-button").click(function(){
        $("#mobile-menu").animate({left: '0px'});
    });
    $("#mm-exit").click(function(){
        $("#mobile-menu").animate({left: '-100%'});
    });
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });
;})
</script>
<script src="FormScript.js"></script>
    <div id="mobile-menu">
        <p>MENU</p><div id="mm-exit"></div>
        <hr>
        <a class="logo" href="index.html"><img alt="LOGO" src="images/logo.png"></a>
        <a href="https://whatson.townsville.qld.gov.au/categories/ticketshop">Buy a ticket</a>
        <a href="index.html">Home</a>
        <a href="aboutus.html">About us</a>
        <a href="people.html">People</a>
        <a href="gallery.html">Gallery</a>
        <a href="memberform.html">Join Us</a>
        <a href="form.html">Support Us</a>
    </div>
    
    
    <div id="spotlight-frame">
        <nav>
            <div id="nav-inner">
                <a class="logo" href="index.html"><img alt="LOGO" src="images/logo.png"></a>
                <a href="https://whatson.townsville.qld.gov.au/categories/ticketshop">Buy a ticket</a>
                <a href="index.html">Home</a>
                <a href="aboutus.html">About us</a>
                <a href="people.html">People</a>
                <a href="gallery.html">Gallery</a>
                <a href="memberform.html">Join Us</a>
                <a href="form.html">Support Us</a>
                
                <div id="mm-button"></div>
            </div>
        </nav>
        
        <div id="spotlight-inner">
            <h1>Sucessful Donation</h1>
            <h2>...All Donations Are Taken With Generosity...</h2>
        </div>
    </div>
    
    <div id="content-wrapper">
        <div id="left-column">
            <h1>Details Summary<h1><hr>

            <h2></h2><h3>Date posted: 2016</h3>

			<?php
				$name = $_GET["name"];
				$donation = $_GET["Donation"];
				$email = $_GET["Email"];
				$phone = $_GET["Phone"];
				$mobile = $_GET["mobile"];

			    print "Thank you " . $name . " for your kind donation. <br> The following is a summary of your details provided: <br><br>";
			    print "Donation Amount - ". $donation .".<br>"; 
			    print "Email Address - ". $email . ".<br>";
			    print "Phone Number - ". $phone .".<br>";
			    print "Mobile Number - ". $mobile . ".<br>";
			?>

            <a href="index.html"><button>Return To Home</button></a>         
        
    </div>
        <div id="facebook-feed">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnqorchestra&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
        </div>
    </div>
            
          
    <div id="footer">
        <div id="footer-inner">
            <p>Copyright - Barrier Reef Orchestra - 2016</p>
            <a href="#top"><button>^</button></a>
        </div>        
    </div>
            
</body>


</html>