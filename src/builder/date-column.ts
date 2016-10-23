import QueryTable from "./query-table";
import ComparableColumn from "./comparable-column";
import NumberColumn from "./number-column";


export default class DateColumn<Table extends QueryTable<any>> extends ComparableColumn<Table, Date> {

    constructor(table: Table, params, modifiers?) {
        super(table, params, modifiers);
    }

    count(): NumberColumn<Table> {
        return new NumberColumn(this._table, this._params, this._modifiers.concat({ name: 'count' }));
    }

}
