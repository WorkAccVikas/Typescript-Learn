// Before

class Visibility {
  public visible = true;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }
}

class MockVisibility extends Visibility {
  show() {
    console.log('Show');
  }

  override hide() {
    console.log('Hide');
  }

  message() {
    return 'hello';
  }

  override delete(): void {}
}

const x1 = new Visibility();
x1.show();
x1.hide();

const x2 = new MockVisibility();
x2.show();
x2.hide();

export {};
