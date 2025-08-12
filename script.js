 const scriptURL = 'https://script.google.com/macros/s/AKfycbwE3tuIAeKGwHEEMoh3bLkEusBFI8hNkNAUl51Qrorq2MEUu6FCpTvrH0yYUF2Zj0WWkw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
