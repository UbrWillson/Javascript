export class Drawer {
//Props:

context = null;                 // контекст графічної панелі canvas
colors = [                      // масив кольорів для зафарбовування діаграм
    'red','green','blue','purple','orange','grey','darkcyan','bisque','silver','lavander','navy'
    ];
    canvasWidth = 700;
    canvasHeight = 500;

    constructor() {

        console.log('Drawer object is working');
        this.initContext();
        this.initCanvas();
    }

    initContext() {
        const canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
    }

    initCanvas() {
        const logo = document.getElementById('logo-image');
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(logo, 80, 30);

    }

    buildAxios(g) {
        g.clearRect(0,0,this.canvasWidth,this.canvasHeight);
        g.fillstyle = 'gray';
        g.lineWidth = 1;
        // next
        g.beginPath();
        g.moveTo(10,10);
        g.lineTo(10, this.canvasHeight - 10);
        g.lineTo(this.canvasWidth - 10, this.canvasHeight - 10)
        g.stroke();
        // next

        g.fillstyle = this.colors[1];
        g.fillRect(50, 50, 600, 300);
        
    }


}