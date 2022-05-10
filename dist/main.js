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
   
}