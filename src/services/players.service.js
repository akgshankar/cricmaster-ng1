var playersService = function () {

    this.getPlayers = function () {
        return players;
    };

    this.addPlayer = function (newplayer) {
        var topID = players.length + 1;
        newplayer.id = topID;
        players.push(newplayer);
    };

    this.deletePlayer = function (player) {
        let indx = players.indexOf(player);
        if (indx != -1) {
            players.splice(indx, 1);
        }
    };

    var players = [
        { id: 1, name: 'Sachin Ramesh Tendulkar', nickname: 'Master', email: 'isachin@gmail.com', team: 'India' },
        { id: 2, name: 'Viraat Kohli', nickname: 'Kohli', email: 'kohli@gmail.com', team: 'India' },
        { id: 3, name: 'Harbhajan', nickname: 'BHajji', email: 'bhajji@gmail.com', team: 'India' },
        { id: 4, name: 'Bhuvneshwar Kumar', nickname: 'Bhuvi', email: 'bhuvi@gmail.com', team: 'India' },
        { id: 5, name: 'Inzemam ul Haq', nickname: 'Aloo', email: 'inzm@gmail.com', team: 'Pakistaan' }
    ];
};