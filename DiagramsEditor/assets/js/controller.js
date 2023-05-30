export class Controller {
    //Props:
    names = []                      // масив імен кандидатів
    results = []                    // масив результатів кожного кандидату
    context = null;                 // контекст графічної панелі canvas
    source = 'server/data.json';    // шлях до розташування файлу із даними
    colors = [                      // масив кольорів для зафарбовування діаграм
    'red','green','blue','purple','orange','grey','darkcyan','bisque','silver','lavander','navy'
    ];

    // Конструктор об'єктів :
    constructor() {
        console.log('Controller is working');
    }
    // Метод завантаження даних із JSON-ФАЙЛУ
    loadData() {
        // ...
    }
};


    