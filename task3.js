var app = angular.module('weatherApp', []);

app.controller('WeatherController', function($scope, $http) {
    $scope.city = '';
    $scope.weatherData = null;
    $scope.errorMessage = '';

    $scope.getWeather = function() {
        var apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        $http.get(apiUrl, {
            params: {
                q: $scope.city,
                appid: apiKey,
                units: 'metric' 
            }
        })
        .then(function(response) {
            $scope.weatherData = response.data;
            $scope.errorMessage = '';
        })
        .catch(function(error) {
            $scope.weatherData = null;
            $scope.errorMessage = 'Error fetching weather data. Please try again.';
        });
    };
});
