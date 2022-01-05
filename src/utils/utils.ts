export function isiPhone(): boolean {
  return navigator.userAgent.toLocaleLowerCase().indexOf("iphone") != -1;
}

export function isChrome(): boolean {
  //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36
  return navigator.userAgent.toLocaleLowerCase().indexOf("chrome") != -1;
}

export function isSamsung(): boolean {
  return (
    navigator.userAgent.toLocaleLowerCase().indexOf("samsungbrowser") != -1
  );
}

export function isSafari(): boolean {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export function isSafari15(): boolean {
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15
  const match = navigator.userAgent.match(
    /^((?!chrome|android).)*version\/(?<version>15\.\d+)\s+safari.*$/i
  );

  if (!match?.groups?.version) {
    return false;
  }

  const [version, build] = match.groups.version.split(".");
  return version.toInt() >= 15;
}

export function isNullOrEmptyString(str: string | null | undefined): boolean {
  return !str || str.trim().length === 0;
}
