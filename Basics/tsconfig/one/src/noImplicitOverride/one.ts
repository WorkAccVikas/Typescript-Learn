// Before

class Visibility {
  public visible = true;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}

class MockVisibility extends Visibility {
  show() {
    console.log('Show');
  }

  hide() {
    console.log('Hide');
  }
}

const x1 = new Visibility();
x1.show();
x1.hide();

const x2 = new MockVisibility();
x2.show();
x2.hide();

export {};
