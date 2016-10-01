import QueryTable from "./query-table";
import ValueColumn from "./value-column";
import NumberColumn from "./number-column";
import QueryColumnCondition from "./query-column-condition";


export default class StringColumn<Table extends QueryTable<any>> extends ValueColumn<Table, string> {

    constructor(table: Table, params, modifiers?) {
        super(table, params, modifiers);
    }

    lower(): this {
        return new (<any>this.constructor)(this._table, this._params, this._modifiers.concat('lower'));
    }

    upper(): this {
        return new (<any>this.constructor)(this._table, this._params, this._modifiers.concat('upper'));
    }

    count(): NumberColumn<Table> {
        return new NumberColumn(this._table, this._params, this._modifiers.concat('count'));
    }

    contains(value: string) {
        return this.like('%' + value + '%');
    }

    startsWith(value: string) {
        return this.like(value + '%');
    }

    endsWith(value: string) {
        return this.like('%' + value);
    }

    like(value: string) {
        return new QueryColumnCondition<Table, string>(this, 'like', value);
    }
}
