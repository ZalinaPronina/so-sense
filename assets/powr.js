(function() {
    function parseMessage(data_string){
        try{
            return JSON.parse(data_string)
        }catch(e){
            return {}
        }
    }
    setTimeout(() =>{
        window.addEventListener("message", function(e){
            var message_object = parseMessage(e.data)
            if(message_object.type != 'icon-svg') return
            document.querySelector('input[data-type="firstname"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.name +'">');
            document.querySelector('input[data-type="lastname"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.name +'">');
            document.querySelector('input[title="Company Name (optional)"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.company_name +'">');
            document.querySelector('input[name="address1"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.address +'">');
            document.querySelector('input[name="address2"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.address +'">');
            document.querySelector('input[name="city"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.address +'">');
            document.querySelector('input[name="state"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.address +'">');
            document.querySelector('input[name="zip"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.address +'">');
            document.querySelector('select[name="country"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.address +'">');
            document.querySelector('input[title="Link to website"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.website +'">');
            document.querySelector('.submitButton').insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.send +'">');
            
            if(document.querySelector('input[title="Where you plan to sell?"]') != undefined){
                document.querySelector('input[title="Where you plan to sell?"]').parentElement.insertAdjacentHTML('beforeend', '<img src="'+ message_object.data.plan +'">');
            }
            if(message_object.data.window_width < 989){
                document.querySelector('.js-formBuilder-toggle.formbuilder-toggle ').classList.add('mobile-form')
                console.log(message_object.data.window_width)
            }
        });
        window.parent.postMessage('request-shipping-address', "*");
    }, 0)
})()