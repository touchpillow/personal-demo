// 双引号：字符实体为  ，对应的字符是 " 。
// 单引号：字符实体为 &apos; ，对应的字符是 ' 。
// 与符号：字符实体为 &amp; ，对应对的字符是 & 。
// 大于号：字符实体为 &gt; ，对应的字符是 > 。
// 小于号：字符实体为 &lt; ，对应的字符是 < 。
// 斜线号：字符实体为 &frasl; ，对应的字符是 / 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/html-entity-parser
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var entityParser = function (text) {
  return text
    .replace(/&quot;/g, '"叶')
    .replace(/&apos;/g, "'叶")
    .replace(/&amp;/g, "&叶")
    .replace(/&gt;/g, ">叶")
    .replace(/&lt;/g, "<叶")
    .replace(/&frasl;/g, "/叶")
    .replace(/叶/g, "");
};
