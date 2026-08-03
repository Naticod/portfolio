/**
 * Medidas do design (canvas Figma 1920x1024).
 *
 * As medidas são entregues como CSS custom properties e só viram
 * propriedades reais dentro da media query de desktop (ver globals.css,
 * regra `.d`). Assim o mobile fica livre para usar suas próprias classes:
 * estilo inline venceria qualquer classe utilitária, então nada de estilo
 * inline aqui.
 */
export function u(value) {
  return `calc(${value} * var(--u))`;
}

const PROPERTY_TO_VAR = {
  left: "--d-l",
  top: "--d-t",
  right: "--d-r",
  bottom: "--d-b",
  width: "--d-w",
  height: "--d-h",
  fontSize: "--d-fs",
  lineHeight: "--d-lh",
  gap: "--d-gap",
  padding: "--d-p",
  paddingBottom: "--d-pb",
  marginTop: "--d-mt",
  marginBottom: "--d-mb",
  borderRadius: "--d-br",
  borderWidth: "--d-bw",
};

/**
 * Converte medidas do Figma em custom properties.
 * Valores numéricos viram unidades do design; strings passam direto
 * (para casos como `left: "50%"`).
 */
export function d(measures) {
  const style = {};
  for (const [property, cssVar] of Object.entries(PROPERTY_TO_VAR)) {
    const value = measures[property];
    if (value === undefined) continue;
    style[cssVar] = typeof value === "number" ? u(value) : value;
  }
  if (measures.centerX) style["--d-tx"] = "-50%";
  return style;
}
