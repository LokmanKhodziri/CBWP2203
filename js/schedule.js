// Filter functionality for schedule
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('tbody tr').forEach(row => {
            if (filter === 'all' || row.getAttribute('data-category') === filter) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

// Registration button functionality
document.querySelectorAll('.register-btn').forEach(button => {
    button.addEventListener('click', () => {
        const eventName = button.closest('tr').querySelector('td:nth-child(2)').textContent;
        alert(`Registration for "${eventName}" will be processed. Please check your email for confirmation.`);
    });
}); 