import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import style from "./styles/today.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import script from "./scripts/today.inline.ts";

export interface TodayOptions {
  /**
   * Prefix text to display before the date.
   * @default "TODAY"
   */
  prefix?: string;
  /**
   * Separator string between prefix and date.
   * @default ", "
   */
  separator?: string;
  /**
   * Locale identifier for formatting month names.
   * @default "en-US"
   */
  locale?: string;
  /**
   * Transform output text to uppercase (e.g., "TODAY, 23 JUN 2026").
   * @default true
   */
  uppercase?: boolean;
  /**
   * Additional custom CSS class name.
   */
  className?: string;
}

const defaultOptions: Required<TodayOptions> = {
  prefix: "TODAY",
  separator: ", ",
  locale: "en-US",
  uppercase: true,
  className: "",
};

function formatLocalDate(now: Date, locale: string, uppercase: boolean): string {
  const day = now.getDate().toString().padStart(2, "0");
  const month = now.toLocaleDateString(locale, { month: "short" });
  const year = now.getFullYear();
  let result = `${day} ${month} ${year}`;
  if (uppercase) {
    result = result.toUpperCase();
  }
  return result;
}

export default ((userOpts?: TodayOptions) => {
  const opts = { ...defaultOptions, ...userOpts };

  const Today: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const now = new Date();
    const dateStr = formatLocalDate(now, opts.locale, opts.uppercase);
    const initialText = `${opts.prefix}${opts.separator}${dateStr}`;

    return (
      <div class={`today-component ${opts.className} ${displayClass ?? ""}`.trim()}>
        <span
          class="today-badge"
          data-today="true"
          data-prefix={opts.prefix}
          data-separator={opts.separator}
          data-locale={opts.locale}
          data-uppercase={opts.uppercase ? "true" : "false"}
        >
          {initialText}
        </span>
      </div>
    );
  };

  Today.css = style;
  Today.afterDOMLoaded = script;

  return Today;
}) satisfies QuartzComponentConstructor;
