// This function will be called when the form is submitted
function validateForm() {
    const errors = [];

    // Get form input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const education = document.getElementById('education').value;
    const major = document.getElementById('major').value.trim();
    const graduationYear = document.getElementById('graduationYear').value.trim();

    // Required fields check
    if (!firstName) errors.push('First name is required');
    if (!lastName) errors.push('Last name is required');
    if (!email) errors.push('Email is required');
    if (!education) errors.push('Education level is required');
    if (!major) errors.push('Major is required');
    if (!graduationYear) errors.push('Graduation year is required');

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        errors.push('Please enter a valid email address');
    }

    // Phone validation (if provided)
    if (phone) {
        const phonePattern = /^\+?[\d\s-]{10,}$/;
        if (!phonePattern.test(phone)) {
            errors.push('Please enter a valid phone number');
        }
    }

    // Graduation year validation
    if (graduationYear) {
        const currentYear = new Date().getFullYear();
        const year = parseInt(graduationYear);
        if (isNaN(year) || year < currentYear || year > currentYear + 10) {
            errors.push('Please enter a valid graduation year between ' + currentYear + ' and ' + (currentYear + 10));
        }
    }

    // Interests validation
    const interestsCheckboxes = document.querySelectorAll('input[name="interests"]:checked');
    if (interestsCheckboxes.length === 0) {
        errors.push('Please select at least one area of interest');
    }
    const interestsValues = Array.from(interestsCheckboxes).map(cb => cb.nextElementSibling ? cb.nextElementSibling.textContent.trim() : cb.value);


    // Sessions validation
    const sessionsCheckboxes = document.querySelectorAll('input[name="sessions"]:checked');
    if (sessionsCheckboxes.length === 0) {
        errors.push('Please select at least one session to attend');
    }
    const sessionsValues = Array.from(sessionsCheckboxes).map(cb => cb.nextElementSibling ? cb.nextElementSibling.textContent.trim() : cb.value);


    // Resume validation
    const resumeInput = document.getElementById('resume');
    if (resumeInput.files.length === 0) {
        errors.push('Please upload your resume');
    } else {
        const file = resumeInput.files[0];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.type)) {
            errors.push('Resume must be in PDF or Word format');
        }
        if (file.size > maxSize) {
            errors.push('Resume file size must be less than 5MB');
        }
    }

    // Terms validation
    const terms = document.querySelector('input[name="terms"]');
    if (!terms.checked) {
        errors.push('Please agree to the terms and conditions');
    }

    // If there are errors, display them and prevent form submission
    if (errors.length > 0) {
        alert('Please correct the following errors:\n\n' + errors.join('\n'));
        return false; // Prevent form submission
    }

    // Show loading state
    const submitButton = document.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    // Prepare form data for display
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        education: document.getElementById('education').options[document.getElementById('education').selectedIndex].textContent, // Get full text
        major: major,
        graduationYear: graduationYear,
        interests: interestsValues,
        sessions: sessionsValues
    };

    // If all validations pass, proceed to display success message
    processFormSubmission(formData);

    // Show success modal
    document.getElementById('successModal').style.display = 'block';

    // Optional: Hide modal on close or OK
    document.getElementById('closeModalBtn').onclick = function() {
        document.getElementById('successModal').style.display = 'none';
    };
    document.getElementById('modalOkBtn').onclick = function() {
        document.getElementById('successModal').style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == document.getElementById('successModal')) {
            document.getElementById('successModal').style.display = 'none';
        }
    };

    // Reset form after successful submission and display
    document.getElementById('careerFairRegistration').reset();

    // Reset button state
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;

    return false; // Prevent default form submission as we're handling display manually
}


// This function handles displaying the successful registration details
function processFormSubmission(formData) {
    // Hide the form
    const form = document.getElementById('careerFairRegistration');
    if (form) {
        form.style.display = 'none';
    }

    // Populate the success section with the collected data
    document.getElementById('displayFullName').textContent = `${formData.firstName} ${formData.lastName}`;
    document.getElementById('displayEmail').textContent = formData.email;
    document.getElementById('displayPhone').textContent = formData.phone || 'N/A'; // Display 'N/A' if phone is empty
    document.getElementById('displayInstitution').textContent = formData.education;
    document.getElementById('displayFieldOfStudy').textContent = formData.major;
    document.getElementById('displayAreasOfInterest').textContent = formData.interests.join(', ');
    document.getElementById('displaySessionsToAttend').textContent = formData.sessions.join(', ');

    // Show the success section
    const successSection = document.getElementById('registrationSuccess');
    if (successSection) {
        successSection.style.display = 'block';
        // Scroll to the success message for better UX
        successSection.scrollIntoView({ behavior: 'smooth' });
    }
}
