document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("jCKH7m9YdIQb0Falq");

    document.getElementById('commentForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            comment: document.getElementById('comment').value,
        };

        emailjs.send('service_f91pcjp', 'template_rprx2do', templateParams)
            .then(function(response) {
                document.getElementById('message').innerText = 'Thank you for your comment!';
                document.getElementById('commentForm').reset();
            }, function(error) {
                document.getElementById('message').innerText = 'Error submitting the comment.';
            });
    });
});

