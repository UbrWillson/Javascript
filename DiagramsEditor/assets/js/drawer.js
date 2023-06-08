export class Drawer {
//Props:

context = null;                 // контекст графічної панелі canvas
colors = [                      // масив кольорів для зафарбовування діаграм
    'coral', 'lightgreen', 'lightblue', 'purple', 'orange', 'lightgrey', 'darkcyan', 'bisque', 'silver', 'lavender', 'navy'
    ];
    canvasWidth = 700;
    canvasHeight = 500;

    constructor() {

        console.log('Drawer object is working');
        this._initContext();
        this.initCanvas();
    }

    _initContext() {
        const canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
    }

    initCanvas() {
        const logo = document.getElementById('logo-image');
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(logo, 80, 30);

    }

    _buildAxios(g) {
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
  
    }

    buildRectangles(g, results, names) {
        let N = results.length;
        if (N === 0) {
            alert('без завантажених результатів діаграма не запуститься. Для завантаження натисніть завантажити данні!');
        } else {

           
           this._buildAxios(g);
            let w = (this.canvasWidth - 20) / N - 5;
            let k = Math.max.apply(null, results) / (this.canvasHeight - 20);
            g.font = '10pt Arial'
            // next
            for (let i = 0; i < N; i++) {
                let h = results[i] / k - 5;
                let x = i * (w + 5) + 10;
                let y = this.canvasHeight - 10 - h;
                // next (colors)
                g.fillstyle = this.colors[i];
                g.fillRect(x, y, w, h);
                g.fillText(names[i], x + 2, y - 5);
            }
        }
    }


    buildPies(g, results, names) {
        let N = results.length;
        if (N === 0) {
            alert('без завантажених результатів діаграма не запуститься. Для завантаження натисніть завантажити данні!');
        } else {
            console.log('побудова кола')
            let centerX = this.canvasWidth / 2;
            let centerY = this.canvasHeight / 2;
            g.clearRect(0,0,this.canvasWidth,this.canvasHeight);

            g.strokeStyle = this.colors[0];
            g.fillStyle = this.colors[5];
            g.lineWidth = 5;

            g.beginPath();
            g.arc(centerX, centerY, 150, 0, Math.PI);
            g.stroke();
            g.fill();
        }
    }

}