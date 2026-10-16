class Visibility {
  public visible = true;

  setVisible(val: boolean) {
    this.visible = val;
  }
}

class MockVisibility extends Visibility {
  override show() {
    console.log('Show');
  }
  override hide() {
    console.log('Hide');
  }

  setVisible(val: boolean): void {
    console.log('set Visible');
  }
}

const x1 = new Visibility();
x1.show();
x1.hide();

const x2 = new MockVisibility();
x2.show();
x2.hide();

export {};
