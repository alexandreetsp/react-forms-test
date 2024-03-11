"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const material_2 = require("@mui/material");
function FormWithoutHookForm() {
    const [textValue, setTextValue] = react_1.useState < string > ("");
    const onTextChange = (e) => {
        setTextValue(e.target.value);
    };
    const handleSubmit = () => {
        console.log(textValue);
    };
    const handleReset = () => {
        setTextValue("");
    };
    return (react_1.default.createElement(material_2.Paper, null,
        react_1.default.createElement("h2", null, "Form Demo"),
        react_1.default.createElement(material_1.TextField, { onChange: onTextChange, value: textValue, label: "Text Value" }),
        react_1.default.createElement(material_2.Button, { onClick: handleSubmit }, "Submit"),
        react_1.default.createElement(material_2.Button, { onClick: handleReset }, "Reset")));
}
exports.default = FormWithoutHookForm;
