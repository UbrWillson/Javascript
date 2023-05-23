$(() => {
    // or u can write $(() => {})
    // 1
    console.log('main scenery of gallery 1 is working')
    const controller = new Controller();


    // tests
    controller.activateNav();
    controller.activateBack();
    controller.activateMini();
    controller.activateRotate();
});