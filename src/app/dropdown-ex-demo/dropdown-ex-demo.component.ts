import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DropdownExComponent } from '../../../projects/board-components-library/src/lib/dropdown-ex/dropdown-ex.component';

@Component({
  selector: 'app-dropdown-ex-demo',
  templateUrl: './dropdown-ex-demo.component.html',
  styleUrls: ['./dropdown-ex-demo.component.css']
})
export class DropdownExDemoComponent implements AfterViewInit {
  @ViewChildren(DropdownExComponent) checkSelfList: QueryList<DropdownExComponent>;
  @ViewChild('q1') q1: ElementRef;
  disabled = false;
  curSelectItem: { name: string, age: number };
  curSelectCustomItem: { name: string, age: number };
  curSelectItems: Array<{ name: string, age: number }>;
  dropdownItemSimple: Array<{ name: string, age: number }> = [
    {name: 'hello 222', age: 1},
    {name: 'hello world', age: 2},
  ];
  dropdownItem: Array<{ name: string, age: number }> = [
    {name: 'hello 222', age: 1},
    {name: 'hello world', age: 2},
  ];
  dropdownItemStr = ['hello', 'world'];
  curSelectItemStr = '';

  constructor() {
    this.curSelectItems = Array<{ name: string, age: number }>();
  }

  ngAfterViewInit(): void {
    console.log(this.checkSelfList.length);
  }

  dropdownDisabledFn() {
    return this.dropdownDisabled.bind(this);
  }

  dropdownDisabled(item: { name: string, age: number }): boolean {
    return item.name === 'hello';
  }

  setActiveItem(item: { name: string, age: number }) {
    this.curSelectItem = item;
  }

  setActiveItemStr(item: string) {
    this.curSelectItemStr = item;
  }

  setActiveItems(items: Array<{ name: string, age: number }>) {
    this.curSelectItems = items;
  }

  setActiveCustomItem(item: { name: string, age: number }) {
    this.curSelectCustomItem = item;
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  checkValue() {
    this.checkSelfList.forEach(item => item.checkSelf());
  }
}
