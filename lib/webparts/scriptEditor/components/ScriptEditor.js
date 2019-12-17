var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { loadStyles } from '@microsoft/load-themed-styles';
require('./overrides.css');
var ScriptEditor = (function (_super) {
    __extends(ScriptEditor, _super);
    function ScriptEditor() {
        var _this = _super.call(this) || this;
        _this._showDialog = _this._showDialog.bind(_this);
        _this._closeDialog = _this._closeDialog.bind(_this);
        _this._cancelDialog = _this._cancelDialog.bind(_this);
        _this._onScriptEditorTextChanged = _this._onScriptEditorTextChanged.bind(_this);
        var uiFabricCSS = ".pzl-bgColor-themeDark, .pzl-bgColor-themeDark--hover:hover { background-color: \"[theme:themeDark, default:#005a9e]\"; }";
        loadStyles(uiFabricCSS);
        _this.state = {
            showDialog: false
        };
        return _this;
    }
    ScriptEditor.prototype.componentDidMount = function () {
        this.setState({ script: this.props.script, loaded: this.props.script });
    };
    ScriptEditor.prototype._showDialog = function () {
        this.setState({ showDialog: true });
    };
    ScriptEditor.prototype._closeDialog = function () {
        this.setState({ showDialog: false });
        this.props.save(this.state.script);
    };
    ScriptEditor.prototype._cancelDialog = function () {
        this.props.save(this.state.loaded);
        this.setState({ showDialog: false, script: this.state.loaded });
    };
    ScriptEditor.prototype._onScriptEditorTextChanged = function (text) {
        this.setState({ script: text });
    };
    ScriptEditor.prototype.render = function () {
        var viewMode = React.createElement("span", { dangerouslySetInnerHTML: { __html: this.state.script } });
        return (React.createElement("div", null,
            React.createElement("div", { className: "scriptEditor" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "ms-Grid-row pzl-bgColor-themeDark ms-fontColor-white \"row\"" },
                        React.createElement("div", { style: { textAlign: 'center' } },
                            React.createElement("span", { className: "ms-font-xl ms-fontColor-white" }, this.props.title),
                            React.createElement("p", { className: "ms-font-l ms-fontColor-white" }),
                            React.createElement(DefaultButton, { description: 'Opens the snippet dialog', onClick: this._showDialog }, "Edit snippet"),
                            React.createElement("p", { className: "ms-font-l ms-fontColor-white" }))))),
            React.createElement(Dialog, { isOpen: this.state.showDialog, type: DialogType.normal, onDismiss: this._closeDialog, title: 'Embed', subText: 'Paste your script, markup or embed code below. Note that scripts will only run in view mode.', isBlocking: true, className: 'ScriptPart' },
                React.createElement(TextField, { multiline: true, rows: 15, onChanged: this._onScriptEditorTextChanged, value: this.state.script }),
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { onClick: this._closeDialog }, "Save"),
                    React.createElement(DefaultButton, { onClick: this._cancelDialog }, "Cancel")),
                viewMode)));
    };
    return ScriptEditor;
}(React.Component));
export default ScriptEditor;
//# sourceMappingURL=ScriptEditor.js.map