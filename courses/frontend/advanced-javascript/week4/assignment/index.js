class Screenshot {
    constructor(id, url, image) {
        this.id = id;
        this.url = url;
        this.imageUrl = this.imageUrl;
        this.element = null;
    }
    render() {
        const div = this.element || document.createElement('div');
    }

    save() {}
    delete(){}
}

class App {
    constructor() {
        screenshots = [];

    }

    init() {

    }
    fetchScreenshots() {}
    addScreenshot() {}
    deleteScreenshot() {}
    render() {}
}

class Form {
    constructor() {
        this.element = element;
    }
    render() {}
    handleSubmit() {}
}

class Screenshotlist {
    constructor(screenshot) {
        screenshots = [];
        element
    }

    render() {}
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
  }

  toUserMessage() {
    return 'This is in fact validation error, please check the input';
  }
}

class ApiError extends Error {
  toUserMessage() {
    return 'This is in fact API error, please check with API developers';
  }
}