$(function() {
	new Vue({
        el: '#header',
        data: {
            menus: ["About", "Career", "Skills", "Projects", "Blog"],
            icons: [
                { title: "Email", target: "", href: "mailto:pradip9102@gmail.com", class: "fa fa-envelope" },
                { title: "GitHub", target: "_blank", href: "https://github.com/pradip9102", class: "fa fa-github-square" },
                { title: "LinkedIn", target: "_blank", href: "https://www.linkedin.com/in/pradip112015/", class: "fa fa-linkedin" },
                { title: "Resume", target: "_blank", href: "http://htmlpreview.github.io/?https://github.com/pradip9102/portfolio/blob/master/src/main/resources/templates/resume.html", class: "fa fa-file-pdf-o" }
            ],
            intro: { name: "Pradip Kumar Maharana", profession: "Software Developer", avatar: "avatar_profile_2.jpg" }
        }
    });

    new Vue({
        el: '#main',
        data: {
            about: {
                title: 'About me',
                text: 'A Software developer with almost 3 years of professional experience having proficiency in Kotlin and Java with direct involvement in development of two client facing applications from scratch. Also have hands on experience on several cutting edge technologies as Spring Boot, Hibernate, Gradle, Vue, JFrog Artifact Repository, Jenkins, VCS (i.e. GitHub and Subversion), OAuth Authentication etc.'
            },
            career: [
                {
                    type: "work",
                    organisation: "Virbac, India",
                    designation: "Senior software developer - IT Offshore",
                    description: "Being part of the IT Offshore team in India catering to requirements and specifications received from France (HQ) for International projects. To develop software, testing, implementation of end deliverables and conduct support operations for projects undertaken.",
                    duration: "April 2018 - Present"
                },
                {
                    type: 'work',
                    organisation: 'Virbac, India',
                    designation: 'Software developer - IT Offshore',
                    description: 'Being part of the IT Offshore team in India catering to requirements and specifications received from France (HQ) for International projects. To develop software, testing, implementation of end deliverables and conduct support operations for projects undertaken.',
                    duration: 'August 2015 - March 2018'
                },
                {
                    type: 'study',
                    organisation: 'National Institute of Technology, Raipur',
                    designation: 'Electronics & Telecommunication Engineering',
                    description: '',
                    duration: 'May 2011 - April 2015'
                },
                {
                    type: 'study',
                    organisation: 'Bharat Mata School, Bilaspur',
                    designation: '12th (Higher secondary)',
                    description: '',
                    duration: 'May 2008 - April 2010'
                }
            ],
            skills: {
                techStack: {
                    name: "Technology",
                    labels: ["Spring Boot", "Hibernate", "Thymeleaf", "Git", "SVN", "Jenkins", "Android", "AWS"],
                    values: [8, 7, 8, 7, 8, 7, 2.5, 6]
                },
                languages: {
                    name: "Languages",
                    labels: ["Kotlin", "Java", "HTML", "CSS", "Javascript", "Maven", "Gradle"],
                    values: [8, 8, 6, 4, 7, 5, 8]
                }
            },
            projects: [
                {
                    name: "e-Perf",
                    description: "An important step towards the digitalisation of Human Resources at Virbac group. The collaborative tool allows employees and managers to participate/validate/acknowledge Job descriptions, Objectives and Appraisals."
                },
                {
                    name: "SpeedReader",
                    description: "SpeedReader is a device that generates diagnostic results from blood sample. Project consists of REST web services to synchronize data to centralised server for analysis."
                },
                {
                    name: "MPW-VET",
                    description: "It helps veterinarians to manage their client pets and shipping pet-food packages to their respective pet owners. It is also capable of broadcasting health tips for pets based on different weather conditions."
                },
                {
                    name: "MPW",
                    description: "MPW is abbreviation for “My Pet Watcher”. Pet owners are the potential users of this application with its reach being global. The main purpose of this application was to provide pet owners an efficient source and easy to use interface for tracking their pet’s health conditions continuously."
                },
                {
                    name: "Angle estimator",
                    description: "Proposed a novel technique for blur angle estimation using the values of SUMFC of a blurred image. Development and comparison of different algorithms used for detection and restoration using matlab."
                },
                {
                    name: "Object approximator",
                    description: "Identify and draw the outline of the object situated within a specified distance and calculate approximate dimension of the target object."
                },
                {
                    name: "Eye glucose meter",
                    description: "Replicate the functionality of the actual glucose meter, but is based on the fact that “Glucose rotates linearly polarized light”."
                }
            ],
            blog: {
            },
            contact: { address: 'Mumbai, India 400055', timing: 'Mon - Fri, 8:00-22:00', mobile: '+91 9619 808301' },
            hiringMail: {
                senderName: "",
                senderEmail: "",
                senderSubject: "",
                senderBody: "",
                fullMail: "mailto:pradip9102@gmail.com",
            }
        },
        methods: {
            sendMail: function (event) {
                this.fullMail = "mailto:pradip9102@gmail.com?subject=" + this.senderSubject + "&body="
                        + "Hi Pradip, I am " + this.senderName + ". " + this.senderBody + "Email: " + this.senderEmail
            }
        }
    });
});