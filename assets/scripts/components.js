const measures = ["turbidez", "corAparente", "crl", "coliforme", "eColi"];

function Month(params) {
  const month = document.createElement("details");
  month.classList.add("month");

  month.appendChild(MonthTitle(params));
  month.appendChild(Measures(params));

  return month;
}

function MonthTitle(params) {
  const title = document.createElement("summary");
  title.classList.add("title");

  const name = document.createElement("h4");
  name.classList.add("name");
  name.innerText = dayjs(params.data).format("MMMM");
  title.appendChild(name);

  measures.forEach((measure) => {
    const measurePercent =
      params[`${measure}Conforme`] / params[`${measure}Realizado`];
    const percent = document.createElement("p");
    percent.innerHTML = measurePercent.toLocaleString("pt-BR", {
      style: "percent",
    });

    title.appendChild(percent);
  });

  return title;
}

function Measures(params) {
  const measures = document.createElement("div");
  measures.classList.add("measures");

  measures.appendChild(MeasuresRow(params, "Exigido", "Exigidos"));
  measures.appendChild(MeasuresRow(params, "Realizado", "Realizados"));
  measures.appendChild(MeasuresRow(params, "Conforme", "Conformes"));

  return measures;
}

function MeasuresRow(params, type, label) {
  const row = document.createElement("div");
  row.classList.add("row");

  const labelElement = document.createElement("h5");
  labelElement.classList.add("name");
  labelElement.innerText = label;
  row.appendChild(labelElement);

  measures.forEach((measure) => {
    const value = params[`${measure}${type}`];
    const valueEl = document.createElement("p");
    valueEl.innerHTML = value.toString();

    row.appendChild(valueEl);
  });

  return row;
}
