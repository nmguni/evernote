// wait for user to stop typing before we update the data base
export default function debounce(a, b, c) {
  var d, e;
  return function() {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}
// this is for preview when we see lists of notes
export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
