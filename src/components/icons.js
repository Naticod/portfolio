export function StarIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...rest}>
      <path d="M12 0c.6 4.2 1.8 7 3.6 8.4C17.4 9.8 20.2 11 24 11.6c-3.8.6-6.6 1.8-8.4 3.2-1.8 1.4-3 4.2-3.6 8.4-.6-4.2-1.8-7-3.6-8.4C6.6 13.4 3.8 12.2 0 11.6c3.8-.6 6.6-1.8 8.4-3.2C10.2 7 11.4 4.2 12 0z" />
    </svg>
  );
}

export function SparkleIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...rest}>
      <path d="M12 3c.4 3 1.3 5 2.7 6.3C16 10.7 18 11.6 21 12c-3 .4-5 1.3-6.3 2.7C13.3 16 12.4 18 12 21c-.4-3-1.3-5-2.7-6.3C8 13.3 6 12.4 3 12c3-.4 5-1.3 6.3-2.7C10.7 8 11.6 6 12 3z" />
    </svg>
  );
}

export function SunIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true" {...rest}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...rest}>
      <path d="M20.4 14.7A8.5 8.5 0 1 1 9.3 3.6a7 7 0 0 0 11.1 11.1z" />
    </svg>
  );
}

export function ArrowUpIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export function ArrowDownIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

export function PlusIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true" {...rest}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

/** Brilho usado ao lado dos títulos de seção dos cases. */
export function SparkIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 13 13" fill="currentColor" className={className} aria-hidden="true" {...rest}>
      <path d="M6.15625 0.612305C6.45294 1.93093 6.64068 3.25067 6.72461 4.56934C7.21459 4.21755 7.74356 3.90321 8.3125 3.62891C8.43458 3.57005 8.55885 3.5133 8.68457 3.45801C8.6317 3.58464 8.57701 3.70994 8.52051 3.83301C8.26341 4.39296 7.96797 4.91613 7.63574 5.40234C8.81766 5.45809 9.99972 5.57369 11.1816 5.75098C11.373 5.77968 11.5645 5.8099 11.7559 5.8418C11.8259 5.85357 11.8938 5.88597 11.9434 5.93848C11.9926 5.99091 12.0204 6.05899 12.0205 6.12891C12.0205 6.19887 11.9926 6.26682 11.9434 6.31934C11.8938 6.37197 11.8259 6.40421 11.7559 6.41602C11.5645 6.44791 11.373 6.47813 11.1816 6.50684C9.95284 6.69116 8.72392 6.80838 7.49512 6.86133C7.86182 7.38138 8.18632 7.9442 8.46484 8.55078C8.52134 8.67385 8.57604 8.79915 8.62891 8.92578C8.50316 8.87048 8.37894 8.81278 8.25684 8.75391C7.70498 8.48779 7.19046 8.18472 6.71289 7.8457C6.6242 9.11196 6.44112 10.3793 6.15625 11.6455C6.11036 11.8495 6.06173 12.0539 6.01074 12.2578C5.95976 12.0539 5.91113 11.8495 5.86523 11.6455C5.57654 10.3623 5.38995 9.07814 5.30273 7.79492C4.80582 8.15401 4.269 8.47494 3.69043 8.75391C3.56832 8.81277 3.4441 8.87048 3.31836 8.92578C3.37126 8.79909 3.42687 8.67391 3.4834 8.55078C3.76238 7.94323 4.08666 7.37914 4.4541 6.8584C3.24911 6.80398 2.04386 6.68758 0.838867 6.50684C0.647488 6.47813 0.456028 6.44791 0.264648 6.41602C0.194566 6.40421 0.126707 6.37197 0.0771484 6.31934C0.02795 6.26683 0 6.19883 0 6.12891C0.000126625 6.05903 0.0279062 5.9909 0.0771484 5.93848C0.126704 5.88597 0.194647 5.85357 0.264648 5.8418C0.456025 5.8099 0.64749 5.77968 0.838867 5.75098C1.99698 5.57726 3.15537 5.4623 4.31348 5.40527C3.98054 4.91834 3.68527 4.39394 3.42773 3.83301C3.37124 3.70994 3.31654 3.58464 3.26367 3.45801C3.38933 3.51327 3.51372 3.57008 3.63574 3.62891C4.23146 3.91615 4.78284 4.24792 5.29199 4.62012C5.37423 3.2845 5.56473 1.94788 5.86523 0.612305C5.91113 0.408373 5.95976 0.203932 6.01074 0C6.06173 0.203959 6.11035 0.408346 6.15625 0.612305Z" />
    </svg>
  );
}

/** Ícones minimalistas para resultados que não têm número. */
export function ClockIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function LayersIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>
      <path d="M12 3 3 8l9 5 9-5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
