// =======================================================
// COMMVAULT LUNCH PORTAL
// =======================================================


document.addEventListener("DOMContentLoaded", () => {


    // ==========================================
    // USER PREFERENCE
    // ==========================================


    const preference =
        localStorage.getItem("dietPreference");


    // Preference Badge


    const preferenceBadge =
        document.getElementById(
            "preferenceBadge"
        );


    if (
        preference &&
        preferenceBadge
    ) {


        preferenceBadge.textContent =
            `Current Preference: ${preference}`;


    }


    // ==========================================
    // SURVEY AUTO-FILL
    // ==========================================


    if (preference === "Vegetarian") {


        document.getElementById(
            "mondayVeg"
        )?.click();


        const tuesday =
            document.getElementById(
                "tuesdayChoice"
            );


        const wednesday =
            document.getElementById(
                "wednesdayChoice"
            );


        if (tuesday) {
            tuesday.value = "veg";
        }


        if (wednesday) {
            wednesday.value = "veg";
        }


    }


    if (preference === "Non-Vegetarian") {


        document.getElementById(
            "mondayChicken"
        )?.click();


        const tuesday =
            document.getElementById(
                "tuesdayChoice"
            );


        const wednesday =
            document.getElementById(
                "wednesdayChoice"
            );


        if (tuesday) {
            tuesday.value = "nonveg";
        }


        if (wednesday) {
            wednesday.value = "nonveg";
        }


    }


    if (preference === "Both") {


        const tuesday =
            document.getElementById(
                "tuesdayChoice"
            );


        const wednesday =
            document.getElementById(
                "wednesdayChoice"
            );


        if (tuesday) {
            tuesday.value = "both";
        }


        if (wednesday) {
            wednesday.value = "both";
        }


    }


    // ==========================================
    // SUSHI LIMIT (MAX 3)
    // ==========================================


    const sushiOptions =
        document.querySelectorAll(
            ".sushi-option"
        );


    sushiOptions.forEach(option => {


        option.addEventListener(
            "change",
            () => {


                const selected =
                    document.querySelectorAll(
                        ".sushi-option:checked"
                    );


                if (selected.length > 3) {


                    option.checked = false;


                    alert(
                        "Please select no more than 3 sushi options."
                    );


                }


            }
        );


    });


    // ==========================================
    // PREFERENCE MODAL
    // ==========================================


    // ==========================================
// PREFERENCE MODAL
// ==========================================


const preferenceModal =
    document.getElementById(
        "preferenceModal"
    );


const submitPreferenceBtn =
    document.getElementById(
        "submitPreferenceBtn"
    );


if (
    preferenceModal &&
    submitPreferenceBtn
) {


    const savedPreference =
        localStorage.getItem(
            "dietPreference"
        );


    if (!savedPreference) {


        const modal =
            new bootstrap.Modal(
                preferenceModal
            );


        modal.show();


    }


    submitPreferenceBtn.addEventListener(
        "click",
        () => {


            const selectedOption =
                document.querySelector(
                    'input[name="dietPreference"]:checked'
                );


            if (!selectedOption) {
                return;
            }


            localStorage.setItem(
                "dietPreference",
                selectedOption.value
            );


            const modal =
                bootstrap.Modal.getInstance(
                    preferenceModal
                );


            if (modal) {
                modal.hide();
            }


            location.reload();


        }
    );


}


    // ==========================================
    // CONTACT PAGE
    // ==========================================


    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const contactSuccessModal =
        document.getElementById(
            "contactSuccessModal"
        );


    if (
        contactForm &&
        contactSuccessModal
    ) {


        contactForm.addEventListener(
            "submit",
            (event) => {


                event.preventDefault();


                new bootstrap.Modal(
                    contactSuccessModal
                ).show();


                contactForm.reset();


            }
        );


    }


    // ==========================================
    // SURVEY SUBMIT + VALIDATION
    // ==========================================


    const lunchSurveyForm =
        document.getElementById(
            "lunchSurveyForm"
        );


    if (lunchSurveyForm) {


        lunchSurveyForm.addEventListener(
            "submit",
            (event) => {


                event.preventDefault();


                const monday =
                    document.querySelector(
                        'input[name="monday"]:checked'
                    );


                const thursday =
                    document.querySelector(
                        'input[name="thursday"]:checked'
                    );


                const bagels =
                    document.querySelector(
                        'input[name="bagels"]:checked'
                    );


                const icecream =
                    document.querySelector(
                        'input[name="icecream"]:checked'
                    );


                if (
                    !monday ||
                    !thursday ||
                    !bagels ||
                    !icecream
                ) {


                    alert(
                        "Please complete all required fields before submitting."
                    );


                    return;


                }


                new bootstrap.Modal(
                    document.getElementById(
                        "surveySuccessModal"
                    )
                ).show();


            }
        );


    }


    // ==========================================
    // LUNCH NOTIFICATION SIGNUP
    // ==========================================


    const updatesForm =
        document.getElementById(
            "updatesForm"
        );


    const subscribeSuccessModal =
        document.getElementById(
            "subscribeSuccessModal"
        );


    if (
        updatesForm &&
        subscribeSuccessModal
    ) {


        updatesForm.addEventListener(
            "submit",
            (event) => {


                event.preventDefault();


                const updatesModal =
                    bootstrap.Modal.getInstance(
                        document.getElementById(
                            "updatesModal"
                        )
                    );


                if (updatesModal) {
                    updatesModal.hide();
                }


                new bootstrap.Modal(
                    subscribeSuccessModal
                ).show();


                updatesForm.reset();


            }
        );


    }


    // ==========================================
    // STAY UPDATED OFFCANVAS
    // ==========================================


    const stayUpdatedCanvas =
    document.getElementById(
        "stayUpdatedCanvas"
    );


   if (
    stayUpdatedCanvas &&
    localStorage.getItem("dietPreference")
) {


    setTimeout(() => {


        new bootstrap.Offcanvas(
            stayUpdatedCanvas
        ).show();


    }, 1000);


}
});


// =======================================================
// HELPER FUNCTIONS
// =======================================================


function getUserPreference() {


    return localStorage.getItem(
        "dietPreference"
    );


}


function resetPreference() {


    localStorage.removeItem(
        "dietPreference"
    );


}


function resetStayUpdatedPrompt() {


    localStorage.removeItem(
        "stayUpdatedPrompt"
    );


}


// ==========================================
// EMPLOYEE LOGIN
// ==========================================


const loginModal =
    document.getElementById(
        "loginModal"
    );


const loginForm =
    document.getElementById(
        "loginForm"
    );


if (
    loginModal &&
    !localStorage.getItem(
        "employeeEmail"
    )
) {


    new bootstrap.Modal(
        loginModal
    ).show();


}


if (loginForm) {


    loginForm.addEventListener(
        "submit",
        (event) => {


            event.preventDefault();


            const name =
                document.getElementById(
                    "employeeName"
                ).value;


            const email =
                document.getElementById(
                    "employeeEmail"
                ).value;


            localStorage.setItem(
                "employeeName",
                name
            );


            localStorage.setItem(
                "employeeEmail",
                email
            );


            location.reload();


        }
    );


}


const employeeWelcome =
    document.getElementById(
        "employeeWelcome"
    );


const employeeName =
    localStorage.getItem(
        "employeeName"
    );


if (
    employeeWelcome &&
    employeeName
) {


    employeeWelcome.innerHTML =
        `Welcome, <strong>${employeeName}</strong>`;


}


