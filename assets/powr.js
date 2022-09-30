setTimeout(() =>{
    document.querySelectorAll('.choice-options.vertical')[1].querySelector('.choice-option__label.fitText').innerHTML = 'I agree to Stryker’s <a href="https://www.stryker.com/us/en/legal/terms-of-use.html" target="_blank">Terms and Conditions</a> and <a href="https://www.stryker.com/us/en/legal/privacy.html/" target="_blank">Privacy Policy</a>'
    document.querySelectorAll('.choice-option input').forEach(input =>
        input.addEventListener('change', function() {
        var arr = document.querySelectorAll('.dynamicElements.modernize-inputs-block.modernize-inputs-medium .col-xs-6.half');
        console.log(this.parentElement.parentElement.querySelector('.choice-option__label').innerText)
        if(this.parentElement.parentElement.querySelector('.choice-option__label').innerText === 'I’ve never done business with Stryker before'){
            arr[6].style.display = 'none';
            arr[7].style.width = '100%';
        }else{
            arr[6].style.display = 'block';
            arr[7].style.width = '50%';
        }
    }));
}, 0)
