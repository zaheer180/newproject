
        const transmissionRadios = document.getElementsByName('transmission');
        const optionRadios = document.getElementsByName('option');
        const heading = document.getElementById('heading');

        const bookedRadios = document.getElementsByName('booked');
        const bookingDetails = document.getElementById('booking-details');

        function updateHeading() {
            let selectedTransmission = '';
            let selectedOption = '';

            // Get selected transmission
            for (const radio of transmissionRadios) {
                if (radio.checked) {
                    selectedTransmission = radio.value;
                    break;
                }
            }

            // Get selected option
            for (const radio of optionRadios) {
                if (radio.checked) {
                    selectedOption = radio.value;
                    break;
                }
            }

            // Update the heading based on the specific combination
            if (selectedTransmission && selectedOption) {
                const headingText = getHeadingText(selectedTransmission, selectedOption);
                heading.textContent = headingText;
                heading.style.display = 'block';
            } else {
                heading.style.display = 'none';
            }
        }

        // Function to return heading text based on selected transmission and option
        function getHeadingText(transmission, option) {
            const headings = {
               "manual_option1": "Manual 5 Hours Total £360 Deposit £160",
                "manual_option2": "Manual 10 Hours Total £540 Deposit £160",
                "manual_option3": "Manual 12 Hours Total £616 Deposit £160",
                "manual_option4": "Manual 15 Hours Total £730 Deposit £160",
                "manual_option5": "Manual 20 Hours Total £920 Deposit £160",
                "manual_option6": "Manual 25 Hours Total £1110 Deposit £160",
                "manual_option7": "Manual 30 Hours Total £1300 Deposit £160",
                "manual_option8": "Manual 35 Hours Total £1490 Deposit £160",
                "manual_option9": "Manual 40 Hours Total £1680 Deposit £160",

                "auto_option1": "Automatic  5 Hours Total £360 Deposit £160",
                "auto_option2": "Automatic  10 Hours Total £560 Deposit £160",
                "auto_option3": "Automatic  12 Hours Total £640 Deposit £160",
                "auto_option4": "Automatic  15 Hours Total £760 Deposit £160",
                "auto_option5": "Automatic  20 Hours Total £960 Deposit £160 ",
                "auto_option6": "Automatic  25 Hours Total £1160 Deposit £160",
                "auto_option7": "Automatic  30 Hours Total £1360 Deposit £160 ",
                "auto_option8": "Automatic  35 Hours Total £1560 Deposit £160 ",
                "auto_option9": "Automatic  40 Hours Total £1760 Deposit £160",
            };

            // Construct the key from the selected transmission and option
            const key = `${transmission}_${option}`;
            return headings[key] || "Invalid Selection";
        }

        // Attach event listeners to radio buttons for transmission and option
        for (const radio of transmissionRadios) {
            radio.addEventListener('change', updateHeading);
        }

        for (const radio of optionRadios) {
            radio.addEventListener('change', updateHeading);
        }

        // Function to show or hide booking details based on selection
        function updateBookingDetails() {
            let bookingSelected = '';

            // Get selected booking status
            for (const radio of bookedRadios) {
                if (radio.checked) {
                    bookingSelected = radio.value;
                    break;
                }
            }

            // Show or hide the booking details based on the selection
            if (bookingSelected === 'yes') {
                bookingDetails.style.display = 'block';
            } else {
                bookingDetails.style.display = 'none';
            }
        }

        // Attach event listeners to the booking status radio buttons
        for (const radio of bookedRadios) {
            radio.addEventListener('change', updateBookingDetails);
        }
         // Reference to sections and buttons
    const lessonDetails = document.getElementById('lesson-details');
    const userDetails = document.getElementById('user-details');
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');

    // Next button event listener: hides lesson section, shows user details section
    nextButton.addEventListener('click', function() {
        lessonDetails.style.display = 'none';
        userDetails.style.display = 'block';
    });

    // Back button event listener: hides user section, shows lesson details section
    backButton.addEventListener('click', function() {
        userDetails.style.display= 'none';
        lessonDetails.style.display= 'block';
    });

  
   