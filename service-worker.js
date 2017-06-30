var domain = "https://images.dmzj.com";
console.log("in service worker.js");
self.addEventListener('fetch', function (e) {
 console.log("when fetch");
 if (e.request.url.indexOf(domain) >= 0) {
   var req = e.request.clone();
   var returnUrl = req.url;
   e.respondWith(
     fetch(returnUrl, {
       // 通过设置referrer为空，骗过利用referrer实现防盗链的网站
       referrer: "http://www.dmzj.com/info/yitiaogou.html",
       mode: 'cors'
     })
   );
 }
});
