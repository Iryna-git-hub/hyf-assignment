const CRUDCRUD_URL = "https://crudcrud.com/api/" + CRUDCRUD_ID + "/screenshots";

//  Error classes

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }

  toUserMessage() {
    return "Invalid input: " + this.message;
  }
}

class ApiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ApiError";
  }

  toUserMessage() {
    return "API error: " + this.message;
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }

  toUserMessage() {
    return "Network problem: Please check your internet connection.";
  }
}

//  Screenshot class

class Screenshot {
  constructor(url, imageUrl, id) {
    this.url = url;
    this.imageUrl = imageUrl;
    this.id = id;
  }

  render(onDelete) {
    const card = document.createElement("div");
    card.className = "screenshot-card";

    const urlText = document.createElement("p");
    urlText.textContent = this.url;

    const img = document.createElement("img");
    img.src = this.imageUrl;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      onDelete(this.id);
    });

    card.appendChild(urlText);
    card.appendChild(img);
    card.appendChild(deleteBtn);

    return card;
  }

  async deleteFromApi() {
    try {
      const response = await fetch(CRUDCRUD_URL + "/" + this.id, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new ApiError("Could not delete screenshot.");
      }
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new NetworkError("Could not connect to server.");
    }
  }
}

//  Form class
class Form {
  constructor(onSubmit) {
    this.onSubmit = onSubmit;
  }

  render() {
    const section = document.createElement("div");
    section.className = "form-section";

    const title = document.createElement("h1");
    title.textContent = "Website Screenshot App";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter a website URL (e.g. https://example.com)";

    const button = document.createElement("button");
    button.textContent = "Take Screenshot";

    const errorP = document.createElement("p");
    errorP.className = "error-message";

    const loadingP = document.createElement("p");
    loadingP.className = "loading";

    button.addEventListener("click", async () => {
      errorP.textContent = "";
      loadingP.textContent = "";

      try {
        loadingP.textContent = "Loading screenshot...";
        button.disabled = true;

        await this.onSubmit(input.value.trim());

        input.value = "";
        loadingP.textContent = "";
      } catch (error) {
        loadingP.textContent = "";

        if (error instanceof ValidationError) {
          errorP.textContent = error.toUserMessage();
        } else if (error instanceof ApiError) {
          errorP.textContent = error.toUserMessage();
        } else if (error instanceof NetworkError) {
          errorP.textContent = error.toUserMessage();
        } else {
          errorP.textContent = "Something unexpected went wrong.";
        }
      } finally {
        button.disabled = false;
      }
    });

    section.appendChild(title);
    section.appendChild(input);
    section.appendChild(button);
    section.appendChild(errorP);
    section.appendChild(loadingP);

    return section;
  }
}

//  Screenshot list class

class ScreenshotList {
  constructor(onDelete) {
    this.items = [];
    this.onDelete = onDelete;
    this.element = null;
  }

  setItems(screenshots) {
    this.items = screenshots;
    this.update();
  }

  update() {
    this.element.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = "Saved Screenshots";
    this.element.appendChild(heading);

    if (this.items.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.textContent = "No saved screenshots yet.";
      this.element.appendChild(emptyMessage);
      return;
    }

    this.items.forEach((screenshot) => {
      const card = screenshot.render(this.onDelete);
      this.element.appendChild(card);
    });
  }

  render() {
    this.element = document.createElement("div");
    return this.element;
  }
}

//  App class
class App {
  constructor(rootElement) {
    this.root = rootElement;
    this.screenshots = [];
    this.list = null;
  }

  validateUrl(url) {
    if (!url) {
      throw new ValidationError("URL cannot be empty.");
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      throw new ValidationError("URL must start with http:// or https://");
    }
  }

  async fetchScreenshot(url) {
    try {
      const apiUrl =
        "https://website-screenshot6.p.rapidapi.com/screenshot?url=" +
        encodeURIComponent(url) +
        "&width=1920&height=1080";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": RAPID_API_KEY,
          "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new ApiError(
          "Screenshot API returned an error. Please check the URL.",
        );
      }

      const result = await response.text();

      if (!result) {
        throw new ApiError("Screenshot API did not return an image.");
      }

      try {
        const data = JSON.parse(result);

        return data.screenshotUrl || data.imageUrl || data.url || result;
      } catch (e) {
        return result;
      }
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new NetworkError("Could not reach the screenshot API.");
    }
  }

  async saveScreenshot(url, imageUrl) {
    try {
      const response = await fetch(CRUDCRUD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url, imageUrl: imageUrl }),
      });

      if (!response.ok) {
        throw new ApiError("Could not save to CrudCrud.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new NetworkError("Could not connect to CrudCrud.");
    }
  }

  async loadScreenshots() {
    try {
      const response = await fetch(CRUDCRUD_URL);

      if (!response.ok) {
        throw new ApiError("Could not load saved screenshots.");
      }

      const data = await response.json();

      this.screenshots = data.map(
        (item) => new Screenshot(item.url, item.imageUrl, item._id),
      );

      this.list.setItems(this.screenshots);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new NetworkError("Could not connect to CrudCrud.");
    }
  }

  async handleSubmit(url) {
    this.validateUrl(url);
    const imageUrl = await this.fetchScreenshot(url);
    await this.saveScreenshot(url, imageUrl);
    await this.loadScreenshots();
  }

  async handleDelete(id) {
    try {
      const screenshot = this.screenshots.find((s) => s.id === id);

      if (screenshot) {
        await screenshot.deleteFromApi();
      }

      await this.loadScreenshots();
    } catch (error) {
      if (error instanceof NetworkError) {
        alert(error.toUserMessage());
      } else if (error instanceof ApiError) {
        alert(error.toUserMessage());
      } else {
        alert("Could not delete. Try again.");
      }
    }
  }

  async init() {
    const container = document.createElement("div");
    container.className = "app";

    const form = new Form(this.handleSubmit.bind(this));
    container.appendChild(form.render());

    this.list = new ScreenshotList(this.handleDelete.bind(this));
    container.appendChild(this.list.render());

    this.root.appendChild(container);

    try {
      await this.loadScreenshots();
    } catch (error) {
      if (error instanceof NetworkError) {
        console.log(error.toUserMessage());
      } else if (error instanceof ApiError) {
        console.log(error.toUserMessage());
      } else {
        console.log("Could not load screenshots.");
      }
    }
  }
}

const app = new App(document.getElementById("app"));
app.init();
