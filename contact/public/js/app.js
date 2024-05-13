document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.querySelector('.contact-form');
    
    let name = document.getElementById('Name');
    let email = document.getElementById('Email');
    let subject = document.getElementById('Subject');
    let message = document.getElementById('Message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let formData = {
            name:     name.value,
            email:    email.value,
            subject:  subject.value,
            message:  message.value
        }
        console.log(formData);

        let xhr = new XMLHttpRequest();
        xhr.open('POST','/');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onload = function(){
            console.log(xhr.responseText);
            if(xhr.responseText == 'success'){
                console.log('alerting...');
                alert('Email sent!');
                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";

            }else{
                alert('something went wrong!');
            }
        }
        console.log('stringifying...');
        xhr.send(JSON.stringify(formData));
    });
});