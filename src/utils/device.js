/**
 * 判断当前访问设备是电脑还是手机 / 平板。
 * 优先看 UA，再结合触屏与粗指针特征，兼容 iPadOS 13+ 伪装成 Mac 的情况。
 */
export function detectDevice() {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return "desktop";
  }

  const ua = navigator.userAgent || "";
  const mobileUA = /Android|iPhone|iPad|iPod|Mobile|Windows Phone|BlackBerry|Opera Mini|IEMobile|Tablet|PlayBook|Silk/i.test(
    ua,
  );
  const iPadOS = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
  const coarsePointer =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  return mobileUA || iPadOS || coarsePointer ? "mobile" : "desktop";
}
