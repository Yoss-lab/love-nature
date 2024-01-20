/**header sticky */


let  bodyId = document.body.id;
if (bodyId == 'index' ) { 
 let selectHeader = document.getElementById('header');

   let headerOffset = selectHeader.offsetTop;
   //let nextElement = selectHeader.nextElementSibling
   //console.log('offset : ' + headerOffset);
   if (selectHeader) {
    //console.log(headerOffset - window.scrollY);
   window.addEventListener('scroll', function() {
      //console.log('offset2 : ' + (headerOffset - window.scrollY));
      //console.log(headerOffset - window.scrollY);
      if ((headerOffset - window.scrollY) < 0) {
        //console.log("sticky");
          selectHeader.classList.add('sticky');
          //nextElement.classList.add('scrolled-offset')
        } else {
          //console.log("not sticky");
          selectHeader.classList.remove('sticky');
          //nextElement.classList.remove('scrolled-offset')
        }
   }
  );
}
  } 



/**fin header sticky */

/** position slider */
let $main = $("#main");
let $sec_content = $("#content");
let $main_before = $(".main::before");
//let $main_before = $(".main").before();
let $header = $("#header");

let $headerHeight = $header.height();

$main.css('margin-top', $headerHeight + 'px');
$main_before.css('top', $headerHeight + 'px');
$sec_content.css('min-height','calc(100vh - ' + $headerHeight + 'px)');
/** fin position slider */