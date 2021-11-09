class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => {
      return a - b;
    });

    this.length++;

    return this.items;
  }

  get(pos) {
    if (pos <= this.length - 1) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) {
      let sortedArray = this.items.sort((a, b) => {
        if (a > b) {
          return -1;
        } else {
          return 1;
        }
      });
      return sortedArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      let sortedArray = this.items.sort((a, b) => {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }
      });
      return sortedArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
