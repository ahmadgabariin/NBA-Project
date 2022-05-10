class Render {
    constructor() {
        this.name
    }

    loadTemplates () {
        this.loadInpuTemplate () // this = 
    }

    loadInpuTemplate () {
        const SOURCE = $(`#input-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`#container`).append(TEMPLATE())
    }

    loadPlayers (data) {
        const SOURCE = $(`#players-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`#container`).append(TEMPLATE({players : data}))

    }


   
}