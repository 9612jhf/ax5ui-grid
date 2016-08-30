<a name="ax5grid"></a>

## ax5grid
**Kind**: global class  
**Author:** tom@axisj.com  

* [ax5grid](#ax5grid)
    * [.setConfig(_config)](#ax5grid.setConfig) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.align()](#ax5grid.align) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.keyDown(keyName, data)](#ax5grid.keyDown) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.copySelect()](#ax5grid.copySelect) ⇒ <code>Boolean</code>
    * [.setData(_data)](#ax5grid.setData) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.setHeight(_height)](#ax5grid.setHeight) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.align()](#ax5grid.align) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.addRow(_row, [_dindex])](#ax5grid.addRow) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.removeRow([_dindex])](#ax5grid.removeRow) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.updateRow(_row, _dindex)](#ax5grid.updateRow) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.addColumn(_column, [_cindex])](#ax5grid.addColumn) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.removeCloumn([_cindex])](#ax5grid.removeCloumn) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.updateColumn(_column, _cindex)](#ax5grid.updateColumn) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.setColumnWidth(_width, _cindex)](#ax5grid.setColumnWidth)
    * [.getColumnSort()](#ax5grid.getColumnSort) ⇒ <code>Object</code>
    * [.setColumnSort(_sortInfo)](#ax5grid.setColumnSort) ⇒ <code>[ax5grid](#ax5grid)</code>
    * [.select(_selectObject)](#ax5grid.select) ⇒ <code>[ax5grid](#ax5grid)</code>

<a name="ax5grid.setConfig"></a>

### ax5grid.setConfig(_config) ⇒ <code>[ax5grid](#ax5grid)</code>
Preferences of grid UI

**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| _config | <code>Object</code> |  | 클래스 속성값 |
| _config.target | <code>Element</code> |  |  |
| [_config.frozenColumnIndex] | <code>Number</code> | <code>0</code> |  |
| [_config.frozenRowIndex] | <code>Number</code> | <code>0</code> |  |
| [_config.showLineNumber] | <code>Boolean</code> | <code>false</code> |  |
| [_config.showRowSelector] | <code>Boolean</code> | <code>false</code> |  |
| [_config.multipleSelect] | <code>Boolean</code> | <code>false</code> |  |
| [_config.columnMinWidth] | <code>Number</code> | <code>100</code> |  |
| [_config.lineNumberColumnWidth] | <code>Number</code> | <code>30</code> |  |
| [_config.rowSelectorColumnWidth] | <code>Number</code> | <code>25</code> |  |
| [_config.sortable] | <code>Boolean</code> | <code>false</code> |  |
| [_config.multiSort] | <code>Boolean</code> | <code>false</code> |  |
| [_config.remoteSort] | <code>Boolean</code> | <code>false</code> |  |
| [_config.header] | <code>Object</code> |  |  |
| [_config.header.align] | <code>String</code> |  |  |
| [_config.header.columnHeight] | <code>Number</code> | <code>25</code> |  |
| [_config.header.columnPadding] | <code>Number</code> | <code>3</code> |  |
| [_config.header.columnBorderWidth] | <code>Number</code> | <code>1</code> |  |
| [_config.body] | <code>Object</code> |  |  |
| [_config.body.align] | <code>String</code> |  |  |
| [_config.body.columnHeight] | <code>Number</code> | <code>25</code> |  |
| [_config.body.columnPadding] | <code>Number</code> | <code>3</code> |  |
| [_config.body.columnBorderWidth] | <code>Number</code> | <code>1</code> |  |
| [_config.body.grouping] | <code>Object</code> |  |  |
| [_config.body.grouping.by] | <code>Array</code> |  | list grouping keys |
| [_config.body.grouping.columns] | <code>Array</code> |  | list grouping columns |
| [_config.page] | <code>Object</code> |  |  |
| [_config.page.height] | <code>Number</code> | <code>25</code> |  |
| [_config.page.display] | <code>Boolean</code> | <code>true</code> |  |
| [_config.page.navigationItemCount] | <code>Number</code> | <code>5</code> |  |
| [_config.scroller] | <code>Object</code> |  |  |
| [_config.scroller.size] | <code>Number</code> | <code>15</code> |  |
| [_config.scroller.barMinSize] | <code>Number</code> | <code>15</code> |  |
| [_config.columnKeys] | <code>Object</code> |  |  |
| [_config.columnKeys.selected] | <code>String</code> | <code>&quot;_SELECTED&quot;</code> |  |
| _config.columns | <code>Object</code> |  |  |

**Example**  
```
```
<a name="ax5grid.align"></a>

### ax5grid.align() ⇒ <code>[ax5grid](#ax5grid)</code>
align grid size

**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  
<a name="ax5grid.keyDown"></a>

### ax5grid.keyDown(keyName, data) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type |
| --- | --- |
| keyName | <code>String</code> | 
| data | <code>Event</code> &#124; <code>Object</code> | 

<a name="ax5grid.copySelect"></a>

### ax5grid.copySelect() ⇒ <code>Boolean</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  
**Returns**: <code>Boolean</code> - copysuccess  
<a name="ax5grid.setData"></a>

### ax5grid.setData(_data) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type |
| --- | --- |
| _data | <code>Array</code> | 

<a name="ax5grid.setHeight"></a>

### ax5grid.setHeight(_height) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type |
| --- | --- |
| _height | <code>Number</code> | 

<a name="ax5grid.align"></a>

### ax5grid.align() ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  
<a name="ax5grid.addRow"></a>

### ax5grid.addRow(_row, [_dindex]) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type | Default |
| --- | --- | --- |
| _row | <code>Object</code> |  | 
| [_dindex] | <code>Number</code> &#124; <code>String</code> | <code>last</code> | 

<a name="ax5grid.removeRow"></a>

### ax5grid.removeRow([_dindex]) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [_dindex] | <code>Number</code> &#124; <code>String</code> | <code>last</code> | 

<a name="ax5grid.updateRow"></a>

### ax5grid.updateRow(_row, _dindex) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type |
| --- | --- |
| _row | <code>Object</code> | 
| _dindex | <code>Number</code> | 

<a name="ax5grid.addColumn"></a>

### ax5grid.addColumn(_column, [_cindex]) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type | Default |
| --- | --- | --- |
| _column | <code>Object</code> |  | 
| [_cindex] | <code>Number</code> &#124; <code>String</code> | <code>last</code> | 

<a name="ax5grid.removeCloumn"></a>

### ax5grid.removeCloumn([_cindex]) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [_cindex] | <code>Number</code> &#124; <code>String</code> | <code>last</code> | 

<a name="ax5grid.updateColumn"></a>

### ax5grid.updateColumn(_column, _cindex) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type |
| --- | --- |
| _column | <code>Object</code> | 
| _cindex | <code>Number</code> | 

<a name="ax5grid.setColumnWidth"></a>

### ax5grid.setColumnWidth(_width, _cindex)
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param |
| --- |
| _width | 
| _cindex | 

<a name="ax5grid.getColumnSort"></a>

### ax5grid.getColumnSort() ⇒ <code>Object</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  
**Returns**: <code>Object</code> - sortInfo  
<a name="ax5grid.setColumnSort"></a>

### ax5grid.setColumnSort(_sortInfo) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type | Description |
| --- | --- | --- |
| _sortInfo | <code>Object</code> |  |
| _sortInfo.key | <code>Object</code> |  |
| _sortInfo.key.seq | <code>Number</code> | seq of sortOrder |
| _sortInfo.key.orderBy | <code>String</code> | "desc"|"asc" |

**Example**  
```js
ax5grid.setColumnSort({a:{seq:0, orderBy:"desc"}, b:{seq:1, orderBy:"asc"}});
```
<a name="ax5grid.select"></a>

### ax5grid.select(_selectObject) ⇒ <code>[ax5grid](#ax5grid)</code>
**Kind**: static method of <code>[ax5grid](#ax5grid)</code>  

| Param | Type | Description |
| --- | --- | --- |
| _selectObject | <code>Number</code> &#124; <code>Object</code> |  |
| _selectObject.index | <code>Number</code> | index of row |
| _selectObject.rowIndex | <code>Number</code> | rowIndex of columns |
| _selectObject.conIndex | <code>Number</code> | colIndex of columns |

