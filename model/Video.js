class Video {
  constructor(file, title) {
    this._file = file;
    this._title = title;
  }

  get file() {
    return this._file;
  }

  get title() {
    return this._title;
  }

  static createFromFile(file) {
    return new Video(file, file);
  }
}

export {Video as default}
