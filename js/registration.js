function validateForm() {
    // Validate interests
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    if (interests.length === 0) {
        alert('Please select at least one area of interest.');
        return false;
    }

    // Validate sessions
    const sessions = document.querySelectorAll('input[name="sessions"]:checked');
    if (sessions.length === 0) {
        alert('Please select at least one session to attend.');
        return false;
    }

    // Validate terms
    const terms = document.querySelector('input[name="terms"]');
    if (!terms.checked) {
        alert('Please agree to the terms and conditions.');
        return false;
    }

    // If all validations pass
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
    return true;
} 