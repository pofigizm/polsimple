!function(a){"use strict";var b=a.querySelector("paper-tabs"),c=a.querySelector("post-list");b.addEventListener("core-select",function(){c.show=b.selected}),a.addEventListener("polymer-ready",function(){c.show=b.selected="public"})}(wrap(document));