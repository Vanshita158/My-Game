class Form {
    constructor() {
        this.name = createInput("Name")
        this.class = createInput("Class")
        this.digits = createInput("No. of digits")
        this.rows = createInput("No. of rows")
        this.ques = createInput("No. of questions")
        this.time = createInput("Time in which no. should disappear")
        this.button = createButton('Play');
        this.reset = createButton('Reset')

    }
    hide() {
        this.name.hide()
        this.class.hide()
        this.digits.hide()
        this.rows.hide()
        this.time.hide()
        this.reset.hide()
        this.ques.hide()
        this.button.hide()
    }
    display() {
        this.name.position(displayWidth / 2, 0)
        this.class.position(displayWidth / 2 + 10, 0)
        this.digits.position(displayWidth / 2 + 20, 0)
        this.rows.position(displayWidth / 2 + 30, 0)
        this.time.position(displayWidth / 2 + 40, 0)
        this.reset.position(displayWidth / 2 + 60, 0)
        this.ques.position(displayWidth / 2 + 50, 0)
        this.button.position(displayWidth / 2 + 70, 0)

        this.button.mousePressed(() => {
            this.name.hide()
            name= this.name.value()
            time= this.time.value()
            rows= this.time.value()
            grad=this.time.value()

            digits=this.time.value()
            ques=this.time.value()
            this.class.hide()
            this.digits.hide()
            this.rows.hide()
            this.time.hide()
            this.reset.hide()
            this.ques.hide()
            this.button.hide()
        });

        this.reset.mousePressed(() => {

        })
    }
}
