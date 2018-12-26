<?php
namespace Geolid\CoreBundle\Helpers\String;

/**
 * String.
 */
class String
{
    /**
     * Flags.
     */
    const NO_LOWER = 1;
    const NO_UPPER = 2;
    const NO_DIGIT = 4;
    const NO_ZERO = 8;
    const NO_SPACE = 16;
    const NO_HYPHEN = 32;
    const NO_UNDERSCORE = 64;
    const NO_DOT = 128;

    /**
     * Latinize and remove diacritics.
     *
     * @param string $string
     * @return string
     */
    public static function latinizeAndRemoveDiacritics($string)
    {
        $patterns = array(
            'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë',
            'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø',
            'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å',
            'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ñ', 'ò',
            'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ', 'Ā',
            'ā', 'Ă', 'ă', 'Ą', 'ą', 'Ć', 'ć', 'Ĉ', 'ĉ', 'Ċ', 'ċ', 'Č',
            'č', 'Ď', 'ď', 'Đ', 'đ', 'Ē', 'ē', 'Ĕ', 'ĕ', 'Ė', 'ė', 'Ę',
            'ę', 'Ě', 'ě', 'Ĝ', 'ĝ', 'Ğ', 'ğ', 'Ġ', 'ġ', 'Ģ', 'ģ', 'Ĥ',
            'ĥ', 'Ħ', 'ħ', 'Ĩ', 'ĩ', 'Ī', 'ī', 'Ĭ', 'ĭ', 'Į', 'į', 'İ',
            'ı', 'Ĳ', 'ĳ', 'Ĵ', 'ĵ', 'Ķ', 'ķ', 'Ĺ', 'ĺ', 'Ļ', 'ļ', 'Ľ',
            'ľ', 'Ŀ', 'ŀ', 'Ł', 'ł', 'Ń', 'ń', 'Ņ', 'ņ', 'Ň', 'ň', 'ŉ',
            'Ō', 'ō', 'Ŏ', 'ŏ', 'Ő', 'ő', 'Œ', 'œ', 'Ŕ', 'ŕ', 'Ŗ', 'ŗ',
            'Ř', 'ř', 'Ś', 'ś', 'Ŝ', 'ŝ', 'Ş', 'ş', 'Š', 'š', 'Ţ', 'ţ',
            'Ť', 'ť', 'Ŧ', 'ŧ', 'Ũ', 'ũ', 'Ū', 'ū', 'Ŭ', 'ŭ', 'Ů', 'ů',
            'Ű', 'ű', 'Ų', 'ų', 'Ŵ', 'ŵ', 'Ŷ', 'ŷ', 'Ÿ', 'Ź', 'ź', 'Ż',
            'ż', 'Ž', 'ž', 'ſ', 'ƒ', 'Ơ', 'ơ', 'Ư', 'ư', 'Ǎ', 'ǎ', 'Ǐ',
            'ǐ', 'Ǒ', 'ǒ', 'Ǔ', 'ǔ', 'Ǖ', 'ǖ', 'Ǘ', 'ǘ', 'Ǚ', 'ǚ', 'Ǜ',
            'ǜ', 'Ǻ', 'ǻ', 'Ǽ', 'ǽ', 'Ǿ', 'ǿ'
        );
        $replacements = array(
            'A', 'A', 'A', 'A', 'A', 'A', 'AE', 'C', 'E', 'E', 'E', 'E',
            'I', 'I', 'I', 'I', 'D', 'N', 'O', 'O', 'O', 'O', 'O', 'O',
            'U', 'U', 'U', 'U', 'Y', 's', 'a', 'a', 'a', 'a', 'a', 'a',
            'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'n', 'o',
            'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y', 'A',
            'a', 'A', 'a', 'A', 'a', 'C', 'c', 'C', 'c', 'C', 'c', 'C',
            'c', 'D', 'd', 'D', 'd', 'E', 'e', 'E', 'e', 'E', 'e', 'E',
            'e', 'E', 'e', 'G', 'g', 'G', 'g', 'G', 'g', 'G', 'g', 'H',
            'h', 'H', 'h', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I',
            'i', 'IJ', 'ij', 'J', 'j', 'K', 'k', 'L', 'l', 'L', 'l', 'L',
            'l', 'L', 'l', 'l', 'l', 'N', 'n', 'N', 'n', 'N', 'n', 'n',
            'O', 'o', 'O', 'o', 'O', 'o', 'OE', 'oe', 'R', 'r', 'R', 'r',
            'R', 'r', 'S', 's', 'S', 's', 'S', 's', 'S', 's', 'T', 't',
            'T', 't', 'T', 't', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u',
            'U', 'u', 'U', 'u', 'W', 'w', 'Y', 'y', 'Y', 'Z', 'z', 'Z',
            'z', 'Z', 'z', 's', 'f', 'O', 'o', 'U', 'u', 'A', 'a', 'I',
            'i', 'O', 'o', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U',
            'u', 'A', 'a', 'AE', 'ae', 'O', 'o'
        );
        return str_replace($patterns, $replacements, $string);
    }

    /**
     * Keep only simple chars.
     *
     * Examples:
     *
     * simpleChars('0#1B2!3ô_j-Öu"r./', '#', NO_DOT | NO_ZERO)
     * => #1B23_j-ur
     *
     * simpleChars('0#1B2!3ô_j-Öu"r./e', '\/', NO_UPPER | NO_DIGIT)
     * => _j-ur./e
     *
     * @param string $string
     * @param string $except Do not remove some chars, use pattern format.
     * @param integer $flags
     * @return string
     */
    public static function simpleChars($string, $except = '', $flag = 0) {
        $pattern = '/[^';

        if (!($flag & self::NO_LOWER)) {
            $pattern .= 'a-z';
        }
        if (!($flag & self::NO_UPPER)) {
            $pattern .= 'A-Z';
        }
        if (!($flag & self::NO_DIGIT)) {
            $pattern .= '1-9';
        }
        if (!($flag & (self::NO_ZERO | self::NO_DIGIT))) {
            $pattern .= '0';
        }
        if (!($flag & self::NO_DOT)) {
            $pattern .= '\.';
        }
        if (!($flag & self::NO_SPACE)) {
            $pattern .= ' ';
        }
        if (!($flag & self::NO_UNDERSCORE)) {
            $pattern .= '_';
        }

        $pattern .= $except;

        if (!($flag & self::NO_HYPHEN)) {
            $pattern .= '-';
        }

        $pattern .= ']/';

        return preg_replace($pattern, '', $string);
    }

    /**
     * Slug.
     *
     * Trim.
     * Latinize and remove diacritics.
     * Lowercase.
     * Hyphenize.
     * Keep only simple chars.
     *
     * @param string $string
     * @param integer $flags
     * @return string
     */
    public static function slug($string, $flags = 0) {
        $string = trim($string);
        $string = self::latinizeAndRemoveDiacritics($string);
        $string = strtolower($string);

        // Hiphenize.
        $patterns = array(
            '/ /i',
            '/\'/i',
        );
        $replacements = array(
            '-',
            '-',
        );
        $string = preg_replace($patterns, $replacements, $string);

        $string = self::simpleChars($string, '', $flags);

        return $string;
    }
}
