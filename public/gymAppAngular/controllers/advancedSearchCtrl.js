angular.module('views.advancedSearch', [])
    .controller('advancedSearchCtrl', ['$scope', 'getGyms','$state', function ($scope, getGyms,$state) {

        $scope.searchGym = function(){
            var lesson =  $scope.test;
           // var product =  $scope.comment;


            if(($scope.name == null) && ($scope.city != null) && (lesson == null)){
                $scope.gyms = getGyms.getGymsByCity($scope.city).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }

            else if(($scope.name) && ($scope.city) && (lesson == null)){
                $scope.gyms = getGyms.getGyms($scope.name, $scope.city).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }

            else if(($scope.name !=null) && ($scope.city==null) && (lesson == null)){

                $scope.gyms = getGyms.getGymsByName($scope.name).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }

            else if((($scope.name==null) && ($scope.city==null) && (lesson != null))){
                $scope.gyms = getGyms.getGymsByLesson(lesson).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }






        }






        $scope.rssfeed = function(){

            console.log("rss feed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            var feedurl="http://www.ynet.co.il/Integration/StoryRss1854.xml"
            var feedlimit=5
            var rssoutput="Latest Slashdot News:</b><br /><ul>"


            var feedpointer=new google.feeds.Feed(feedurl) //Google Feed API method
            feedpointer.setNumEntries(feedlimit) //Google Feed API method
            feedpointer.load(displayfeed) //Google Feed API method

            var newsFeed = [];
            function displayfeed(result){
                if (!result.error){
                    var thefeeds=result.feed.entries
                    for (var i=0; i<thefeeds.length; i++){

                        newsFeed.push({
                            'title': thefeeds[i].title,
                            'link': thefeeds[i].link
                        });

                    }

                    $scope.newsFeed = newsFeed;

                }
                else
                    alert("Error fetching feeds!")
            }
        }
    }]);
