$(function() {
	new Vue({
        el: '#header',
        data: {
            logo: "avatar_profile_3.jpg",
            menus: ["About", "Career", "Skills", "Projects", "Contact"],
            icons: [
                { title: "Email", target: "", href: "mailto:pradip9102@gmail.com", class: "fa fa-envelope" },
                { title: "GitHub", target: "_blank", href: "https://github.com/pradip9102", class: "fa fa-github-square" },
                { title: "LinkedIn", target: "_blank", href: "https://www.linkedin.com/in/pradip112015/", class: "fa fa-linkedin" },
                { title: "Resume", target: "_blank", href: "https://cdn.rawgit.com/pradip9102/portfolio/master/src/main/resources/templates/resume.html", class: "fa fa-file-pdf-o" }
            ],
            intro: { name: "Pradip Kumar Maharana", profession: "Enterprise Application Developer", avatar: "avatar_profile_3.jpg" }
        }
    });

    new Vue({
        el: '#main',
        data: {
            about: {
                title: 'About me',
                text: "<p>Hi! I am <b style=\"font-weight: bold;\">Pradip Kumar Maharana</b>, just another graduate, who completed degree from NIT Raipur with major in ET&T. As being a practically involved aspirant, I spent most of my time working in different kind of projects (e.g. health related, robotics, image processing, etc). And soon enough I started feeling my groove in coding instead of chips and circuits despite taking that whole month long robotics training programme during second semester. So.. that's how I got into programming.</p><p>Now, I cut my creative teeth in Mumbai, where for over three years I've been collaborating with an amazing team of professionals - creating web applications that deliver intuitive UI/UX with the fastest possible response time. I have been part of the design process of complex components in early stages of application development, witnessed two projects going live from scratch as a core team member and also experienced those critical moments of production support 🤨. And when I'm done, I just sit back with pounding of rock music 🎧 and solve rubik's cube 🐿 or go out with friends to feel the beauty of nature 🌈 or ...</p>"
            },
            career: [
                {
                    type: "work",
                    organisation: "Virbac, India",
                    designation: "Senior software developer - IT Offshore",
                    description: "Being part of the IT Offshore team in India catering to requirements and specifications received from France (HQ) for International projects. To develop software, testing, implementation of end deliverables and conduct support operations for projects undertaken.",
                    duration: "July 2018 - Present"
                },
                {
                    type: 'work',
                    organisation: 'Virbac, India',
                    designation: 'Software developer - IT Offshore',
                    description: 'Being part of the IT Offshore team in India catering to requirements and specifications received from France (HQ) for International projects. To develop software, testing, implementation of end deliverables and conduct support operations for projects undertaken.',
                    duration: 'August 2015 - June 2018'
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
                    labels: ["Spring Boot", "Hibernate", "Thymeleaf", "Vue", "SVN", "Jenkins", "Android", "AWS", "GitHub"],
                    values: [8.5, 7.0, 8.0, 7.0, 8.0, 7.0, 3.0, 6.0, 7.0]
                },
                languages: {
                    name: "Languages",
                    labels: ["Kotlin", "Java", "HTML5", "CSS", "Javascript", "Maven", "Gradle"],
                    values: [8, 8.5, 6.0, 4.0, 7.0, 6.0, 7.5]
                }
            },
            projects: [
                {
                    type: "work",
                    name: "e-Perf",
                    description: "An important step towards the digitalisation of Human Resources at Virbac group. The collaborative tool allows employees and managers to participate/validate/acknowledge Job descriptions, Objectives and Appraisals."
                },
                {
                    type: "work",
                    name: "SpeedReader",
                    description: "SpeedReader is a device that generates diagnostic results from blood sample. Project consists of REST web services to synchronize data to centralised server for analysis."
                },
                {
                    type: "work",
                    name: "MPW-VET",
                    description: "It helps veterinarians to manage their client pets and shipping pet-food packages to their respective pet owners. It is also capable of broadcasting health tips for pets based on different weather conditions."
                },
                {
                    type: "work",
                    name: "MPW",
                    description: "MPW is abbreviation for “My Pet Watcher”. Pet owners are the potential users of this application with its reach being global. The main purpose of this application was to provide pet owners an efficient source and easy to use interface for tracking their pet’s health conditions continuously."
                },
                {
                    type: 'study',
                    name: "Angle estimator",
                    description: "Proposed a novel technique for blur angle estimation using the values of SUMFC of a blurred image. Development and comparison of different algorithms used for detection and restoration using matlab."
                },
                {
                    type: 'study',
                    name: "Object approximator",
                    description: "Identify and draw the outline of the object situated within a specified distance and calculate approximate dimension of the target object."
                },
                {
                    type: 'study',
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
            }
        },
        methods: {
            sendMail: function (event) {
                if (event) event.preventDefault();
                window.location.href = encodeURI("mailto:pradip9102@gmail.com?subject=" + this.hiringMail.senderSubject + "&body=" + "Hi Pradip,\n\n" + this.hiringMail.senderBody + "\n\nCheers,\n" + this.hiringMail.senderName + "\nEmail: " + this.hiringMail.senderEmail);
                //$("#fullMailLink")[0].click();
            }
        }
    });
});

$(function() {
    // initialize animation on scrolling
    new WOW().init();

    // intro animation
    $('#intro').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#intro .avatar').removeClass('invisible').addClass('animated fadeInDown');
    });
    $('#intro .avatar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#intro h2:eq(0)').removeClass('invisible').addClass('animated slideInRight');
        $('#intro h2:eq(1)').removeClass('invisible').addClass('animated slideInLeft');
    });

    // about animation
    /*$('#about h2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#about div').removeClass('invisible').addClass('animated  fadeInRight');
    });*/

    // enable menu highlighting
    $(".navbar .menu-item .nav-link").on('click', function(){
       $(".navbar .menu-item .nav-link.active").removeClass("active");
       $(this).addClass("active");
    });
});
