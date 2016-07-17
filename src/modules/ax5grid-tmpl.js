
// ax5.ui.grid.tmpl
(function (root) {
    "use strict";

    var main =
        `<div data-ax5grid-container="root" data-ax5grid-instance="{{instanceId}}">
            <div data-ax5grid-container="header">
                <div data-ax5grid-panel="aside-header"></div>
                <div data-ax5grid-panel="left-header"></div>
                <div data-ax5grid-panel="header"></div>
                <div data-ax5grid-panel="right-header"></div>
            </div>
            <div data-ax5grid-container="body">
                <div data-ax5grid-panel="top-aside-body"></div>
                <div data-ax5grid-panel="top-left-body"></div>
                <div data-ax5grid-panel="top-body"></div>
                <div data-ax5grid-panel="top-right-body"></div>
                <div data-ax5grid-panel="aside-body"></div>
                <div data-ax5grid-panel="left-body"></div>
                <div data-ax5grid-panel="body"></div>
                <div data-ax5grid-panel="right-body"></div>
                <div data-ax5grid-panel="bottom-aside-body"></div>
                <div data-ax5grid-panel="bottom-left-body"></div>
                <div data-ax5grid-panel="bottom-body"></div>
                <div data-ax5grid-panel="bottom-right-body"></div>
            </div>
        </div>`;

    var header =
        `<table border="1" style="">
            {{#table.rows}}
            <tr>
                {{#cols}}
                <td colspan="{{colspan}}" rowspan="{{rowspan}}">{{{label}}}</td>
                {{/cols}}
            </tr>
            {{/table.rows}}
        </table>
        `;

    var body =
        `<table border="1" style="">
            {{#list}}
            {{#@rows}}
            <tr>
                {{#@cols}}
                <td colspan="{{colspan}}" rowspan="{{rowspan}}">{{#@columnValue}}{{{value}}}{{/@columnValue}}</td>
                {{/@cols}}
            </tr>
            {{/@rows}}
            {{/list}}
        </table>
        `;


    root.tmpl = {
        "main": main,
        "header": header,
        "body": body,

        get: function (tmplName, data) {
            return ax5.mustache.render(root.tmpl[tmplName], data);
        }
    };

})(ax5.ui.grid);