// payment.js
$(document).ready(() => {
    $('#paymentForm').submit((event) => {
        event.preventDefault();
        const amount = $('#amount').val();
        const description = $('#description').val();
        $.ajax({
            url: '/api/pay-tax',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amount, description }),
            success: (response) => {
                $('#message').text(response.message).addClass('text-success');
            },
            error: (xhr, status, error) => {
                const errorMessage = JSON.parse(xhr.responseText).message;
                $('#message').text(errorMessage).addClass('text-danger');
            }
        });
    });
});
