class Screenshot {
    constructor(id, url, image) {
        this.id = id;
        this.url = url;
        this.image = image;
        this.element = null;
    }
    render() {
        const div = this.element || document.createElement('div');
    }

    save() {}
    delete(){}
}

class App {}

class Form {}

class Screenshotlist {
    constructor(screenshot) {
        this.screenshot = screenshot;
    }
}