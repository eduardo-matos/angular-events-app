eventsApp.controller('EventController', function EventController ($scope) {
    
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2014',
        time: '10:30 am',
        imageUrl: '/img/angularjs-logo.png',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        sessions: [{
            name: 'Directives masterclass',
            creatorName: 'Bob Smith',
            duration: '1 hour',
            level: 'Advanced',
            abstract: 'Lorem ipsum dolor sit amet.',
            upVoteCount: 0
        },{
            name: 'Scopes for fun',
            creatorName: 'John Doe',
            duration: '30 min',
            level: 'Beginner',
            abstract: 'Lorem ipsum.',
            upVoteCount: 0
        },{
            name: 'Well behaved controllers Beginner',
            creatorName: 'Jane Doe',
            duration: '20 min',
            level: 'Intermediate',
            abstract: 'Dolor sit amet.',
            upVoteCount: 0
        }]
    };

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };
});
