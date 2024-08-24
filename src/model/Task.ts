export class Task {
  constructor(
    private _id: number,
    private _title: string,
    private _text: string,
    private _isCompleted: boolean,
    private _isUser: number
  ) {}

  // Métodos Get
  public get id(): number {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get text(): string {
    return this._text;
  }

  public get isCompleted(): boolean {
    return this._isCompleted;
  }

  // Métodos Set
  public set title(newTitle: string) {
    this._title = newTitle;
  }

  public set text(newText: string) {
    this._text = newText;
  }

  public set isCompleted(isCompleted: boolean) {
    this.isCompleted = isCompleted;
  }
}
