var app = angular.module('BucketListApplication', []);

app.controller('BucketListController', function($scope) {

    $scope.locations = [
        {
            title: 'Springbrook National Park',
            place: 'Queensland',
            country: 'Australia',
            url: 'https://interfacelift.com/wallpaper/details/3973/natural_arch.html',
            done: false
        },
        {
            title: 'The Great Wall',
            place: 'Mutianyu',
            country: 'China',
            url: 'https://interfacelift.com/wallpaper/details/375/a_pretty_good_wall.html',
            done: false
        },
        {
            title: 'Baishi Mountain',
            place: 'Taiyuan',
            country: 'China',
            url: 'https://interfacelift.com/wallpaper/details/4029/sunrise_of_baishi_mountain.html',
            done: false
        },
        {
            title: 'Seljalandsfoss',
            country: 'Iceland',
            url: 'https://interfacelift.com/wallpaper/details/3958/seljalandsfoss%2C_iceland.html',
            done: false
        },
        {
            title: 'Skógafoss',
            country: 'Iceland',
            url: 'https://interfacelift.com/wallpaper/details/3947/skogafoss%2C_iceland.html',
            done: false
        },
        {
            title: 'Geirangerfjord',
            place: 'Geiranger',
            country: 'Norway',
            url: 'https://interfacelift.com/wallpaper/details/1040/fjord_of_art.html',
            done: false
        },
        {
            title: 'Preikestolen',
            place: 'Lysefjorden',
            country: 'Norway',
            url: 'https://interfacelift.com/wallpaper/details/3431/preikestolen%2C_norway.html',
            done: false
        },
        {
            title: 'Lauterbrunnen Valley',
            country: 'Switzerland',
            url: 'https://interfacelift.com/wallpaper/details/4088/the_birthplace_of_rivendell.html',
            done: false
        },
        {
            title: 'Gornergrad',
            place: 'Zermatt',
            country: 'Switzerland',
            url: 'https://interfacelift.com/wallpaper/details/4081/lagoon_nebula.html',
            done: false
        },
        {
            title: 'Vesper Peak',
            place: 'Washington',
            country: 'United States',
            url: 'https://interfacelift.com/wallpaper/details/3965/sunset_in_the_cascades.html',
            done: false
        },
        {
            title: 'Kowloon Peak',
            place: 'Hong Kong',
            country: 'China',
            url: 'https://interfacelift.com/wallpaper/details/4047/hong_kong_city_after_raining.html',
            done: true
        },  
        {
            title: 'Antelope Canyon',
            place: 'Arizona',
            country: 'United States',
            url: 'https://interfacelift.com/wallpaper/details/448/antelope_canyon.html',
            done: true
        }
	]
});
