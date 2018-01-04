var app = angular.module('TravelPlansApplication', []);

app.controller('TravelPlansController', function($scope) {

    $scope.locations = [
        {
            title: 'Hike the Inca Trail to Machu Picchu.',
            country: 'Peru',
            url: 'https://en.wikipedia.org/wiki/Inca_Trail_to_Machu_Picchu',
            done: false
        },
        {
            title: 'Walk the Great Wall.',
            country: 'China',
            url: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
            done: false
        },
        {
            title: 'Visit the Floating Mountains in Zhāngjiājiè.',
            country: 'China',
            url: 'https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park',
            done: false
        },
        {
            title: 'Dive the Great Barrier Reef.',
            country: 'Australia',
            url: 'https://en.wikipedia.org/wiki/Great_Barrier_Reef',
            done: false
        },
        {
            title: 'The Gibbon Experience.',
            country: 'Laos',
            url: 'https://www.gibbonexperience.org/',
            done: false
        },
        {
            title: 'Explore the Hang Sơn Đoòng Caves.',
            country: 'Vietnam',
            url: 'https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng',
            done: false
        },
        {
            title: 'Hike to Everest Base Camp.',
            country: 'Nepal / Tibet',
            url: 'https://en.wikipedia.org/wiki/Everest_Base_Camp',
            done: false
        },
	]
});
