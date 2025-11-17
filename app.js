
// Simple JS: opens resume in new tab on click if needed, and shows a confirmation for contact form submission.
document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      // Formspree will handle submission; show a quick toast
      // Allow normal submit (action targets Formspree). Optionally could use fetch for AJAX.
      setTimeout(()=> {
        alert('Thank you — your message was sent (via form). If you do not receive confirmation, check form action ID.');
      }, 300);
    });
  }
});
