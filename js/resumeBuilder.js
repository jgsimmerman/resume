

var bio = {
	"name": "Jacob Simmerman",
	"role": "Front-End Web Developer",
	"contact": {
		"mobile": "269-317-8709",
		"email": "jacob@ibws.com",
		"github": "jgsimmerman",
		"twitter": "jacobsimmerman",
		"location": "Kalamazoo, Michigan"
	},
	"biopic": "images/mypic.jpg",
	"welcomeMessage": "Welcome to my site",
	"contactURL": {
		"github": "http://github.com/jgsimmerman",
		"twitter": "http://twitter.com/jacobsimmerman",
		"email": "mailto:jacob@ibws.com",
		"phone": "tel:+1-269-317-8709"
	},
	"skills": ["HTML", "CSS", "Javascript", "PHP", "C++", "SQL", "Wordpress", "Bootstrap", "Linux"]
};

var work = {
	"jobs": [
	{
		"employer": "ibws.com",
		"title": "Web Developer",
		"location": "Battle Creek, Michigan",
		"dates": "2012-present",
		"description": "Full Stack Web Development. Specialized in mobile web development. Frameworks used included Wordpress, PhoneGap, Jekyll, and jQuery Mobile."
	},
	{
		"employer": "Signature Recognitions",
		"title": "Sales Manager",
		"location": "Sarasota, Florida",
		"dates": "2011-2013",
		"description": "Manager of the national sales team. Hired and trained new sales staff. Aided in lead generation. Communicated with clients via phone and email."
	},
	{
		"employer": "Cell Tiger",
		"title": "Technology Consultant",
		"location": "Sarasota, Florida",
		"dates": "2011",
		"description": "Consulted on web development, app development and deployment, and server configuration."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "NFLDraftWiki",
		"dates": "2012-2014",
		"description": "A wikipedia-style website built on the MediaWiki platform. It allowed users to write reports on NFL Draft prospects. The website also featured an IMDB-style rating system. I not only learned the WikiMedia framework, but I learned a lot about the importance of web security during this project.",
		"images": ['http://placehold.it/217x178']
	},
	{
		"title": "Wordpress Mobile",
		"dates": "2012",
		"description": "Mobile-friendly Wordpress theme, built on jQuery Mobile. As an adaptive theme, it could be installed as a plugin and would then change the theme of a mobile device was detected.",
		"images": ['http://placehold.it/217x178']
	},
	{
		"title": "Math Tutor",
		"dates": "2012",
		"description": "A math education package which utilizes spaced repition. The program was developed in C++, which the user interface being developed in Qt. SQLite was used as the embedded database.",
		"images": ['http://placehold.it/217x178']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Eastern Michigan University",
		"location": "Ypsilanti, Michigan",
		"majors": ["Sociology"],
		"years": "2006-2008",
		"url": "http://www.emu.edu"
	},

  {
		"name": "Kellogg Community College",
		"location": "Battle Creek, Michigan",
		"majors": ["Computer Programming"],
		"years": "2004-2005, 2010",
		"url": "http://www.kellogg.edu"
	}

        ],
	"onlineCourses": [
	{
		"title": "Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2016",
		"url": "https://udacity.com"
	},
	{

	"title": "Wordpress Development Track",
		"school": "Team Treehouse",
		"date": "2014",
		"url": "https://teamtreehouse.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile).replace("#", bio.contactURL.phone));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email).replace("#", bio.contactURL.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter).replace("#", bio.contactURL.twitter));

	$("#topContacts").append(HTMLgithub.replace("#", bio.contactURL.github).replace("%data%", bio.contact.github));


	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++)
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}

	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile).replace("#", bio.contactURL.phone));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email).replace("#", bio.contactURL.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter).replace("#", bio.contactURL.twitter));

	$("#footerContacts").append(HTMLgithub.replace("#", bio.contactURL.github).replace("%data%", bio.contact.github));


	//$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
}

work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
            	//$("#education").append(HTMLschoolStart);

		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		//$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (onlineClass in education.onlineCourses){
            	//$(".education-entry").append(HTMLonlineClasses);

		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		//$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url).replace("#", education.onlineCourses[onlineClass].url));

		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile).replace("#", bio.contactURL.phone));

	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
