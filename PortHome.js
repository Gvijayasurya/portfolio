const scriptURL = 'https://script.google.com/macros/s/AKfycbxezR7NsljsxE3rXrzIT1gWeX7klImnVAHPRdXFxOS5JHp2AmbC5JNNIT3gQJ4wd9YA/exec'
        const form = document.forms['submit-to-google-sheet']
        
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })