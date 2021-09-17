export default class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.items = items;
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  bindTriggers({selector, counter, item}) {

      selector.querySelector('.plus').addEventListener('click', () => {
      if (counter !== item.length - 2) {
        item[counter].style.display = 'flex'
        counter++
      } else { //если перебрали со счетчиком скрываем кнопку для добавления
        item[counter].style.display = 'flex'
        item[item.length - 1].remove()
      }
    })
  }

  hideItems({item}) {
    item.forEach((item, i, arr) => {
      if (i !== arr.length - 1) { //номер по порядку не является последним элементом в коллекции
        item.style.display = 'none';
      }
    })

    item.forEach((item, i, arr) => {
      if (i !== arr.length - 1) { //номер по порядку не является последним элементом в коллекции
        item.style.display = 'none';
      }
    })
  }



  init() {
    this.hideItems({
      item: this.oldItems
    })

    this.hideItems({
      item: this.newItems
    })

    this.bindTriggers({
      selector: this.oldOfficer,
      counter: this.oldCounter,
      item: this.oldItems,
    })

    this.bindTriggers({
      selector: this.newOfficer,
      counter: this.newCounter,
      item: this.newItems,
    })

  }
}