document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Simulate page loading
    document.getElementById('home-link').addEventListener('click', loadHomePage);
    document.getElementById('courses-link').addEventListener('click', loadCoursesPage);
    document.getElementById('profile-link').addEventListener('click', loadProfilePage);
    document.getElementById('logout-link').addEventListener('click', logout);

    function loadHomePage() {
        content.innerHTML = '<h1>Welcome to the Language Learning Platform</h1>';
    }

    function loadCoursesPage() {
        content.innerHTML = '<h1>Courses</h1><div id="courses-list"></div>';
        // Fetch and display courses
    }

    function loadProfilePage() {
        content.innerHTML = '<h1>Your Profile</h1>';
        // Display user profile information
    }

    function logout() {
        // Handle user logout
    }

    loadHomePage(); // Load the home page by default
});
