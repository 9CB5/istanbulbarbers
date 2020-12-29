$(document).ready(function(){
    
    var userFeed = new Instafeed({
        get: 'user',
        userId: '10446225511',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '10446225511.1677ed0.6930dc6ee3264d98a11808f46df17390',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',

    });
    
    
    userFeed.run();
    
});