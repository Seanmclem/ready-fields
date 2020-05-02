import React from 'react';

const CheckboxGroupInput = ({ label, items, setItems }) => {
    const handleChange = (event, name) => {
        const newArray = [...items];
        const itemIndex = newArray.findIndex((item) => item.name === name);
        let item = Object.assign({}, newArray[itemIndex]);
        item.selected = event.target.checked;
        newArray[itemIndex] = item;
        setItems(newArray);
    };
    return (React.createElement("div", { className: "checkbox-group-label-container" },
        label ? (React.createElement("label", null, label)) : null,
        React.createElement("ul", null, items.map(item => (React.createElement("li", { key: item.name },
            React.createElement("input", { id: `size-${item.name}`, name: `size-${item.name}`, type: "checkbox", checked: item.selected, onChange: (e) => handleChange(e, item.name) }),
            React.createElement("label", { htmlFor: `size-${item.name}` }, item.name)))))));
};

const CheckboxInput = ({ name, selected, setSelected }) => {
    const handleChange = (event, setSelected) => {
        setSelected(event.target.checked);
    };
    return (React.createElement("div", { className: "checkbox-label-container" },
        React.createElement("input", { id: `size-${name}`, name: `size-${name}`, type: "checkbox", checked: selected, onChange: (e) => handleChange(e, setSelected) }),
        React.createElement("label", { htmlFor: `size-${name}` }, name)));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".error-single {\n  display: flex;\n  width: 100%;\n  height: 20px;\n  font-size: 17px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 250px;\n  width: 80%;\n  color: darkred;\n}\n\n.error-single.shown {\n  height: auto;\n  min-height: 40px;\n  justify-content: center; \n}";
styleInject(css_248z);

const ErrorSingle = ({ error }) => (React.createElement("span", { className: `error-single${error ? ' shown' : ''}` }, error));

var css_248z$1 = ".errors-list {\n  list-style: none;\n}\n\n.errors-list li {\n  color: red;\n  font-weight: bold;\n}\n";
styleInject(css_248z$1);

const ErrorsList = ({ errors }) => (errors.length > 0 ? (React.createElement("ul", { className: "errors-list" }, errors.map(error => (React.createElement("li", { key: error }, error))))) : null);

const RadioGroupInput = ({ label, items, setItems, setSelectedItem }) => {
    const handleChange = (event, name) => {
        var _a;
        const newArray = items.map(item => (name !== item.name ? Object.assign(Object.assign({}, item), { selected: false }) : Object.assign(Object.assign({}, item), { selected: true })));
        setItems(newArray);
        const selectedItemIndex = newArray.findIndex((item) => item.name === name);
        setSelectedItem((_a = items[selectedItemIndex]) === null || _a === void 0 ? void 0 : _a.name);
    };
    return (React.createElement("div", { className: "checkbox-group-label-container" },
        label ? (React.createElement("label", null, label)) : null,
        React.createElement("ul", null, items.map(item => (React.createElement("li", { key: item.name },
            React.createElement("input", { id: `size-${item.name}`, name: `size-${item.name}`, type: "radio", value: item.name, checked: item.selected, onChange: (e) => handleChange(e, item.name) }),
            React.createElement("label", { htmlFor: `size-${item.name}` }, item.name)))))));
};

var css_248z$2 = ".error {\n  color: red;\n  width: 100%;\n}\n";
styleInject(css_248z$2);

const TextInput = ({ name, label, text, setText, type = '', error = '', placeholder = '' }) => {
    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (React.createElement("div", { className: "input-label-container" },
        label ? (React.createElement("label", null, label)) : null,
        React.createElement("input", { name: name, type: type || 'text', onChange: handleChange, value: text, placeholder: placeholder }),
        error ? (React.createElement("span", { className: "error" }, error)) : null));
};

export { CheckboxGroupInput, CheckboxInput, ErrorSingle, ErrorsList, RadioGroupInput, TextInput };
