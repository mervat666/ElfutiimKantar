const clearSelction = (e) => {
  document
    .querySelectorAll("input[type='radio'][name='" + e + "']")
    .forEach((e) => {
      !0 === e.checked && (e.checked = !1);
    });
};

