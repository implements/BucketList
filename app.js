var app = angular.module('BucketListApplication', []);

app.controller('BucketListController', function($scope) {

    $scope.locations = [
        {
            title: 'Springbrook National Park',
            place: 'Queensland',
            country: 'Australia',
            url: 'https://interfacelift.com/wallpaper/details/3973/natural_arch.html'
        },
        {
            title: 'Kowloon Peak',
            place: 'Hong Kong',
            country: 'China',
            url: 'https://interfacelift.com/wallpaper/details/4047/hong_kong_city_after_raining.html'
        },
        {
            title: 'The Great Wall',
            place: 'Mutianyu',
            country: 'China',
            url: 'https://interfacelift.com/wallpaper/details/375/a_pretty_good_wall.html'
        },
        {
            title: 'Baishi Mountain',
            place: 'Taiyuan',
            country: 'China',
            url: 'https://interfacelift.com/wallpaper/details/4029/sunrise_of_baishi_mountain.html'
        },
        {
            title: 'Seljalandsfoss',
            country: 'Iceland',
            url: 'https://interfacelift.com/wallpaper/details/3958/seljalandsfoss%2C_iceland.html'
        },
        {
            title: 'Skógafoss',
            country: 'Iceland',
            url: 'https://interfacelift.com/wallpaper/details/3947/skogafoss%2C_iceland.html'
        },
        {
            title: 'Geirangerfjord',
            place: 'Geiranger',
            country: 'Norway',
            url: 'https://interfacelift.com/wallpaper/details/1040/fjord_of_art.html'
        },
        {
            title: 'Preikestolen',
            place: 'Lysefjorden',
            country: 'Norway',
            url: 'https://interfacelift.com/wallpaper/details/3431/preikestolen%2C_norway.html'
        },
        {
            title: 'Lauterbrunnen Valley',
            country: 'Switzerland',
            url: 'https://interfacelift.com/wallpaper/details/4088/the_birthplace_of_rivendell.html'
        },
        {
            title: 'Gornergrad',
            place: 'Zermatt',
            country: 'Switzerland',
            url: 'https://interfacelift.com/wallpaper/details/4081/lagoon_nebula.html'
        },
        {
            title: 'Vesper Peak',
            place: 'Washington',
            country: 'United States',
            url: 'https://interfacelift.com/wallpaper/details/3965/sunset_in_the_cascades.html'
        }
	]
});