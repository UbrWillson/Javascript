import { Drawer } from "./drawer.js";

export class Controller {
    //Props:
    names = []                      // масив імен кандидатів
    results = []                    // масив результатів кожного кандидату
    source = 'server/data.json';    // шлях до розташування файлу із даними
    drawer = new Drawer();          // example of drawer class object

    // Конструктор об'єктів :
    constructor() {
        console.log('Controller is working');
    }
    // Метод завантаження даних із JSON-ФАЙЛУ
    loadData() {
        $.getJSON(this.source, (json) => {
            console.log(json.results);
            let out = '';
            let name = '';
            let result = 0;

            for(let item of json.results){
                name = item.name;
                result = item.result;
                this.names.push(name);
                this.results.push(result)
                // next
                out += `
                    <tr>
                        <td>${name}</td>
                        <td>${result}</td>
                    </tr>
                `;
            }
            // ->
        $('tbody').html(out);
        console.log(this.names);
        console.log(this.results)
        });
        
    }


    //Method of clearing data:
    resetData() {
        $('tbody').html('');
        this.names.length = 0;
        this.results.length = 0;
        this.drawer.initCanvas();
    }


    activateLoadButton() {
        $('#load-btn').click(() => {

            console.log('load btn is working')
            this.loadData();
            console.log("load data is working")
        });
    }


    activateResetButton() {
        $('#reset-btn').click(() => {

            console.log('reset btn is working')
            this.resetData();
            console.log("reset data is working")
        });
    }

    activateRectButton() {
        $('#rect-btn').click(() => {
            console.log('rect btn is working');
            let context = this.drawer.context;
            this.drawer.buildRectangles(context, this.results, this.names);
        });
    }

    activateCircleButton() {
        $('#circle-btn').click(() => {
            console.log('CircleButton is working');
            let context = this.drawer.context;
            this.drawer.buildPies(context, this.results, this.names)
        })
    }



};


    