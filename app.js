var app = angular.module('TravelPlansApplication', []);

app.controller('TravelPlansController', function($scope) {

    $scope.locations = [
        {
            title: 'Walk the Great Wall.',
            country: 'China',
            url: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
            done: true
        },
        {
            title: 'Visit the Floating Mountains.',
            country: 'China',
            url: 'https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park',
            done: true
        },
        {
            title: 'Hike the Inca Trail.',
            country: 'Peru',
            url: 'https://en.wikipedia.org/wiki/Inca_Trail_to_Machu_Picchu',
            done: true
        },  
        {
            title: 'Do the Gibbon Experience.',
            country: 'Laos',
            url: 'https://www.gibbonexperience.org/',
            done: true
        },
        {
            title: 'Visit Prada Marfa.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Prada_Marfa',
            done: true
        }, 
	{
            title: 'Bike the Hà Giang Loop.',
            country: 'Vietnam',
            url: 'https://solotravellerontour.com/motorbike-ha-giang-loop-2',
            done: true
        },
	{
            title: 'Do the Bermondsey Beer Mile.',
            country: 'England',
            url: 'https://secretldn.com/bermondsey-beer-mile-guide',
            done: true
        },    
	{
            title: 'Visit Every Continent.',
            country: 'Antartica',
            url: 'https://en.wikipedia.org/wiki/Antarctica',
            done: false
        },
        {
            title: 'Dive the Great Barrier Reef.',
            country: 'Australia',
            url: 'https://en.wikipedia.org/wiki/Great_Barrier_Reef',
            done: false
        },
	{
            title: 'Pet a Quokka.',
            country: 'Australia',
            url: 'https://en.wikipedia.org/wiki/Quokka',
            done: false
        },  
	{
            title: 'Watch the Fighting Cholitas.',
            country: 'Bolivia',
            url: 'https://en.wikipedia.org/wiki/Fighting_Cholitas',
            done: false
        },
	{
            title: 'See the Wonders of the World.',
            country: 'Brazil, India & Mexico',
            url: 'https://en.wikipedia.org/wiki/New_7_Wonders_of_the_World',
            done: false
        },
        {
            title: 'Dive the Galápagos Islands.',
            country: 'Australia',
            url: 'https://en.wikipedia.org/wiki/Gal%C3%A1pagos_Islands',
            done: false
        },
	{
            title: 'Attend the Atherstone Ball Game.',
            country: 'England',
            url: 'https://en.wikipedia.org/wiki/Atherstone_Ball_Game',
            done: false
        },
	{
            title: 'Watch the Cooper\'s Hill Cheese-Rolling & Wake.',
            country: 'England',
            url: 'https://en.wikipedia.org/wiki/Cooper%27s_Hill_Cheese-Rolling_and_Wake',
            done: false
        },
        {
            title: 'Attend Oktoberfest.',
            country: 'Germany',
            url: 'https://en.wikipedia.org/wiki/Oktoberfest',
            done: false
        },    
        {
            title: 'Watch a Volcano Erupt.',
            country: 'Guatamala, Iceland, Italy & United States',
            url: 'https://en.wikipedia.org/wiki/Volc%C3%A1n_de_Fuego',
            done: false
        },
        {
            title: 'Dive in a Continental Rift.',
            country: 'Iceland',
            url: 'https://en.wikipedia.org/wiki/Silfra',
            done: false
        },
        {
            title: 'Hike the Fimmvörðuháls Trail.',
            country: 'Iceland',
            url: 'https://en.wikipedia.org/wiki/Fimmv%C3%B6r%C3%B0uh%C3%A1ls',
            done: false
        },
        {
            title: 'Experience the Aurora Borealis.',
            country: 'Iceland & Norway',
            url: 'https://en.wikipedia.org/wiki/Aurora',
            done: false
        },
        {
            title: 'Climb Mount Fuji.',
            country: 'Japan',
            url: 'https://en.wikipedia.org/wiki/Mount_Fuji',
            done: false
        },
	{
            title: 'Watch a Sumo Wrestling Match',
            country: 'Japan',
            url: 'https://en.wikipedia.org/wiki/Sumo',
            done: false
        },
        {
            title: 'Eat Kobe Beef.',
            country: 'Japan',
            url: 'https://en.wikipedia.org/wiki/Kobe_beef',
            done: false
        },
        {
            title: 'Walk the Shikoku Pilgrimage.',
            country: 'Japan',
            url: 'https://en.wikipedia.org/wiki/Shikoku_Pilgrimage',
            done: false
        },    
	{
            title: 'Attend a World Cup.',
            country: 'Morocco, Portugal & Spain',
            url: 'https://en.wikipedia.org/wiki/2030_FIFA_World_Cup',
            done: false
        },
        {
            title: 'Hike to Everest Base Camp.',
            country: 'Nepal',
            url: 'https://en.wikipedia.org/wiki/Everest_Base_Camp',
            done: false
        },
        {
            title: 'See the World\'s Largest Waves.',
            country: 'Portugal',
            url: 'https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal',
            done: false
        },    
        {
            title: 'Visit the Coldest Inhabited Place on Earth.',
            country: 'Russia',
            url: 'https://en.wikipedia.org/wiki/Oymyakon',
            done: false
        },   
        {
            title: 'Dive With Great White Sharks.',
            country: 'South Africa',
            url: 'https://en.wikipedia.org/wiki/Seal_Island,_South_Africa',
            done: false
        },
	{
            title: 'Attend El Clásico.',
            country: 'Spain',
            url: 'https://en.wikipedia.org/wiki/El_Cl%C3%A1sico',
            done: false
        },
        {
            title: 'Attend La Tomatina.',
            country: 'Spain',
            url: 'https://en.wikipedia.org/wiki/La_Tomatina',
            done: false
        },
	{
            title: 'Walk the Camino de Santiago.',
            country: 'Spain',
            url: 'https://en.wikipedia.org/wiki/Camino_de_Santiago',
            done: false
        },
	{
            title: 'Walk the Mürren to Gimmelwald Via Ferrata.',
            country: 'Switzerland',
            url: 'https://www.earthtrekkers.com/murren-via-ferrata-guide',
            done: false
        },
        {
            title: 'Climb Mount Kilimanjaro.',
            country: 'Tanzania',
            url: 'https://en.wikipedia.org/wiki/Mount_Kilimanjaro',
            done: false
        },
        {
            title: 'Visit the Zone.',
            country: 'Ukraine',
            url: 'https://en.wikipedia.org/wiki/Chernobyl_Exclusion_Zone',
            done: false
        },   
		{
            title: 'Attend Mardi Gras.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Mardi_Gras_in_New_Orleans',
            done: false
        },
		{
            title: 'Drive the Extraterrestrial Highway.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Nevada_State_Route_375',
            done: false
        },  
		{
            title: 'Drive the Loneliest Road.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/U.S._Route_50_in_Nevada',
            done: false
        },  
        {
            title: 'Hike With a Shelter Dog.',
            country: 'United States',
            url: 'https://kauaihumane.org/service/field-trips/',
            done: false
        },
        {
            title: 'Visit Cortlandt Alley.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Cortlandt_Alley',
            done: false
        },  
        {
            title: 'Visit Every State.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/U.S._state',
            done: false
        },
        {
            title: 'Visit Silent Hill.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Centralia,_Pennsylvania',
            done: false
        },
	{
            title: 'Watch Old Faithful Erupt.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Old_Faithful',
            done: false
        },
        {
            title: 'Explore the Hang Sơn Đoòng Cave.',
            country: 'Vietnam',
            url: 'https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng',
            done: false
        },    
        {
            title: 'Visit Victoria Falls.',
            country: 'Zambia & Zimbabwe',
            url: 'https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng',
            done: false
        }
    ]
});
