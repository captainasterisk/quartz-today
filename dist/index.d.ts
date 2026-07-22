import { QuartzComponent } from '@quartz-community/types';
export { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from '@quartz-community/types';

interface TodayOptions {
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
declare const _default: (userOpts?: TodayOptions) => QuartzComponent;

export { _default as Today, type TodayOptions };
