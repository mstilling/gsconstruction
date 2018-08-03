var headline = new SplitText("#hero-text", {type:"words, chars"});

TweenMax.staggerFrom(headline.chars, 0.75, {opacity:0, y:50, ease:Back.easeOut}, 0.02, allDone);

function allDone(){
  headline.revert();
}

TweenMax.from("#hero-btn", 1, {x:100, opacity:0, delay:1.0});
TweenMax.from("#hero-subhead", 1, {x:-100, opacity:0});
TweenMax.from("#contact-btns", 1, {y:100, opacity:0, delay:1.0});
TweenMax.from("#contact-page-text", 1, {y:100, opacity:0, delay:1.5});
