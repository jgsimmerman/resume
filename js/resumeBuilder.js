

var bio = {
	"name": "Jacob Simmerman",
	"role": "Front-end Web Developer",
	"contact": {
		"mobile": "269-317-8709",
		"email": "jacob@ibws.com",
		"github": "jgsimmerman",
		"twitter": "jacobsimmerman",
		"location": "Kalamazoo, Michigan"
	},
	"biopic": "images/mypic.jpg",
	"welcomeMessage": "Welcome to my site",
	"skills": ["HTML", "CSS", "Javascript", "PHP", "C++", "SQL", "Wordpress", "Bootstrap", "Linux"]
};

var work = {
	"jobs": [
	{
		"employer": "ibws.com",
		"title": "Web Developer",
		"location": "Battle Creek, Michigan",
		"dates": "2012-present",
		"description": "Full Stack Web Development."
	},
	{
		"employer": "Signature Recognitions",
		"title": "Sales Manager",
		"location": "Sarasota, Florida",
		"dates": "2011-2013",
		"description": "Manager of the national sales team."
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
		"description": "A wikipedia style website built on the MediaWiki platform. It allowed users to write reports on NFL Draft prospects. The website also featured an IMDB-style rating system",
		"images": ['images/thelinuxstartupsmall.jpg']
	},
	{
		"title": "Wordpress Mobile",
		"dates": "2012",
		"description": "Mobile-friendly Wordpress theme, built on jQuery Mobile. As an adaptive theme, it could be installed as a plugin and would then change the theme if a mobile device was detected.",
		"images": ['images/genesiskickstart_tksmall.jpg']
	},
	{
		"title": "Math Tutor",
		"dates": "2012",
		"description": "A math education package which utilizes spaced repition. The program was developed in C++, which the user interface being developed in Qt. SQLite was used as the embedded database.",
		"images": ['images/udacity-portfolio-site_small.jpg']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Eastern Michigan University",
		"location": "Ypsilanti, Michigan",
		//"degree": "Associates of Business Management",
		"majors": ["Sociology"],
		"years": "2006-2008",
		"url": "www.emu.edu"
	},
            
            {
		"name": "Kellogg Community College",
		"location": "Battle Creek, Michigan",
		//"degree": "Associates of Business Management",
		"majors": ["Computer Programming"],
		"years": "2004-2005, 2010",
		"url": "www.kcc.edu"
	}
            
        ],
	"onlineCourses": [
	{
		"title": "Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "www.udacity.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

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
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
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
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		//$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (onlineClass in education.onlineCourses){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
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
