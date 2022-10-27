window.addEventListener("message", function(e){
    if(e.data != 'request-shipping-address') return;
    var object = JSON.stringify({
        type: 'icon-svg',
        data: {
            name: 'https://cdn.shopify.com/s/files/1/0552/8682/5006/files/person.png?v=1666268920',
            company_name: 'https://cdn.shopify.com/s/files/1/0552/8682/5006/files/Work.png?v=1666272098',
            address: 'https://cdn.shopify.com/s/files/1/0552/8682/5006/files/Map_Pin.png?v=1666272122',
            website: 'https://cdn.shopify.com/s/files/1/0552/8682/5006/files/fi_globe.png?v=1666272086',
            plan: 'https://cdn.shopify.com/s/files/1/0552/8682/5006/files/Edit.png?v=1666275737',
            send: 'https://cdn.shopify.com/s/files/1/0552/8682/5006/files/Send.png?v=1666278243',
            window_width: window.innerWidth
        }
    })
    let iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage(object, "*"); 
});