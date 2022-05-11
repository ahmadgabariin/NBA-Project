const render =new Render()
render.loadTemplates()

const getPlayers = function (data) {
    let playersArray = data
    console.log(playersArray)
    render.loadPlayers(playersArray)
}

$(`#template-container`).on(`click` , `button` , function () {
    let teamName  = $(`#template-container`).find(`input`).first().val()
    $.get(`/teams/${teamName}`,getPlayers)
})

const imageClick = function (element) {
   let playerName = $(element).closest(`.player`).find(`span`).first().text()
   $.get(`/playerStats/${playerName}`, function (response) {
       let p = $(`<p>${response.name}</p>`)
       p.addClass(`player-stats`)
       let imageContainer =$(element).closest(`.image-container`)
       imageContainer.find(`p`).remove()
       imageContainer.append(p)
   })
}