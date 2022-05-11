const express = require(`express`)
const { lstat } = require("fs")
const path = require(`path`)
const app = express()
const port = 3000
const urllib = require(`urllib`)

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.use(express.static(path.join(__dirname , `dist`)))
app.use(express.static(path.join(__dirname , `node_modules`)))

app.get(`/teams/:teamName` , function (request, response) {
    const teamName = request.params.teamName
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {

     if (err) {
        throw err; // you need to handle error
     }

    const leaguePlayers = JSON.parse(data).league.standard
    
    players = leaguePlayers.
    filter( player => player.teamId === teamToIDs[teamName] && player.isActive ).
    map(player =>  {
         return { firstName:player.firstName , lastName : player.lastName , jersey : player.jersey , pos : player.pos }
        } )

    response.send( players )
    });
    
} )

app.get(`/playerStats/:player` , function (request , response) {
    const player = request.params.player
    let playerName = player.split(` `)
    let playerFullName = {firstName : playerName[0] , lastName : playerName[1]}
    let apiURL = `https://nba-players.herokuapp.com/players-stats/${playerFullName.lastName}/${playerFullName.firstName}`

    urllib.request(apiURL, function (err , data , res) {
        response.send( JSON.parse(data) )
    })

    
})

app.listen(port , function () {
    console.log(`Running server on port ${port}`)
})