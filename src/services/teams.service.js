var teamsService = function () {

    this.getTeams = function () {
        return teams;
    };

    var teams = [
        {
            name: 'India',
            players: [
                'Viraat Kohli', 'Sachin Tendulkar','Virendra Sehwag','Gautam Gambhir'
            ]
        },
        {
            name: 'South Africa',
            players: ['Quinter De Kock','Hashim Amla','A B Devilliars','Dale Styen']
        },
        {
            name: 'Pakistan', players: ['Shahid Afridi','Mohd Hafeez','Mohd Nazeer','Irfan Khan']
        },
        {
            name: 'Sri Lanka', players: ['jaysurya','Attapuattu','Angelo Mathews','Kaluwitrana']
        },
        {
            name: 'Australia', players: ['Ricky Ponting','Michal Clarke','Glen McGrath','Jaon Gillespee']
        }
    ];
};